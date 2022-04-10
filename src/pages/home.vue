<template>
  <my-header></my-header>
  <div class="mx-50 p-3 bg-white common-layout rounded" style="min-width: 1200px; min-height:885px">
    <el-container>
      <el-header>
        <div class="flex justify-center">
          <div class="search w-sm mx-auto flex">
            <el-input :prefix-icon="Search" placeholder="请输入要搜索的内容" />
            <el-button type="primary" class="ml-3">点击搜索</el-button>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" class="mt-4">
          <div class="h-full">
            <!-- <el-row :gutter="1"> -->
            <el-col :span="30" class="h-full">
              <el-tabs type="card" class="h-full" style="background-color:rgb(245,247,250)">
                <el-tab-pane label="初中">
                  <el-menu background-color="rgb(245,247,250)" class="border"   @click="showDetail">
                    <el-menu-item index="00" class="flex justify-between">
                      <span>语文</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="01" class="flex justify-between">
                      <span>数学</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="02" class="flex justify-between">
                      <span>英语</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="02" class="flex justify-between">
                      <span>物理</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="03" class="flex justify-between">
                      <span>化学</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="04" class="flex justify-between">
                      <span>生物</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="05" class="flex justify-between">
                      <span>地理</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="06" class="flex justify-between">
                      <span>历史</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="07" class="flex justify-between">
                      <span>政治</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                  </el-menu>
                </el-tab-pane>
                <el-tab-pane label="高中">
                  <el-menu class="border" background-color="rgb(245,247,250)">
                    <el-menu-item index="10" class="flex justify-between">
                      <span>语文</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="11" class="flex justify-between">
                      <span>数学</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="12" class="flex justify-between">
                      <span>英语</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="13" class="flex justify-between">
                      <span>物理</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="14" class="flex justify-between">
                      <span>化学</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="15" class="flex justify-between">
                      <span>生物</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="16" class="flex justify-between">
                      <span>地理</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="17" class="flex justify-between">
                      <span>历史</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="18" class="flex justify-between">
                      <span>政治</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                  </el-menu>
                </el-tab-pane>
              </el-tabs>
            </el-col>
            <!-- </el-row> -->
          </div>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
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
  $router.push({name: 'File'})
  
}
</script>

