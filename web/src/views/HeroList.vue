<template>
  <Tabs
    class="hero-tabs"
    color="#db9e3f"
    title-active-color="#db9e3f"
    title-inactive-color="black"
    line-width="0.5rem"
    line-height="2px"
    animated
    lazy-render
  >
    <Tab class="hero-tab" v-for="(item, i) in heroTabs" :key="i" :title="item">
      <Grid class="hero-grid" :column-num="5" :border="false" icon-size="56px">
        <GridItem
          class="hero-grid-item"
          v-for="value in 8"
          :key="value"
          :icon="require(`../assets/images/${yase}.jpg`)"
          text="亚瑟"
        />
      </Grid>
    </Tab>
  </Tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Tabs, Tab, Grid, GridItem } from 'vant';
const heroTabs = ref(['全部', '战士', '法师', '坦克', '刺客', '射手', '辅助']);
const yase = 'yase';
</script>

<style scoped lang="less">
:deep(*) {
  background-color: #f1f1f1;
}
.hero-tabs {
  :deep(.van-tabs__wrap) {
    height: 0.48rem;
    margin-top: 0.25rem;
    .van-tab {
      font-size: 0.26rem;
      color: #343440;
    }
  }
  .hero-tab {
    margin-top: 0.25rem;
    .hero-grid-item {
      height: 1.74rem;
      :deep(.van-grid-item__content) {
        padding: 0;
        .van-icon img {
          border-radius: 2px;
        }
        .van-grid-item__text {
          margin-top: 0.1rem;
          color: #222;
        }
      }
    }
  }
}
</style>
