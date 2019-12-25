<template>
  <div id="mechanism6">
    <img src="../assets/banner2@2x.png" alt />
    <div class="mechanism1_container">
      <!-- 左边区域 -->
      <div class="mechanism1_left">
        <!-- 校区分布 -->
        <div class="titel">
          <div></div>
          <p>校区分布</p>
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
      activeName1: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style>
#mechanism6 {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
}
#mechanism6 .mechanism1_left {
  width: 900px;
  height: 478px;
  background-color: #ffffff;
  border-radius: 4px;
  margin-top: 20px
}
#mechanism6 .echanism1_right_report > p {
  font-size: 12px;
  letter-spacing: 1px;
  color: #666666;
  white-space: pre-wrap;
  width: 240px;
  padding: 10px 25px 0 25px;
}
#mechanism6 .echanism1_right_report > button {
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
#mechanism6 .echanism1_right_report {
  width: 280px;
  height: 356px;
  background-color: #ffffff;
  border-radius: 4px;
  margin-top: 20px;
}
#mechanism6 .echanism1_right_coupon {
  margin-top: 20px;
  width: 280px;
  height: 360px;
  background-color: #ffffff;
  border-radius: 4px;
  text-align: center;
}
#mechanism6 .echanism1_right_coupon img {
  width: 240px;
  height: 120px;
  margin-bottom: 20px;
  margin-top: 10px;
}
#mechanism6 .mechanism1_right_second {
  display: flex;
  padding: 10px;
}
#mechanism6 .mechanism1_right_second img {
  width: 94px;
  height: 71px;
}
#mechanism6 .mechanism1_right_second p {
  font-size: 14px;
  color: #999999;
  margin-left: 10px;
}
#mechanism6 .jigouC span {
  font-size: 20px;
  color: #ff7200;
}
#mechanism6 .jigouC p {
  font-size: 12px;
  color: #999999;
}
#mechanism6 .jigouC {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
#mechanism6 .jigouC > div {
  flex-grow: 1;
  text-align: center;
}
#mechanism6 .jigouC > div:nth-child(2) {
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
}
#mechanism6 .jigouA {
  text-align: center;
  margin-bottom: 20px;
}
#mechanism6 .jigouA > p {
  font-size: 20px;
  color: #333333;
}
#mechanism6 .jigouB {
  padding: 0 10px;
}
#mechanism6 .jigouB p {
  font-size: 12px;
  color: #999999;
}
#mechanism6 .jigouB > div > div > div {
  text-align: center;
}
#mechanism6 .jigouB > div > div {
  display: flex;
  border-bottom: 1px solid #dddddd;
  justify-content: space-between;
  margin-top: 12px;
  padding: 0 15px 10px 15px;
}
#mechanism6 .jigouB img {
  width: 30px;
  height: 30px;
}
#mechanism6 .jigouA > img {
  width: 100px;
  height: 100px;
  padding: 10px;
}
#mechanism6 .tabs2 .el-tabs__item {
  width: 140px;
  font-size: 16px;
  color: #999999;
}
#mechanism6 .mechanism1_right {
  width: 280px;
  margin-top: 20px;
}
#mechanism6 .mechanism1_container {
  display: flex;
  justify-content: space-between;
}
#mechanism6 .titel {
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
#mechanism6 .titel > div {
  width: 4px;
  height: 22px;
  background-color: #d12d2c;
  border-radius: 2px;
  margin: 0 14px 0 26px;
}
#mechanism6 .titel > p {
  font-size: 20px;
  letter-spacing: 2px;
  color: #666666;
}
</style>