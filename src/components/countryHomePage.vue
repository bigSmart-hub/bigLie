<template>
  <!-- 全国首页 -->
  <div>
    <!-- 上部 -->
    <div class="countryHomePage_img">
      <div id="countryHomePage">
        <!-- 左边列表 -->
        <div id="aaaa">
          <div class="container_left" v-if="listBol">
            <ul v-for="(item,index) in listData" :key="index">
              <!-- <a
                :href="`http://psp.eol.cn/education/classes?id=${item.old_id}`"
                target="blank"
              >{{item.name}}</a>-->
              <a href="#">{{item.name}}</a>
              <li v-for="(item1,index) in item.children.slice(0,2)" :key="index">
                <a
                  :href="`http://psp.eol.cn/education/classes?id=${item1.old_id}`"
                  target="blank"
                >{{item1.name}}</a>
              </li>
              <ul class="erji_right">
                <li v-for="(item1,index) in item.children" :key="index">
                  <ul style="color:black" class="yingcang">
                    <a
                      class="erji_title"
                      style="color:black"
                      :href="`http://psp.eol.cn/education/classes?id=${item1.old_id}`"
                      target="blank"
                    >{{item1.name}}</a>
                    <div>
                      <li v-for="(item2,index) in item1.children" :key="index">
                        <a
                          style="color: #666666"
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
    <!-- 品牌机构部分 -->
    <div id="countryHomePage2">
      <div class="titel">
        <div></div>
        <p>品牌教育机构</p>
      </div>
      <div class="countryHomePage2_container">
        <div class="countryHomePage2_img" v-for="(item,index) in organizationData" :key="index">
          <img :src="`http://www.cepsp.com.cn${item.logo}`" alt />
          <a>
            <div @click="toMechanism(item)"></div>
          </a>
        </div>
        <div @click="changeOrganization" class="countryHomePage2_change">
          <i class="el-icon-refresh"></i>
          <p>换一批</p>
        </div>
      </div>
    </div>
    <div class="advertisement">
      <img src="../assets/条04.svg" alt class="homeContainerContent_content_img" />
    </div>
    <!-- 分类 -->
    <div id="countryHomePage3">
      <div class="countryHomePage3_left">
        <div v-for="(item,index) in studyData" :key="index">
          <div class="countryHomePage3_left_img">
            <p>{{item.name}}</p>
            <div></div>
            <img :src="`http://www.cepsp.com.cn/${item.pc_img}`" alt />
          </div>
          <div class="countryHomePage3_left_content">
            <!-- @click="toCourseDetails" -->
            <a  v-for="(m,n) in item.courses" :key="n" @click="toCourseDetails">
              <img
                :src="`http://www.cepsp.com.cn/${(m.image.length!=0||m.logo.length!=0)?(m.image.length?m.image:m.logo):cdb}`"
                alt
              />
              <div>
                <p>{{m.title}}</p>
              </div>
              <p>{{m.category.name}}</p>
              <p>{{m.price}}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 领券中心 -->
    <!-- <div id="countryHomePage4">
      <div class="titel">
        <div></div>
        <p>品牌教育机构</p>
      </div>
      <div class="coupons">
        
        <div class="coupons_left">
          <a href>
            <img src="../assets/组 57.svg" alt />
            <img src="../assets/减去 3.svg" alt />
          </a>
        </div>
       
        <div class="coupons_right">
          <a href v-for="(item,index) in [1,1,1,1,1,1]" :key="index">
            <div>
              <p>
                四川西华师范大学
                继续教育学院
              </p>
              <p>￥220</p>
              <p>满399元即可使用</p>
            </div>
            <img src="../assets/图像35.svg" alt />
          </a>
        </div>
      </div>
    </div>-->
    <div class="advertisement">
      <img src="../assets/条06.svg" alt class="homeContainerContent_content_img" />
    </div>
    <!-- 快速领证 -->
    <div id="countryHomePage5">
      <div class="countryHomePage5_img">
        <div>
          <div
            v-for="(item,index) in examination"
            :key="index"
            :style="`background: url(http://www.cepsp.com.cn${item.image});background-size: 220px 175px;
            background-repeat: no-repeat; background-color: #ffffff;background-position: top center;
            `"
          >
            <a :href="`http://psp.eol.cn/class/${item.old_id}`" target="blank">
              <div class="zhezhao"></div>
              <div class="border">
                <div class="text1">
                  <p>平价报名价</p>
                  <p>￥{{item.price}}</p>
                </div>
                <div class="text2">
                  <p>{{item.title}}</p>
                  <p>{{item.name}}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <p class="xihuan">猜你喜欢</p>
    <div id="countryHomePage6">
      <div v-for="(item,index) in contents1" :key="index" class="countryHomePage6_content">
        <a :href="`http://psp.eol.cn/class/${item.old_id}`" target="blank">
          <img :src="`http://www.cepsp.com.cn/${item.image}`" alt />
          <p>
            <span>{{item.category.name}}</span>
            <span>{{item.category_parent.name}}</span>
          </p>
          <p>{{item.title}}</p>
          <p>
            <span>￥</span>
            {{item.price}}
          </p>
        </a>
      </div>
    </div>
    <div id="countryHomePage7">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="指导单位" name="first">
          <div class="countryHomePage7_bottom_text">
            <li v-for="(item3,index) in partner[0]" :key="index">
              <a :href="item3.url" target="blank">{{item3.title}}</a>
            </li>
          </div>
        </el-tab-pane>
        <el-tab-pane label="合作伙伴" name="second">
          <div class="countryHomePage7_bottom_text">
            <li v-for="(item3,index) in partner[1]" :key="index">
              <a :href="item3.url" target="blank">{{item3.title}}</a>
            </li>
          </div>
        </el-tab-pane>
        <el-tab-pane label="CEPSP省级合作发展中心" name="third">
          <div class="countryHomePage7_bottom_text">
            <li v-for="(item3,index) in partner[2]" :key="index">
              <a :href="item3.url" target="blank">{{item3.title}}</a>
            </li>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      partner: "",
      notice: "",
      listData: "",
      cdb: require("../assets/WechatIMG10.png"),
      organizationData: [], //品牌机构列表
      studyData: [], //成人学历列表
      examination: [], //资格考试
      listBol: false,
      activeName: "first",
      register: false,
      login: false,
      items: [
        { src: require("@/assets/f665d2e1f8154d9be5e4d72e6dbb1a3c.svg") },
        { src: require("@/assets/f665d2e1f8154d9be5e4d72e6dbb1a3c.svg") },
        { src: require("@/assets/f665d2e1f8154d9be5e4d72e6dbb1a3c.svg") },
        { src: require("@/assets/f665d2e1f8154d9be5e4d72e6dbb1a3c.svg") }
      ],
      contents: "",
      contents1: ""
    };
  },
  created() {
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
    fetch(`/api/index/favorite`, {
      headers: {
        "content-type": "application/json"
      },
      method: "GET"
    })
      .then(data => {
        return data.json();
      })
      .then(res => {
        this.contents1 = res;
      });
  },
  methods: {
    toCourseDetails() {
      this.$router.push({
        path: "/courseDetails/"
      });
    },
    toMechanism(item) {
      let id = item.id;
      this.$router.push({
        path: "/mechanism/" + id
      });
    },
    // 获取合作伙伴
    getCooperativePartner() {
      fetch(`/api/index/urls`, {
        // must match 'Content-Type' header
        headers: {
          "content-type": "application/json"
        },
        method: "GET" // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, cors, *same-origin
      })
        .then(data => {
          return data.json();
        })
        .then(res => {
          let arr = [];
          for (let i in res) {
            arr.push(res[i]);
          }
          this.partner = arr;
        });
    },
    //获取品牌机构
    getOrganization() {
      fetch(`/api/index/organizations`, {
        // must match 'Content-Type' header
        headers: {
          "content-type": "application/json"
        },
        method: "GET" // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, cors, *same-origin
      })
        .then(data => {
          return data.json();
        })
        .then(res => {
          this.organizationData = res;
        });
    },
    //成人学历
    getAdultStudy() {
      fetch(`/api/index/contents`, {
        // must match 'Content-Type' header
        headers: {
          "content-type": "application/json"
        },
        method: "GET" // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, cors, *same-origin
      })
        .then(data => {
          return data.json();
        })
        .then(res => {
          this.studyData = res;
        });
    },
    //资格考试
    getExamination() {
      fetch(`/api/index/zige_courses`, {
        // must match 'Content-Type' header
        headers: {
          "content-type": "application/json"
        },
        method: "GET" // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, cors, *same-origin
      })
        .then(data => {
          return data.json();
        })
        .then(res => {
          this.examination = res;
        });
    },
    //切换Logo
    changeOrganization() {
      this.getOrganization();
    },
    Register() {
      // 弹出框状态改变
      // this.register = true;
      this.$root.bus.$emit("11", this.register);
    },
    Login() {
      // this.login = true;
      this.$root.bus.$emit("12", this.login);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
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
      });
    this.getCooperativePartner();
    this.getOrganization();
    this.getAdultStudy();
    this.getExamination();
    let that = this;
    this.$root.bus.$on("bol", function(value) {
      that.listBol = value;
    });
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#countryHomePage .notice {
  margin: 10px 0 10px 15px;
}
#countryHomePage .notice li {
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
  width: 180px;
  margin-bottom: 5px;
}
.advertisement .homeContainerContent_content_img {
  margin: 10px 0 0 0;
}
.advertisement {
  width: 1200px;
  margin: 0 auto;
}
#countryHomePage .notice li a {
  font-size: 14px;
  color: #888888;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#countryHomePage .notice li:hover a {
  color: #d12d2c;
}
#countryHomePage5 #countryHomePage5_img {
  background-repeat: no-repeat;
  background-color: #ffffff;
  background-position: center;
}
#countryHomePage5 .countryHomePage5_img > div > div {
  background-size: 220px 217px;
}
#countryHomePage .people {
  width: 41px;
  height: 41px;
  margin: 0 auto;
  margin-top: 20px;
}
#countryHomePage .yingcang > a {
  margin: 10px 0 10px 20px;
  width: 80px;
}
#countryHomePage .yingcang {
  display: flex;
}
#countryHomePage .yingcang div {
  display: flex;
  flex-wrap: wrap;
  width: 550px;
}

