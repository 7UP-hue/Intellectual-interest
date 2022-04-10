<template>
  <el-dialog v-model="isShow" title="添加管理员" width="30%; margin-top: 75px">
    <el-form>
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名" v-model="name" />
      </el-form-item>
      <el-form-item label="用户密码">
        <el-input placeholder="请输入用户密码" v-model="password" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="isShow = false">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const isShow = ref(false)
  const add = () => {
    isShow.value = true;
  }
  defineExpose({add})
</script>