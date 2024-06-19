<template>
  <div id="home">
    <el-container>
      <el-aside width="150px">
        <div style="position: fixed; display: flex; flex-direction: column; gap: 5px; margin-top: 180px; height: 300px; width: 150px; overflow-y: auto;">
          <a href="#tag1"><el-tag size="small" style="background-color: #e81d1d;">非自回归</el-tag></a>
          <a href="#tag2"><el-tag size="small" style="background-color: #0074D9;">指令跟随 </el-tag></a>
          <a href="#tag3"><el-tag size="small" style="background-color: #2ECC40;">逻辑推理</el-tag></a>
          <a href="#tag4"><el-tag size="small" style="background-color: #FF851B;">思维链</el-tag></a>
          <a href="#tag5"><el-tag size="small" style="background-color: #B10DC9;">代码实践</el-tag></a>
          <a href="#tag6"><el-tag size="small" style="background-color: #3D9970;">开源框架</el-tag></a>
          <a href="#tag7"><el-tag size="small" style="background-color: #FF4136;">高效解码</el-tag></a>
          <a href="#tag8"><el-tag size="small" style="background-color: #001f3f;">综述</el-tag></a>
          <a href="#tag9"><el-tag size="small" style="background-color: #85144b;">指令压缩</el-tag></a>
          <a href="#tag10"><el-tag size="small" style="background-color: #39CCCC;">位置编码</el-tag></a>
          <a href="#tag11"><el-tag size="small" style="background-color: #FFDC00;">指令微调</el-tag></a>
          <a href="#tag12"><el-tag size="small" style="background-color: #111111;">专家系统</el-tag></a>
          <a href="#tag13"><el-tag size="small" style="background-color: #AAAAAA;">事实性</el-tag></a>
          <a href="#tag14"><el-tag size="small" style="background-color: #663399;">数学</el-tag></a>
          <a href="#tag15"><el-tag size="small" style="background-color: #4169E1;">游戏</el-tag></a>
          <a href="#tag16"><el-tag size="small" style="background-color: #8B008B;">评估</el-tag></a>
          <a href="#tag17"><el-tag size="small" style="background-color: #228B22;">Agent</el-tag></a>
          <a href="#tag18"><el-tag size="small" style="background-color: #F012BE;">知识编辑</el-tag></a>
          <a href="#tag19"><el-tag size="small" style="background-color: #A0522D;">搜索</el-tag></a>
          <a href="#tag20"><el-tag size="small" style="background-color: #7FFFD4;">幻觉</el-tag></a>
          <a href="#tag21"><el-tag size="small" style="background-color: #D2691E;">物理</el-tag></a>
          <a href="#tag22"><el-tag size="small" style="background-color: #556B2F;">理解</el-tag></a>
          <a href="#tag23"><el-tag size="small" style="background-color: #9932CC;">对话</el-tag></a>
          <a href="#tag24"><el-tag size="small" style="background-color: #808000;">CoT</el-tag></a>
          <a href="#tag25"><el-tag size="small" style="background-color: #008080;">多语言</el-tag></a>
          <a href="#tag26"><el-tag size="small" style="background-color: #4682B4;">zero-shot</el-tag></a>
          <a href="#tag27"><el-tag size="small" style="background-color: #008B8B;">多模态</el-tag></a>
          <a href="#tag28"><el-tag size="small" style="background-color: #6A5ACD;">句法</el-tag></a>
          <a href="#tag29"><el-tag size="small" style="background-color: #FF69B4;">对比学习</el-tag></a>
          <a href="#tag30"><el-tag size="small" style="background-color: #CD5C5C;">标注</el-tag></a>
          <a href="#tag31"><el-tag size="small" style="background-color: #ADFF2F;">信息抽取</el-tag></a>
          <a href="#tag32"><el-tag size="small" style="background-color: #48D1CC;">code</el-tag></a>
        </div>
      </el-aside>
      <el-main>
        <div class="top" style="width: 1000px; overflow: auto">
          <img src="@/assets/image/logo.png" width="100px" />
          <p style="width: 600px">
            <span style="padding-left: 2em">
              NICE（NLP Academic Exchange
              Platform）是一个专门面向中文NLP领域的青年学者学术交流平台，由众多高校一线科研同学共同创建。合作实验室苏州大学
              <a href="https://opennlg.cn/" target="_blank">OpenNLG实验室</a
              >。</span
            ><br />
            <span style="padding-left: 2em">
              在ChatGPT时代下论文的idea日新月异，旨在做一个能够每周及时分享最新的、最有意义的前沿论文平台。希望能做到一个承上启下的作用，既能帮助学者分享自己的学术成果、跳出自己的圈子认识其他伙伴的同时，又能带动更年轻的未来学者顺利进入NLP的殿堂，一起促进国内NLP的蓬勃发展。</span
            >
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
            ref="previous"
          >
            <div class="thirty-two" style="padding: 14px">
              <h3 style="padding-left: 20px">【往期】</h3>
              <div class="info">
                <p>
                  【32】大模型时代下非自回归模型的多层次能力提升：媲美自回归模型的探索之路
                  <el-tag size="mini" id="tag1">非自回归</el-tag>
                  <el-tag size="mini" id="tag2">指令跟随</el-tag>
                  <el-tag size="mini" id="tag3">逻辑推理</el-tag>
                </p>
                <p>嘉宾：肖义胜 苏州大学博士生</p>
                <p>主持人：张鑫 哈尔滨工业大学（深圳）博士生</p>
                <p>录取：ICLR2024</p>
                <p>时间：2024.6.15</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/32.png"
                  width="250px" title='大模型时代下非自回归模型的多层次能力提升：媲美自回归模型的探索之路'
                  onclick="window.open('https://www.bilibili.com/video/BV1ty41187U4')" style="margin-top:20px"
                />
              </div>
            </div>
            <div class="thirty-one" style="padding: 14px">
              <div class="info">
                <!-- <el-divider orientation="vertical"></el-divider> -->
                <p>
                  【31】符号化规则强化CoT，大幅提高推理性能
                  <el-tag size="mini" id="tag4">思维链</el-tag>
                  <el-tag size="mini" id="tag3">逻辑推理</el-tag>
                </p>
                <p>嘉宾：徐俊东 新加坡国立大学计算机系研一</p>
                <p>主持人：华文越 罗格斯大学博士生</p>
                <p>录取：ACL2024</p>
                <p>时间：2024.6.8</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/31.png" 
                  width="250px" title="符号化规则强化CoT，大幅提高推理性能"
                  onclick="window.open('https://www.bilibili.com/video/BV1dS411P7Y7')" style="margin-top:15px"
                />
              </div>
            </div>
            <div class="thirty" style="padding: 14px">
              <div class="info" style="padding-top:25px">
                <p>
                  【30】从0开始训练1.4b中文大模型的经验分享
                  <el-tag size="mini" id="tag5">代码实践</el-tag>
                </p>
                <p>嘉宾：黎健进 华南师范大学</p>
                <p>主持人：张鑫 哈尔滨工业大学（深圳）博士生</p>
                <p>时间：2024.3.23</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/30.png"
                  width="250px" title="从0开始训练1.4b中文大模型的经验分享"
                  onclick="window.open('https://www.bilibili.com/video/BV1n6421F71g')" style="margin-top:15px"
                />
              </div>
            </div>
            <div class="twenty-nine" style="padding: 14px">
              <div class="info" style="padding-top:45px">
                <p>
                  【29】全栈大模型微调框架LLaMA
                  Factory：从预训练到RLHF的高效实现
                  <el-tag size="mini" id="tag6">开源框架</el-tag>
                </p>
                <p>嘉宾：郑耀威 北京航空航天大学博士生</p>
                <p>主持人：王鸿儒 香港中文大学博士生</p>
                <p>时间：2024.3.9</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/29.png"
                  width="250px" title="全栈大模型微调框架LLaMA"
                  onclick="window.open('https://www.bilibili.com/video/BV1Gt421L7dt')" style="margin-top:15px"
                />
              </div>
            </div>
            <div class="twenty-eight" style="padding: 14px">
              <div class="info" style="padding-top:40px">
                <p>
                  【28】LLM推理加速新范式！推测解码（Speculative
                  Decoding）最新综述
                  <el-tag size="mini" id="tag7">高效解码</el-tag>
                  <el-tag size="mini" id="tag8">综述</el-tag>
                </p>
                <p>嘉宾：夏鹤明 香港理工大学博士生</p>
                <p>主持人：薛博阳 香港中文大学博士生</p>
                <p>录取：ACL2024 Findings</p>
                <p>时间：2024.3.2</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/28.png"
                  width="250px" title="LLM推理加速新范式！推测解码（Speculative Decoding）最新综述"
                  onclick="window.open('https://www.bilibili.com/video/BV1Tm411Z78w')" style="margin-top:15px"
                />
              </div>
            </div>
            <div class="twenty-seven" style="padding: 14px">
              <div class="info">
                <p>
                  【27】LLMLingua: 压缩prompt构造LLMs的语言
                  <el-tag size="mini" id="tag9">指令压缩</el-tag>
                </p>
                <p>嘉宾：姜慧强 MSRA-Shanghai-RSDE</p>
                <p>主持人：李映辉 清华大学博士生</p>
                <p>录取：EMNLP2023 ACL2024 ICLR2024-Workshop</p>
                <p>时间：2024.1.28</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/27.png"
                  width="250px" title="LLMLingua: 压缩prompt构造LLMs的语言"
                  onclick="window.open('https://www.bilibili.com/video/BV19K41187Ny')" style="margin-top:15px"
                />
              </div>
            </div>
            <div class="twenty-six" style="padding: 14px">
              <div class="info" style="padding-top:35px">
                <p>
                  【26】Transformer的无限之路：位置编码视角下的长度外推
                  <el-tag size="mini" id="tag10">位置编码</el-tag>
                  <el-tag size="mini" id="tag8">综述</el-tag>
                </p>
                <p>嘉宾：赵亮 哈尔滨工业大学研一</p>
                <p>主持人：华文越 罗格斯大学博士生</p>
                <p>时间：2024.1.20</p>
                <p>时间：2024.1.28</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/26.png"
                  width="250px" title="Transformer的无限之路：位置编码视角下的长度外推"
                  onclick="window.open('https://www.bilibili.com/video/BV1Uk4y1D7xg')" style="margin-top:35px"
                />
              </div>
            </div>
            <div class="twenty-five" style="padding: 14px">
              <div class="info">
                <p>
                  【25】Deita: 用高质量数据在微调中“四两拨千斤”
                  <el-tag size="mini" id="tag11">指令微调</el-tag>
                </p>
                <p>嘉宾：刘威 上海科技大学研究生</p>
                <p>主持人：薛博阳 香港中文大学博士生</p>
                <p>录取：ICLR2024</p>
                <p>时间：2024.1.13</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/25.png"
                  width="250px" title="Deita: 用高质量数据在微调中“四两拨千斤”"
                  onclick="window.open('https://www.bilibili.com/video/BV13e411v78y')" style="margin-top:20px"
                />
              </div>
            </div>
            <div class="twenty-four" style="padding: 14px">
              <div class="info" style="padding-top:40px">
                <p>
                  【24】LLaMA-MoE：基于参数复用的混合专家模型构建方法探索
                  <el-tag size="mini" id="tag12">专家系统</el-tag>
                </p>
                <p>嘉宾：朱桐 苏州大学博士生</p>
                <p>主持人：华文越 罗格斯大学博士生</p>
                <p>时间：2024.1.6</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/24.png"
                  width="250px" title="LLaMA-MoE：基于参数复用的混合专家模型构建方法探索"
                  onclick="window.open('https://www.bilibili.com/video/BV1s64y1K7Wf')" style="margin-top:20px"
                />
              </div>
            </div>
            <div class="twenty-three" style="padding: 14px">
              <div class="info" style="padding-top:35px">
                <p>
                  【23】FacTool: 生成人工智能中的事实检测 -
                  用于多任务和多领域场景的工具增强框架
                  <el-tag size="mini" id="tag13">事实性</el-tag>
                </p>
                <p>嘉宾：陈奕群 上海交大博士生</p>
                <p>主持人：张鑫 哈尔滨工业大学（深圳）博士生</p>
                <p>时间：2024.1.3</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/23.png"
                  width="250px" title="FacTool: 生成人工智能中的事实检测 - 用于多任务和多领域场景的工具增强框架"
                  onclick="window.open('https://www.bilibili.com/video/BV1PC4y1v78a')" style="margin-top:20px"
                />
              </div>
            </div>
            <div class="twenty-two" style="padding: 14px">
              <div class="info" style="padding-top:35px">
                <p>
                  【22】综述 - LLM遇见数学
                  <el-tag size="mini" id="tag14">数学</el-tag>
                  <el-tag size="mini" id="tag8">综述</el-tag>
                </p>
                <p>嘉宾：刘文涛 华东师范大学博士生（全网ID小怪兽会微笑）</p>
                <p>主持人：张鑫 哈尔滨工业大学（深圳）博士生</p>
                <p>时间：2024.1.3</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/22.png"
                  width="250px" title="综述 - LLM遇见数学"
                  onclick="window.open('https://www.bilibili.com/video/BV1QQ4y1L7ze')" style="margin-top:15px"
                />
              </div>
            </div>
            <div class="twenty-one" style="padding: 14px">
              <div class="info" style="padding-top:40px">
                <p>
                  【21】大语言模型在text-based game上的表现及分析
                  <el-tag size="mini" id="tag15">游戏</el-tag>
                </p>
                <p>嘉宾：邓世龙 利物浦大学博士生</p>
                <p>主持人：张鑫 哈尔滨工业大学（深圳）博士生</p>
                <p>录取：AAAI2024</p>
                <p>时间：2024.1.3</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/21.png"
                  width="250px" title="大语言模型在text-based game上的表现及分析"
                  onclick="window.open('https://www.bilibili.com/video/BV1pw411u7iG')" style="margin-top:15px"
                />
              </div>
            </div>
            <div class="twenty" style="padding: 14px">
              <div class="info" style="padding-top:35px">
                <p>
                  【20】LLMBar：评价用于评估指令遵循的大语言模型
                  <el-tag size="mini" id="tag16">评估</el-tag>
                </p>
                <p>嘉宾：曾致远 清华大学计算机系大四</p>
                <p>主持人：张鑫 哈尔滨工业大学（深圳）博士生</p>
                <p>录取：ICLR2024</p>
                <p>时间：2024.1.3</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/20.png"
                  width="250px" title="LLMBar：评价用于评估指令遵循的大语言模型"
                  onclick="window.open('https://www.bilibili.com/video/BV1Te411i7xb')" style="margin-top:20px"
                />
              </div>
            </div>
            <div class="ninteen" style="padding: 14px">
              <div class="info" style="padding-top:35px">
                <p>
                  【19】WarAgent多智能体理解人类历史和预防未来国际冲突
                  <el-tag size="mini" id="tag17">Agent</el-tag>
                </p>
                <p>嘉宾：华文越 罗格斯大学计算机博士生</p>
                <p>主持人：张鑫 哈尔滨工业大学（深圳）博士生</p>
                <p>时间：2024.1.3</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/19.png"
                  width="250px" title="WarAgent多智能体理解人类历史和预防未来国际冲突"
                  onclick="window.open('https://www.bilibili.com/video/BV1TN4y1q7fu')" style="margin-top:20px"
                />
              </div>
            </div>
            <div class="eighteen" style="padding: 14px">
              <div class="info" style="padding-top:45px">
                <p>
                  【18】大语言模型的知识编辑：问题，方法与挑战
                  <el-tag size="mini" id="tag18">知识编辑</el-tag>
                </p>
                <p>嘉宾：姚云志 浙江大学博士生</p>
                <p>主持人：王鸿儒 香港中文大学博士生</p>
                <p>录取：EMNLP2023</p>
                <p>时间：2023.12.17</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/18.png"
                  width="250px" title="大语言模型的知识编辑：问题，方法与挑战"
                  onclick="window.open('https://www.bilibili.com/video/BV1St4y1Z7Fg')" style="margin-top:10px"
                />
              </div>
            </div>
            <div class="seventeen" style="padding: 14px">
              <div class="info" style="padding-top:35px">
                <p>
                  【17】生成式搜索引擎能否取代检索技术？
                  <el-tag size="mini" id="tag19">搜索</el-tag>
                  <el-tag size="mini" id="tag16">评估</el-tag>
                </p>
                <p>嘉宾：陈亮 香港中文大学博士生</p>
                <p>主持人：王鸿儒 香港中文大学博士生</p>
                <p>录取：EMNLP2023</p>
                <p>时间：2023.12.17</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/17.png"
                  width="250px" title="生成式搜索引擎能否取代检索技术？"
                  onclick="window.open('https://www.bilibili.com/video/BV1TN4y1q7fu')" style="margin-top:10px"
                />
              </div>
            </div>
            <div class="sixteen" style="padding: 14px">
              <div class="info" style="padding-top:40px">
                <p>
                  【16】评估中文大模型中的幻觉
                  <el-tag size="mini" id="tag20">幻觉</el-tag>
                  <el-tag size="mini" id="tag16">评估</el-tag>
                </p>
                <p>嘉宾：程沁源 复旦大学博士生，上海人工智能实验室见习研究员</p>
                <p>主持人：王鸿儒 香港中文大学博士生</p>
                <p>时间：2023.12.17</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/16.png"
                  width="250px" title="评估中文大模型中的幻觉"
                  onclick="window.open('https://www.bilibili.com/video/BV13Q4y1E7NJ')" style="margin-top:10px"
                />
              </div>
            </div>
            <div class="fifteen" style="padding: 14px">
              <div class="info" style="padding-top:40px">
                <p>
                  【15】冷暖LLM知？大语言模型对物理概念的理解能力探究
                  <el-tag size="mini" id="tag21">物理</el-tag>
                  <el-tag size="mini" id="tag22">理解</el-tag>
                </p>
                <p>嘉宾：李磊 香港大学博士生</p>
                <p>主持人：王鸿儒 香港中文大学博士生</p>
                <p>录取：EMNLP2023</p>
                <p>时间：2023.12.17</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/15.png"
                  width="250px" title="冷暖LLM知？大语言模型对物理概念的理解能力探究"
                  onclick="window.open('https://www.bilibili.com/video/BV1Mi4y1z7q2')" style="margin-top:10px"
                />
              </div>
            </div>
            <div class="fourteen" style="padding: 14px">
              <div class="info">
                <p>
                  【14】大模型事实性综述
                  <el-tag size="mini" id="tag13">事实性</el-tag>
                  <el-tag size="mini" id="tag8">综述</el-tag>
                </p>
                <p>嘉宾：王存翔 浙江大学-西湖大学联培博士生</p>
                <p>主持人：王鸿儒 香港中文大学博士生</p>
                <p>时间：2023.12.17</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/14.png"
                  width="250px" title="大模型事实性综述"
                  onclick="window.open('https://www.bilibili.com/video/BV1Vg4y1D7vv')" style="margin-top:10px"
                />
              </div>
            </div>
            <div class="thirteen" style="padding: 14px">
              <div class="info" style="padding-top:45px">
                <p>
                  【13】武侠小说视角：大模型对话系统的内功和外功
                  <el-tag size="mini" id="tag23">对话</el-tag>
                </p>
                <p>嘉宾：王鸿儒 香港中文大学博士生</p>
                <p>主持人：章岳 苏州大学研究生</p>
                <p>录取：EMNLP2023 Findings</p>
                <p>时间：2023.12.3</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/13.png"
                  width="250px" title="武侠小说视角：大模型对话系统的内功和外功"
                  onclick="window.open('https://www.bilibili.com/video/BV1294y1j75b')" style="margin-top:10px"
                />
              </div>
            </div>
            <div class="twelve" style="padding: 14px">
              <div class="info" style="padding-top:50px">
                <p>
                  【12】评估大语言模型的事实性
                  <el-tag size="mini" id="tag13">事实性</el-tag>
                </p>
                <p>嘉宾：陈适琪 香港城市大学博士生</p>
                <p>主持人：章岳 苏州大学研究生</p>
                <p>录取：NIPS2023</p>
                <p>时间：2023.12.3</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/12.png"
                  width="250px" title="评估大语言模型的事实性"
                  onclick="window.open('https://www.bilibili.com/video/BV1yu4y1g7BE')" style="margin-top:10px"
                />
              </div>
            </div>
            <div class="eleven" style="padding: 14px">
              <div class="info" style="padding-top:60px">
                <p>
                  【11】给定外部知识，模型如何正确使用和表达？
                  <el-tag size="mini" id="tag13">事实性</el-tag>
                  <el-tag size="mini" id="tag23">对话</el-tag>
                </p>
                <p>嘉宾：薛博阳 香港中文大学博士生</p>
                <p>主持人：章岳 苏州大学研究生</p>
                <p>录取：EMNLP2023 Findings</p>
                <p>时间：2023.12.3</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/11.png"
                  width="250px" title="给定外部知识，模型如何正确使用和表达？"
                  onclick="window.open('https://www.bilibili.com/video/BV1kC4y1c7Qu')"
                />
              </div>
            </div>
            <div class="ten" style="padding: 14px">
              <div class="info" style="padding-top:45px">
                <p>
                  【10】AI海洋中的海妖之歌：大模型幻觉问题调研
                  <el-tag size="mini" id="tag20">幻觉</el-tag>
                  <el-tag size="mini" id="tag8">综述</el-tag>
                </p>
                <p>嘉宾：章岳 苏州大学硕士生</p>
                <p>主持人：章岳 苏州大学研究生</p>
                <p>时间：2023.12.3</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/10.png"
                  width="250px" title="AI海洋中的海妖之歌：大模型幻觉问题调研"
                  onclick="window.open('https://www.bilibili.com/video/BV16H4y1C7Ab')"
                />
              </div>
            </div>
            <div class="nine" style="padding: 14px">
              <div class="info" style="padding-top:60px">
                <p>
                  【9】从CoT到Agent的列车即将发车，请各位旅客尽快上车
                  <el-tag size="mini" id="tag24">CoT</el-tag>
                  <el-tag size="mini" id="tag17">Agent</el-tag>
                </p>
                <p>嘉宾：姚杳 上海交通大学博士生</p>
                <p>主持人：章岳 苏州大学研究生</p>
                <p>时间：2023.12.3</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/9.png"
                  width="250px" title="从CoT到Agent的列车即将发车，请各位旅客尽快上车"
                  onclick="window.open('https://www.bilibili.com/video/BV1sc411D7pc')"
                />
              </div>
            </div>
            <div class="eight" style="padding: 14px">
              <div class="info" style="padding-top:60px">
                <p>
                  【8】通过概率校准提升多语言编码模型零样本学习的表现
                  <el-tag size="mini" id="tag25">多语言</el-tag>
                  <el-tag size="mini" id="tag26">zero-shot</el-tag>
                </p>
                <p>嘉宾：聂耳聪 慕尼黑大学博士生</p>
                <p>主持人：甄冉冉</p>
                <p>时间：2023.11.26</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/8.png"
                  width="250px" title="通过概率校准提升多语言编码模型零样本学习的表现"
                  onclick="window.open('https://www.bilibili.com/video/BV1sc411D7pc')"
                />
              </div>
            </div>
            <div class="seven" style="padding: 14px">
              <div class="info" style="padding-top:60px">
                <p>
                  【7】NExT-GPT：全能多模态大语言模型
                  <el-tag size="mini" id="tag27">多模态</el-tag>
                </p>
                <p>嘉宾：吴胜琼 新加坡国立大学博士生</p>
                <p>主持人：甄冉冉</p>
                <p>时间：2023.11.26</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/7.png"
                  width="250px" title="NExT-GPT：全能多模态大语言模型"
                  onclick="window.open('https://www.bilibili.com/video/BV1RH4y1C7fL')"
                />
              </div>
            </div>
            <div class="six" style="padding: 14px">
              <div class="info" style="padding-top:60px">
                <p>
                  【6】大模型会句法吗？
                  <el-tag size="mini" id="tag28">句法</el-tag>
                </p>
                <p>嘉宾：周厚全 苏州大学博士生</p>
                <p>主持人：甄冉冉</p>
                <p>时间：2023.11.26</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/6.png"
                  width="250px" title="大模型会句法吗？"
                  onclick="window.open('https://www.bilibili.com/video/BV14b4y1L7nt')"
                />
              </div>
            </div>
            <div class="five" style="padding: 14px">
              <div class="info" style="padding-top:65px">
                <p>
                  【5】基于LLM加强版自训练的成分句法解析器
                  <el-tag size="mini" id="tag28">句法</el-tag>
                </p>
                <p>嘉宾：李建玲 天津大学博士生，现在西湖大学访问</p>
                <p>主持人：甄冉冉</p>
                <p>时间：2023.11.26</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/5.png"
                  width="250px" title="基于LLM加强版自训练的成分句法解析器"
                  onclick="window.open('https://www.bilibili.com/video/BV11u4y1g7YR')"
                />
              </div>
            </div>
            <div class="four" style="padding: 14px">
              <div class="info" style="padding-top:70px">
                <p>
                  【4】从零开始生成高质量的NLI风格的标注数据
                  <el-tag size="mini" id="tag29">对比学习</el-tag>
                  <el-tag size="mini" id="tag30">标注</el-tag>
                </p>
                <p>嘉宾：张军磊 浙江大学-西湖大学联培博士，香港科技大学访问学生</p>
                <p>主持人：甄冉冉</p>
                <p>录取：EMNLP2023</p>
                <p>时间：2023.11.26</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/4.png"
                  width="250px" title="从零开始生成高质量的NLI风格的标注数据"
                  onclick="window.open('https://www.bilibili.com/video/BV1SH4y1C73z')"
                />
              </div>
            </div>
            <div class="three" style="padding: 14px">
              <div class="info" style="padding-top:50px">
                <p>
                  【3】文本表征模型能区分“猫追老鼠”和“老鼠追猫”吗？一项实证研究
                  <el-tag size="mini" id="tag28">句法</el-tag>
                </p>
                <p>嘉宾：冯兆鹏 浙江大学硕士生</p>
                <p>主持人：甄冉冉</p>
                <p>录取：EMNLP2023</p>
                <p>时间：2023.11.26</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/3.png"
                  width="250px" title="文本表征模型能区分“猫追老鼠”和“老鼠追猫”吗？一项实证研究"
                  onclick="window.open('https://www.bilibili.com/video/BV1yN4y1e76c')" style="margin-top:10px"
                />
              </div>
            </div>
            <div class="two" style="padding: 14px">
              <div class="info">
                <p>
                  【2】魔镜魔镜告诉我，谁是世界上最帅的男人（一套好用的信息抽取框架）
                  <el-tag size="mini" id="tag31">信息抽取</el-tag>
                </p>
                <p>嘉宾：朱桐 苏州大学博士生</p>
                <p>主持人：甄冉冉</p>
                <p>录取：EMNLP2023</p>
                <p>时间：2023.11.26</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/2.png"
                  width="250px" title="魔镜魔镜告诉我，谁是世界上最帅的男人（一套好用的信息抽取框架）"
                  onclick="window.open('https://www.bilibili.com/video/BV1zu4y1V7FM')" style="margin-top:10px"
                />
              </div>
            </div>
            <div class="one" style="padding: 14px">
              <div class="info" style="padding-top:40px;padding-bottom:20px">
                <p>
                  【1】代码大模型综述
                  <el-tag size="mini" id="tag32">code</el-tag>
                  <el-tag size="mini" id="tag8">综述</el-tag>
                </p>
                <p>嘉宾：张子殷 上海交通大学本硕在读，蚂蚁集团学术实习生</p>
                <p>主持人：甄冉冉</p>
                <p>时间：2023.11.26</p>
              </div>
              <div class="QR">
                <img
                  class="video"
                  src="@/assets/video/1.png"
                  width="250px" title="代码大模型综述"
                  onclick="window.open('https://www.bilibili.com/video/BV1TH4y1y7i9')"
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
  methods: {},
};
</script>
<style src="@/style/homestyle.css" scoped>
</style>
