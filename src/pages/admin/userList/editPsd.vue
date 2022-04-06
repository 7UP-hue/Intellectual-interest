<template>
  <el-dialog v-model="isShow" title="修改密码" width="30%">
    <el-form>
      <el-form-item label="新密码">
        <el-input placeholder="请输入新密码" v-model="newPsd" />
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
  const edit = () => {
    isShow.value = true;
  }
  defineExpose({edit})
</script>