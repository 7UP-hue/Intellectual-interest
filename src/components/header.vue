<template>
  <div class="bg-white border-b">
    <div class="header w-1073px mx-auto flex justify-between py-2">
      <span class="logo font-extrabold text-xl">智趣科普</span>
      <span class="login">
        <el-button
          type="text"
          @click="this.$router.push('/login')"
        >
          登录
        </el-button> <span class="text-gray-500">/</span>
        <el-button
          type="text"
          style="margin-left: .3em; color: #666"
          @click="this.$router.push('/register')"
        >
          注册
        </el-button>
      </span>
    </div>
  </div>
</template>
