<template>
  <el-container>
    <el-aside style="background-color: #6b7280; min-height: 100%; width: 240px; position: fixed">
      <div class="text-xl text-white font-bold h-60px" style="background-color: #06b6d4; line-height: 60px">智趣科普后台管理</div>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#6b7280"
        text-color="#fff"
        router
        @select="changeMenu(index)"
      >
        <el-menu-item index="manage">
          <el-icon><home-filled /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="resManage">
          <template #title>
            <el-icon><calendar /></el-icon>
            资源管理
          </template>
          <el-menu-item index="uploadList"><el-icon><fold /></el-icon>资源列表</el-menu-item>
          <el-menu-item index="uploadRes"><el-icon><folder-add /></el-icon>上传</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="userManage">
          <template #title><el-icon><orange /></el-icon>用户管理</template>
          <el-menu-item index="userList"><el-icon><user-filled /></el-icon>学生列表</el-menu-item>
          <el-menu-item index="adminList"><el-icon><guide /></el-icon>老师列表</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="classManage">
          <template #title><el-icon><help-filled /></el-icon>班级管理</template>
          <el-menu-item index="classList"><el-icon><flag /></el-icon>班级列表</el-menu-item>
          <el-menu-item index="management"><el-icon><avatar /></el-icon>我管理的</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="sysManage">
          <template #title><el-icon><histogram /></el-icon>系统管理</template>
          <el-menu-item index="explain"><el-icon><warning-filled /></el-icon>说明</el-menu-item>
        </el-sub-menu>
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
  const changeMenu = (index) => {
    $route.path.replace('/',index);
  }
</script>