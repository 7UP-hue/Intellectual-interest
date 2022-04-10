<template>
  <div class="Container pt-36">
    <div class="mx-auto w-md p-8 rounded-lg Login">
      <div class="somethingFun">
        <div :class="{eyes: true, eyesAfter: !show_down}"></div>
        <div :class="{ armUpRight: true, armUpRightAfter: !show_down}"></div>
        <div :class="{ armUpLeft: true, armUpLeftAfter: !show_down}"></div>
        <div :class="{armDownRight: true, armDownRightAfter: !show_down}"></div>
        <div :class="{armDownLeft: true, armDownLeftAfter: !show_down}"></div>
      </div>
      <div>
        <el-form
          style="max-width: 460px"
          :model="regForm"
          :rules="rules"
          ref="regFormRef"
        >
          <el-form-item prop="userName">
            <el-input v-model="regForm.userName" placeholder="用户名" :prefix-icon="User"/>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input @focus="changeArm(1)" @blur="changeArm(0)" v-model="regForm.pass" placeholder="请输入密码" :prefix-icon="Unlock" type="password" show-password />
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input @focus="changeArm(1)" @blur="changeArm(0)" v-model="regForm.checkPass" placeholder="请确认密码" :prefix-icon="Unlock" type="password" show-password />
          </el-form-item>
          <div>
            <el-button type="text" @click="this.$router.push('/login')">已有账号，点此登录</el-button>
            <el-button type="primary">注册</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import {
    Avatar,User,Unlock
  } from '@element-plus/icons-vue'
  import { reactive, ref } from 'vue'
  import type { FormInstance } from 'element-plus'
  const regFormRef = ref<FormInstance>()
  const regForm = reactive({
    userName: '',
    pass: '',
    checkPass: ''
  })
  const show_down = ref(true)
  const changeArm = (flag) =>  {
    if( flag===1 ) {
      show_down.value = false
    }
    else {
      show_down.value = true
    }
  }
  const validateName = (rule: any, value: any, callback: any) => {
    if(value === '') {
      callback(new Error('用户名不能为空！'))
    } else {
      callback()
    }
  }
  const validatePass = (rule: any, value: any, callback: any) => {
    if(value === '') {
      callback(new Error('密码不能为空！'))
    } else {
      if(regForm.checkPass !== '') {
        if(!regFormRef.value) return 
        regFormRef.value.validateField('checkPass',() => null)
      }
      callback()
    }
  }
  const validatePass2 = (rule: any, value: any, callback: any) => {
    if(value === '') {
      callback(new Error('请再次输入密码'))
    } else if (value !== regForm.pass) {
      callback(new Error("两次输入不一致！"))
    } else {
      callback()
    }
  }
  const rules = reactive({
    userName: [{validator: validateName, trigger: 'blur'}],
    pass: [{validator: validatePass, trigger: 'blur'}],
    checkPass: [{validator: validatePass2, trigger: 'blur'}],
  })
</script>
<style scoped>
.Container {
  width: 100%;
  height: 100vh;
  background: url('../assets/bg-img.jpg');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100%;
}
.Login {
  position: relative;
  background-color: rgba(197,196,238, 0.5);
}
.somethingFun {
  position: absolute;
  background: url('../images/face.png');
  background-size: 140%;
  background-position: -22px 0;
  width: 116px;
  height: 92px;
  top: -82px;
  left: 50%;
  margin-left: -64px;
}
.armUpRight {
  position: absolute;
  background: url('../images/arm-up-right.png');
  background-size: 110%;
  background-position: 0 30px;
  width: 52px;
  height: 64px;
  bottom: 5px;
  right: 5px;
  opacity: 0;
  background-repeat: no-repeat;
  transform: translateX(47px) scale(.5);
  transform-origin: 0 40px;
  transition: background-position .3s ease-out,
              transform .3s ease-out,
              opacity 0s linear .3s;
}
.armUpRightAfter {
  opacity: 1;
  transform: scale(1);
  background-position: 0 0;
  transition: background-position .3s ease-out,
              transform .3s ease-out;
}
.armUpLeft {
  position: absolute;
  background: url('../images/arm-up-left.png');
  background-size: 110%;
  width: 52px;
  height: 64px;
  bottom: 4px;
  left: 15px;
  opacity: 0;
  background-position: 0 10px;
  background-repeat: no-repeat;
  transform: translateX(-27px) translateY(7px) scale(.5);
  transform-origin: 0 40px;
  transition: background-position .3s ease-out,
              transform .3s ease-out,
              opacity 0s linear .3s;
}
.armUpLeftAfter {
  opacity: 1;
  left: 0px;
  transform: scale(1);
  background-position: -5px 0px;
  transition: background-position .3s ease-out,
              transform .3s ease-out;
}
.armDownRight {
  position: absolute;
  background: url(../images/arm-down-right.png);
  background-size: 100%;
  width: 46px;
  height: 59px;
  bottom: -24px;
  right: -19px;
  transition: transform .3s ease-out;
  opacity: 1;
}
.armDownRightAfter {
  opacity: 0;
  transform: translateX(-32px) scale(0) translateY(-8px);
  transition: transform .3s ease-out;
}
.armDownLeft {
  position: absolute;
  background: url(../images/arm-down-left.png);
  background-size: 100%;
  width: 46px;
  height: 59px;
  bottom: -26px;
  left: -16px;
  transition: transform .3s ease-out;
  opacity: 1;
}
.armDownLeftAfter {
  opacity: 0;
  transform: translateX(32px) scale(0) translateY(-8px);
  transition: transform .3s ease-out;
}
.eyes {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(../images/eyes.png);
  background-size: 140%;
  background-position: -22px 0;
  opacity: 0;
  transition: opacity .3s ease-out;
}
.eyesAfter {
  opacity: 1;
}
</style>