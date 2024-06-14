<template>
  <div id="home">
    <el-container>
      <el-aside width="150px">
        <div style="display: flex; flex-direction: column; gap: 5px; margin-top: 180px; height: 180px; width: 150px;
            overflow-y: auto;">
          <a href="#tag1"><el-tag size="small" style="padding: 5px 10px; background-color: #e81d1d; border-radius: 5px; color: white;">tag 1</el-tag></a>
          <a href="#tag2"><el-tag size="small" style="
              padding: 5px 10px;
              background-color: #4CAF50;
              border-radius: 5px;
              color: white;">tag 2</el-tag></a>
          <a href="#tag3"><el-tag
            size="small"
            style="
              padding: 5px 10px;
              background-color: #2196F3;
              border-radius: 5px;
              color: white;">tag 3</el-tag></a>
          <a href="#tag4"><el-tag
            size="small"
            style="
              padding: 5px 10px;
              background-color: #FFC107;
              border-radius: 5px;
              color: white;">tag 4</el-tag></a>
          <a href="#tag5"><el-tag
            size="small"
            style="
              padding: 5px 10px;
              background-color: #673AB7;
              border-radius: 5px;
              color: white;">tag 5</el-tag></a>
        </div>
      </el-aside>
      <el-main>
        <div class="top" style="width: 1000px; overflow: auto">
          <img src="@/assets/image/logo.png" width="100px" />
          <p style="width: 600px;">
            <span style="padding-left:2em;">
            NICE（NLP Academic Exchange Platform）是一个专门面向中文NLP领域的青年学者学术交流平台，由众多高校一线科研同学共同创建。合作实验室苏州大学[OpenNLG实验室](
            <a href="https://opennlg.cn/" target="_blank"><i class="el-icon-paperclip"></i>https://opennlg.cn/</a>)。</span><br>
            <span style="padding-left:2em;">
            在ChatGPT时代下论文的idea日新月异，旨在做一个能够每周及时分享最新的、最有意义的前沿论文平台。希望能做到一个承上启下的作用，既能帮助学者分享自己的学术成果、跳出自己的圈子认识其他伙伴的同时，又能带动更年轻的未来学者顺利进入NLP的殿堂，一起促进国内NLP的蓬勃发展。</span>
          </p>

        </div>
        <div class="box">
          <el-card :body-style="{ padding: '0px' }" class="subscribe">
            <div style="padding: 14px">
              <h4 style="padding-left: 20px">【预约】</h4>
              <div class="info">
                <p>
                  主题：XXXXX <el-tag size="mini" id="tag1">tag 1</el-tag>
                  <el-tag size="mini" id="tag2">tag 2</el-tag>
                </p>
                <p>时间：2024.6.18 10:30-11:30</p>
                <p>讲者：xxx 苏州大学 在读PhD</p>
                <p>主持人：xxx</p>
              </div>
              <div class="QR">
                <img src="@/assets/image/QR.jpg" width="100px" />
                <p style="font-size: 14px; display: block; text-align: center">
                  微信扫码预约
                </p>
              </div>
            </div>
          </el-card>
          <el-card
            :body-style="{ padding: '0px' }"
            class="previous"
            ref="previous">
            <div class="ten" style="padding: 14px">
              <h4 style="padding-left: 20px">【往期】</h4>
              <div class="info">
                <p>【10】主题：XXXXX <el-tag size="mini" id="tag3">tag 3</el-tag></p>
                <p>时间：2024.6.18 10:30-11:30</p>
                <p>讲者：xxx 苏州大学 在读PhD</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/image/video.jpg"
                  width="350px"
                  onclick="window.open('https://www.bilibili.com/video/BV1dS411P7Y7/')"
                />
              </div>
            </div>
            <div class="nine" style="padding: 14px">
              <div class="info">
                <!-- <el-divider orientation="vertical"></el-divider> -->
                <p>【9】主题：XXXXX <el-tag size="mini" id="tag4">tag 4</el-tag></p>
                <p>时间：2024.6.18 10:30-11:30</p>
                <p>讲者：xxx 苏州大学 在读PhD</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/image/video.jpg"
                  width="350px"
                  onclick="window.open('https://www.bilibili.com/video/BV1dS411P7Y7/')"
                />
              </div>
            </div>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Home",
  methods: {
    
  }
};
</script>
<style src="@/style/homestyle.css" scoped>
</style>
