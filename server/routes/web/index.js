require('../../models/Category')
require('../../models/Article')

module.exports = app => {
  const router = require('express').Router();
  const mongoose = require('mongoose');
  const Category = mongoose.model('Category');
  const Article = mongoose.model('Article')
  router.get('/news/init', async (req, res) => {
    const parent = await Category.findOne({
      name: '新闻分类'
    })
    const cats = await Category.find().where({
      parent: parent
    }).lean();
    // $$('.news_list .title').map(el => el.innerHTML)
    const newsTitles = ['大神带你直击英雄调整关键点！', '狄某有话说 | 韩信：我一个人在峡谷走走停停', '貂蝉五五开黑节皮肤海报线稿方案票选结果公布', '元歌皮肤设计大赛首轮投票开启公告', '3月10日全服不停机更新公告'];
    const newsList = newsTitles.map(title => {
      const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5);
      return {
        categories: randomCats.slice(0, 2),
        title: title
      }
    })
    await Article.deleteMany({});
    await Article.insertMany(newsList);
    res.send(newsList)
  });

  router.get('/news/list', async (req, res) => {
    // const cats = await Category.findOne({
    //   name: '新闻分类'
    // }).populate({
    //   path: 'children',
    //   populate: {
    //     path: 'newsList'
    //   }
    // }).lean()
    const parent = await Category.findOne({
      name: '新闻分类'
    })
    const cats = await Category.aggregate([
      { $match: { parent: parent._id } },
      {
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'categories',
          as: 'newsList'
        }
      }
    ])
    const subCats = cats.map(v => v._id)
    cats.unshift({
      name: '热门',
      newsList: await Article.find().where({
        categories: {$in: subCats}
      }).populate('categories').limit(5).lean()
    })
    cats.map(cat => {
      cat.newsList.map(news => {
        news.categoryName = cat.name === '热门' ? news.categories[0].name : cat.name;
        return news
      })
      return cat
    })
    res.send(cats)
  });

  app.use('/web/api', router)
}

