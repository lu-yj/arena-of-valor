<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import http from '@/http';

const router = useRouter();
const model = ref({
  username: '',
  password: '',
});

const login = async function () {
  const res = await http.post('login', model.value);
  localStorage.token = res.data.token;
  router.push('/');
  ElMessage.success('登录成功');
};
</script>

<style scoped lang="less">
.login-card {
  width: 50%;
  margin: 10rem auto;
}
</style>
