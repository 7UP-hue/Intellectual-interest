<template>
  <my-header></my-header>
  <div class="mx-50 p-3 bg-white common-layout">
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
        <el-aside width="200px">
          <div class="mt-4">
            <!-- <el-row :gutter="1"> -->
            <el-col :span="30">
              <el-tabs type="card">
                <el-tab-pane label="初中">
                  <el-menu class="border" background-color="rgb(245,247,250)">
                    <el-menu-item index="1" class="flex justify-between">
                      <span>语文</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="1" class="flex justify-between">
                      <span>数学</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="1" class="flex justify-between">
                      <span>英语</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="1" class="flex justify-between">
                      <span>物理</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="1" class="flex justify-between">
                      <span>化学</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="1" class="flex justify-between">
                      <span>生物</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="1" class="flex justify-between">
                      <span>地理</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="1" class="flex justify-between">
                      <span>历史</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="1" class="flex justify-between">
                      <span>政治</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                  </el-menu>
                </el-tab-pane>
                <el-tab-pane label="高中">
                  <el-menu class="border" background-color="rgb(245,247,250)">
                    <el-menu-item index="1" class="flex justify-between">
                      <span>语文</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="1" class="flex justify-between">
                      <span>数学</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="1" class="flex justify-between">
                      <span>英语</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="1" class="flex justify-between">
                      <span>物理</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="1" class="flex justify-between">
                      <span>化学</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="1" class="flex justify-between">
                      <span>生物</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="1" class="flex justify-between">
                      <span>地理</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="1" class="flex justify-between">
                      <span>历史</span>
                      <el-icon><ArrowRight /></el-icon>
                    </el-menu-item>
                    <el-menu-item index="1" class="flex justify-between">
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
        <el-container>
          <el-main>
            <div class="flext">
              <div class="flex">
                <el-col :span="15">
                  <div class="block rounded" style="height: 300px">
                    <el-carousel :interval="4000" class="rounded">
                      <el-carousel-item
                        v-for="(item, index) in imgUrl"
                        :key="index"
                      >
                        <img :src="item" />
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-col>
                <el-col :span="9">
                  <div
                    class="
                      flex-row
                      p-3
                      ml-4
                      items-center
                      rounded
                      border-gray-200 border
                    "
                    style="height: 300px"
                  >
                    <div class="flex justify-around">
                      <div>
                        <span class="text-sm mt-1 px-1">
                          <el-icon><user /></el-icon>
                        </span>
                        <span class="font-middle mx-auto"> 总访客: 46464 </span>
                      </div>
                      <div>
                        <span class="text-sm mt-1 px-1">
                          <el-icon><user /></el-icon>
                        </span>
                        <span class="font-middle mx-auto">
                          今日访客: 46464
                        </span>
                      </div>
                    </div>
                  </div>
                </el-col>
              </div>
              <div class="bg-gray-200 mt-3 rounded border-gray-300">
                为你推荐
              </div>
              <div
                class="
                  flex
                  justify-between
                  text-left
                  mt-2
                  pt-2
                  pl-2
                  bg-gray-100
                  border
                  rounded
                  border-gray-300
                "
              >
                <div class="flex">
                  <div class="text-6xl" style="color: rgb(121, 187, 255)">
                    <el-icon><notebook /></el-icon>
                  </div>
                  <div class="flex-row ml-2">
                    <div class="font-semibold">语文知识点PPT</div>
                    <div class="font-semibold mt-4 text-sm">2022年4月2日</div>
                  </div>
                </div>
                <div class="ml-2 pt-3.5 mr-3">
                  <el-button type="Info" @click="this.$router.push('/login')"
                    >查看</el-button
                  >
                </div>
              </div>
              <div
                class="
                  flex
                  justify-between
                  text-left
                  mt-2
                  pt-2
                  pl-2
                  bg-gray-100
                  border
                  rounded
                  border-gray-300
                "
              >
                <div class="flex">
                  <div class="text-6xl" style="color: rgb(121, 187, 255)">
                    <el-icon><video-play /></el-icon>
                  </div>
                  <div class="flex-row ml-2">
                    <div class="font-semibold">好康的视频</div>
                    <div class="font-semibold mt-4 text-sm">2022年4月3日</div>
                  </div>
                </div>
                <div class="ml-2 pt-3.5 mr-3">
                  <el-button type="Info" @click="this.$router.push('/login')"
                    >查看</el-button
                  >
                </div>
              </div>
              <div
                class="
                  flex
                  justify-between
                  text-left
                  mt-2
                  pt-2
                  pl-2
                  bg-gray-100
                  border
                  rounded
                  border-gray-300
                "
              >
                <div class="flex">
                  <div class="text-6xl" style="color: rgb(121, 187, 255)">
                    <el-icon><tickets /></el-icon>
                  </div>
                  <div class="flex-row ml-2">
                    <div class="font-semibold">有趣的资料</div>
                    <div class="font-semibold mt-4 text-sm">2022年4月2日</div>
                  </div>
                </div>
                <div class="ml-2 pt-3.5 mr-3">
                  <el-button type="Info" @click="this.$router.push('/login')"
                    >查看</el-button
                  >
                </div>
              </div>
            </div>
          </el-main>
        </el-container>
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

// import { reactive } from 'vue'
import { reactive, ref } from "vue";
// export default {
// name: 'home',
// data () {
//   return {
//       img:[
//         {imgersssd:require("../assets/1.png")},
//         {imgersssd:require("../assets/2.png")},
//         {imgersssd:require("../assets/3.png")},
//         {imgersssd:require("../assets/4.png")},
//       ]
//   }
// },
const imgUrl = reactive([
  "/assets/1.png",
  "/assets/2.png",
  "/assets/3.png",
  "/assets/4.png",
]);
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
