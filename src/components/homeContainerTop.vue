<template>
  <div>
    <!-- 轮播主题 -->
    <div id="home_container_top">
      <!-- 左边列表 -->
      <div class="container_left">
        <ul>
          <li>成人学历</li>
          <li>自考考试</li>
          <li>成人高考</li>
          <li class="erji_father" >
            <!-- <ul class="erji_right">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul> -->
          </li>
        </ul>
        <ul>
          <li>资格考试</li>
          <li>公职考</li>
          <li>从业资格</li>
          <li></li>
        </ul>
        <ul>
          <li>社会培训</li>
          <li>企业大学</li>
          <li>社区教育</li>
          <li></li>
        </ul>
        <ul>
          <li>国际教育</li>
          <li>考察交流</li>
          <li>中文国际</li>
          <li></li>
        </ul>
        <ul>
          <li>职业教育</li>
          <li>职业大学</li>
          <li>1+x</li>
          <li></li>
        </ul>
        <ul>
          <li>语言培训</li>
          <li>留学考试</li>
          <li>应用培训</li>
          <li></li>
        </ul>
        <ul>
          <li>院校培训</li>
          <li>院校联盟</li>
          <li>教师培训</li>
          <li></li>
        </ul>
        <ul id="list_last">
          <li>素质教育</li>
          <li>人文</li>
          <li>科技</li>
          <li>艺术</li>
          <li></li>
        </ul>
      </div>
      <!-- 中间轮播图部分 -->
      <div class="container_mid">
        <el-carousel :interval="5000" arrow="never" style="height: 360px;" class="cc">
          <el-carousel-item v-for="(item,index) in items" :key="index">
            <a href="#">
              <img :src="item.src" alt />
              <p>{{item.src}}</p>
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 右边登陆注册 -->
      <div class="container_right">
        <div>
          <!-- 登陆注册 -->
          <div>
            <div>
              <i class="el-icon-s-custom"></i>
              <p>欢迎登陆</p>
              <p>EOL公共服务平台</p>
              <div class="login">
                <button type="submit" class="btn1" @click="Login(login)">注册</button>
                <button type="submit" class="btn2" @click="Register(register)">登陆</button>
              </div>
            </div>
          </div>
          <!-- 小新闻 -->
          <div>
            <el-tabs type="border-card">
              <el-tab-pane label="平台公告" class="choic">平台公告</el-tab-pane>
              <el-tab-pane label="平台规则" class="choic">平台规则</el-tab-pane>
              <el-tab-pane label="学历政策" class="choic">学历政策</el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      register: false,
      login: false,
      items: [
        { src: require("@/assets/f665d2e1f8154d9be5e4d72e6dbb1a3c.svg") },
        { src: require("@/assets/f665d2e1f8154d9be5e4d72e6dbb1a3c.svg") },
        { src: require("@/assets/f665d2e1f8154d9be5e4d72e6dbb1a3c.svg") },
        { src: require("@/assets/f665d2e1f8154d9be5e4d72e6dbb1a3c.svg") }
      ]
    };
  },
  methods: {
    Register() {
      this.register = true;
      this.$root.bus.$emit("11", this.register);
    },
    Login() {
      this.login = true;
      this.$root.bus.$emit("12", this.login);
    }
  }
};
</script>
<style  >
* {
  margin: 0;
  padding: 0;
}
#home_container_top
  .el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item.is-active {
  background-color: #ffffff;
  color: #d12d2c;
}
#home_container_top .el-tabs--border-card {
  border: none;
  box-shadow: none;
  border-radius: 0 0 4px 4px;
}
#home_container_top .el-tabs--border-card > .el-tabs__content {
  height: 120px;
  padding: 0;
}
#home_container_top .el-tabs--border-card > .el-tabs__header .el-tabs__item {
  width: 76px;
  height: 39px;
  background-color: #d12d2c;
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 13px;
  color: #ffffff;
  border: none;
  font-weight: normal;
}
#home_container_top
  .el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:nth-child(1) {
  border-radius: 4px 0 0 0;
}
#home_container_top
  .el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:nth-child(3) {
  border-radius: 0 4px 0 0;
}
#home_container_top .btn1 {
  width: 84px;
  height: 37px;
  background-color: #d12d2c;
  border-radius: 4px;
  color: #ffffff;
  font-size: 14px;
  outline: none;
  border: none;
}
#home_container_top .btn2 {
  width: 84px;
  height: 37px;
  border-radius: 4px;
  border: solid 2px #d12d2c;
  color: #d12d2c;
  font-size: 14px;
  outline: none;
}
#home_container_top .login {
  display: flex;
  justify-content: space-around;
}
#home_container_top .container_right p {
  font-size: 12px;
  letter-spacing: 0px;
  color: #aeaeae;
}
#home_container_top .el-icon-s-custom {
  font-size: 41px;
}
#home_container_top .el-carousel__container {
  height: 360px;
  width: 634px;
}
#home_container_top .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
#home_container_top .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
#home_container_top {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-between;
}
#home_container_top li {
  list-style: none;
  width: 64px;
}
#home_container_top .el-carousel__button {
  margin: 0 auto;
}
#home_container_top .container_left > ul:not(:nth-child(8)) > li:nth-child(4) {
  background-image: url("../assets/小箭头.svg");
  width: 8px;
  height: 14px;
  margin-top: 5px;
}
#home_container_top .container_left > ul > li:nth-child(1) {
  font-size: 16px;
  letter-spacing: 0px;
  color: #666666;
}
#home_container_top .container_left > ul > li:not(:nth-child(1)) {
  margin-top: 2px;
}
#home_container_top .container_left > ul {
  display: flex;
  width: 248px;
  height: 22px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 25px;
}
#home_container_top .erji_father {
  position: relative;
}
#home_container_top .erji_right {
  width: 672px;
  height: 380px;
  background-color: red;
  position: absolute;
  left: 33px;
  top: -55px;
  display: none;
}
#home_container_top .container_left > ul:hover {
  background-color: #d12d2c;
}
#home_container_top .container_left > ul:hover li {
  color: #fefefe;
}
#home_container_top .container_left > ul:hover .erji_right {
  display: block;
}
#home_container_top .container_left > ul:hover .container_mid {
  display: none;
}
#home_container_top .container_left > ul > li {
  font-size: 14px;
  letter-spacing: 0px;
  color: #666666;
}
#home_container_top #list_last > li:first-child {
  font-size: 16px;
  width: 64px;
}
#home_container_top #list_last > li {
  font-size: 14px;
  width: 28px;
}
#home_container_top #list_last > li:nth-child(5) {
  background-image: url("../assets/小箭头.svg");
  width: 8px;
  height: 14px;
  margin-top: 5px;
  flex-direction: column;
  direction: ltr;
  flex-wrap: nowrap;
}
#home_container_top .container_left {
  width: 298px;
  height: 380px;
  background-color: #ffffff;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 0;
  box-sizing: border-box;
}
#home_container_top .container_mid {
  width: 634px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#home_container_top .container_right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#home_container_top .container_right > div {
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#home_container_top .container_right > div > div:nth-child(1) {
  width: 100%;
  height: 180px;
  flex-direction: column;
  text-align: center;
}
#home_container_top .container_right > div > div:nth-child(1) > div {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  background-color: #fefefe;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>