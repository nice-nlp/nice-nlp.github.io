<template>
  <div id="app">
    <el-container>
      <el-header>
        <div style="display: flex;">
          <img src="@/assets/image/logo.png" width="77px" height="54px"/>
          <el-menu default-active="1" class="el-menu-demo" mode="horizontal" background-color="#fff"
                 active-text-color="#fbb675">
            <el-menu-item><router-link to="/home">主页</router-link></el-menu-item>
            <el-menu-item><router-link to="/members">成员</router-link></el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
      
    }
};
</script>

<style src="@/style/appstyle.css" scoped>
</style>
