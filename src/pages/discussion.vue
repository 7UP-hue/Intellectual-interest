<template>
    <my-header></my-header>
    <div class="flex justify-center mb-4">
      <div class="search w-sm mx-auto flex mt-4">
        <el-input :prefix-icon="Search" placeholder="请输入要搜索的内容" />
        <el-button type="primary" class="ml-3">点击搜索</el-button>
      </div>
    </div>
    <div class="shadow-xl shadow-gray-300 border border-hex-ccc w-1173px mx-auto mt-3">
      <div class="bg-hex-F2F2F2 font-700 text-xl text-left px-5 h-3em items-center flex">
        请遵守发言规范
      </div>
      <ul v-infinite-scroll="load" class="infinite-list" >
        <li v-for="item in items" :key="item" class="py-3 border border-hex-ccc bg-white m-3 rounded flex items-center justify-around">
          <div>
            <div class="text-xl py-2 text-left ml-2"> {{ item.title }}</div>
            <div class="mx-2 mt-1 text-xs">发起时间：{{ item.creatTime }} 由 {{item.creator}} 发起</div>
          </div>
          <div class="m-2">
            <span class="m-2"><el-button type="primary" plain>查看</el-button></span>
            <span class="m-2">浏览次数：{{item.count}}</span>
            <span class="m-2">回复数：{{item.reply}}</span>
          </div>
        </li>
      </ul>
    </div>
</template>
<script setup lang="ts">
  import myHeader from '../components/header.vue'
  import { reactive, ref } from 'vue'
const count = ref(0)
const load = () => {
  count.value += 2
}
const items = reactive([
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
])
</script>
<style scoped>

</style>