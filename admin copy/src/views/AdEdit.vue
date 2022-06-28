<template>
  <div>
    <h1>{{ id ? '编辑' : '新建' }}广告位</h1>
    <el-form label-width="120px" @submit.prevent="save()">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-button
        @click="
          model.items.push({
            image: '',
            url: '',
          })
        "
        size="small"
        :icon="Plus"
      >添加广告位</el-button>
      <el-row type="flex" style="flex-wrap: wrap">
        <el-col :md="24" v-for="(item, i) in model.items" :key="i">
          <el-form-item label="跳转链接(URL)">
            <el-input v-model="item.url"></el-input>
          </el-form-item>
          <el-form-item label="图片" style="margin-top: 0.5rem">
            <el-upload
              class="avatar-uploader"
              :action="http.defaults.baseURL + '/upload'"
              :show-file-list="false"
              :on-success="(res: any) => item.image = res.url"
            >
              <img v-if="item.image" :src="item.image" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon">
                <Plus />
              </el-icon>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="danger" @click="model.items.splice(i, 1)">删除</el-button>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { Plus } from '@element-plus/icons-vue';
import http from '../http';

const props = defineProps({
  id: { type: String },
});

const router = useRouter();
const model = ref({
  name: '',
  items: [
    {
      image: '',
      url: '',
    },
  ],
});
const parents = ref([] as any);

const save = async function () {
  let res;
  if (props.id) {
    res = await http.put(`rest/ads/${props.id}`, model.value);
  } else {
    res = await http.post('rest/ads', model.value);
  }
  router.push('/ads/list');
  ElMessage({
    message: '保存成功',
    type: 'success',
  });
};

const fetch = async () => {
  const res = await http.get(`rest/ads/${props.id}`);
  model.value = Object.assign({}, model.value, res.data);
};

onBeforeMount(() => {
  if (props.id) fetch();
});
</script>

<style scoped>

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}
.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  min-width: 5rem;
  height: 5rem;
  text-align: center;
}
.avatar {
  min-width: 5rem;
  height: 5rem;
  display: block;
}
</style>
