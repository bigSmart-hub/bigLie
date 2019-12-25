<template>
  <div id="mechanism1">
    <img src="../assets/banner2@2x.png" alt />

    <!-- 推荐课程 -->
    <div class="mechanism1_top">
      <div>
        <div class="titel">
          <div></div>
          <p>推荐课程</p>
        </div>
        <el-carousel arrow="always" :autoplay="false">
          <el-carousel-item v-for="item in 4" :key="item">
            <div class="lunbo">
              <div v-for="(item,index) in mechanism1Data.recommond" :key="index">
                <img src="../assets/矩形 10@2x.png" alt />
                <div>
                  <p>{{item.title}}</p>
                  <p>人气0</p>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="mechanism1_container">
      <!-- 左边区域 -->
      <div class="mechanism1_left">
        <!-- 全部课程详细 -->
        <div class="mechanism1_type">
          <div class="titel">
            <div></div>
            <p>全部课程</p>
          </div>
          <div class="mechanism1_type_all mechanism1_content1" v-if="isDisplay">
            <div v-for="(item,index) in mechanism1Data.all_course" :key="index">
                <img src="../assets/c37349954c1362ae001ca9445234035a26737ab8.svg" alt />
                <p>{{item.title}}</p>
                <div>
                  <p>{{item.name}}</p>
                  <span>￥2000</span>
                </div>
              </div>
          </div>
          <el-tabs  @tab-click="handleClick" class="tabs">
            <el-tab-pane label="用户管理" name="first" class="mechanism1_content1">
              <div v-for="(item,index) in 6" :key="index">
                <img src="../assets/c37349954c1362ae001ca9445234035a26737ab8.svg" alt />
                <p>小学教育小学教育</p>
                <div>
                  <p>自学考试</p>
                  <span>￥2000</span>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
          <div class="more">
            <p>更多>></p>
          </div>
        </div>
        <!-- 机构实地照片 -->
        <div class="mechanism1_pic">
          <div class="titel">
            <div></div>
            <p>机构实地照片</p>
          </div>
          <div class="mechanism1_pic_content">
            <div v-for="(item,index) in 4" :key="index" class="mechanism1_pic_img">
              <img src="../assets/矩形 12 拷贝 2@2x.png" alt />
            </div>
          </div>
        </div>
        <!-- 校区分布 -->
        <div class="mechanism1_school">
          <div class="titel">
            <div></div>
            <p>校区分布</p>
          </div>
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
      // activeName: "first",
      activeName1: "first",
      isDisplay:true,
      mechanism1Data:''
    };
  },
  mounted() {
    this.gteDetails()
  },
  methods: {
    // 获取机构首页
    gteDetails() {
      fetch(`/api/organization/1/organization_index`, {
        headers: {
          "content-type": "application/json"
        },
        method: "GET"
      })
        .then(data => {
          return data.json();
        })
        .then(res => {
          this.mechanism1Data=res
          console.log(res);
          
        });
    },
    handleClick(tab, event) {
      console.log(tab, event);
      this.isDisplay=false
    }
  }
};
</script>
<style>

