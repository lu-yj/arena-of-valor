<template>
  <Cell
    class="ip-item"
    v-for="(value, id) in ipData"
    :key="id"
    :label="value"
    @click="showPopup(id)"
  >
    <template #title>
      <img class="ip-img" :src="require(`../assets/images/${id}.png`)" />
    </template>
  </Cell>
  <Popup v-model:show="show" teleport="#app" closeable round style="background: none">
    <video ref="video" controls autoplay :src="require(`../assets/videos/${name}.mp4`)"></video>
  </Popup>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Cell, Popup } from 'vant';
const ipData = ref({
  poxiao: '代号：破晓',
  qicheng: '代号：启程',
  shijie: '王者荣耀·世界',
});
const show = ref(false);
const name = ref('');
const showPopup = (id: string) => {
  show.value = true;
  name.value = id;
};
const video = ref();
watch(show, (newValue) => {
  if (!newValue) {
    video.value.pause();
  }
});
</script>

<style scoped lang="less">
.ip-item {
  height: 245px;
  padding: 15px 15px 0;
  margin-bottom: 5px;
  color: black;
  .ip-img {
    width: 100%;
    border-radius: 5px;
  }
  :deep(.van-cell__label) {
    color: black;
  }
}
video {
  width: 6.2rem;
}
</style>
