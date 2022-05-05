<template>
  <el-upload
    action=""
    :before-upload="beforeUpload"
    :file-list="fileList"
  >
    <el-button type="primary">Click to upload</el-button>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
  </el-upload>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import axios from 'axios'
import type { UploadProps, UploadUserFile } from 'element-plus'

const fileList = ref<UploadUserFile[]>([
])
let file_topic = ref('')
let file_type = ref('')
let ifCan_download = ref(true)
let file_subject = ref('')
let level = ref(-1)
const beforeUpload = (file:any) => {
    console.log(file)
    console.log(file.size/1024/1024);
    
    file_topic.value = 'exam'
    file_type.value = 'vedio'
    file_subject.value = 'math'
    level.value = 0
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
const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfert of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  )
}
</script>