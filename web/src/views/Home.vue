<template>
  <!-- 轮播图 -->
  <Swipe class="news-swipe" :autoplay="3000">
    <SwipeItem v-for="(n, i) in [1, 2, 3]" :key="i">
      <Image :src="require(`../assets/images/news${n}.jpeg`)" />
    </SwipeItem>
  </Swipe>
  <!-- 精灵图 -->
  <div class="entry-container">
    <Grid class="entry-list" :border="false" :column-num="4">
      <GridItem class="entry-item" v-for="(value, name) in entryItems" :key="name">
        <i class="sprite" :class="name"></i>
        <span>{{ value }}</span>
      </GridItem>
    </Grid>
    <!-- <div class="entry-btn">
        <i class="sprite"></i>
    </div>-->
  </div>
  <!-- 新闻资讯 -->
  <div class="news-card">
    <NavBar class="news-nav" :border="false">
      <template #left>
        <i class="sprite icon-news"></i>
        <h3>新闻资讯</h3>
      </template>
      <template #right>
        <i class="sprite icon-more" @click="$router.push('newsList')"></i>
      </template>
    </NavBar>
    <Divider />
    <Tabs
      class="news-tabs"
      color="#db9e3f"
      title-active-color="#db9e3f"
      title-inactive-color="black"
      line-width="0.5rem"
      animated
      lazy-render
    >
      <Tab class="news-tab" v-for="(item, i) in newsTabs" :key="i" :title="item">
        <Cell class="news-item" v-for="n in 5" :key="n" :border="false">
          <Tag class="news-category" color="red" plain>热门</Tag>
          <span class="news-title">互动小任务第15期-元歌皮肤设计大赛总决选语音奖励方案票选开启</span>
          <span class="news-time">03/11</span>
        </Cell>
      </Tab>
    </Tabs>
  </div>
  <!-- 英雄列表 -->
  <div class="hero-card">
    <NavBar class="hero-nav" :border="false">
      <template #left>
        <i class="sprite icon-hero"></i>
        <h3>英雄列表</h3>
      </template>
      <template #right>
        <i class="sprite icon-more" @click="$router.push('heroList')"></i>
      </template>
    </NavBar>
    <Swipe class="hero-swipe" :autoplay="3000">
      <SwipeItem v-for="(n, i) in [1, 2, 3]" :key="i">
        <Image :src="require(`../assets/images/new_hero${n}.jpg`)" radius="2" />
      </SwipeItem>
    </Swipe>
    <Divider />
    <Tabs
      class="hero-tabs"
      color="#db9e3f"
      title-active-color="#db9e3f"
      title-inactive-color="black"
      line-width="0.5rem"
      animated
      lazy-render
    >
      <Tab class="hero-tab" v-for="(item, i) in heroTabs" :key="i" :title="item">
        <Grid class="hero-grid" :column-num="5" :border="false" icon-size="56px">
          <GridItem
            class="hero-grid-item"
            v-for="value in 8"
            :key="value"
            :icon="require(`../assets/images/${yase}.jpg`)"
            text="亚瑟"
            to="/heroStrategy/detail"
          />
        </Grid>
      </Tab>
    </Tabs>
  </div>
  <!-- 精彩视频 -->
  <div class="video-card">
    <NavBar class="video-nav" :border="false">
      <template #left>
        <i class="sprite icon-video"></i>
        <h3>精彩视频</h3>
      </template>
      <template #right>
        <i class="sprite icon-more" @click="$router.push('strategyCenter')"></i>
      </template>
    </NavBar>
    <Divider />
    <Tabs
      class="video-tabs"
      color="#db9e3f"
      title-active-color="#db9e3f"
      title-inactive-color="black"
      line-width="1rem"
      :shrink="true"
      animated
      lazy-render
    >
      <Tab class="video-tab" v-for="(item, i) in videoTabs" :key="i" :title="item">
        <Grid class="video-grid" :column-num="2" :border="false">
          <GridItem class="video-grid-item" v-for="value in 4" :key="value">
            <Image :src="require(`../assets/images/${vidoeImg}.jpg`)" />
            <span>【狄仁杰封神榜】第79期 锁定目标 究竟谁会被一网打尽？</span>
          </GridItem>
        </Grid>
      </Tab>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import http from './../http';
import {
  Swipe,
  SwipeItem,
  Image,
  Grid,
  GridItem,
  NavBar,
  Tab,
  Tabs,
  Cell,
  Tag,
  Divider,
} from 'vant';

const entryItems = ref({
  blz: '爆料站',
  gsz: '故事站',
  zbsc: '周边商城',
  tyf: '体验服',
  xrzq: '新人专区',
  rycc: '荣耀·传承',
  wzyd: '王者营地',
  gzh: '公众号',
});
const newsCats = ref({}) as any;
const newsTabs = ref(['热门', '新闻', '公告', '活动', '赛事']);
const heroTabs = ref(['热门', '战士', '法师', '坦克', '刺客', '射手', '辅助']);
const videoTabs = ref(['精品栏目', '英雄攻略', '赛事精品']);
const yase = 'yase';
const vidoeImg = 'video_img';
const fetchNewsCats = async () => {
  const res = await http.get('news/list');
  newsCats.value = res.data;
};

