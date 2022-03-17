<template>
  <Image class="hero-img" :src="require(`../assets/images/lvbu.jpg`)" />
  <div class="hero-attribute">
    <p class="hero-title">无双之魔</p>
    <p class="hero-name">吕布</p>
    <p class="hero-location">战士/坦克</p>
    <p class="hero-other-info">
      <span class="hero-cover">难度</span>
      <span class="hero-skin" @click="$router.push('skin')">皮肤</span>
    </p>
  </div>
  <Tabs>
    <Tab title="英雄初识">
      <Cell class="hero-intro">
        <template #title>
          <Button text="英雄介绍视频" :icon="require(`../assets/images/icon_06.png`)" />
        </template>
        <template #value>
          <Button text="一图识英雄" :icon="require(`../assets/images/icon_07.png`)" to="pic" />
        </template>
      </Cell>
      <Tabs>
        <Tab v-for="n in 4" :key="n">
          <template #title>
            <Image round width="1.3rem" :src="require(`../assets/images/jineng.jpg`)" />
          </template>
        </Tab>
      </Tabs>
    </Tab>
    <Tab title="进阶攻略"></Tab>
  </Tabs>
</template>

<script setup lang="ts">
import { Image, Tabs, Tab, Cell, Button } from 'vant';
const lvbu = 'lvbu';
</script>

<style scoped lang="less">
.hero-img {
  display: block;
  margin-top: 45px;
}
.hero-img::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    0,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0) 100%
  );
}
.hero-attribute {
  color: white;
  position: absolute;
  top: 2.7rem;
  padding: 0 0.3rem;
  width: 100%;
  // z-index: 1;
  font-size: 12px;
  .hero-name {
    font-size: 17px;
    font-weight: 700;
  }
  .hero-other-info {
    display: flex;
    justify-content: space-between;
  }
}
.hero-intro {
  .van-button {
    background-color: #fcfcfc;
    width: 170px;
    height: 40px;
    border-radius: 5px;
  }
}
</style>
