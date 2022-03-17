<template>
  <NavBar
    class="news-title"
    left-text="春季赛快讯：武汉ES击败XYG，坦然夏侯惇冲锋陷阵压制战场"
    left-arrow
    @click-left="router.go(-1)"
    right-text="2022-03-13"
  />
  <div class="news-content">3月13日2022年KPL春季赛常规赛第二轮第二周第五日第三场，由XYG对阵武汉eStarPro，以下是本场比赛快讯：</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import { NavBar } from 'vant';

const router = useRouter();
const props = defineProps({
  id: { type: String },
});
console.log(props.id);
</script>

<style scoped lang="less">
* {
  background-color: #f1f1f1;
}
.news-title {
  margin-bottom: 0.2rem;
  :deep(.van-nav-bar__content) {
    height: 0.7rem;
    .van-nav-bar__left span {
      display: inline-block;
      width: 60%;
      font-size: 0.28rem;
      font-weight: bold;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .van-nav-bar__right span {
      color: #9fa0a0;
      font-size: 0.2rem;
    }
  }
  :deep(.van-nav-bar__content) {
    border-bottom: 1px solid #d4d4d5;
  }
}
.news-content {
  padding: 0 0.4rem;
}
</style>
