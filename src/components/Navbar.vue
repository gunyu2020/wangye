<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/about">关于我们</el-menu-item>
      <el-menu-item index="/services">服务介绍</el-menu-item>
      <el-menu-item index="/apply">申请页面</el-menu-item>
      <el-menu-item index="/faq">常见问题</el-menu-item>
      <el-menu-item index="/contact">联系我们</el-menu-item>
      <el-menu-item index="/login" v-if="!isLoggedIn">登录</el-menu-item>
      <el-menu-item index="/profile" v-if="isLoggedIn">个人资料</el-menu-item>
      <el-menu-item index="/logout" v-if="isLoggedIn">登出</el-menu-item>
    </el-menu>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { useUserStore } from '../stores/user';
  
  const router = useRouter();
  const route = useRoute();
  const activeIndex = ref(route.path);
  const userStore = useUserStore();
  
  const isLoggedIn = userStore.isLoggedIn;
  
  function handleSelect(index) {
    if (index === '/logout') {
      userStore.logout();
      router.push('/');
    } else {
      router.push(index);
    }
  }
  </script>
  
  <style scoped>
  .el-menu-demo {
    background-color: #333;
    color: #fff;
  }
  .el-menu-demo .el-menu-item {
    color: #fff;
  }
  .el-menu-demo .el-menu-item.is-active {
    background-color: #409EFF;
    color: #fff;
  }
  </style>