<template>
  <div class="w-full h-full">                                                                                               
    <my-header></my-header>
    <div class="m-4 bg-white rounded p-3 text-xl" style="height: 100%">
      <div class="mt-5">智趣科普后台管理</div>
      <div>普通管理员可以查看、编辑文件</div>
      <div>超级管理员可以添加管理员</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import myHeader from './header.vue'
</script>