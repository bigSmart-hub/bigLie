<template>
  <div id="mechanism3">
    <img src="../assets/banner2@2x.png" alt />
    <div class="mechanism1_container">
      <!-- 左边区域 -->
      <div class="mechanism1_left">
        <!-- 全部课程详细 -->
        <div class="mechanism1_type">
          <el-tabs v-model="activeName" @tab-click="handleClick" class="tabs">
            <el-tab-pane label="全部课程" name="first" class="mechanism1_content1">
              <div v-for="(item,index) in 18" :key="index">
                <img src="../assets/c37349954c1362ae001ca9445234035a26737ab8.svg" alt />
                <p>小学教育小学教育</p>
                <div>
                  <p>自学考试</p>
                  <span class="span">￥2000</span>
                </div>
              </div>
              <div class="block">
                <el-pagination
                  :current-page="currentPage4"
                  :page-sizes="[100, 200, 300, 400]"
                  :page-size="100"
                  layout="  prev, pager, next, jumper"
                  :total="400"
                ></el-pagination>
              </div>
            </el-tab-pane>
            <el-tab-pane label="课程分类" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="课程分类" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="课程分类" name="fourth">定时任务补偿</el-tab-pane>
            <el-tab-pane label="课程分类" name="five">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <!-- 右边区域 -->
      <div class="mechanism1_right">
        <!-- 信息选项卡 -->
        <el-tabs type="border-card" class="tabs2" v-model="activeName1">
          <el-tab-pane label="机构信息" name="first">
            <div class="jigouA">
              <img src="../assets/矩形 16@2x.png" alt />
              <p>机构名称</p>
            </div>
            <div class="jigouB">
              <div>
                <p>机构服务保障:</p>
                <div>
                  <div>
                    <img src="../assets/形状 11.png" alt />
                    <p>代价保障</p>
                  </div>
                  <div>
                    <img src="../assets/形状 12.png" alt />
                    <p>教学保障</p>
                  </div>
                  <div>
                    <img src="../assets/形状 13.png" alt />
                    <p>退款保障</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="jigouC">
              <div>
                <span>10</span>
                <p>课程数量</p>
              </div>
              <div>
                <span>0</span>
                <p>读报量</p>
              </div>
              <div>
                <span>51</span>
                <p>关注量</p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="学校动态" name="second">
            <div v-for="(item,index) in 4" :key="index" class="mechanism1_right_second">
              <img src="../assets/pexels-photo-716276@2x.png" alt />
              <p>学校动态标题信息学校动态标题信息</p>
            </div>
          </el-tab-pane>
        </el-tabs>
        <!-- 优惠券 -->
        <div class="echanism1_right_coupon">
          <div class="titel">
            <div></div>
            <p>优惠券</p>
          </div>
          <img src="../assets/01.png" alt />
          <img src="../assets/01.png" alt />
        </div>
        <!-- 违规信息举报 -->
        <div class="echanism1_right_report">
          <div class="titel">
            <div></div>
            <p>违规信息举报</p>
          </div>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxxxxxxxx</p>
          <p>xxxxxxxxxxxxxxx</p>
          <button>在线投诉举报</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      activeName1: "first",
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
};
</script>
<style>
#mechanism3 .block {
  margin: 0 auto;
}
#mechanism3 .titel {
  height: 60px;
  border-bottom: 2px solid #f6f6f6;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
