<template>
  <el-dialog v-model="isShow" title="加入班级" width="30%" draggable>
    <el-form>
      <el-form-item label="班级名:">
        <el-select v-model="value" placeholder="请选择一个班级加入">
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
  const join = () => {
    isShow.value = true;
  }
  const options = [
  {
    value: '一班',
    label: '一班',
  },
  {
    value: '二班',
    label: '二班',
  }
]
  defineExpose({join})
</script>