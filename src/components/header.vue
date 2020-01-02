<template>
  <!-- 头部组件 -->
  <div id="header">
    <!-- 头部导航栏 -->
    <nav>
      <ul class="left_ul">
        <a href></a>
        <li>
          <a href>中国教育在线</a>
        </li>
        <a href>
          <li class="a"></li>
        </a>
      </ul>
      <div class="nav_city" v-if="province=='全国站'">
        <p class="nav_city_1">全国站</p>
        <span class="nav_span" @click="City(city)">
          <a href="#">[切换]</a>
        </span>
      </div>
      <ul class="right_ul">
        <li>
          <a href="http://www.moe.gov.cn/" target="_Blank">教育部</a>
        </li>
        <li>
          <a href="https://www.chsi.com.cn/" target="_Blank">学信网</a>
        </li>
        <li>
          <a href="http://www.cdce.cn/" target="_Blank">中国远程与继续教育网</a>
        </li>
        <li>
          <a href="https://gaokao.chsi.com.cn/" target="_Blank">阳光招生平台</a>
        </li>
        <li></li>
        <li>
          <a href>移动端</a>
        </li>
        <li class="erji_box">
          <a href="#" @click="erji">机构入驻</a>
          <ul class="erji" v-if="tan">
            <li>
              <a href="http://psp.eol.cn/servericePage5" target="blank">机构服务</a>
            </li>
            <li>
              <a href="http://psp.eol.cn/servericePage1" target="blank">省级合作发展中心</a>
            </li>
            <li>
              <a href="http://psp.eol.cn/servericePage4" target="blank">教育机构</a>
            </li>
            <li>
              <a href="http://psp.eol.cn/servericePage2" target="blank">服务工具</a>
            </li>
            <li>
              <a href="http://psp.eol.cn/servericePage3" target="blank">成功案例</a>
            </li>
          </ul>
        </li>
        <li @click="erji"></li>
        <li @click="Register(register)">
          <a href="http://www.cepsp.com.cn/org_admin#/user/login" target="blank">会员登录</a>
        </li>
        <li @click="Login(login)">
          <a href="http://www.cepsp.com.cn/org_admin#/user/register" target="blank">会员注册</a>
        </li>
      </ul>
    </nav>
    <!-- 头部导航栏分割线 -->
    <div class="line"></div>
    <!-- 小banner -->
    <div class="banner"></div>
    <!-- logo及搜索框 -->
    <div class="heade_mid">
      <!-- logo部分 省站-->
      <div class="heade_mid_right" v-if="province!='全国站'" :key="11">
        <div class="logo"></div>
        <div>
          <p class="text1">中国教育在线</p>
          <p class="text2">公共服务平台</p>
        </div>
        <div class="line2"></div>
        <div class="city">{{province}}</div>
        <span @click="City(city)">
          <a href="#">[切换]</a>
        </span>
      </div>
      <!-- logo部分 全国站-->
      <div class="heade_mid_right2" v-else>
        <div class="logo1"></div>
        <div>
          <p class="text1">中国教育在线</p>
          <p class="text2">公共服务平台</p>
        </div>
        <div class="line2"></div>
        <div class="logo"></div>
        <div class="text3">
          <p>推动教育资源均衡</p>
          <p>服务全民终生学习</p>
        </div>
        <!-- <img src="../assets/组 135.png" alt /> -->
      </div>
      <!-- 搜索框部分 -->
      <div class="heade_mid_left">
        <!-- 搜索组件 -->
        <Search />
      </div>
    </div>
    <!-- 头部平台服务栏 -->
    <div class="heade_bottom">
      <div class="heade_bottom_left">
        <div class="heade_bottom_left_content" @click="listBol(bol)">
          <p>平台服务导航</p>
          <img src="../assets/小箭头拷贝2.svg" alt class="option" />
        </div>
      </div>
      <div class="heade_bottom_mid">
        <a href="#">
          <li @click="toHomePage">首页</li>
        </a>
        <a href="http://psp.eol.cn/edu/c/news" target="blank">
          <li>教育头条</li>
        </a>
        <a href="#">
          <li @click="toEducationalServices">教育机构</li>
        </a>
        <a href="#">
          <li>秒懂社区</li>
        </a>
      </div>
      <div class="heade_bottom_right">
        <div class="heade_bottom_right_1">学分银行</div>
      </div>
    </div>
  </div>