#mechanism3 .titel > div {
  width: 4px;
  height: 22px;
  background-color: #d12d2c;
  border-radius: 2px;
  margin: 0 14px 0 26px;
}
#mechanism3 .titel > p {
  font-size: 20px;
  letter-spacing: 2px;
  color: #666666;
}
#mechanism3 .mechanism1_type {
  width: 880px;
  background-color: #ffffff;
  margin-top: 20px;
}
#mechanism3 .mechanism1_type .el-tabs__nav {
  margin-left: 25px;
}
#mechanism3 .mechanism1_content1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20px 0px 20px;
}
#mechanism3 .mechanism1_content1 > div img {
  width: 260px;
  height: 173px;
}
#mechanism3 .mechanism1_content1 > div > p {
  font-size: 16px;
  color: #333333;
}
#mechanism3 .mechanism1_content1 > div {
  margin-bottom: 18px;
}
#mechanism3 .mechanism1_content1 > div > div {
  display: flex;
  justify-content: space-between;
}
#mechanism3 .mechanism1_content1 > div > div > p {
  font-size: 12px;
  color: #999999;
}
#mechanism3 .mechanism1_content1 > div > div > .span {
  font-size: 16px;
  color: #ff7200;
}
#mechanism3 {
  width: 1200px;
  margin: 0 auto;
}
#mechanism3 > img {
  margin-top: 20px;
}
#mechanism3 .echanism1_right_report > p {
  font-size: 12px;
  letter-spacing: 1px;
  color: #666666;
  white-space: pre-wrap;
  width: 240px;
  padding: 10px 25px 0 25px;
}
#mechanism3 .echanism1_right_report > button {
  width: 240px;
  height: 36px;
  background-color: #d12d2c;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 2px;
  color: #ffffff;
  outline: none;
  border: none;
  margin-top: 20px;
  margin-left: 20px;
}
#mechanism3 .echanism1_right_report {
  width: 280px;
  height: 356px;
  background-color: #ffffff;
  border-radius: 4px;
  margin-top: 20px;
}
#mechanism3 .echanism1_right_coupon {
  margin-top: 20px;
  width: 280px;
  height: 360px;
  background-color: #ffffff;
  border-radius: 4px;
  text-align: center;
}
#mechanism3 .echanism1_right_coupon img {
  width: 240px;
  height: 120px;
  margin-bottom: 20px;
  margin-top: 10px;
}
#mechanism3 .tabs2 .el-tabs__item {
  width: 140px;
  font-size: 16px;
  color: #999999;
}
#mechanism3 .tabs .el-tabs__item.is-active {
  color: #d12d2c;
}
#mechanism3 .tabs2 .el-tabs__item.is-active {
  color: #d12d2c;
}
#mechanism3 .tabs .el-tabs__item {
  font-size: 16px;
  color: #cccccc;
  height: 60px;
  line-height: 60px;
}
#mechanism3 .tabs2 .el-tabs__item {
  font-size: 16px;
  color: #cccccc;
  height: 46px;
  line-height: 46px;
  text-align: center;
}
#mechanism3 .tabs .el-tabs__active-bar {
  background-color: #d12d2c;
}
#mechanism3 .tabs2 .el-tabs__active-bar {
  background-color: #d12d2c;
}
#mechanism3 .jigouC span {
  font-size: 20px;
  color: #ff7200;
}
#mechanism3 .jigouC p {
  font-size: 12px;
  color: #999999;
}
#mechanism3 .jigouC {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
#mechanism3 .jigouC > div {
  flex-grow: 1;
  text-align: center;
}
#mechanism3 .jigouC > div:nth-child(2) {
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
}
#mechanism3 .jigouA {
  text-align: center;
  margin-bottom: 20px;
}
#mechanism3 .jigouA > p {
  font-size: 20px;
  color: #333333;
}
#mechanism3 .jigouB {
  padding: 0 10px;
}
#mechanism3 .jigouB p {
  font-size: 12px;
  color: #999999;
}
#mechanism3 .jigouB > div > div > div {
  text-align: center;
}
#mechanism3 .jigouB > div > div {
  display: flex;
  border-bottom: 1px solid #dddddd;
  justify-content: space-between;
  margin-top: 12px;
  padding: 0 15px 10px 15px;
}
#mechanism3 .jigouB img {
  width: 30px;
  height: 30px;
}
#mechanism3 .mechanism1_right_second {
  display: flex;
  padding: 10px;
}
#mechanism3 .mechanism1_right_second img {
  width: 94px;
  height: 71px;
}
#mechanism3 .mechanism1_right_second p {
  font-size: 14px;
  color: #999999;
  margin-left: 10px;
}
#mechanism3 .mechanism1_right {
  width: 280px;
  margin-top: 20px;
}
#mechanism3 .mechanism1_container {
  display: flex;
  justify-content: space-between;
}
</style>