#countryHomePage .yingcang div > li {
  font-size: 14px;
  margin: 10px 0 10px 20px;
}
#countryHomePage .container_left {
  width: 298px;
  height: 450px;
  background-color: #ffffff;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  box-sizing: border-box;
  position: relative
}
#countryHomePage .container_left > ul > ul{
position: absolute;
top: 0
}
#countryHomePage .erji_right {
  width: 672px;
  height: 450px;
  background-color: white;
  position: absolute;
  left: 297px;
  top: 272px;
  opacity: 1;
  display: none;
}
#countryHomePage .container_left > ul:hover {
  background-color: #d12d2c;
}
#countryHomePage .container_left > ul:hover li a {
  color: #fefefe;
}
#countryHomePage .container_left > ul:hover .erji_right {
  display: block;
}
#countryHomePage .container_left > ul:hover .container_mid {
  display: none;
}
#countryHomePage .container_left > ul > li {
  font-size: 14px;
  letter-spacing: 0px;
  color: #666666;
  width: 60px;
}

#countryHomePage .container_left > ul {
  display: flex;
  width: 248px;
  height: 22px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 25px;
}
#countryHomePage .container_left > ul > a {
  color: black;
}
#countryHomePage .container_left > ul li > a {
  color: black;
}
#aaaa {
  width: 298px;
  height: 480px;
}
#countryHomePage7 .countryHomePage7_bottom_text > li > a {
  font-size: 14px;
  letter-spacing: 1px;
  color: #999999;
  margin-right: 60px;
  margin-top: 10px;
}
#countryHomePage7 .countryHomePage7_bottom_text > li {
  list-style: none;
  margin-top: 10px
}
#countryHomePage7 .countryHomePage7_bottom_text {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 20px 0;
}
#countryHomePage7 {
  background-color: #ffffff;
  width: 1200px;
  margin: 0 auto;
}
#countryHomePage7 .el-tabs--top {
  width: 1142px;
  margin: 0 auto;
}
#countryHomePage7 .el-tabs__active-bar {
  background-color: #d12d2c;
}
#countryHomePage7 .el-tabs__item.is-active {
  color: #d12d2c;
}
#countryHomePage7 .el-tabs__item {
  color: #999999;
  font-size: 16px;
  letter-spacing: 2px;
}
#countryHomePage6 .countryHomePage6_content > a {
  display: block;
  padding: 20px 10px 26px;
  text-align: center;
}
#countryHomePage6 .countryHomePage6_content > a p {
  text-align: start;
}
#countryHomePage6 .countryHomePage6_content > a > p:nth-child(2) {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}
#countryHomePage6 .countryHomePage6_content > a > p:nth-child(2) > span {
  font-size: 14px;
  letter-spacing: 1px;
  color: #d12d2c;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
