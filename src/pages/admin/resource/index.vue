<template>
  <div class="w-full h-full">                                                                                               
    <my-header></my-header>
    <div class="m-4 bg-white rounded p-3" style="height: 100%">
      <div>
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
      </div>
      <div class="mt-3">
        <el-table :data="resList">
          <el-table-column prop="title" label="标题名称" align="center"></el-table-column>
          <el-table-column prop="grade" label="分区" align="center"></el-table-column>
          <el-table-column prop="subject" label="科目" align="center"></el-table-column>
          <el-table-column prop="tag" label="类别" align="center"></el-table-column>
          <el-table-column prop="type" label="文件格式" align="center"></el-table-column>
          <el-table-column prop="uploadTime" label="上传时间" align="center"></el-table-column>
          <el-table-column prop="limit" label="能否下载" align="center"></el-table-column>
          <el-table-column prop="action" label="操作" align="center">
            <template #default>
              <el-button type="text" size="small">删除</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import myHeader from '../header.vue'
  import { ref } from 'vue'
  import { Search, Delete, Upload } from '@element-plus/icons-vue'
  const addresource = ref(null);
  const uploadRes = () => {
    (addresource as any).value.add();
  }
  import { reactive } from 'vue'
  const resList = reactive([
    {title: '语文文言文必考知识',grade: '初中', subject: '语文', tag: '知识点', type: 'word', uploadTime: '2020-04-16', limit: '是'},
    {title: '语文文言文必考知识',grade: '初中', subject: '语文', tag: '知识点', type: 'word', uploadTime: '2020-04-16', limit: '是'},
    {title: '语文文言文必考知识',grade: '初中', subject: '语文', tag: '知识点', type: 'word', uploadTime: '2020-04-16', limit: '是'},
    {title: '语文文言文必考知识',grade: '初中', subject: '语文', tag: '知识点', type: 'word', uploadTime: '2020-04-16', limit: '是'},
    {title: '语文文言文必考知识',grade: '初中', subject: '语文', tag: '知识点', type: 'word', uploadTime: '2020-04-16', limit: '是'},
    {title: '语文文言文必考知识',grade: '初中', subject: '语文', tag: '知识点', type: 'word', uploadTime: '2020-04-16', limit: '是'}
  ])
</script>