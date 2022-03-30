<template>
  <div class="p-5">
    <el-button>Default</el-button>
    <el-button :icon="Search" circle />
  </div>
</template>

<script lang="ts" setup>
import {
  Search
} from '@element-plus/icons-vue'
</script>