onBeforeMount(() => {
  fetchNewsCats();
});
</script>

<style scoped lang="less">
.news-swipe,
.hero-swipe {
  margin-bottom: 0.28rem;
  :deep(.van-swipe__indicators) {
    justify-content: space-between;
    left: 90%;
    .van-swipe__indicator {
      width: 0.16rem;
      height: 0.16rem;
      background-color: white;
      opacity: 1;
      border-radius: 0.04rem;
    }
    .van-swipe__indicator--active {
      background-color: #4b67af;
    }
  }
}

.entry-container {
  .entry-list {
    background-color: white;
    .entry-item {
      height: 1.4rem;
      :deep(.van-grid-item__content) {
        height: 1rem;
        margin: 0.2rem 0;
        padding: 0;
        border-left: 1px solid #d4d9de;
        i {
          margin-bottom: 0.1rem;
        }
        span {
          font-size: 0.24rem;
          line-height: 0.36rem;
        }
      }
    }
    .entry-item:nth-child(4n + 1) {
      border-left: none;
    }
  }
}

.blz {
  width: 0.46rem;
  height: 0.4rem;
  background-position: 63.546% 15.517%;
}
.gsz {
  width: 0.46rem;
  height: 0.4rem;
  background-position: 90.483% 15.614%;
}
.zbsc {
  width: 0.38rem;
  height: 0.44rem;
  background-position: 36.746% 0.924%;
}
.tyf {
  width: 0.4rem;
  height: 0.4rem;
  background-position: 10.408% 15.517%;
}
.xrzq {
  width: 0.4rem;
  height: 0.42rem;
  background-position: 89.733% 1.266%;
}
.tyf {
  width: 0.4rem;
  height: 0.4rem;
  background-position: 10.408% 15.517%;
}
.rycc {
  width: 0.48rem;
  height: 0.4rem;
  background-position: 36.467% 15.287%;
}
.wzyd {
  width: 0.48rem;
  height: 0.48rem;
  background-position: 63.3% 0.927%;
}
.gzh {
  width: 0.48rem;
  height: 0.4rem;
  background-position: 0 96.207%;
}
.icon-news {
  width: 0.26rem;
  height: 0.26rem;
  background-position: 0.138% 50.452%;
}
.icon-more {
  width: 0.36rem;
  height: 0.06rem;
  background-position: 47.619% 56.305%;
}
.icon-hero {
  width: 0.24rem;
  height: 0.26rem;
  background-position: 46.768% 60.452%;
}
.icon-video {
  width: 0.26rem;
  height: 0.22rem;
  background-position: 0.138% 56.532%;
}
.news-card,
.hero-card,
.video-card {
  margin-top: 0.25rem;
  padding: 0 0.34rem;
  background-color: white;
  .news-nav,
  .hero-nav,
  .video-nav {
    position: relative;
    :deep(.van-nav-bar__content) {
      .van-nav-bar__left {
        padding: 0;
        h3 {
          font-size: 0.32rem;
          padding-left: 0.14rem;
          font-weight: 500;
        }
      }
      .van-nav-bar__right {
        padding: 0;
      }
    }
  }
  .van-divider {
    margin: 0;
    border-color: rgb(212, 217, 222);
  }
  .news-tabs,
  .hero-tabs,
  .video-tabs {
    :deep(.van-tabs__wrap) {
      height: 0.48rem;
      margin-top: 0.24rem;
      .van-tab {
        font-size: 0.26rem;
      }
    }
    .news-tab {
      margin-top: 0.25rem;
      .news-item {
        padding: 0;
        height: 0.68rem;
        :deep(.van-cell__value) {
          display: flex;
          align-items: center;
        }
        .news-category {
          margin-right: 0.1rem;
        }
        .news-title {
          font-size: 0.28rem;
          color: #333;
          width: 78%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          margin-right: 0.1rem;
        }
        .news-time {
          color: #777;
          font-size: 0.24rem;
        }
      }
    }
    .hero-tab {
      margin-top: 0.25rem;
      .hero-grid-item {
        height: 87px;
        :deep(.van-grid-item__content) {
          padding: 0;
          .van-grid-item__text {
            margin-top: 0.1rem;
            color: #222;
          }
        }
      }
    }
    .video-tab {
      // margin-top: 0.25rem;
      .video-grid-item {
        :deep(.van-grid-item__content) {
          // padding: 0;
          span {
            margin-top: 0.2rem;
            color: #222;
            font-size: 0.26rem;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
}
</style>
