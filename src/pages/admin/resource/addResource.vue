<template>
  <div class="w-full h-full">                                                                                               
    <my-header></my-header>
    <div class="m-4 bg-white rounded p-5" style="height: 100%">
      <el-form :model="addForm" ref="addForm" class="w-md">
        <el-form-item label="资源名称：">
          <el-input placeholder="请输入资源名称" v-model="addForm.name" />
        </el-form-item>
        <el-form-item label="简介：">
          <el-input type="textarea" placeholder="请输入资源描述" v-model="addForm.desc" :rows="3" />
        </el-form-item>
        <el-form-item label="资源分区：">
          <el-radio-group v-model="addForm.grade">
            <el-radio label="middle">初中</el-radio>
            <el-radio label="high">高中</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="所属科目：">
          <el-select v-model="addForm.subject" placeholder="请选择资源科目">
            <el-option label="语文" value="Chinese" />
            <el-option label="数学" value="math" />
            <el-option label="英语" value="English" />
            <el-option label="物理" value="physics" />
            <el-option label="化学" value="chemistry" />
            <el-option label="生物" value="biology" />
            <el-option label="地理" value="geography" />
            <el-option label="历史" value="history" />
            <el-option label="政治" value="politics" />
          </el-select>
        </el-form-item>
        <el-form-item label="资源类别：">
          <el-select v-model="addForm.tag" placeholder="请选择资源类别">
            <el-option label="知识点" value="Chinese" />
            <el-option label="试题试卷" value="math" />
            <el-option label="课件" value="English" />
            <el-option label="音视频" value="physics" />
            <el-option label="讲义" value="chemistry" />
            <el-option label="试卷" value="geography" />
          </el-select>
        </el-form-item>
        <el-form-item label="是否支持下载：">
          <el-radio-group v-model="addForm.limit">
            <el-radio label="yes">是</el-radio>
            <el-radio label="no">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="封面：">
          <el-upload class="avatar-uploader">
            <img v-if="false" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="文件：">
          <el-upload>
            <el-button type="success">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button @click="cancel">重置</el-button>
          <el-button type="primary" @click="confirm">确定上传</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue'
import myHeader from '../header.vue'
  const addForm = reactive({})
  import { Plus } from '@element-plus/icons-vue'
</script>
<style scoped>
.avatar-uploader {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
<style scoped>
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
} 

.avatar-uploader {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
