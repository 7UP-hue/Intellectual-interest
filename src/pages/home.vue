<template>
  <my-header></my-header>
  <div class="mx-50 p-3 bg-white">
    <div>
      <div class="search w-sm mx-auto">
        <el-input :prefix-icon="Search" placeholder="请输入要搜索的内容" />
      </div>
    </div>
    <div class="mt-3">
      <el-row :gutter="20">
        <el-col :span="4">
          <el-tabs type="card">
            <el-tab-pane label="初中">
              <el-menu class="border">
                <el-menu-item index="1">语文</el-menu-item>
                <el-menu-item index="2">数学</el-menu-item>
                <el-menu-item index="3">英语</el-menu-item>
                <el-menu-item index="3">物理</el-menu-item>
                <el-menu-item index="3">化学</el-menu-item>
                <el-menu-item index="3">生物</el-menu-item>
                <el-menu-item index="3">地理</el-menu-item>
                <el-menu-item index="3">历史</el-menu-item>
                <el-menu-item index="3">政治</el-menu-item>
              </el-menu>
            </el-tab-pane>
            <el-tab-pane label="高中">
              <el-menu class="border">
                <el-menu-item index="1">语文</el-menu-item>
                <el-menu-item index="2">数学</el-menu-item>
                <el-menu-item index="3">英语</el-menu-item>
              </el-menu>
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="20">
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script lang="ts" setup>
import myHeader from '../components/header.vue'
import { Search } from '@element-plus/icons-vue'
</script>
