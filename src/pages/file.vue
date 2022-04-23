<template>
  <my-header></my-header>
  <div class="w-872px mx-auto mt-3" style="position: relative">
    <div
      class="p-5 bg-white rounded w-240px text-left"
      style="position: absolute; top: 0; right: -256px"
    >
      <div class="text-18px font-600">初中文言文重点知识大全</div>
      <div
        class="py-3 mt-5 border-b flex justify-between text-13px text-hex-999"
      >
        <span>访问量</span>
        <span>12423</span>
      </div>
      <div class="py-3 border-b flex justify-between text-13px text-hex-999">
        <span>下载量</span>
        <span>2423</span>
      </div>
      <div class="py-3 border-b flex justify-between text-13px text-hex-999">
        <span>页数</span>
        <span>24页</span>
      </div>
      <div class="text-center mt-5">
        <el-button type="primary" plain size="large">下载</el-button>
      </div>
    </div>
    <div class="border rounded mt-3 bg-white">
      <div
        class="h-1020px"
        style="
          background: url(/images/427f71cac5da50e2524d7ff8.png);
          background-size: 100%;
        "
      ></div>
      <div
        class="h-1020px"
        style="
          background: url(/images/427f71cac5da50e2524d7ff8.png);
          background-size: 100%;
        "
      ></div>
    </div>
    <div class="bg-white mt-4 text-left p-4 px-6">
      <div class="border-b pb-3 font-600">
        全部{{ commentList.length }}条评论
      </div>
      <div class="mt-5">
        <el-input
          v-model="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
          maxlength="100"
          show-word-limit
          placeholder="发表一条友善的评论吧！"
        />
        <div class="mt-3 text-right">
          <el-button type="primary">发表评论</el-button>
        </div>
      </div>
      <div class="mt-7 border-t">
        <div
          v-for="item in commentList"
          class="border-b py-4 text-13px"
          :key="item"
        >
          <div
            style="
              background-color: rgb(192, 211, 251);
              border-radius: 12px;
              float: left;
            "
            class="h-24px w-24px text-white text-2xl"
          >
            <el-icon><user-filled /></el-icon>
          </div>
          <div class="ml-8">
            <div class="flex justify-between">
              <span>{{ item.name }}</span>
              <span class="ml-3 text-hex-999">{{ item.time }}</span>
            </div>
            <div class="flex justify-between">
              <div class="mt-3">{{ item.content }}</div>
              <div class="mr-2 mt-2">
                <el-button
                  type="danger"
                  :icon="Delete"
                  circle
                  plain
                  size="small"
                  @click="dialogVisible = true"
                />
              </div>
            </div>
            <el-dialog
              v-model="dialogVisible"
              title="提示"
              width="30%"
            >
              <span>是否确定删除这条留言</span>
              <template #footer>
                <span class="dialog-footer">
                  <el-button @click="dialogVisible = false">取消</el-button>
                  <el-button type="primary" @click="dialogVisible = false"
                    >确认</el-button
                  >
                </span>
              </template>
            </el-dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
const textarea = ref("");
import { ElMessageBox } from "element-plus";
import myHeader from "../components/header.vue";
import { UserFilled, Delete } from "@element-plus/icons-vue";
const commentList = reactive([
  {
    name: "小明",
    content: "很不错的资料",
    time: "2022.03.03 12:32",
  },
  {
    name: "小明",
    content: "很不错的资料",
    time: "2022.03.03 12:32",
  },
  {
    name: "小明",
    content: "很不错的资料",
    time: "2022.03.03 12:32",
  },
]);
const dialogVisible = ref(false);

</script>