</template>
<script>
import Search from "../components/search";

export default {
  name: "search",
  components: {
    Search
  },
  data() {
    return {
      register: false,
      login: false,
      city: false,
      bol: false,
      tan: false,
      province: "全国站",
      provinceId: "0"
    };
  },
  mounted() {
    let that = this;
    this.$root.bus.$on("provinceName", function(value) {
      that.province = value;
    });
    this.$root.bus.$on("province", function(value) {
      that.provinceId = value;
    });
  },
  methods: {
    Register() {
      // 弹出框状态改变
      // this.register = true;
      this.$root.bus.$emit("11", this.register);
      let params = {
        user_name: "saopao",
        mobile: "18888888888",
        mobile_code: "+86",
        password: "saopaopao",
        password_confirmation: "saopaopao",
        province: "1",
        city: "1",
        area: "1"
      };
      fetch(`/api/user/register`, {
        body: params, // must match 'Content-Type' header
        headers: {
          "content-type": "application/json"
        },
        method: "POST" // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, cors, *same-origin
      })
        .then(data => {
          if (data.status === 200) {
            console.log("注册成功");
          } else {
            console.log("注册失败");
          }
        })
        .catch(e => console.log(e));
    },
    Login() {
      // this.login = true;
      this.$root.bus.$emit("12", this.login);
    },
    City() {
      this.city = true;
      this.$root.bus.$emit("13", this.city);
    },
    erji() {
      if (this.tan) {
        this.tan = false;
      } else {
        this.tan = true;
      }
    },
    toEducationalServices() {
      console.log(this.provinceId);
      this.$router.push({
        path: "/educationalServices/" + this.provinceId
      });
    },
    toHomePage() {
      console.log(this.$route.name);
      if (this.$route.name == "countryHomePage" || this.provinceId == "0") {
        this.$router.push({
          name: "countryHomePage"
        });
      } else {
        this.$router.push({
          path: "/homePage/" + this.provinceId
        });
      }
    },
    listBol() {
      if (this.bol) {
        this.bol = false;
        this.$root.bus.$emit("bol", this.bol);
      } else {
        this.bol = true;
        this.$root.bus.$emit("bol", this.bol);
      }
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.text3 > p {
  font-size: 12px;
  letter-spacing: 5px;
  color: #ffffff;
  text-align: center;
  margin-top: 2px;
}
.text3 {
  width: 156px;
  height: 40px;
  background-color: #d12d2c;
  border-radius: 6px;
}
nav {
  height: 30px;
  padding-top: 5px;
}
.heade_mid_right2 {
  width: 526px;
  display: flex;
  height: 37px;
  justify-content: space-between;
}
.logo1 {
  width: 104px;
  height: 45px;
  background-image: url("../assets/logo单.svg");
}
.erji_box {
  position: relative;
}
.erji {
  width: 130px;
  margin-top: 10px;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #aeaeae;
  border-top: none;
  position: absolute;
  border-radius: 0 0 4px 4px 
}
.erji > li {
  margin-bottom: 10px
}
.erji > li:hover {
  background-color: #d12d2c;
  color: #ffffff;
}
.erji > li:hover > a {
  color: #ffffff;
}
.heade_bottom_mid a li {
  font-size: 18px;
  color: #666666;
}
.heade_bottom_right {
  display: flex;
  flex-grow: 1;
  align-items: center;
  direction: rtl;
}
.heade_bottom_right_1 {
  width: 100px;
  height: 26px;
  background-color: #638ad7;
  border-radius: 13px;
  font-family: Source Han Sans CN;
  font-size: 12px;
  letter-spacing: 2px;
  color: #ffffff;
  text-align: center;
  line-height: 26px;
  margin-right: 20px;
}
.heade_bottom_mid {
  width: 406px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.heade_bottom_mid > li {
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0px;
  color: #666666;
}
.heade_bottom {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}
.heade_bottom_left {
  width: 298px;
  height: 48px;
  background-color: #d12d2c;
  align-items: center;
  display: flex;
  margin-right: 20px;
}
.heade_bottom_left_content {
  width: 170px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
}
.heade_bottom_left_content > p {
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 4px;
  color: #ffffff;
}
.option {
  width: 24px;
  height: 18px;
}
.nav_city {
  display: flex;
  width: 80px;
  justify-content: space-between;
  padding-right: 60px;
}
.nav_city_1 {
  font-size: 14px;
  line-height: 30px;
  letter-spacing: 0px;
  color: #aeaeae;
}
.nav_span > a {
  font-size: 10px;
  line-height: 25px;
  letter-spacing: 0px;
  color: #d12d2c;
}
.line {
  margin: 5px 0;
  width: 100%;
  height: 1px;
  background-color: #aeaeae;
}
.line2 {
  width: 1px;
  height: 100%;
  background-color: #aeaeae;
}
.city {
  font-size: 35px;
  letter-spacing: 1px;
  color: #333333;
  margin-top: -5px;
}
span > a {
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0px;
  color: #d12d2c;
}
.left_ul > li:nth-child(1) {
  margin-left: 0;
}
#header {
  background-color: #fff;
  border-bottom: 2px solid #d12d2c;
  min-width: 1200px;
}
a {
  height: 20px;

  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  text-align: center;
  letter-spacing: 0px;
  color: #aeaeae;
}
.a {
  width: 122px;
  height: 25px;
  background-image: url("../assets/推动.svg");
  margin-left: 15px;
}
li {
  text-decoration: none;
  list-style: none;

  height: 20px;

  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  text-align: center;
  letter-spacing: 0px;
  color: #aeaeae;
}
nav {
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  align-items: center;
}
ul {
  display: flex;
}
.left_ul > li {
  margin-left: 14px;
}
.right_ul > li {
  padding: 0 15px;
}
.right_ul > li:nth-child(5) {
  width: 1px;
  height: 12px;
  padding: 0;
  background-color: #aeaeae;
  margin-top: 5px;
}
.right_ul > li:nth-child(7) > a {
  width: 57px;
  height: 20px;
  font-family: Microsoft YaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #489eff;
}
.right_ul > li:nth-child(8) {
  padding: 0;
  margin-top: 8px;
  margin-right: 15px;
  width: 11px;
  height: 6px;
  background-image: url("../assets/小箭头.png");
  line-height: 20px;
}
.right_ul > li:nth-child(9) > a {
  color: #d12d2c;
}
.right_ul > li:nth-child(10) > a {
  color: #d12d2c;
}
.right_ul > li:nth-child(10) {
  padding-right: 0;
}
.banner {
  width: 1200px;
  height: 40px;
  background-image: url("../assets/小banner.svg");
  margin: 0 auto;
}
.heade_mid {
  width: 1200px;
  height: 124px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  width: 148px;
  height: 35px;
  background-image: url("../assets/资源11.svg");
}
.heade_mid_right {
  display: flex;
  height: 37px;
}
.heade_mid_right > div {
  margin-right: 5px;
}
.text1 {
  width: 102px;
  height: 14px;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 5px;
  color: #231815;
  text-align: center;
}
.text2 {
  width: 96px;
  height: 22px;
  font-family: Source Han Sans CN;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 26px;
  letter-spacing: 0px;
  color: #231815;
}
.b {
  width: 165px;
  height: 39px;
  background-image: url("../assets/资源11.svg");
}
.c {
  width: 115px;
  height: 40px;
  background-color: #d12d2c;
  border-radius: 6px;
}
.c > p {
  width: 115px;
  height: 17px;
  font-family: Microsoft YaHei;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 20px;
  letter-spacing: 5px;
  color: #ffffff;
  text-align: center;
}
.heade_mid_left {
  width: 474px;
  display: flex;
}
</style>