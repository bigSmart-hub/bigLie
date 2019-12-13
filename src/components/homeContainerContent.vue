<template>
  <div>
    <!-- 内容一 -->
    <div id="homeContainerContent">
      <div class="titel_img">
        <div class="titel">
          <div></div>
          <p>{{titelName}}</p>
        </div>
        <div class="img">
          <img :src="imgUrl" alt />
        </div>
      </div>
      <!-- 选项卡内容 -->
      <div class="homeContainerContent_content">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="childrenName" name="first">
            <div id="text">
              <div v-for="(item,index) in items" :key="index">
                <img :src="item.logo" alt />
                <p class="text1">{{item.title}}</p>
              </div>
            </div>
            <!-- 底部内容 -->
            <div class="text_bottom">
              <!-- 底部左边内容 -->
              <div class="text_bottom_left">
                <div>
                  <div></div>
                  <p>新闻资讯</p>
                </div>
                <div>
                  <div>
                    <p>河南高职高专批开录 特色专科受青睐</p>
                    <img src alt />
                  </div>
                  <div>
                    <a href v-for="(item,index) in contents" :key="index">{{item.title}}</a>
                  </div>
                </div>
              </div>
              <!-- 底部右边内容 -->
              <div class="text_bottom_right">
                <div>
                  <div></div>
                  <p>推荐机构</p>
                </div>
                <!-- 底部右边轮播图 -->
                <div>
                  <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="(item,index) in items2" :key="index">
                      <img :src="item.src" alt id="samll_img" />
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="childrenName1" name="second">
            <div id="text">
              <div v-for="(item1,index) in items1" :key="index">
                <img :src="item1.logo" alt />
                <p class="text1">{{item1.title}}</p>
              </div>
            </div>
            <!-- 底部内容 -->
            <div class="text_bottom">
              <!-- 底部左边内容 -->
              <div class="text_bottom_left">
                <div>
                  <div></div>
                  <p>新闻资讯</p>
                </div>
                <div>
                  <div>
                    <p>河南高职高专批开录 特色专科受青睐</p>
                    <img src alt />
                  </div>
                  <div>
                    <a href v-for="(item1,index) in contents1" :key="index">{{item1.title}}</a>
                  </div>
                </div>
              </div>
              <!-- 底部右边内容 -->
              <div class="text_bottom_right">
                <div>
                  <div></div>
                  <p>推荐机构</p>
                </div>
                <!-- 底部右边轮播图 -->
                <div>
                  <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="(item,index) in items2" :key="index">
                      <img :src="item.src" alt id="samll_img" />
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="childrenName2" name="third">
            <div id="text">
              <div v-for="(item,index) in items2" :key="index">
                <img :src="item.logo" alt />
                <p class="text1">{{item.title}}</p>
              </div>
            </div>
            <!-- 底部内容 -->
            <div class="text_bottom">
              <!-- 底部左边内容 -->
              <div class="text_bottom_left">
                <div>
                  <div></div>
                  <p>新闻资讯</p>
                </div>
                <div>
                  <div>
                    <p>河南高职高专批开录 特色专科受青睐</p>
                    <img src alt />
                  </div>
                  <div>
                    <a href v-for="(item,index) in contents" :key="index">{{item.title}}</a>
                  </div>
                </div>
              </div>
              <!-- 底部右边内容 -->
              <div class="text_bottom_right">
                <div>
                  <div></div>
                  <p>推荐机构</p>
                </div>
                <!-- 底部右边轮播图 -->
                <div>
                  <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="(item,index) in items2" :key="index">
                      <img :src="item.src" alt id="samll_img" />
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="childrenName3" name="fourth">
            <div id="text">
              <div v-for="(item,index) in items3" :key="index">
                <img :src="item.logo" alt />
                <p class="text1">{{item.title}}</p>
              </div>
            </div>
            <!-- 底部内容 -->
            <div class="text_bottom">
              <!-- 底部左边内容 -->
              <div class="text_bottom_left">
                <div>
                  <div></div>
                  <p>新闻资讯</p>
                </div>
                <div>
                  <div>
                    <p>河南高职高专批开录 特色专科受青睐</p>
                    <img src alt />
                  </div>
                  <div>
                    <a href v-for="(item,index) in contents" :key="index">{{item.title}}</a>
                  </div>
                </div>
              </div>
              <!-- 底部右边内容 -->
              <div class="text_bottom_right">
                <div>
                  <div></div>
                  <p>推荐机构</p>
                </div>
                <!-- 底部右边轮播图 -->
                <div>
                  <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="(item,index) in items2" :key="index">
                      <img :src="item.src" alt id="samll_img" />
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="childrenName4" name="five">
            <div id="text">
              <div v-for="(item,index) in items4" :key="index">
                <img :src="item.logo" alt />
                <p class="text1">{{item.title}}</p>
              </div>
            </div>
            <!-- 底部内容 -->
            <div class="text_bottom">
              <!-- 底部左边内容 -->
              <div class="text_bottom_left">
                <div>
                  <div></div>
                  <p>新闻资讯</p>
                </div>
                <div>
                  <div>
                    <p>河南高职高专批开录 特色专科受青睐</p>
                    <img src alt />
                  </div>
                  <div>
                    <a href v-for="(item,index) in contents" :key="index">{{item.title}}</a>
                  </div>
                </div>
              </div>
              <!-- 底部右边内容 -->
              <div class="text_bottom_right">
                <div>
                  <div></div>
                  <p>推荐机构</p>
                </div>
                <!-- 底部右边轮播图 -->
                <div>
                  <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="(item,index) in items2" :key="index">
                      <img :src="item.src" alt id="samll_img" />
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <img src="../assets/条04.svg" alt class="homeContainerContent_content_img" />
    <!-- 内容二 -->
    <Content1 />
    <!-- 内容三 -->
    <Content2 />
    <!-- 内容四 -->
    <Content3 />
    <!-- 内容五 -->
    <Content4 />
    <!-- 内容六 -->
    <Content5 />
    <!-- 内容七 -->
    <Content6 />
    <img src="../assets/条06.svg" alt class="homeContainerContent_content_img" />
  </div>
