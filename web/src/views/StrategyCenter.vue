<template>
  <!-- 轮播图 -->
  <Swipe class="video-swipe" :autoplay="3000">
    <SwipeItem v-for="n in 4" :key="n">
      <Image :src="require(`../assets/images/video_img${n}.png`)" />
    </SwipeItem>
  </Swipe>
</template>

<script setup lang="ts">
import { Swipe, SwipeItem, Image } from 'vant';
</script>

<style scoped lang="less">
.video-swipe {
  margin-bottom: 0.28rem;
  :deep(.van-swipe__indicators) {
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
</style>