#mechanism1 .mechanism1_type_all{
  width: 860px;
  height: 480px;
  position: absolute;
  top: 80px;

}
#mechanism1 .echanism1_right_report > p {
  font-size: 12px;
  letter-spacing: 1px;
  color: #666666;
  white-space: pre-wrap;
  width: 240px;
  padding: 10px 25px 0 25px;
}
#mechanism1 .echanism1_right_report > button {
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
#mechanism1 .echanism1_right_report {
  width: 280px;
  height: 356px;
  background-color: #ffffff;
  border-radius: 4px;
  margin-top: 20px;
}
#mechanism1 .echanism1_right_coupon {
  margin-top: 20px;
  width: 280px;
  height: 360px;
  background-color: #ffffff;
  border-radius: 4px;
  text-align: center;
}
#mechanism1 .echanism1_right_coupon img {
  width: 240px;
  height: 120px;
  margin-bottom: 20px;
  margin-top: 10px;
}
#mechanism1 .mechanism1_right_second {
  display: flex;
  padding: 10px;
}
#mechanism1 .mechanism1_right_second img {
  width: 94px;
  height: 71px;
}
#mechanism1 .mechanism1_right_second p {
  font-size: 14px;
  color: #999999;
  margin-left: 10px;
}
#mechanism1 .jigouC span {
  font-size: 20px;
  color: #ff7200;
}
#mechanism1 .jigouC p {
  font-size: 12px;
  color: #999999;
}
#mechanism1 .jigouC {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
#mechanism1 .jigouC > div {
  flex-grow: 1;
  text-align: center;
}
#mechanism1 .jigouC > div:nth-child(2) {
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
}
#mechanism1 .jigouA {
  text-align: center;
  margin-bottom: 20px;
}
#mechanism1 .jigouA > p {
  font-size: 20px;
  color: #333333;
}
#mechanism1 .jigouB {
  padding: 0 10px;
}
#mechanism1 .jigouB p {
  font-size: 12px;
  color: #999999;
}
#mechanism1 .jigouB > div > div > div {
  text-align: center;
}
#mechanism1 .jigouB > div > div {
  display: flex;
  border-bottom: 1px solid #dddddd;
  justify-content: space-between;
  margin-top: 12px;
  padding: 0 15px 10px 15px;
}
#mechanism1 .jigouB img {
  width: 30px;
  height: 30px;
}
#mechanism1 .jigouA > img {
  width: 100px;
  height: 100px;
  padding: 10px;
}
#mechanism1 .tabs2 .el-tabs__item {
  width: 140px;
  font-size: 16px;
  color: #999999;
}
#mechanism1 .mechanism1_right {
  width: 280px;
  margin-top: 20px;
}
#mechanism1 .mechanism1_container {
  display: flex;
  justify-content: space-between;
}
#mechanism1 .mechanism1_school {
  width: 900px;
  height: 478px;
  background-color: #ffffff;
  border-radius: 4px;
  margin-top: 20px;
}
#mechanism1 .mechanism1_pic_img img {
  width: 200px;
  height: 150px;
}
#mechanism1 .mechanism1_pic_content {
  display: flex;
  justify-content: space-between;
  margin: 20px 20px 0px 20px;
}
#mechanism1 .mechanism1_pic {
  width: 900px;
  height: 246px;
  background-color: #ffffff;
  border-radius: 4px;
  margin-top: 20px;
}
#mechanism1 .mechanism1_content1 {
  display: flex;
  flex-wrap: wrap;
  
  padding: 0 0px 0px 20px;
}
#mechanism1 .mechanism1_content1 > div img {
  width: 260px;
  height: 173px;
}
#mechanism1 .mechanism1_content1 > div > p {
  font-size: 16px;
  color: #333333;
}
#mechanism1 .mechanism1_content1 > div {
  margin-bottom: 18px;
  margin-right: 30px;
}
#mechanism1 .mechanism1_content1 > div > div {
  display: flex;
  justify-content: space-between;
}
#mechanism1 .mechanism1_content1 > div > div > p {
  font-size: 12px;
  color: #999999;
}
#mechanism1 .mechanism1_content1 > div > div > span {
  font-size: 16px;
  color: #ff7200;
}
#mechanism1 .more {
  position: absolute;
  right: 10px;
  top: 20px;
}
#mechanism1 .more p {
  font-size: 16px;
  color: #cccccc;
}
#mechanism1 .tabs .el-tabs__nav {
  margin-left: 258px;
}
#mechanism1 .tabs {
  width: 100%;
}
#mechanism1 .mechanism1_type {
  display: flex;
  position: relative;
  width: 900px;
  height: 566px;
  background-color: #ffffff;
  border-radius: 4px;
  margin-top: 20px;
  position: relative;
}
#mechanism1 .mechanism1_type .titel {
  width: 200px;
  position: absolute;
}
#mechanism1 .lunbo {
  height: 100%;
  display: flex;
  padding: 5px 25px;
  justify-content: space-between;
}
#mechanism1 .tabs .el-tabs__item.is-active {
  color: #d12d2c;
}
#mechanism1 .tabs2 .el-tabs__item.is-active {
  color: #d12d2c;
}
#mechanism1 .tabs .el-tabs__item {
  font-size: 16px;
  color: #cccccc;
  height: 60px;
  line-height: 60px;
}
#mechanism1 .tabs2 .el-tabs__item {
  font-size: 16px;
  color: #cccccc;
  height: 46px;
  line-height: 46px;
  text-align: center;
}
#mechanism1 .tabs .el-tabs__active-bar {
  background-color: #d12d2c;
}
#mechanism1 .tabs2 .el-tabs__active-bar {
  background-color: #d12d2c;
}
#mechanism1 .lunbo > div {
  width: 260px;
  height: 200px;
}
#mechanism1 .lunbo img {
  width: 260px;
  height: 174px;
}
#mechanism1 .lunbo > div > div {
  display: flex;
  justify-content: space-between;
}
#mechanism1 .lunbo > div > div p {
  font-size: 12px;
  color: #666666;
}
#mechanism1 .el-carousel__arrow--left {
  top: 110px;
  left: 0;
}
#mechanism1 .el-carousel__arrow--right {
  top: 110px;
  right: 0;
}
#mechanism1 .el-carousel__container {
  height: 200px;
}
#mechanism1 .el-carousel--horizontal {
  height: 200px;
}
#mechanism1 .el-carousel__indicators--horizontal {
  display: none;
}
#mechanism1 {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
}
#mechanism1 .mechanism1_top {
  width: 1200px;
  height: 286px;
  background-color: #ffffff;
  border-radius: 4px;
  margin-top: 20px;
}
#mechanism1 .titel {
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
#mechanism1 .titel > div {
  width: 4px;
  height: 22px;
  background-color: #d12d2c;
  border-radius: 2px;
  margin: 0 14px 0 26px;
}
#mechanism1 .titel > p {
  font-size: 20px;
  letter-spacing: 2px;
  color: #666666;
}
</style>