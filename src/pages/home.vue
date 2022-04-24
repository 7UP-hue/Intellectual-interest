<template>
  <my-header></my-header>
  <div class="p-3 bg-white common-layout rounded w-1173px mx-auto" style="min-width: 1024px">
    <div class="flex justify-center mb-4">
      <div class="search w-sm mx-auto flex">
        <el-input :prefix-icon="Search" placeholder="请输入要搜索的内容" />
        <el-button type="primary" class="ml-3">点击搜索</el-button>
      </div>
    </div>
    <el-container class= "shadow-lg shadow-gray-300 min-h-560px">
      <el-aside width="200px" class="mr-3">
        <el-menu background-color="rgb(245,247,250)" class="border h-full" @click="showDetail">
          <el-menu-item-group>
            <div class="font-700">初中</div>
            <el-menu-item index="00" class="flex justify-between">
              <span>物理</span>
              <el-icon><ArrowRight /></el-icon>
            </el-menu-item>
            <el-menu-item index="01" class="flex justify-between">
              <span>生物</span>
              <el-icon><ArrowRight /></el-icon>
            </el-menu-item>
            <el-menu-item index="02" class="flex justify-between">
              <span>化学</span>
              <el-icon><ArrowRight /></el-icon>
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <div class="font-700">高中</div>
            <el-menu-item index="00" class="flex justify-between">
              <span>物理</span>
              <el-icon><ArrowRight /></el-icon>
            </el-menu-item>
            <el-menu-item index="01" class="flex justify-between">
              <span>生物</span>
              <el-icon><ArrowRight /></el-icon>
            </el-menu-item>
            <el-menu-item index="02" class="flex justify-between">
              <span>化学</span>
              <el-icon><ArrowRight /></el-icon>
            </el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-aside>
      <el-main style="padding: 0">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import myHeader from "../components/header.vue";
import { Search } from "@element-plus/icons-vue";
import { User } from "@element-plus/icons-vue";
import { ChatDotSquare } from "@element-plus/icons-vue";
import { VideoPlay } from "@element-plus/icons-vue";
import { Notebook } from "@element-plus/icons-vue";
import { Tickets } from "@element-plus/icons-vue";
import { ArrowRight } from "@element-plus/icons-vue";
import { useRoute, useRouter } from 'vue-router'
const $route = useRoute()
const $router = useRouter()
const showDetail = () => { 
  $router.push({name: 'ShowDetail'})
  
}
</script>

