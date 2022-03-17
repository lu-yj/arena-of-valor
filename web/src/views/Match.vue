<template>
  <Tabs
    class="match-tabs"
    background="#f1f1f1"
    color="#db9e3f"
    title-active-color="#db9e3f"
    title-inactive-color="black"
    line-width="0.5rem"
    :animated="true"
    lazy-render
  >
    <Tab class="match-tab" v-for="(value, name) in matchData" :key="name" :title="name">
      <Cell class="match-info" :border="false">
        <span class="match-title">{{ value }}</span>
        <Tag class="match-type" round plain size="large">官方举办</Tag>
      </Cell>
      <Image class="match-img" :src="require(`../assets/images/${name}.jpg`)" />
      <NavBar class="match-news" title="赛事资讯" :border="false" />
      <List
        class="news-list"
        v-model:loading="loading"
        :finished="finished"
        loading-text="正在加载......"
        finished-text="已显示全部内容"
        @load="onLoad"
      >
        <Cell
          class="news-item"
          v-for="(n, idx) in list"
          :key="idx"
          :border="false"
          :title="n"
          value="03/14"
          :to="`/news/${idx}`"
        ></Cell>
      </List>
    </Tab>
  </Tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Tab, Tabs, Cell, Tag, Image, NavBar, List } from 'vant';

const matchData = ref({
  KPL: '王者荣耀2022KPL春季赛',
  挑战者杯: '2021王者荣耀挑战者杯',
  K甲联赛: '王者荣耀甲级职业联赛（K甲）',
  TGA: '王者荣耀TGA',
  WGI: '微信游戏邀请赛',
  模拟战大师赛: '模拟战大师赛',
});

const list = ref(['春季赛快讯：武汉ES击败XYG，坦然夏侯惇冲锋陷阵压制战场']) as any;
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
.match-tabs {
  :deep(.van-tabs__wrap) {
    height: 0.92rem;
    margin-bottom: 0.3rem;
    .van-tab__text {
      font-size: 13px;
    }
  }
}
.match-info {
  height: 0.525rem;
  padding: 0 0 0 0.175rem;
  :deep(.van-cell__value) {
    display: flex;
    align-items: center;
    .match-title {
      color: #00adff;
      font-weight: bold;
      font-size: 0.35rem;
    }
    .match-type {
      margin-left: 4%;
    }
  }
}
.match-img {
  width: 100%;
  margin-top: 0.28rem;
  display: block;
}
.match-news {
  :deep(.van-nav-bar__content) {
    height: 0.57rem;
    margin: 0.1866rem 0;
    background-color: #e4e4e4;
    .van-nav-bar__title {
      font-size: 0.28rem;
      color: #a2a2a2;
    }
  }
}
.news-list {
  margin: 0 0.1334rem;
  .news-item {
    height: 0.616rem;
    padding: 0;
    :deep(.van-cell__title) {
      width: 85%;
      span {
        display: inline-block;
        font-size: 0.28rem;
        color: #333;
        width: 100%;
        line-height: 0.616rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    :deep(.van-cell__value span) {
      color: #9e9e9e;
      font-size: 0.252rem;
      line-height: 0.616rem;
    }
  }
}
</style>
