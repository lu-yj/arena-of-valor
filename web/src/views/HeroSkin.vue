<template>
  <Swipe class="skin-swipe" indicator-color="black">
    <SwipeItem v-for="n in 5" :key="n">
      <Image :src="require(`../assets/images/${skin}.jpg`)" />
      <div class="skin-name">无双之魔</div>
    </SwipeItem>
  </Swipe>
</template>

<script setup lang="ts">
import { Swipe, SwipeItem, Image } from 'vant';
const skin = 'skin';
</script>

<style scoped lang="less">
.skin-swipe {
  margin: 1.04rem 0.12rem 0;
  height: 12rem;
  .skin-name {
    text-align: center;
    font-size: 0.26rem;
    color: #343440;
    margin-top: 10px;
  }
  :deep(.van-swipe__indicators) {
    bottom: 20px;
    .van-swipe__indicator {
      width: 10px;
      height: 5px;
      border-radius: 2.5px;
      background-color: #bababa;
      opacity: 1;
    }
    .van-swipe__indicator--active {
      width: 15px;
    }
  }
}
</style>
