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
                <span class="font-middle mx-auto"> 今日访客: 46464 </span>
              </div>
            </div>
            <div class="flex mt-4 pb-4 border-b-1">
              <div class="flex-1">
                今日更新资料数
                <div class="text-2xl" style="color: rgb(254,92,49)">2347</div>
              </div>
              <div class="border-l-1 flex-1">
                昨日更新资料数
                <div class="text-2xl" style="color: rgb(254,92,49)">1244</div>
              </div>
            </div>
            <div class="flex mt-4 text-sm">
              <div class="flex-1">
                <div class="text-2xl" style="color: rgb(254,65,56)"><el-icon><shop /></el-icon></div>
                有奖竞猜
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
            <div class="flex mt-4 text-sm">
              <div class="flex-1">
                <div class="text-2xl" style="color: rgb(254,65,56)"><el-icon><shop /></el-icon></div>
                有奖竞猜
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
      <div class="bg-gray-200 mt-3 rounded border-gray-300">为你推荐</div>
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
          <el-button type="Info" @click="this.$router.push('/home/file')"
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
  </div>
</template>
<script lang="ts" setup>
import { User } from "@element-plus/icons-vue";
import { ChatDotSquare } from "@element-plus/icons-vue";
import { VideoPlay } from "@element-plus/icons-vue";
import { Notebook } from "@element-plus/icons-vue";
import { Tickets, Shop, Ticket, Sunrise, HelpFilled } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
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