#countryHomePage6 .countryHomePage6_content > a > p:nth-child(3) {
  font-size: 16px;
  letter-spacing: 2px;
  color: #666666;
  width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
#countryHomePage6 .countryHomePage6_content > a > p:nth-child(4) > span {
  font-size: 14px;
  color: #d12d2c;
}
#countryHomePage6 .countryHomePage6_content > a > p:nth-child(4) {
  font-size: 24px;
  color: #d12d2c;
  margin-top: 15px;
}
#countryHomePage6 .countryHomePage6_content > a > img {
  width: 200px;
  height: 150px;
}
#countryHomePage6 .countryHomePage6_content {
  width: 230px;
  height: 322px;
  background-color: #ffffff;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.16);
  margin-bottom: 12px;
}
#countryHomePage6 {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.xihuan {
  text-align: center;
  font-size: 28px;
  letter-spacing: 3px;
  color: #333333;
  margin-bottom: 13px;
  margin-top: 25px;
}
#countryHomePage5 .zhezhao {
  width: 224px;
  height: 217px;
  position: absolute;
  top: 0;
  left: 0;
}
#countryHomePage5 .countryHomePage5_img > div > div:hover .zhezhao {
  background-color: #d88989;
  opacity: 0.3;
  z-index: 1;
}
#countryHomePage5 .countryHomePage5_img {
  background-image: url("../assets/未标题2.svg");
  width: 1238px;
  height: 525px;
  position: absolute;
  left: -19px;
}
#countryHomePage5 {
  width: 1238px;
  height: 525px;
  margin: 20px auto;
  position: relative;
}
#countryHomePage5 .countryHomePage5_img > div {
  width: 952px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 35px;
  margin-left: 260px;
}
#countryHomePage5 .countryHomePage5_img > div > div {
  width: 220px;
  height: 217px;
  background-position-x: center;
  background-position-y: 5px;
  background-repeat: no-repeat;
  margin-bottom: 20px;
  position: relative;
}
#countryHomePage5 .countryHomePage5_img > div > div .border {
  width: 220px;
  height: 217px;
  background-image: url("../assets/组 1 拷贝.png");
  border-right: 4px solid #ffffff;
  position: relative;
}
#countryHomePage5 .countryHomePage5_img .text1 {
  position: absolute;
  bottom: 5px;
  left: 10px;
}
#countryHomePage5 .countryHomePage5_img .text2 > p {
  width: 120px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

