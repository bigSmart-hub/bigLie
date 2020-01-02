<template>
  <div id="home_container_top_all">
    <div class="adrres" v-if="bgim">
      <img :src="require(`../assets/${bgim}1.png`)" alt="" >
    </div>
    <!-- 轮播主题 -->
    <div id="home_container_top">
      <!-- 左边列表 -->
      <div class="container_left">
        <ul v-for="(item,index) in listData" :key="index">
          <a
            :href="`http://psp.eol.cn/education/classes?id=${item.old_id}`"
            target="blank"
          >{{item.name}}</a>
          <li v-for="(item1,index) in item.children.slice(0,2)" :key="index">
            <a
              :href="`http://psp.eol.cn/education/classes?id=${item1.old_id}`"
              target="blank"
            >{{item1.name}}</a>
          </li>
          <ul class="erji_right">
            <li v-for="(item1,index) in item.children" :key="index">
              <ul  class="yingcang">
                <a style="color:black"
                  :href="`http://psp.eol.cn/education/classes?id=${item1.old_id}`"
                  target="blank"
                >{{item1.name}}</a>
                <div>
                <li v-for="(item2,index) in item1.children" :key="index">
                  <a style="color: #666666"
                    :href="`http://psp.eol.cn/education/classes?id=${item2.old_id}`"
                    target="blank"
                  >{{item2.name}}</a>
                </li>
                </div>
              </ul>
            </li>
          </ul>
        </ul>
      </div>
      <!-- 中间轮播图部分 -->
      <div class="container_mid">
        <el-carousel :interval="5000" arrow="never" style="height: 360px;" class="cc">
          <el-carousel-item v-for="(item,index) in items" :key="index">
            <a href="#">
              <img :src="item.src" alt />
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
              <img src="../assets/登录人物.png" alt class="people" />
              <p>欢迎登陆</p>
              <p>EOL公共服务平台</p>
              <div class="login">
                <a href="http://www.cepsp.com.cn/org_admin#/user/register" target="blank">
                  <button type="submit" class="btn1" @click="Login(login)">注册</button>
                </a>
                <a href="http://www.cepsp.com.cn/org_admin#/user/login" target="blank">
                  <button type="submit" class="btn2" @click="Register(register)">登陆</button>
                </a>
              </div>
            </div>
          </div>
          <!-- 小新闻 -->
          <div>
            <el-tabs type="border-card">
              <el-tab-pane label="平台公告" class="choic">
                <ul class="notice">
                  <li v-for="(item,index) in notice.notice" :key="index">
                    <a
                      :href="`http://psp.eol.cn/edu/a/${item.old_id}`"
                      target="blank"
                    >{{item.title}}</a>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="平台规则" class="choic">
                <ul class="notice">
                  <li v-for="(item,index) in notice.rule" :key="index">
                    <a
                      :href="`http://psp.eol.cn/edu/a/${item.old_id}`"
                      target="blank"
                    >{{item.title}}</a>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="学历政策" class="choic"></el-tab-pane>
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
      bgim:'',
      notice: "",
      listData: "",
      register: false,
      login: false,
      items: [
        { src: require("@/assets/未标题-2.svg") },
        { src: require("@/assets/未标题-2.svg") },
        { src: require("@/assets/未标题-2.svg") },
        { src: require("@/assets/未标题-2.svg") }
      ]
    };
  },
  watch: {
    $route(to, from) {
      console.log(to.path, from);
      if (this.$route.params.id) {
        this.bgim= this.$route.params.id;
      }
    }
  },
  mounted() {
    fetch(`/api/index/right_article`, {
      headers: {
        "content-type": "application/json"
      },
      method: "GET"
    })
      .then(data => {
        return data.json();
      })
      .then(res => {
        this.notice = res;
      });
    fetch(`/api/category`, {
      headers: {
        "content-type": "application/json"
      },
      method: "GET"
    })
      .then(data => {
        return data.json();
      })
      .then(res => {
        let arr2 = [];
        for (let key in res) {
          arr2.push(res[key]);
        }
        this.listData = arr2;
        this.bgim= this.$route.params.id;
      });
  },
  methods: {
    // 弹出框状态改变
    Register() {
      // this.register = true;
      this.$root.bus.$emit("11", this.register);
    },
    Login() {
      // this.login = true;
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
#home_container_top_all{
  width: 100%;
  position: relative;
}
#home_container_top_all .adrres>img{
  width: 100%;
}
#home_container_top_all .adrres{
  position: absolute;
  top: 50px;
  left: 0px;
  z-index: -99;
  width: 100%;
}
#home_container_top .yingcang > a {
  margin: 10px 0 10px 30px;
  width: 80px;
}
 .yingcang {
  display: flex;
}
#home_container_top .yingcang div {
  display: flex;
  flex-wrap: wrap;
  width: 500px;
}

#home_container_top .yingcang div > li {
  font-size: 14px;
  margin: 10px 0 10px 20px;
}
#home_container_top
  .el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item.is-active {
  background-color: #ffffff;
  color: #d12d2c;
}
#home_container_top .notice {
  margin: 10px 0 10px 15px;
}

#home_container_top .notice li {
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
  width: 180px;
  margin-bottom: 5px;
}
#home_container_top .notice li:hover a {
  color: #d12d2c;
}
#home_container_top .notice li a {
  font-size: 14px;
  color: #888888;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#home_container_top .people {
  width: 41px;
  height: 41px;
  margin: 0 auto;
  margin-top: 20px;
}
#home_container_top .yingcang {
  display: flex;
  flex-wrap: wrap;
  margin: 15px 15px;
}
#home_container_top .yingcang > li {
  font-size: 12px;
  margin: 0 15px 10px 15px;
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
  margin-bottom: 20px;
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
  width: 1200px;
  margin: 0 auto;
  height: 400px;
  display: flex;
  justify-content: space-between;
}
#home_container_top li {
  list-style: none;
}
#home_container_top .el-carousel__button {
  margin: 0 auto;
}

#home_container_top .container_left > ul {
  display: flex;
  width: 248px;
  height: 22px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 25px;
}
#home_container_top .container_left > ul > a {
  color: black;
}
#home_container_top .container_left > ul li > a {
  color: black;
}
#home_container_top .erji_right {
  width: 672px;
  height: 380px;
  background-color: white;
  position: absolute;
  left: 297px;
  top: 272px;
  opacity: 1;
  display: none;
overflow:scroll;
}
#home_container_top .container_left > ul>ul{
  position: absolute;
  top: 0
}
#home_container_top .container_left > ul:hover {
  background-color: #d12d2c;
}
#home_container_top .container_left > ul:hover li a {
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
  width: 60px;
}
#home_container_top .container_left > ul > li > a {
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
  padding: 20px 0;
  box-sizing: border-box;
  position: relative;
}
#home_container_top .container_mid {
  width: 634px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: -22;
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