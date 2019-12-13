<template>
  <!-- 学历课程 -->
  <div id="searchList">
    <!-- 左边全部区域 -->
    <div class="searchList_left">
      <!-- 下拉区域选择框 -->
      <div>
        <ul>
          <li>平台首页</li>
          <li>
            <img src="../assets/箭头.svg" alt />
          </li>
          <li>
            <el-form ref="form" :model="sizeForm" size="mini">
              <el-form-item label>
                <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </li>
          <li>
            <img src="../assets/箭头.svg" alt />
          </li>
          <li>
            <el-form ref="form" :model="sizeForm" size="mini">
              <el-form-item label>
                <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </li>
          <li>
            <img src="../assets/箭头.svg" alt />
          </li>
          <li>
            <el-form ref="form" :model="sizeForm" size="mini">
              <el-form-item label>
                <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </li>
        </ul>
      </div>
      <!-- 学历选择表单 -->
      <div>
        <ul>
          <p>推荐品牌：</p>
          <li v-for="(item,index) in contents" :key="index">
            <a href>
              <img :src="item.src" alt />
            </a>
          </li>
        </ul>
        <ul>
          <p>报名地点：</p>
        </ul>
        <ul>
          <p>学历类型：</p>
          <li>自考</li>
          <li>成考</li>
          <li>网教</li>
          <li>研究生</li>
          <li>高职</li>
          <li>高专</li>
        </ul>
        <ul>
          <p>学历层次：</p>
          <li>全部</li>
          <li>高中起点专科</li>
          <li>专科升本科</li>
          <li>研究生</li>
        </ul>
        <ul>
          <p>上课时段：</p>
          <li>不限</li>
          <li>白天班</li>
          <li>晚班</li>
          <li>周末班</li>
          <li>周六班</li>
          <li>周日班</li>
          <li>全日制</li>
          <li>寒暑假</li>
          <li>其他</li>
        </ul>
        <ul>
          <p>上课方式：</p>
          <li>不限</li>
          <li>面授</li>
          <li>网络</li>
          <li>面授+网络</li>
        </ul>
      </div>
      <div>
        <!-- 列表头部 -->
        <div class="searchList_left_titel">
          <div>
            <p>综合</p>
            <p>报名人数</p>
            <p>人气指数</p>
          </div>
          <p>
            共
            <span>5972</span>个专业
          </p>
        </div>
        <!-- 列表内容 -->
        <div class="searchList_left_content">
          <div v-for="(item,index) in allData.data" :key="index">
            <a href>
              <div class="searchList_left_content_img">
                <img :src="'http://118.24.43.196:9999'+item.logo" alt />
              </div>
              <div>
                <div class="zhuanye">{{item.title}}</div>
                <div class="searchList_left_content_text">
                  <p>招生学校：四川师范大学某某学院</p>
                  <p>专业层次：{{item.category.name}}</p>
                </div>
                <div class="searchList_left_content_text1">
                  <p>四川中教网信息科技有限公司</p>
                  <img src="../assets/84a550ffc60b1e042cd585e9d33ec05.svg" alt />
                </div>
                <div class="searchList_left_content_text2">
                  <p>白天班</p>
                  <p>周末班</p>
                  <p>周六班</p>
                </div>
                <div class="searchList_left_content_text4">
                  <i class="el-icon-location"></i>
                  <p>四川省 成都市 青羊区</p>
                  <p>
                    <span>268</span> 人看过
                  </p>
                  <p>
                    <span>196</span> 人报读
                  </p>
                </div>
              </div>
              <div class="searchList_left_content3">
                <div>
                  ￥
                  <span>2980</span>
                </div>
                <div>
                  <span>券</span>
                  <span>200元</span>
                </div>
                <button>查看详情</button>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- 分页 -->
      <div class="block">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="allData.current_page"
          :page-size="15"
          layout="prev, pager, next, jumper"
          :total="allData.total"
        ></el-pagination>
      </div>
    </div>
    <!-- 右边全部区域 -->
    <div class="searchList_right">
      <!-- 从上到下依次排列 -->
      <!-- 咨询组件 -->
      <consultation />
      <div class="searchList_right_on1">
        <div>
          <p>中国教育在线公共服务平台</p>
          <p>权威/专业/服务保障</p>
        </div>
        <div>
          <div v-for="(item,index) in [1,2,3,4]" :key="index" class="searchList_right_on1_text">
            <p>不知道课程该如何选择？</p>
            <p>近数百名教育行业资深顾问，15分钟为您提供个性化的学习方案</p>
          </div>
          <button>享受省心的选课服务</button>
        </div>
      </div>
      <!-- 推荐机构组件 -->
      <recommenderAgency />
      <a href>
        <img src="../assets/5.svg" alt class="five" />
      </a>
      <div class="searchList_right_on2">
        <div class="titel">
          <div></div>
          <p>热点资讯</p>
        </div>
        <a href="#">
          <img src="../assets/4.svg" alt />
        </a>
        <a href="#">
          <p>新加坡留学｜AEIS考试行前准备</p>
        </a>
        <a href="#">
          <p>新加坡留学｜AEIS考试行前准备</p>
        </a>
      </div>
      <div class="searchList_right_on3">
        <div class="titel">
          <div></div>
          <p>常见问题</p>
        </div>
        <div>
          <a href="#" v-for="(item,index) in [1,2,3,4,1,1,1]" :key="index">
            <p>常见问题文本常见问题文本？</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import consultation from "../components/consultation";
