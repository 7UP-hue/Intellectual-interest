<!--
 * @Description: 
 * @Author: caojun
 * @Date: 2022-05-31 21:43:54
 * @LastEditors: caojun
 * @LastEditTime: 2022-05-31 22:31:31
-->
<template>
  <el-container>
    <el-aside style="background-color: #6b7280; min-height: 100%; width: 240px; position: fixed">
      <div class="text-xl text-white font-bold h-60px" style="background-color: #06b6d4; line-height: 60px">前端题目OA</div>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#6b7280"
        text-color="#fff"
        router
        @select="changeMenu(index)"
      >
        <el-menu-item index="/">
          <el-icon><home-filled /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="infoEnter">
          <template #title>
            <el-icon><calendar /></el-icon>
            录入信息
          </template>
        </el-menu-item>
        <el-menu-item index="infoManage">
          <template #title><el-icon><orange /></el-icon>管理信息</template>
        </el-menu-item>
        <el-menu-item index="upload">
          <template #title><el-icon><help-filled /></el-icon>上传图片</template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main style="padding: 0; margin-left:240px">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script lang="ts" setup>
  import { useRouter, useRoute } from 'vue-router'
  import { HomeFilled, Document, Orange, Histogram, Fold, Calendar,
           VideoCameraFilled, UserFilled, Guide, WarningFilled, FolderAdd, Avatar, HelpFilled, Flag,
   } from '@element-plus/icons-vue'
  const $route = useRoute()
  const $router = useRouter()
  const changeMenu = (index:any) => {
    $route.path.replace('/',index);
  }
</script>