<template>
  <div>
    <h1>文章列表</h1>
    <el-scrollbar>
      <el-table :data="items">
        <el-table-column prop="_id" label="ID" width="230"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column fixed="right" label="操作" width="180">
          <template #default="scope">
            <el-button
              type="text"
              size="small"
              @click="router.push(`/articles/edit/${scope.row._id}`)"
              >编辑</el-button
            >
            <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessageBox, ElMessage } from 'element-plus';
import http from '@/http';

const router = useRouter();
const items = ref([]);

const fetch = async () => {
  const res = await http.get('rest/articles');
  items.value = res.data;
};

interface Row {
  name: string;
  _id: string;
  title: string;
}

const remove = async (row: Row) => {
  ElMessageBox.confirm(`是否确定要删除文章${row.title}`, 'Warning', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning',
  })
    .then(async () => {
      const res = await http.delete(`rest/articles/${row._id}`);
      ElMessage({
        type: 'success',
        message: '删除成功',
        offset: 50,
      });
      fetch();
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消删除',
      });
    });
};

onBeforeMount(() => {
  fetch();
});
</script>

<style scoped></style>
