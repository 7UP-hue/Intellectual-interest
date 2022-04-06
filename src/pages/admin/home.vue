<template>
  <div  class=" w-full h-full">                                                                                               
    <my-header></my-header>
    <div class="m-4 bg-white rounded" style="height: 100%">
      <div class="pt-5 text-left pl-3 text-xl font-bold">智趣科普后台系统</div>
      <div class="flex justify-around mt-3 p-3 text-lg">
        <span class="adminMsg">用户总数<div class="digit">1354</div></span>
        <span class="adminMsg">总发布视频数<div class="digit">1354</div></span>
        <span class="adminMsg">总发布文档数<div class="digit">1354</div></span>
        <span class="adminMsg">总访客量<div class="digit">1354</div></span>
        <span class="adminMsg">今日访客量<div class="digit">1354</div></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import myHeader from './header.vue'
</script>
<style scoped>
  .adminMsg {
    display: inline-block;
    width: 18%;
    border: 1px solid #eee;
    border-radius: .3em;
    box-shadow: 5px 5px 10px 1px #eee;
    text-align: left;
    padding: 1em
  }
  .digit {
    color: rgb(154,96,180);
    font-size: 1.5em;
    margin-top: .5em;
    font-weight: 700;
  }
</style>