#countryHomePage5 .countryHomePage5_img .text2 {
  position: absolute;
  bottom: 7px;
  left: 90px;
}
#countryHomePage5 .countryHomePage5_img .text1 > p:nth-child(1) {
  font-size: 10px;
  color: #666666;
}
#countryHomePage5 .countryHomePage5_img .text1 > p:nth-child(2) {
  font-size: 14px;
  color: #666666;
}
#countryHomePage5 .countryHomePage5_img .text2 > p:nth-child(1) {
  font-size: 8px;
  color: #666666;
}
#countryHomePage5 .countryHomePage5_img .text2 > p:nth-child(2) {
  font-size: 12px;
  color: #666666;
}
#countryHomePage4 .coupons_right p:nth-child(1) {
  font-size: 14px;
  color: #666666;
  width: 112px;
  height: 40px;
}
#countryHomePage4 .coupons_right p:nth-child(2) {
  font-size: 34px;
  color: #fc7d17;
}
#countryHomePage4 .coupons_right p:nth-child(3) {
  font-size: 12px;
  color: #cccccc;
}
#countryHomePage4 .coupons_right {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 860px;
  padding: 0 20px 0;
}
#countryHomePage4 .coupons {
  display: flex;
  margin-top: 16px;
}
#countryHomePage4 .coupons_right > a {
  padding: 16px;
  background-color: #ebf2ea;
  display: flex;
  margin-bottom: 10px;
  padding: 0 10px 0 10px;
}
#countryHomePage4 .coupons_right > a > div:nth-child(1) {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#countryHomePage4 .coupons .coupons_left {
  background-image: url("../assets/减去 2.svg");
  background-position-y: 14px;
  background-repeat: no-repeat;
  width: 300px;
  height: 264px;
  text-align: center;
  position: relative;
}
#countryHomePage4 .coupons .coupons_left img:nth-child(2) {
  position: absolute;
  bottom: 0;
  left: 0;
}
#countryHomePage4 {
  width: 1200px;
  height: 340px;
  background-color: #ffffff;
  margin: 0 auto;
}
#countryHomePage3 .countryHomePage3_left_content > a {
  margin-bottom: 10px;
}
#countryHomePage3 .countryHomePage3_left_content > a > p:nth-child(3) {
  font-size: 12px;
  letter-spacing: 1px;
  color: #666666;
}
#countryHomePage3 .countryHomePage3_left_content > a > p:nth-child(4) {
  font-size: 14px;
  color: #d12d2c;
}
#countryHomePage3 .countryHomePage3_left_content div {
  display: flex;
}
#countryHomePage3 .countryHomePage3_left_content div > p {
  font-size: 12px;
  width: 160px;
  letter-spacing: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #d12d2c;
  padding-top: 10px;
}
#countryHomePage3 .countryHomePage3_left_content > a > img {
  width: 160px;
  height: 120px;
}
#countryHomePage3 .countryHomePage3_left_content {
  width: 336px;
  height: 382px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
