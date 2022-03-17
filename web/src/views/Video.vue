<template>
  <video controls autoplay src="../assets/videos/poxiao.mp4"></video>
  <div class="video-info">
    <Image class="avatar" :src="require(`../assets/images/${avatar}.png`)" />
    <div class="video-cont">
      <div class="video-title">出了反甲的曹操打野这么厉害，我算是见识到了</div>
      <div class="user-info">投稿：0 粉丝：0</div>
      <div class="user-info">个性签名</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Image } from 'vant';

const props = defineProps({
  id: { type: String },
});

const avatar = 'avatar';
</script>

<style scoped lang="less">
* {
  background-color: #f1f1f1;
}
video {
  width: 100%;
  display: block;
}
.video-info {
  height: 1.36rem;
  margin: 0.28rem 0.1rem;
  border: 1px solid #dcdcdc;
  display: flex;
  align-items: center;
  .avatar {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.24rem;
  }
  .video-cont {
    height: 1rem;
    .video-title {
      color: #2f2d2d;
      font-size: 0.252rem;
    }
    .user-info {
      color: #6d6d6f;
      font-size: 0.24rem;
    }
  }
}
</style>
