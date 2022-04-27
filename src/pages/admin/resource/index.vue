<template>
  <div class="w-full" style="min-height: 650px">
    <my-header></my-header>
    <div
      class="m-4 bg-white rounded p-3"
      style="min-height: 630px; margin-top: 75px"
    >
      <div>
        <span>
          <el-form :inline="true">
            <el-form-item>
              <el-input placeholder="请输入关键字" />
            </el-form-item>
            <el-form-item>
              <el-button>重置</el-button>
              <el-button type="primary" :icon="Search">查询</el-button>
            </el-form-item>
          </el-form>
        </span>
      </div>
      <div class="mt-3">
        <el-table :data="resList">
          <el-table-column
            prop="title"
            label="标题名称"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="grade"
            label="分区"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="subject"
            label="科目"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="tag"
            label="类别"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="type"
            label="文件格式"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="uploadTime"
            label="上传时间"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="limit"
            label="能否下载"
            align="center"
          ></el-table-column>
          <el-table-column prop="action" label="操作" align="center">
            <template #default>
              <el-button type="primary" size="small"><el-icon><edit /></el-icon></el-button>
              <el-button type="danger" size="small"><el-icon><delete /></el-icon></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="example-pagination-block">
        <div class="example-demonstration"></div>
        <el-pagination
        class="justify-center"
          layout="total,sizes, prev, pager, next, jumper"
          :total="resList.length"
          :current-page="currentPage"
          :page-size="pageSize"
          :page-sizes="[1, 2, 5, 10]"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import myHeader from "../header.vue";
import { ref, reactive } from "vue";
import { Search, Delete, Upload,Edit } from "@element-plus/icons-vue";
const addresource = ref(null);
const uploadRes = () => {
  (addresource as any).value.add();
};
const currentPage = ref(1);
const pageSize = ref(5);
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
  pageSize.value = val;
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  currentPage.value = val;
}

const resList = reactive([
  {
    title: "语文文言文必考知识",
    grade: "初中",
    subject: "语文",
    tag: "知识点",
    type: "word",
    uploadTime: "2020-04-16",
    limit: "是",
  },
  {
    title: "语文文言文必考知识",
    grade: "初中",
    subject: "数学",
    tag: "知识点",
    type: "word",
    uploadTime: "2020-04-17",
    limit: "是",
  },
  {
    title: "语文文言文必考知识",
    grade: "初中",
    subject: "英语",
    tag: "知识点",
    type: "word",
    uploadTime: "2020-04-18",
    limit: "是",
  },
  {
    title: "语文文言文必考知识",
    grade: "初中",
    subject: "物理",
    tag: "知识点",
    type: "word",
    uploadTime: "2020-04-19",
    limit: "是",
  },
  {
    title: "语文文言文必考知识",
    grade: "初中",
    subject: "化学",
    tag: "知识点",
    type: "word",
    uploadTime: "2020-04-20",
    limit: "是",
  },
  {
    title: "语文文言文必考知识",
    grade: "初中",
    subject: "生物",
    tag: "知识点",
    type: "word",
    uploadTime: "2020-04-21",
    limit: "是",
  },
  {
    title: "语文文言文必考知识",
    grade: "初中",
    subject: "政治",
    tag: "知识点",
    type: "word",
    uploadTime: "2020-04-22",
    limit: "是",
  },
  {
    title: "语文文言文必考知识",
    grade: "初中",
    subject: "历史",
    tag: "知识点",
    type: "word",
    uploadTime: "2020-04-23",
    limit: "是",
  },
  {
    title: "语文文言文必考知识",
    grade: "初中",
    subject: "地理",
    tag: "知识点",
    type: "word",
    uploadTime: "2020-04-24",
    limit: "是",
  },
  {
    title: "语文文言文必考知识",
    grade: "初中",
    subject: "技术",
    tag: "知识点",
    type: "word",
    uploadTime: "2020-04-25",
    limit: "是",
  },
  {
    title: "语文文言文必考知识",
    grade: "初中",
    subject: "政治",
    tag: "知识点",
    type: "word",
    uploadTime: "2020-04-26",
    limit: "是",
  },
  {
    title: "语文文言文必考知识",
    grade: "初中",
    subject: "历史",
    tag: "知识点",
    type: "word",
    uploadTime: "2020-04-27",
    limit: "是",
  },
  {
    title: "语文文言文必考知识",
    grade: "初中",
    subject: "地理",
    tag: "知识点",
    type: "word",
    uploadTime: "2020-04-28",
    limit: "是",
  },
  {
    title: "语文文言文必考知识",
    grade: "初中",
    subject: "技术",
    tag: "知识点",
    type: "word",
    uploadTime: "2020-04-29",
    limit: "是",
  },
  {
    title: "语文文言文必考知识",
    grade: "初中",
    subject: "政治",
    tag: "知识点",
    type: "word",
    uploadTime: "2020-04-30",
    limit: "是",
  },
]);
</script>
<style scoped>
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>