#countryHomePage3 .countryHomePage3_left_img img {
  width: 100%;
  height: 422px;
}
#countryHomePage3 .countryHomePage3_left_img {
  width: 216px;
  height: 422px;
  background-color: #f8f0ff;
  text-align: center;
}
#countryHomePage3 .countryHomePage3_left_img > p {
  padding: 26px 0 4px 0;
  text-align: center;
  font-size: 24px;
  letter-spacing: 2px;
  color: #333333;
  position: absolute;
  left: 57px;
}
#countryHomePage3 .countryHomePage3_left_img {
  position: relative;
}
#countryHomePage3 .countryHomePage3_left_img > div {
  width: 30px;
  height: 0px;
  border: solid 2px #707070;
  left: 50%;
  position: absolute;
  left: 92px;
  top: 60px;
}
#countryHomePage3 {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}
#countryHomePage3 .countryHomePage3_left {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
#countryHomePage3 .countryHomePage3_left > div {
  display: flex;
  background-color: #ffffff;
  margin-bottom: 15px;
}
#countryHomePage3 .countryHomePage3_right {
  width: 590px;
  background-color: #ffffff;
}
#countryHomePage2 .countryHomePage2_change {
  width: 198px;
  height: 140px;
  background-color: #d12d2c;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 2px solid #f6f6f6;
  border-bottom: 2px solid #f6f6f6;
  border-left: 2px solid #d12d2c;
}
#countryHomePage2 .countryHomePage2_change i {
  font-size: 40px;
  color: #ffffff;
}
#countryHomePage2 .countryHomePage2_change > p {
  font-size: 20px;
  letter-spacing: 1px;
  color: #ffffff;
}
#countryHomePage2 .countryHomePage2_container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
#countryHomePage2 .countryHomePage2_img > a > div {
  width: 198px;
  height: 140px;
  background-color: #333333;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}
#countryHomePage2 .countryHomePage2_img:hover div {
  opacity: 0.1;
}
#countryHomePage2 .countryHomePage2_img {
  width: 198px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 2px solid #f6f6f6;
  border-bottom: 2px solid #f6f6f6;
  position: relative;
}
#countryHomePage2 .countryHomePage2_img > img {
  width: 100px;
}
#countryHomePage2 .countryHomePage2_img:nth-child(6n + 1) {
  border-left: none;
}
#countryHomePage2 .titel {
  height: 60px;
  border-bottom: 2px solid #f6f6f6;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
