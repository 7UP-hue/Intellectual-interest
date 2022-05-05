<template>
  <div class="w-full" style="min-height: 650px">
    <my-header></my-header>
    <div
      class="m-4 bg-white rounded p-5 pl-20"
      style="min-height: 630px; margin-top: 75px"
    >
      <el-form
       
        :model="ruleForm"
        ref="ruleFormRef"
        class="w-md"
        :rules="rules"
        label-width="120px"
        label-position="left"
      >
        <el-form-item label="资源名称：" prop="title">
          <el-input placeholder="请输入资源名称" v-model="ruleForm.title" />
        </el-form-item>
        <el-form-item label="资源分区：" prop="level">
          <el-radio-group v-model="ruleForm.level">
            <el-radio :label="0">初中</el-radio>
            <el-radio :label="1">高中</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="所属科目：" prop="subject">
          <el-select v-model="ruleForm.file_subject" placeholder="请选择资源科目">
            <el-option label="物理" value="physics" />
            <el-option label="化学" value="chemistry" />
            <el-option label="生物" value="biology" />
          </el-select>
        </el-form-item>
        <el-form-item label="资源类别：" prop="type">
          <el-select v-model="ruleForm.type" placeholder="请选择资源类别">
            <el-option label="文档" value="text" />
            <el-option label="视频" value="video" />
          </el-select>
        </el-form-item>
        <el-form-item label="是否支持下载：" prop="limit">
          <el-radio-group v-model="ruleForm.limit">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="文件：" prop="file" ref="file">
          <el-upload
            :on-remove="handleRemove"
             multiple
            :limit="1"
            :before-upload="beforeUpload"
            :auto-upload="false"
            :on-exceed="handleExceed"
            :before-remove="beforeRemove"
            :file-list="fileList"
            class="text-left w-500px"
            :on-change="fileChange"
          >
          <template #trigger>
                <el-button type="primary">选择文件</el-button>
          </template>
            <template #tip>
              <div class="mt-2 text-8px">小提示：上传的文件大小不能超过200MB哟！</div>
            </template>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >确定上传</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import myHeader from "../header.vue";
import { Delete, Download, Plus, ZoomIn } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";
import "element-plus/theme-chalk/index.css";
import { upload } from '@/api/file';
import axios from 'axios';
import type {
  FormInstance,
  UploadProps,
  UploadUserFile,
  UploadInstance,
  Action,
} from "element-plus";

const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const disabled = ref(false);
const imgFileList = ref<UploadUserFile[]>([]);
const handleRemoveCover: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}
const ruleFormRef = ref<FormInstance>();
const validatePass = (rule: any, value: any, callback: any) => {
  if (fileList.value.length === 0) {
    callback(new Error("请上传文件"));
  } else {
    callback();
  }
};
const file = ref()
const fileChange = () => {
  if(fileList.value.length > 0) {
    file.value.clearValidate()//上传成功去除校验
  }
  else {
    file.value.validate()
  }
}
const rules = reactive({
  title: [{ required: true, message: "请输入资源名称", trigger: "blur" }],
  level: [{ required: true, message: "请选择资源分区", trigger: "change" }],
  file_subject: [{ required: true, message: "请选择资源科目", trigger: "change" }],
  type: [{ required: true, message: "请选择资源类别", trigger: "change" }],
  limit: [{ required: true, message: "请选择是否支持下载", trigger: "change" }],
  // file: [{ trigger: "change",  validator: validatePass}]
});
//上传文件的方法
const fileList = ref<UploadUserFile[]>([]);

const handleRemove: UploadProps["onRemove"] = (file, uploadFiles) => {
  console.log(file, uploadFiles);
};

const handleExceed: UploadProps["onExceed"] = (files, uploadFiles) => {
  ElMessage.warning(`只能上传 ${files.length} 个文件哟！`);
};

const beforeRemove: UploadProps["beforeRemove"] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(`确认取消上传 ${uploadFile.name} ?`).then(
    () => true,
    () => false
  );
};

let ruleForm = reactive({
  title: "",//标题
  level: 0,//年级：初中0高中1
  file_subject: "",//科目
  type: "",//文件类型
  limit: 1,//是否支持下载
  file: FileList,//文件
});
const submitForm = async(formEl: FormInstance | undefined) => {
  // console.log(ruleForm);
  // console.log(fileList.value);
  // ruleForm.file = fileList.value
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      upload({
        title: ruleForm.title,
        level: ruleForm.level,
        file_subject: ruleForm.file_subject,
        type: ruleForm.type,
        limit: ruleForm.limit,
        file: ruleForm.file,
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    }
  })
}
let file_topic = ref('')
let file_type = ref('')
let ifCan_download = ref(true)
let file_subject = ref('')
let level = ref(-1)
const beforeUpload = (file:any) => {
    console.log(file)
    console.log(file.size/1024/1024);
    file_topic.value = ruleForm.title
    file_type.value = ruleForm.type
    file_subject.value = ruleForm.file_subject
    ifCan_download.value = Boolean(ruleForm.limit)
    level.value = ruleForm.level
    let fd = new FormData()
    fd.append('file', file)
    console.log('111111')
    axios.post(`http://localhost:8090/upload?file_topic=${file_topic.value}&file_type=${file_type.value}&ifCan_download=${ifCan_download.value}&file_subject=${file_subject.value}&level=${level.value}`, 
              fd,
              {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
              ).then(res => {
                    console.log(res)
    })
    }
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  fileList.value=[];
  imgFileList.value=[];

};
</script>
<style scoped>
.avatar-uploader {
  width: 178px;
  height: 178px;
  display: block;
}
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
