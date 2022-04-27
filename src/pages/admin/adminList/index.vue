<template>
  <div class="w-full" style="min-height: 650px">
    <my-header></my-header>
    <div
      class="m-4 bg-white rounded p-3"
      style="min-height: 635px; margin-top: 75px"
    >
      <div class="flex justify-around">
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
        <span>
          <el-button :icon="Plus" type="primary" @click="newAdmin"
            >新增</el-button
          >
        </span>
      </div>
      <div class="mt-3">
        <el-table :data="adminList">
          <el-table-column
            prop="adminName"
            label="用户名"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="adminPsd"
            label="密码"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="createTime"
            label="创建时间"
            align="center"
          ></el-table-column>
          <el-table-column prop="action" label="操作" align="center">
            <template #default>
              <el-button type="success" size="small" plain
                >设为管理员</el-button
              >
              <el-button type="danger" size="small">删除</el-button>
              <el-button type="warning" size="small" @click="changePsd()"
                >修改密码</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="example-pagination-block">
        <div class="example-demonstration"></div>
        <el-pagination
          class="justify-center"
          layout="total,sizes, prev, pager, next, jumper"
          :total="adminList.length"
          :current-page="currentPage"
          :page-size="pageSize"
          :page-sizes="[1, 2, 5, 10]"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
    <edit-psd ref="editpsd"></edit-psd>
    <add-admin ref="addadmin"></add-admin>
  </div>
</template>
<script lang="ts" setup>
import myHeader from "../header.vue";
import editPsd from "../mixin/editPsd.vue";
import addAdmin from "./addAdmin.vue";
import { ref } from "vue";
import { Search, Delete, Upload, Plus } from "@element-plus/icons-vue";
const editpsd = ref(null);
const currentPage = ref(1);
const pageSize = ref(5);
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
  pageSize.value = val;
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
  currentPage.value = val;
};

const changePsd = () => {
  (editpsd as any).value.edit();
};
const addadmin = ref(null);
const newAdmin = () => {
  (addadmin as any).value.add();
};
import { reactive } from "vue";
const adminList = reactive([
  { adminName: "张三", adminPsd: "123456", createTime: "2021.03.04" },
  { adminName: "李四", adminPsd: "123456", createTime: "2021.03.04" },
  { adminName: "王五", adminPsd: "123456", createTime: "2021.03.04" },
  { adminName: "赵六", adminPsd: "123456", createTime: "2021.03.04" },
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