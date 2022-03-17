<template>
  <NavBar class="main-top sprite" :fixed="true" :border="false">
    <template #left>
      <div class="left-cont">
        <a class="logo-img sprite"></a>
        <span>王者荣耀</span>
        <span>攻略站</span>
      </div>
    </template>
    <template #right>
      <div class="right-cont" @click="$router.push('/heroList')">
        <span>更多英雄</span>
        <Icon name="arrow" color="white" />
      </div>
    </template>
  </NavBar>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { NavBar, Icon } from 'vant';
</script>

<style scoped lang="less">
.sprite {
  background: url(../assets/images/index.png) no-repeat;
}
.logo-img {
  background-size: 7.5rem;
}
.main-top {
  background-position: 0 87.195%;
  .left-cont {
    display: flex;
    align-items: center;
    .logo-img {
      display: block;
      background-position: 0 72.588%;
      width: 0.6rem;
      height: 0.6rem;
    }
    span {
      font-size: 0.26rem;
      color: white;
      padding-left: 0.2rem;
    }
  }
  .right-cont {
    color: white;
    font-size: 0.24rem;
  }
}
</style>
