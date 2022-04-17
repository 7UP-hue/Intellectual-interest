<template>
  <div class="w-full" style="min-height: 650px">
    <my-header></my-header>
    <div
      class="m-4 bg-white rounded p-5"
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
        <el-form-item label="简介：" prop="desc">
          <el-input
            type="textarea"
            placeholder="请输入资源描述"
            maxlength="100"
            show-word-limit
            v-model="ruleForm.desc"
            :rows="3"
          />
        </el-form-item>
        <el-form-item label="资源分区：" prop="grade">
          <el-radio-group v-model="ruleForm.grade">
            <el-radio label="middle">初中</el-radio>
            <el-radio label="high">高中</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="所属科目：" prop="subject">
          <el-select v-model="ruleForm.subject" placeholder="请选择资源科目">
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
        <el-form-item label="资源类别：" prop="tag">
          <el-select v-model="ruleForm.tag" placeholder="请选择资源类别">
            <el-option label="知识点" value="Chinese" />
            <el-option label="试题试卷" value="math" />
            <el-option label="课件" value="English" />
            <el-option label="音视频" value="physics" />
            <el-option label="讲义" value="chemistry" />
            <el-option label="试卷" value="geography" />
          </el-select>
        </el-form-item>
        <el-form-item label="是否支持下载：" prop="limit">
          <el-radio-group v-model="ruleForm.limit">
            <el-radio label="yes">是</el-radio>
            <el-radio label="no">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="封面：" prop="fileCover">
          <el-upload  action="#" list-type="picture-card" :auto-upload="false" :on-remove="handleRemoveCover" :file-list="imgFileList">
            <el-icon><Plus /></el-icon>
          </el-upload>

          <el-dialog v-model="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-form-item>
        <el-form-item label="文件：" prop="userFile" ref="userFile">
          <el-upload
            action="#"
            :on-remove="handleRemove"
             multiple
            :limit="1"
            :auto-upload="false"
            :on-exceed="handleExceed"
            :before-remove="beforeRemove"
            :file-list="fileList"
            class="text-left w-500px"
            :on-change="fileChange"
          >
            <el-button type="primary">点击上传</el-button>
            <template #tip>
              <div class="mt-2 text-8px">小提示：上传的文件大小不能超过1GB哟！</div>
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
import type {
  FormInstance,
  UploadProps,
  UploadUserFile,
  Action,
} from "element-plus";
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const disabled = ref(false);
const imgFileList = ref<UploadUserFile[]>([]);
const handleRemoveCover: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}
const ruleForm = reactive({
  title: "",
  desc: "",
  grade: "",
  subject: "",
  tag: "",
  limit: "",
  userFile: "",
});
const ruleFormRef = ref<FormInstance>();
const validatePass = (rule: any, value: any, callback: any) => {
  if (fileList.value.length === 0) {
    callback(new Error("请上传文件"));
  } else {
    callback();
  }
};
const userFile = ref()
const fileChange = () => {
  if(fileList.value.length > 0) {
    userFile.value.clearValidate()//上传成功去除校验
  }
  else {
    userFile.value.validate()
  }
}
const rules = reactive({
  title: [{ required: true, message: "请输入资源名称", trigger: "blur" }],
  desc: [{ required: false, message: "请输入资源描述", trigger: "blur" }],
  grade: [{ required: true, message: "请选择资源分区", trigger: "change" }],
  subject: [{ required: true, message: "请选择资源科目", trigger: "change" }],
  tag: [{ required: true, message: "请选择资源类别", trigger: "change" }],
  limit: [{ required: true, message: "请选择是否支持下载", trigger: "change" }],
  userFile: [{ trigger: "change",  validator: validatePass}]
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

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("上传成功！");
    } else {
      console.log("上传失败，请重试！");
    }
  });
};
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
