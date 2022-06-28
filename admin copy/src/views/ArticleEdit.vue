<template>
  <div>
    <h1>{{ id ? '编辑' : '新建' }}文章</h1>
    <el-form label-width="120px" @submit.prevent="save()">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option
            v-for="item of categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <div>
          <QuillEditor ref="editor" v-model:content="model.body" contentType="html" theme="snow" />
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onBeforeMount, watchEffect, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import http from '../http';

const props = defineProps({
  id: { type: String },
});

const router = useRouter();
const model = ref({
  name: '',
  categories: [],
  title: '',
  body: '',
});
const categories = ref([] as any);

const save = async function () {
  let res;
  if (props.id) {
    res = await http.put(`rest/articles/${props.id}`, model.value);
  } else {
    res = await http.post('rest/articles', model.value);
  }
  router.push('/articles/list');
  ElMessage({
    message: '保存成功',
    type: 'success',
  });
};

const fetch = async () => {
  const res = await http.get(`rest/articles/${props.id}`);
  model.value = res.data;
};

const fetchCategories = async () => {
  const res = await http.get(`rest/categories`);
  categories.value = res.data;
};

onBeforeMount(() => {
  fetchCategories();
  if (props.id) fetch();
});
</script>

<style scoped></style>