import recommenderAgency from "../components/recommenderAgency";

export default {
  data() {
    return {
      allData: {
        data: [],
        total: 0,
        current_page: 10
      },
      currentPage:"1",
      listData: [],
      contents: [
        {
          src: require("@/assets/图层4.svg")
        },
        {
          src: require("@/assets/图层4.svg")
        },
        {
          src: require("@/assets/图层4.svg")
        },
        {
          src: require("@/assets/图层4.svg")
        },
        {
          src: require("@/assets/图层4.svg")
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,

      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  mounted() {
    this.searchListData("1");
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.searchListData(val)
    },
    searchListData(page) {
      fetch(
        // `/api/index/contents`,
        `/api/search/courses?keywords=${this.$route.params.key}&page=${page}&page_size=15`,

        {
          // must match 'Content-Type' header
          headers: {
            "content-type": "application/json"
          },
          method: "GET" // *GET, POST, PUT, DELETE, etc.
          // mode: 'cors', // no-cors, cors, *same-origin
        }
      )
        .then(res => res.json())
        .then(res => {
          this.allData = res;
        });
    }
  },

  components: {
    consultation,
    recommenderAgency
  }
};
</script>
<style >
#searchList .searchList_right_on3 {
  margin-top: 20px;
  height: 230px;
  background-color: #ffffff;
}
#searchList .searchList_right_on3 a > p {
  font-size: 12px;
  color: #999999;
  margin-bottom: 5px;
}
#searchList .searchList_right_on3 > div:nth-child(2) {
  padding: 10px 20px;
}
#searchList .searchList_right_on2 > a > p {
  font-size: 12px;
  color: #999999;
  margin-top: 8px;
}
#searchList .searchList_right_on2 {
  height: 186px;
  background-color: #ffffff;
  text-align: center;
}
#searchList .titel {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 17px 0 5px 0;
}
#searchList .titel > div {
  width: 4px;
  height: 20px;
  background-color: #d12d2c;
  border-radius: 2px;
  margin: 0 11px 0 20px;
}
#searchList .titel > p {
  font-family: Source Han Sans CN;
  font-size: 20px;
  letter-spacing: 2px;
  color: #666666;
}
#searchList .searchList_right_on1 button {
  font-size: 16px;
  color: #d12d2c;
  width: 199px;
  height: 36px;
  border-radius: 4px;
  border: solid 1px #d12d2c;
  margin: 0 auto;
}
#searchList .five {
  margin: 20px 0;
}
#searchList .searchList_right_on1_text {
  height: 68px;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 10px;
}
#searchList .searchList_right_on1_text:nth-child(4) {
  border: none;
}
#searchList .searchList_right_on1_text > p:nth-child(1) {
  font-size: 12px;
  color: #666666;
  margin-bottom: 6px;
}
#searchList .searchList_right_on1_text > p:nth-child(2) {
  font-size: 12px;
  color: #999999;
}
#searchList .searchList_right_on1 > div:nth-child(2) {
  padding: 20px;
}
#searchList .searchList_right_on1 {
  width: 239px;
  background-color: #ffffff;
  margin-top: 20px;
}
#searchList .searchList_right_on1 > div:nth-child(1) {
  height: 100px;
  background-image: linear-gradient(to right, #ffc400, #fd8d14);
}
#searchList .searchList_right_on1 > div:nth-child(1) > p:nth-child(1) {
  font-size: 17px;
  color: #ffffff;
  text-align: center;
  padding-top: 23px;
}
#searchList .searchList_right_on1 > div:nth-child(1) > p:nth-child(2) {
  font-size: 16px;
  color: #ffffff;
  text-align: center;
}
#searchList .el-pagination {
  display: flex;
  justify-content: center;
  margin: 78px 0 100px 0;
}
#searchList .searchList_left_content_img {
  margin-right: 20px;
}
#searchList .zhuanye {
  font-size: 20px;
  color: #333333;
}
#searchList .searchList_left_content > div > a > div:nth-child(2) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 21px;
  border-right: 1px solid #dddddd;
}
#searchList .searchList_left_content > div > a > div:nth-child(2) > div {
  display: flex;
  align-items: center;
}
#searchList .searchList_left_content_text4 > p:nth-child(2) {
  font-size: 14px;
  color: #666666;
  margin-right: 200px;
  margin-left: 20px;
}
#searchList .searchList_left_content_text4 > p {
  font-size: 12px;
  color: #999999;
}
#searchList .searchList_left_content_text4 > p > span {
  color: #278dff;
}
#searchList .searchList_left_content_text4 > i {
  font-size: 14px;
  color: #666666;
}
#searchList .searchList_left_content_text2 > p {
  width: 54px;
  height: 18px;
  text-align: center;
  border-radius: 9px;
  border: solid 1px #d12d2c;
  font-size: 12px;
  color: #d12d2c;
  margin-right: 10px;
}
#searchList .searchList_left_content_text1 > p {
  font-size: 16px;
  color: #333333;
  margin-right: 20px;
}
#searchList .searchList_left_content_text > p {
  font-size: 14px;
  color: #999999;
  margin-right: 62px;
}
#searchList .searchList_left_content > div {
  margin: 25px 20px;
}
#searchList .searchList_left_content .searchList_left_content3 {
  width: 186px;
  text-align: center;
  padding-top: 30px;
}
#searchList
  .searchList_left_content
  .searchList_left_content3
  > div:nth-child(1) {
  font-size: 20px;
  color: #999999;
}
#searchList
  .searchList_left_content
  .searchList_left_content3
  > div:nth-child(1)
  > span {
  font-size: 30px;
  color: #ff7200;
  margin-left: -10px;
}
#searchList
  .searchList_left_content
  .searchList_left_content3
  > div:nth-child(2) {
  display: flex;
  justify-content: center;
  margin: 7px 0 40px 0;
}
#searchList
  .searchList_left_content
  .searchList_left_content3
  > div:nth-child(2)
  > span:nth-child(1) {
  display: block;
  text-align: center;
  width: 20px;
  height: 18px;
  background-color: #ff7200;
  font-size: 12px;
  color: #ffffff;
  margin-right: 5px;
}
#searchList .searchList_left_content .searchList_left_content3 > button {
  width: 100px;
  height: 26px;
  border-radius: 4px;
  border: solid 1px #d12d2c;
  font-size: 14px;
  color: #d12d2c;
  outline: none;
  box-shadow: none;
}
#searchList
  .searchList_left_content
  .searchList_left_content3
  > div:nth-child(2)
  > span:nth-child(2) {
  font-size: 12px;
  color: #999999;
}
#searchList .searchList_left_content div a {
  display: flex;
}
#searchList .searchList_left_titel {
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  padding: 20px 0;
  border-bottom: 1px solid #dddddd;
}
#searchList .searchList_left_titel > div {
  display: flex;
}
#searchList .searchList_left_titel > div > p {
  margin-right: 40px;
}
#searchList .searchList_left_titel p {
  font-size: 14px;
  color: #666666;
}
#searchList .searchList_left_titel p span {
  font-family: Source Han Sans CN;
  font-size: 14px;
  color: #d12d2c;
  margin: 0 12px;
}
#searchList .el-select > .el-input {
  width: 92px;
}
#searchList {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
#searchList .el-form-item {
  margin: 0;
}
#searchList .searchList_left > div:nth-child(1) li {
  list-style: none;
  font-size: 14px;
  letter-spacing: -1px;
  color: #666666;
  display: flex;
  align-items: center;
  margin-right: 13px;
}
#searchList .searchList_left > div:nth-child(2) li {
  list-style: none;
  font-size: 14px;
  letter-spacing: -1px;
  color: #666666;
  display: flex;
  align-items: center;
  margin-right: 13px;
}
#searchList ul > p {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666666;
}
#searchList .searchList_left > div:nth-child(1) {
  height: 60px;
  display: flex;
  align-items: center;
}
#searchList .searchList_left > div:nth-child(1) > ul {
  display: flex;
  padding: 0 20px;
}
#searchList .searchList_left > div:nth-child(3) {
  width: 940px;
  height: 2920px;
  background-color: #ffffff;
  margin-top: 20px;
}
#searchList .searchList_left > div:nth-child(2) {
  height: 240px;
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#searchList .searchList_left > div:nth-child(2) > ul {
  display: flex;
  flex-wrap: wrap;
}
#searchList .searchList_left > div:nth-child(2) > ul > li {
  margin: 0 10px;
}
#searchList .searchList_right {
  width: 240px;
  margin-top: 60px;
}
</style>