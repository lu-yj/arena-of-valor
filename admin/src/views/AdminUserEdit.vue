<template>
  <div>
    <h1>{{ id ? '编辑' : '新建' }}管理员</h1>
    <el-form label-width="120px" @submit.prevent="save()">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="text" v-model="model.password"></el-input>
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
  username: '',
  password: '',
});
const parents = ref([] as any);

const save = async function () {
  let res;
  if (props.id) {
    res = await http.put(`rest/admin_users/${props.id}`, model.value);
  } else {
    res = await http.post('rest/admin_users', model.value);
  }
  router.push('/admin_users/list');
  ElMessage({
    message: '保存成功',
    type: 'success',
  });
};

const fetch = async () => {
  const res = await http.get(`rest/admin_users/${props.id}`);
  model.value = res.data;
};

onBeforeMount(() => {
  if (props.id) fetch();
});
</script>

<style scoped></style>
