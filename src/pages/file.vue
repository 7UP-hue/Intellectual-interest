<template>
  <div class="bg-white-100">
    <div flex-row>
      <div class="p-3 bg-white border flex justify-between">
        这是资料展示页面
        <span><el-button type="primary" plain>下载</el-button></span>
      </div>
      <div class="w-100% h-200px text-center border">资料主体</div>
      <div class="mt-2">留言板</div>
      <div>
        <div style="margin: 20px 0" />
        <el-input
          v-model="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
          maxlength="100"
          show-word-limit
          placeholder="发表一条友善的评论吧！"
        />
      </div>
      <div class="mt-1 text-right"> <el-button type="primary">发表评论</el-button></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const textarea = ref('')

</script>