</template>
<script>
import Content1 from "./content1";
import Content2 from "./content2";
import Content3 from "./content3";
import Content4 from "./content4";
import Content5 from "./content5";
import Content6 from "./content6";
export default {
  components: {
    Content1,
    Content2,
    Content3,
    Content4,
    Content5,
    Content6
  },
  data() {
    return {
      currentData:"",
      category_id: "",
      imgUrl: "",
      titelName: "",
      activeName: "first",
      childrenName: "",
      childrenName1: "",
      childrenName2: "",
      childrenName3: "",
      childrenName4: "",
      contents: "",
      contents1: "",
      contents2: "",
      contents3: "",
      contents4: "",
      items1: "",
      items: "",
      items2: "",
      items3: "",
      items4: ""
    };
  },
  mounted() {
    this.$root.bus.$on("province", this.getCurrentProvince);
  },
  created() {},
  methods: {
    getCurrentProvince(id) {
      console.log(id);
      fetch(`/api/index/contents`, {
        // must match 'Content-Type' header
        headers: {
          "content-type": `application/json/province=${id}`
        },
        method: "GET" // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, cors, *same-origin
      })
        .then(data => {
          return data.json();
        })
        .then(res => {
          console.log(res);
          this.currentData = res[0]
          this.$root.bus.$emit("content1", res[1]);
          // this.$root.bus.$emit("content2", res[2]);
          // this.$root.bus.$emit("content3", res[3]);
          // this.$root.bus.$emit("content4", res[4]);
          // this.$root.bus.$emit("content5", res[5]);
          // this.$root.bus.$emit("content6", res[6]);
        });
    },
    handleClick(tab, e) {
      console.log(tab, e);

      fetch(`/api/index/contents/`, {
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
          console.log(res);
          let arr = [];
          for (let key in res) {
            arr.push(res[key]);
          }
        });
    }
  }
};
</script>
<style>
#homeContainerContent .el-tabs__item.is-active {
  color: #d12d2c;
}
.homeContainerContent_content_img {
  margin-bottom: 20px;
}
#homeContainerContent {
  margin-bottom: 20px;
}
#homeContainerContent .el-carousel__indicator--horizontal {
  padding: 12px 10px;
  margin-bottom: -16px;
}
#homeContainerContent .el-carousel__button {
  height: 10px;
  width: 10px;
  background-color: #d12d2c;
  border-radius: 50%;
}
#homeContainerContent .el-carousel__arrow {
  border: none;
  background-color: transparent;
  font-size: 34px;
}
#homeContainerContent .el-icon-arrow-left::before {
  color: #cccccc;
}
#homeContainerContent .el-icon-arrow-right::before {
  color: #cccccc;
}
#homeContainerContent .el-carousel__arrow--left {
  left: 0;
}
#homeContainerContent .el-carousel__arrow--right {
  right: 0;
}
#homeContainerContent .el-carousel--horizontal {
  height: 192px;
}
#homeContainerContent .el-carousel__container {
  height: 192px;
}
#homeContainerContent #samll_img {
  display: block;
  margin: 0 auto;
}
a {
  text-decoration: none;
}
#homeContainerContent .text_bottom_right > div:nth-child(1) {
  display: flex;
}
#homeContainerContent .text_bottom_right > div:nth-child(1) > p {
  font-family: Microsoft YaHei;
  font-size: 20px;
  letter-spacing: 2px;
  color: #333333;
}
#homeContainerContent .text_bottom_right > div:nth-child(1) > div {
  width: 4px;
  height: 20px;
  background-color: #d12d2c;
  border-radius: 2px;
  margin-right: 13px;
  margin-top: 3px;
}
#text {
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: space-between;
}
#text .text1 {
  font-family: Source Han Sans CN;
  font-size: 12px;
  color: #666666;
}
.text_bottom {
  height: 226px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
#homeContainerContent .text_bottom_right {
  width: 229px;
  height: 100%;
}
#homeContainerContent .text_bottom_left {
  width: 615px;
  height: 100%;
}
#homeContainerContent .text_bottom_left > div:nth-child(1) {
  height: 44px;
  display: flex;
}
#homeContainerContent .text_bottom_left > div:nth-child(1) > p {
  font-family: Microsoft YaHei;
  font-size: 20px;
  letter-spacing: 2px;
  color: #333333;
}
#homeContainerContent .text_bottom_left > div:nth-child(2) {
  height: 180px;
  display: flex;
}
#homeContainerContent .text_bottom_left > div:nth-child(2) > div:nth-child(1) {
  width: 242px;
  height: 180px;
  background-color: aqua;
  display: flex;
  flex-direction: column-reverse;
}
#homeContainerContent .text_bottom_left > div:nth-child(2) > div:nth-child(2) {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#homeContainerContent
  .text_bottom_left
  > div:nth-child(2)
  > div:nth-child(2)
  > a:nth-child(1) {
  font-size: 16px;
  color: #333333;
}
#homeContainerContent
  .text_bottom_left
  > div:nth-child(2)
  > div:nth-child(2)
  > a:not(:first-child) {
  font-size: 14px;
  color: #666666;
}
#homeContainerContent
  .text_bottom_left
  > div:nth-child(2)
  > div:nth-child(2)
  > a:hover {
  color: #d12d2c;
}
#homeContainerContent
  .text_bottom_left
  > div:nth-child(2)
  > div:nth-child(1)
  > p {
  width: 242px;
  height: 30px;
  background-color: #000000;
  opacity: 0.5;
  font-size: 12px;
  letter-spacing: 1px;
  color: #ffffff;
  text-align: center;
  line-height: 30px;
}
#homeContainerContent .text_bottom_left > div:nth-child(1) > div {
  width: 4px;
  height: 20px;
  background-color: #d12d2c;
  border-radius: 2px;
  margin-right: 13px;
  margin-top: 3px;
}
#homeContainerContent .el-tab-pane {
  height: 438px;
  margin-top: 19px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 26px;
}
#homeContainerContent {
  width: 100%;
  height: 563px;
  background-color: #ffffff;
  display: flex;
}
#homeContainerContent .titel_img {
  width: 280px;
  height: 100%;
}
#homeContainerContent .titel_img .img {
  display: flex;
  height: 503px;
  align-items: center;
}
#homeContainerContent .titel_img .img > img {
  width: 230px;
  height: 438px;
  margin: 0 auto;
}
#homeContainerContent .titel_img .titel {
  height: 60px;
  border-bottom: 2px solid #f6f6f6;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
#homeContainerContent .titel_img .titel > div {
  width: 4px;
  height: 22px;
  background-color: #d12d2c;
  border-radius: 2px;
  margin: 0 14px 0 26px;
}
#homeContainerContent .titel_img .titel > p {
  font-family: Source Han Sans CN;
  font-size: 24px;
  letter-spacing: 2px;
  color: #333333;
}
#homeContainerContent .homeContainerContent_content {
  flex-grow: 1;
}
#homeContainerContent .el-tabs__nav-scroll {
  height: 60px;
  border-bottom: 2px solid #f6f6f6;
  box-sizing: border-box;
  padding-left: 64px;
}
#homeContainerContent .el-tabs__nav-wrap::after {
  height: 0;
}
#homeContainerContent .el-tabs__item {
  color: #999999;
  font-family: Source Han Sans CN;
  font-size: 16px;
  height: 58px;
  line-height: 58px;
}
#homeContainerContent .el-tabs__active-bar {
  background-color: #d12d2c;
}
</style>