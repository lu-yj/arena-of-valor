<template>
  <div class="main-top sprite">
    <div class="logo-cont">
      <a class="logo-img sprite"></a>
      <div class="logo-title">
        <h1>王者荣耀</h1>
        <p>团队成就更多</p>
      </div>
    </div>
    <div class="download">
      <a class="sprite" href="https://pvp.qq.com/zlkdatasys/mct/d/play.shtml"></a>
    </div>
  </div>
  <Tabs
    class="main-tabs"
    v-model:active="active"
    background="#db9e3f"
    color="white"
    title-active-color="white"
    title-inactive-color="white"
    line-width="0.5rem"
    lazy-render
  >
    <Tab title="首页" to="home"></Tab>
    <Tab title="攻略中心" to="strategyCenter"></Tab>
    <Tab title="赛事中心" to="match"></Tab>
    <Tab title="IP新游" to="ipgame"></Tab>
  </Tabs>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { NavBar, Tab, Tabs } from 'vant';
const active = ref(0);
</script>

<style scoped lang="less">
.main-top {
  display: block;
  background-position: 0 87.195%;
  background-size: 375px 9.2rem;
  width: 100%;
  height: 0.9rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-cont {
    width: 3rem;
    height: 0.6rem;
    padding-left: 0.34rem;
    display: flex;
    .logo-img {
      display: block;
      background-position: 0 72.588%;
      width: 0.6rem;
      height: 0.6rem;
    }
    .logo-title {
      padding-left: 0.2rem;
      h1 {
        font-size: 0.26rem;
        line-height: 0.34rem;
        color: #fff;
        font-weight: 500;
      }
      p {
        font-size: 0.16rem;
        color: #666;
      }
    }
  }
  .download {
    padding-right: 0.32rem;
    a {
      display: block;
      background-position: 18.73% 71.694%;
      width: 1.2rem;
      height: 0.48rem;
    }
  }
}
.main-tabs {
  height: 0.84rem;
  margin-top: 0.9rem;
  z-index: 10;
  :deep(.van-tabs__wrap) {
    height: 100%;
    .van-tabs__nav {
      padding: 0;
      .van-tab {
        font-size: 0.26rem;
      }
      .van-tabs__line {
        bottom: 0.2rem !important;
      }
    }
  }
}
</style>
