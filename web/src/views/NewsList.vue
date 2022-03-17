<template>
  <Tabs
    class="news-tabs"
    color="#d7d7d7"
    background="#f1f1f1"
    title-active-color="white"
    title-inactive-color="#333333"
    type="card"
    animated
    lazy-render
  >
    <Tab class="news-tab" v-for="(item, i) in newsTab" :key="i" :title="item">
      <List
        class="news-list"
        v-model:loading="loading"
        :finished="finished"
        loading-text="正在加载......"
        finished-text="已显示全部内容"
        @load="onLoad"
      >
        <Cell class="news-item" v-for="(n, idx) in list" :key="idx" :border="false">
          <Tag class="news-category" color="red" plain>热门</Tag>
          <span class="news-title">{{ n }}</span>
          <span class="news-time">2022-03-11</span>
        </Cell>
      </List>
    </Tab>
  </Tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Tabs, Tab, List, Cell, Tag } from 'vant';
const newsTab = ref(['热门', '新闻', '公告', '活动', '赛事']);
const list = ref(['互动小任务第15期-元歌皮肤设计大赛总决选语音奖励方案票选开启']) as any;
const loading = ref(false);
const finished = ref(false);
const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value[list.value.length - 1]);
    }

    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
};
</script>

<style scoped lang="less">
* {
  background-color: #f1f1f1;
}
.news-tabs {
  :deep(.van-tabs__wrap) {
    height: 0.7rem;
    .van-tabs__nav {
      height: 100%;
      margin: 0;
      .van-tab {
        font-size: 0.28rem;
        color: #fffefe;
      }
      .van-tab--active {
        background: url(../assets/images/video_navBg.png);
        background-size: 100%;
      }
    }
  }
  .news-tab {
    padding: 0.2rem 0.15rem 0;
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
        width: 70%;
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
}
</style>