#countryHomePage2 .titel > div {
  width: 4px;
  height: 22px;
  background-color: #d12d2c;
  border-radius: 2px;
  margin: 0 14px 0 26px;
}
#countryHomePage2 .titel > p {
  font-family: Source Han Sans CN;
  font-size: 24px;
  letter-spacing: 2px;
  color: #333333;
}
#countryHomePage4 .titel {
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
#countryHomePage4 .titel > div {
  width: 4px;
  height: 22px;
  background-color: #d12d2c;
  border-radius: 2px;
  margin: 0 14px 0 26px;
}
#countryHomePage4 .titel > p {
  font-family: Source Han Sans CN;
  font-size: 24px;
  letter-spacing: 2px;
  color: #333333;
}
#countryHomePage2 {
  width: 1200px;
  height: 485px;
  background-color: #ffffff;
  border-radius: 4px;
  margin: 20px auto;
}
.countryHomePage_img {
  width: 100%;
  height: 450px;
  background-image: url("../assets/banner2.jpg.svg");
  background-position: center;
  min-width: 1200px;
}
#countryHomePage .xiaodu {
  margin-top: 16px;
  margin-left: 20px;
}
#countryHomePage
  .el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item.is-active {
  background-color: #ffffff;
  color: #d12d2c;
}
#countryHomePage .el-tabs--border-card {
  border: none;
  box-shadow: none;
  border-radius: 4px;
  opacity: 0.9;
}
#countryHomePage .el-tabs--border-card > .el-tabs__content {
  height: 120px;
  padding: 0;
}
#countryHomePage .el-tabs--border-card > .el-tabs__header .el-tabs__item {
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
#countryHomePage
  .el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:nth-child(1) {
  border-radius: 4px 0 0 0;
}
#countryHomePage
  .el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:nth-child(3) {
  border-radius: 0 4px 0 0;
}
#countryHomePage .btn1 {
  width: 84px;
  height: 37px;
  background-color: #d12d2c;
  border-radius: 4px;
  color: #ffffff;
  font-size: 14px;
  outline: none;
  border: none;
}
#countryHomePage .btn2 {
  width: 84px;
  height: 37px;
  border-radius: 4px;
  border: solid 2px #d12d2c;
  color: #d12d2c;
  font-size: 14px;
  outline: none;
}
#countryHomePage .login {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
#countryHomePage .container_right p {
  font-size: 12px;
  letter-spacing: 0px;
  color: #aeaeae;
}
#countryHomePage .el-icon-s-custom {
  font-size: 41px;
}
#countryHomePage .el-carousel__container {
  height: 360px;
  width: 634px;
}
#countryHomePage {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
#countryHomePage li {
  list-style: none;
}
#countryHomePage .el-tabs--border-card > .el-tabs__header {
  border-radius: 4px;
}
#countryHomePage .el-carousel__button {
  margin: 0 auto;
}
#countryHomePage .container_left > ul:not(:nth-child(8)) > li:nth-child(4) {
  background-image: url("../assets/小箭头.svg");
  width: 8px;
  height: 14px;
  margin-top: 5px;
}
#countryHomePage .container_left > ul > li:nth-child(1) > a {
  font-size: 16px;
  letter-spacing: 0px;
  color: #666666;
}
#countryHomePage .container_left > ul {
  display: flex;
  width: 248px;
  height: 22px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 7px 25px;
}
#countryHomePage .container_left > ul:hover {
  background-color: #d12d2c;
}
#countryHomePage .container_left > ul:hover li > a {
  color: #fefefe;
}
#countryHomePage .container_left > ul > li > a {
  font-size: 14px;
  letter-spacing: 0px;
  color: #666666;
}

#countryHomePage #list_last > li:first-child {
  font-size: 16px;
  width: 64px;
}
#countryHomePage #list_last > li {
  font-size: 14px;
  width: 28px;
}
#countryHomePage #list_last > li:nth-child(5) {
  background-image: url("../assets/小箭头.svg");
  width: 8px;
  height: 14px;
  margin-top: 5px;
  flex-direction: column;
  direction: ltr;
  flex-wrap: nowrap;
}
#countryHomePage .container_right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#countryHomePage .container_right > div {
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0.9;
}
#countryHomePage .container_right > div > div:nth-child(1) {
  width: 100%;
  height: 180px;
  flex-direction: column;
  text-align: center;
}
#countryHomePage .container_right > div > div:nth-child(1) > div {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  background-color: #ffffff;
  border-radius: 4px;
  box-sizing: border-box;
  opacity: 0.9;
}
</style>