<template>
  <my-header></my-header>
  <div class="mx-50 p-3 bg-white">
    <div class="flex justify-between">
      <div class="logo"></div>
      <div class="search w-sm mx-auto">
        <el-input :prefix-icon="Search" placeholder="请输入要搜索的内容" />
      </div>
    </div>
    <div class="mt-3">
      <el-row :gutter="20">
        <el-col :span="4">
          <el-tabs type="card">
            <el-tab-pane label="初中">
              <el-menu class="border"
                background-color="rgb(245,247,250)"
              >
                <el-menu-item index="1" class="flex justify-between">
                  <span>语文</span>
                  <el-icon><ArrowRight /></el-icon> 
                </el-menu-item>
                <el-menu-item index="1" class="flex justify-between">
                  <span>数学</span>
                  <el-icon><ArrowRight /></el-icon> 
                </el-menu-item>
                <el-menu-item index="1" class="flex justify-between">
                  <span>英语</span>
                  <el-icon><ArrowRight /></el-icon> 
                </el-menu-item>
                <el-menu-item index="1" class="flex justify-between">
                  <span>物理</span>
                  <el-icon><ArrowRight /></el-icon> 
                </el-menu-item>
                <el-menu-item index="1" class="flex justify-between">
                  <span>化学</span>
                  <el-icon><ArrowRight /></el-icon> 
                </el-menu-item>
                <el-menu-item index="1" class="flex justify-between">
                  <span>生物</span>
                  <el-icon><ArrowRight /></el-icon> 
                </el-menu-item>
                <el-menu-item index="1" class="flex justify-between">
                  <span>地理</span>
                  <el-icon><ArrowRight /></el-icon> 
                </el-menu-item>
                <el-menu-item index="1" class="flex justify-between">
                  <span>历史</span>
                  <el-icon><ArrowRight /></el-icon> 
                </el-menu-item>
                <el-menu-item index="1" class="flex justify-between">
                  <span>政治</span>
                  <el-icon><ArrowRight /></el-icon> 
                </el-menu-item>
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
import { Search, ArrowRight } from '@element-plus/icons-vue'
</script>
<style scoped>
.logo {
  background: url('../assets/logoo.png') no-repeat;
  width: 100px;
  background-size: 100%;
  height: 32px;
}
</style>