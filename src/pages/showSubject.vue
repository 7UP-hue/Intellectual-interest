<template>
  <div>
    <div class="flext">
      <div class="flex">
        <el-col :span="15">
          <div class="block rounded" style="height: 300px">
            <el-carousel :interval="4000" class="rounded">
              <el-carousel-item v-for="(item, index) in imgUrl" :key="index">
                <img :src="item" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-col>
        <el-col :span="9">
          <div
            class="flex-row p-3 ml-4 items-center rounded border-gray-200 border"
            style="height: 300px"
          >
            <div class="flex mt-2 pb-4 border-b-1">
              <div class="flex-1">
                总访客量
                <div class="text-2xl" style="color: rgb(254,180,4)">278</div>
              </div>
              <div class="border-l-1 flex-1">
                今日访客量
                <div class="text-2xl" style="color: rgb(254,180,4)">344</div>
              </div>
            </div>
            <div class="flex mt-4 pb-4 border-b-1">
              <div class="flex-1">
                总资料数
                <div class="text-2xl" style="color: rgb(254,92,49)">2347</div>
              </div>
              <div class="border-l-1 flex-1">
                今日更新资料数
                <div class="text-2xl" style="color: rgb(254,92,49)">1244</div>
              </div>
            </div>
            <div class="flex mt-6 text-sm">
              <div class="flex-1">
                <div class="text-2xl" style="color: rgb(254,65,56)"><el-icon><shop /></el-icon></div>
                加入班级
              </div>
              <div class="flex-1">
                <div class="text-2xl" style="color: rgb(34,163,247)"><el-icon><tickets /></el-icon></div>
                新教材
              </div>
              <div class="flex-1">
                <div class="text-2xl" style="color: rgb(254,180,4)"><el-icon><sunrise /></el-icon></div>
                加入我们
              </div>
              <div class="flex-1">
                <div class="text-2xl" style="color: rgb(253,144,84"><el-icon><help-filled /></el-icon></div>
                帮助中心
              </div>
            </div>
          </div>
        </el-col>
      </div>
      <div class="mt-7 border-t">
        <div class="text-left px-5 py-3 text-hex-22A3F7">为你推荐</div>
        <div class="flex justify-around">
          <span class="rec_item h-153px w-108px border p-1" v-for="item in recommend" :key=item @click="showDetail">
            <img :src=item.url>
            <div class="text-xs mt-3 text-left">{{item.title}}</div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { User } from "@element-plus/icons-vue";
import { ChatDotSquare } from "@element-plus/icons-vue";
import { VideoPlay } from "@element-plus/icons-vue";
import { Notebook } from "@element-plus/icons-vue";
import { Tickets, Shop, Ticket, Sunrise, HelpFilled } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
const $route = useRoute()
const $router = useRouter()
const imgUrl = reactive([
  "/assets/1.png",
  "/assets/2.png",
  "/assets/3.png",
  "/assets/4.png",
]);
const showDetail = () => { 
  $router.push({name: 'File'})
  
}
const recommend = reactive([
  {
    url:'/images/427f71cac5da50e2524d7ff8.png',
    title: '文言文重点知识'
  },
  {
    url:'/images/427f71cac5da50e2524d7ff8.png',
    title: '文言文重点知识'
  },
  {
    url:'/images/c35e032a312b3169a451a4f8.png',
    title: '文言文重点知识'
  },
  {
    url:'/images/427f71cac5da50e2524d7ff8.png',
    title: '文言文重点知识'
  },
  {
    url:'/images/c35e032a312b3169a451a4f8.png',
    title: '文言文重点知识'
  },
  {
    url:'/images/c35e032a312b3169a451a4f8.png',
    title: '文言文重点知识'
  }
])
</script>
<style scoped>
.el-carousel__item h2 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  width: 100%;
  height: 100%;
}
</style>