<template>
  <div id="members">
    <el-main style="padding-left: 30px">
      <h2 style="font-weight: 400; padding-left: 10px">成员</h2>
      <el-row style="margin-top: 10px">
        <el-col :span="4">
          <div class="grid-content bg-purple" style="margin-left: 5px">
            <img
              src="@/assets/image/zrr.png"
              width="100%"
              style="margin: 0 auto"
            />
            <p class="name">甄冉冉</p>
            <p class="school">苏州大学博士生</p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="@/assets/image/zx.png" width="100%" style="margin: 0 auto" />
            <p class="name"><a href="https://izhx.github.io" target="_blank">张鑫</a></p>
            <p class="school">哈尔滨工业大学(深圳)博士生</p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="@/assets/image/zy.png" width="100%" style="margin: 0 auto" />
            <p class="name"><a href="hillzhang1999.github.io" target="_blank">章岳</a></p>
            <p class="school">字节跳动研究员</p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="@/assets/image/lyh.png" width="100%" style="margin: 0 auto" />
            <p class="name"><a href="https://scholar.google.com/citations?user=xTM9pKsAAAAJ&hl=en&oi=sra" target="_blank">李映辉</a></p>
            <p class="school">清华大学博士生</p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="@/assets/image/whr.png" width="100%" style="margin: 0 auto" />
            <p class="name"><a href="https://ruleGreen.github.io" target="_blank">王鸿儒</a></p>
            <p class="school">香港中文大学博士生</p>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 10px">
        <el-col :span="4">
          <div class="grid-content bg-purple" style="margin-left: 5px">
            <img src="@/assets/image/xby.png" width="100%" style="margin: 0 auto" />
            <p class="name"><a href="https://amourwaltz.github.io" target="_blank">薛博阳</a></p>
            <p class="school">香港中文大学博士生</p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple" style="margin-left: 5px">
            <img src="@/assets/image/hwy.png" width="100%" style="margin: 0 auto" />
            <p class="name"><a href="https://wenyueh.github.io/" target="_blank">华文越</a></p>
            <p class="school">罗格斯大学博士生</p>
          </div>
        </el-col>
      </el-row>       
      <h2 style="font-weight: 400; padding-left: 10px">前端</h2>
      <el-row style="margin-top: 10px">
        <el-col :span="4">
          <div class="grid-content bg-purple" style="margin-left: 5px">
            <img src="@/assets/image/hyl.png" width="100%" style="margin: 0 auto" />
            <p class="name">胡依璐</p>
            <p class="school">苏州大学硕士生</p>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>
<script>
export default {
  name: "Members",
};
</script>
<style src="@/style/memberstyle.css" scoped>
</style>
