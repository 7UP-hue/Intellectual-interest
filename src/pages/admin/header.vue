<template>
  <div class="head">
    <el-breadcrumb separator-class="el-icon-arrow-right">
         <el-breadcrumb-item :to="{path: 'manage'}">首页</el-breadcrumb-item>
         <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
     </el-breadcrumb>
    <el-dropdown class="mr-5">
        <div style="display: flex;align-items: center;">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          <span>admin</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="w-18">
            <el-dropdown-item><span @click="$router.push('/manage');">首页</span></el-dropdown-item>
            <el-dropdown-item><span @click="$router.push('/login');">退出</span></el-dropdown-item>
          </el-dropdown-menu>
        </template>
    </el-dropdown> 
  </div>
</template>
<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue'

</script>
<style scoped>
.head {
    height: 60px;
    background-color: #fff;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>


