<template>
  <el-dialog v-model="isShow" title="添加班级" width="30%; margin-top: 75px">
    <el-form>
      <el-form-item label="班级名">
        <el-input placeholder="请输入班级名" v-model="name" />
      </el-form-item>
      <el-form-item label="管理者">
        <el-select v-model="value" placeholder="请选择一个管理者">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
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
  const value = ref('')
  const add = () => {
    isShow.value = true;
  }
  const options = [
  {
    value: '张三',
    label: '张三',
  },
  {
    value: '李四',
    label: '李四',
  }
]
  defineExpose({add})
</script>