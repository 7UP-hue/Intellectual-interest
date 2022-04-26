<template>
    <!-- <my-header></my-header> -->
    <div class="shadow-xl shadow-gray-300 border border-hex-ccc w-1173px mx-auto min-h-688px">
      <div style="position: fixed" class="w-1171px shadow-xl">
        <div class="bg-hex-F2F2F2 font-700 text-xl h-3em items-center flex justify-between px-3">
          <span
            class="font-500 mr-3 flex items-center cursor-pointer hover:text-hex-409EFF"
            @click="back()"
          >
            <el-icon><arrow-left /></el-icon>返回
          </span>
          <div>
            请遵守发言规范
          </div>
          <div class="w-sm my-4 flex ml-3">
            <el-input :prefix-icon="Search" placeholder="请输入要搜索的内容" />
            <el-button type="primary" class="ml-3">点击搜索</el-button>
          </div>
        </div>
      </div>
      <div class="mt-5em px-3">
        <el-tabs v-model="checkedTab" @tab-click="changeTab()">
          <el-tab-pane label="全部" name="allDis">
            <div class="empty" v-if="allDis.length === 0">
              暂时还没有话题，赶快去发布一个吧~
            </div>
          </el-tab-pane>
          <el-tab-pane label="我参与的" name="myJoinDis">
            <div class="empty" v-if="myJoinDis.length === 0">
              你还没有参与任何话题哦，赶快去发表一个吧~
            </div>
          </el-tab-pane>
          <el-tab-pane label="我发布的" name="myPostDis">
            <div class="text-right">
              <el-button type="primary" round :icon="EditPen">发布一个新话题</el-button>
            </div>
            <div class="empty" v-if="myPostDis.length === 0">
              你还没有发布任何话题哦，赶快去发布一个吧~
            </div>
          </el-tab-pane>
        </el-tabs>
        <ul v-infinite-scroll="load" class="infinite-list">
          <li v-for="item in checkTabList" :key="item" class="py-3 border border-hex-ccc bg-white my-3 rounded flex items-center justify-around">
            <div>
              <div class="text-xl py-2 text-left ml-2 font-600"> {{ item.title }}</div>
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
    </div>
</template>
<script setup lang="ts">
  import myHeader from '../../components/header.vue'
  import { reactive, ref } from 'vue'
  import { ArrowLeft, EditPen } from "@element-plus/icons-vue";
const count = ref(0)
const load = () => {
  count.value += 2
}
const checkedTab = ref('allDis')
const allDis = ref([
  {title: '五万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
])
const myJoinDis = ref([
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
  {title: '十万个为什么', creatTime: '2022-4-24', creator: 'caojun', count: '100', reply: '10'},
])
const myPostDis = ref([])
const checkTabList = ref()
checkTabList.value = allDis.value
const changeTab = () => {
  if(checkedTab.value === 'allDis') {
    checkTabList.value = allDis.value
  }
  else if(checkedTab.value === 'myJoinDis') {
    checkTabList.value = myJoinDis.value
  }
  else if(checkedTab.value === 'myPostDis') {
    console.log(checkedTab.value)
    checkTabList.value = myPostDis.value
  }
}
import { useRoute, useRouter } from 'vue-router'
const $route = useRoute()
const $router = useRouter()
const back = () => {
  $router.push('/')
}
</script>
<style scoped>
.empty {
  background: url(../../assets/empty.webp) no-repeat;
  background-position: 50% 50%;
  height: 500px;
  color: #aaa;
  line-height: 80px;
}
</style>