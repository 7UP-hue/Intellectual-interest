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
          <el-button :icon="Plus" type="primary" @click="newStu">添加学生</el-button>
        </span>
      </div>
      <div class="mt-3">
        <el-table :data="adminList">
          <el-table-column prop="adminName" label="用户名" align="center"></el-table-column>
          <el-table-column prop="adminPsd" label="密码" align="center"></el-table-column>
          <el-table-column prop="studyTime" label="学习时长" align="center"></el-table-column>
          <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
          <el-table-column prop="action" label="操作" align="center">
            <template #default>
              <el-button type="danger" size="small">删除</el-button>
              <el-button type="warning" size="small" @click="changePsd()">修改密码</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <edit-psd ref="editpsd"></edit-psd>
    <add-stu ref="addstu"></add-stu>
  </div>
</template>
<script lang="ts" setup>
  import myHeader from '../header.vue'
  import editPsd from '../mixin/editPsd.vue'
  import addStu from './addStu.vue'
  import { ref, reactive } from 'vue'
  import { Search, Delete, Upload, Plus } from '@element-plus/icons-vue'
  const editpsd = ref(null);
  const changePsd = () => {
    (editpsd as any).value.edit();
  }
  const addstu = ref(null)
  const newStu = () => {
    (addstu as any).value.add();
  }
  const adminList = reactive([
    {adminName: '张三', adminPsd: '123456', studyTime:'20h', createTime: '2021.03.04'},
    {adminName: '李四', adminPsd: '123456', studyTime:'20h', createTime: '2021.03.04'},
    {adminName: '王五', adminPsd: '123456', studyTime:'20h', createTime: '2021.03.04'},
    {adminName: '赵六', adminPsd: '123456', studyTime:'20h', createTime: '2021.03.04'},
  ])
</script>