<template>
  <el-dialog v-model="isShow" title="添加学生" width="30%; margin-top: 75px">
    <el-form>
        <div class="flex">
             <el-form-item label="用户名：">
          <div class="w-md">
            <el-input
            v-model="input1"
            class="w-50"
            size="middle"
            placeholder="请输入要搜索的用户名"
            :suffix-icon="Search"
            />
          </div>
          <el-button type="primary" class="ml-2">点击搜索</el-button>
      </el-form-item>
        </div>
     
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
  import {Search} from '@element-plus/icons-vue'
  import { ref } from 'vue'
  const isShow = ref(false)
  const value = ref('')
  const add = () => {
    isShow.value = true;
  }
  const input1 = ref('')
  defineExpose({add})
</script>