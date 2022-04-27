<template>
  <div class="w-full" style="min-height: 650px">                                                                                               
    <my-header></my-header>
    <div class="m-4 bg-white rounded p-3" style="min-height: 635px; margin-top: 75px">
      <div class="flex justify-around">
        <span>
          <el-form :inline="true">
            <el-form-item>
              <el-input placeholder="请输入关键字" />
            </el-form-item>
            <el-form-item>
              <el-button>重置</el-button>
              <el-button type="primary" :icon="Search">查询</el-button>
            </el-form-item>
          </el-form>
        </span>
        <span>
          <el-button :icon="Plus" type="primary" @click="newClass">新增</el-button>
        </span>
      </div>
      <div class="mt-3">
        <el-table :data="classList">
          <el-table-column prop="className" label="班级名" align="center"></el-table-column>
          <el-table-column prop="classManager" label="管理者" align="center"></el-table-column>
          <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
          <el-table-column prop="action" label="操作" align="center">
            <template #default>
              <el-button type="primary" size="small" plain>查看班级信息</el-button>
              <el-button type="danger" size="small">解散班级</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="example-pagination-block">
        <div class="example-demonstration"></div>
        <el-pagination
        class="justify-center"
          layout="total,sizes, prev, pager, next, jumper"
          :total="classList.length"
          :current-page="currentPage"
          :page-size="pageSize"
          :page-sizes="[1, 2, 5, 10]"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
    <edit-psd ref="editpsd"></edit-psd>
    <add-class ref="addclass"></add-class>
  </div>
</template>
<script lang="ts" setup>
  import myHeader from '../header.vue'
  import addClass from './addClass.vue'
  import { ref } from 'vue'
  import { Search, Delete, Upload, Plus } from '@element-plus/icons-vue'
  const editpsd = ref(null);
  const addclass = ref(null)
  const currentPage = ref(1);
const pageSize = ref(5);
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
  pageSize.value = val;
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  currentPage.value = val;
}
  const newClass = () => {
    (addclass as any).value.add();
  }
  import { reactive } from 'vue'
  const classList = reactive([
    {className: '一班', classManager: '张三', createTime: '2021.03.04'},
    {className: '二班', classManager: '李四', createTime: '2021.03.04'},
    {className: '三班', classManager: '王五', createTime: '2021.03.04'},
    {className: '四班', classManager: '赵六', createTime: '2021.03.04'}
  ])
</script>
<style scoped>
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>