<template>
  <div>
    <h1>{{ id ? '编辑' : '新建' }}分类</h1>
    <el-form label-width="120px" @submit.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option
            v-for="item in parents"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
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
import http from '../http';

const props = defineProps({
  id: { type: String },
});

const router = useRouter();
const model = ref({
  name: '',
  parent: '',
});
const parents = ref([] as any);

const save = async function () {
  let res;
  if (props.id) {
    res = await http.put(`rest/categories/${props.id}`, model.value);
  } else {
    res = await http.post('rest/categories', model.value);
  }
  router.push('/categories/list');
  ElMessage({
    message: '保存成功',
    type: 'success',
  });
};

const fetch = async () => {
  const res = await http.get(`rest/categories/${props.id}`);
  model.value = res.data;
};

const fetchParents = async () => {
  const res = await http.get(`rest/categories`);
  parents.value = res.data;
};

onBeforeMount(() => {
  fetchParents();
  if (props.id) fetch();
});
</script>

<style scoped></style>
