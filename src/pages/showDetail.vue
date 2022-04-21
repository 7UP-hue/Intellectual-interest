<template>
  <div>
    <div class="text-left">
      <span>文件类型</span>
      <el-select v-model="value" class="m-2" placeholder="默认" size="large" :filter-method="selectMethod">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
    </el-select>
    </div>
    <!-- 展示列表 -->
    <div v-for="(item, index) in subjectList" :key="index" 
      class="
        flex
        justify-between
        text-left
        m-2
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
          <div class="font-semibold">{{item.subjectName}}</div>
          <div class="font-semibold mt-4 text-sm">{{item.subjectTime}}</div>
        </div>
        <div class="text-xs ml-3">{{item.subjectType}}</div>
      </div>
      <div class="ml-2 pt-3.5 mr-3">
        <el-button type="Info" @click="this.$router.push('/file')"
          >查看</el-button
        >
      </div>
    </div> 
  </div>
</template>
<script lang="ts" setup>
import { User } from "@element-plus/icons-vue";
import { ChatDotSquare } from "@element-plus/icons-vue";
import { VideoPlay } from "@element-plus/icons-vue";
import { Notebook } from "@element-plus/icons-vue";
import { Tickets } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
const $route = useRoute()
const $router = useRouter()
const subjectList = reactive(
    [
    {
      subjectName: "语文知识点PPT",
      subjectType: "文档",
      subjectTime: "2022年4月2日",
     
    },
    {
      subjectName: "好康的视频",
      subjectType: "视频",
      subjectTime: "2022年4月3日",
      
    },
    {
      subjectName: "有趣的资料",
      subjectType: "文档",
      subjectTime: "2022年4月2日",
      
    }
  ]
);
const value = ref('')
const options = [
  {
    value: '文档',
    label: '文档',
  },
  {
    value: '视频',
    label: '视频',
  }
]
</script>