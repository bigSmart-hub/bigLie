<template>
  <div id="mechanism4">
    <img src="../assets/banner2@2x.png" alt />
    <div class="mechanism1_container">
      <!-- 左边区域 -->
      <div class="mechanism1_left">
        <!-- 机构动态 -->
        <div class="mechanism2_introduce">
          <div class="titel">
            <div></div>
            <p>机构动态</p>
          </div>
          <div v-for="(item,index) in 4" :key="index" class="mechanism2_introduce_dynamic">
            <img src="../assets/矩形 10@2x.png" alt />
            <div>
              <p class="mechanism2_introduce_dynamic_title">第十九期济宁运气沙龙会暨汶上县五运六气应用推广培训班在县中医院成功举办</p>
              <p>北欧西北，中国南方，挪威卑尔根与海南省海口市距离近万公里，跨越数十个国家。日前，海南省华侨中学与挪威卑尔根卡特德拉高级中...</p>
              <div>
                <p class="mechanism2_introduce_dynamic_btn">中文国际</p>
                <p>山东卫生网 | 中教网</p>
                <p>2019-11-05</p>
              </div>
            </div>
          </div>
          <div class="mechanism2_introduce_dynamic2">
            <p>第十九期济宁运气沙龙会暨汶上县五运六气应用推广培训班在县中医院成功举办</p>
            <img src="../assets/矩形 10@2x.png" alt v-for="(item,index) in 3" :key="index" />
            <div>
              <p class="mechanism2_introduce_dynamic_btn">中文国际</p>
              <p>山东卫生网 | 中教网</p>
              <p>2019-11-05</p>
            </div>
          </div>
          <div v-for="(item,index) in ['a','b','c','d']" :key="`${index}+2`" class="mechanism2_introduce_dynamic">
            <img src="../assets/矩形 10@2x.png" alt />
            <div>
              <p class="mechanism2_introduce_dynamic_title">第十九期济宁运气沙龙会暨汶上县五运六气应用推广培训班在县中医院成功举办</p>
              <p>北欧西北，中国南方，挪威卑尔根与海南省海口市距离近万公里，跨越数十个国家。日前，海南省华侨中学与挪威卑尔根卡特德拉高级中...</p>
              <div>
                <p class="mechanism2_introduce_dynamic_btn">中文国际</p>
                <p>山东卫生网 | 中教网</p>
                <p>2019-11-05</p>
              </div>
            </div>
          </div>
          <button class="mechanism2_introduce_btn2">
            <div>
              <i class="el-icon-arrow-down"></i>
              <i class="el-icon-arrow-down"></i>
            </div>加载更多
          </button>
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
#mechanism4 .mechanism2_introduce{
    padding-bottom: 40px;
    margin-bottom: 120px
}
#mechanism4 i {
  display: block;
  margin-right: 5px;
}
#mechanism4 i:nth-child(2) {
  margin-top: -8px;
}
#mechanism4 i:nth-child(1) {
  margin-top: 2px;
}
#mechanism4 .mechanism2_introduce_btn2 i {
  font-size: 16px;
  font-weight: 900;
}
#mechanism4 .mechanism2_introduce_btn2 {
  display: flex;
  padding: 10px 20px;
  border-radius: 4px;
  border: solid 1px #d12d2c;
  color: #d12d2c;
  font-size: 20px;
  text-align: center;
  margin: 0px auto;
  margin-top: 60px
}
#mechanism4 .mechanism2_introduce_dynamic2 .mechanism2_introduce_dynamic_btn {
  padding: 5px 10px;
  border-radius: 4px;
  border: solid 1px #ff7200;
  font-size: 14px;
  color: #ff7200;
}
#mechanism4 .mechanism2_introduce_dynamic2 {
  width: 710px;
  margin: 0 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #999999;
}
#mechanism4 .mechanism2_introduce_dynamic2 > p {
  font-size: 20px;
  color: #666666;
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
}
#mechanism4 .mechanism2_introduce_dynamic2 > div {
  display: flex;
}
#mechanism4 .mechanism2_introduce_dynamic2 > div > p:not(:nth-child(1)) {
  font-size: 14px;
  color: #999999;
  line-height: 32px;
}
#mechanism4 .mechanism2_introduce_dynamic2 > div > p:nth-child(2) {
  margin: 0 370px 0 52px;
}
#mechanism4 .mechanism2_introduce_dynamic2 > img {
  width: 220px;
  height: 165px;
  margin: 20px 0;
}
#mechanism4 .mechanism2_introduce_dynamic2 > img:nth-child(3) {
  margin: 20px;
}
#mechanism4 .mechanism2_introduce_dynamic .mechanism2_introduce_dynamic_btn {
  padding: 5px 10px;
  border-radius: 4px;
  border: solid 1px #ff7200;
  font-size: 14px;
  color: #ff7200;
}
#mechanism4 .mechanism2_introduce_dynamic .mechanism2_introduce_dynamic_title {
  font-size: 20px;
  color: #333333;
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
  width: 600px;
}
#mechanism4 .mechanism2_introduce_dynamic p {
  font-size: 14px;
  color: #999999;
}
#mechanism4 .mechanism2_introduce_dynamic > div > p:nth-child(2) {
  margin: 25px 0;
}
#mechanism4 .mechanism2_introduce_dynamic > div > div > p:nth-child(2) {
  margin: 0 306px 0 52px;
}
#mechanism4 .mechanism2_introduce_dynamic > div {
  margin-left: 20px;
}
#mechanism4 .mechanism2_introduce_dynamic > div > div > p:not(:nth-child(1)) {
  line-height: 32px;
}
#mechanism4 .mechanism2_introduce_dynamic > div > div {
  display: flex;
}
#mechanism4 .mechanism2_introduce_dynamic > img {
  width: 200px;
  height: 150px;
}
#mechanism4 .mechanism2_introduce_dynamic {
  display: flex;
  margin: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #999999;
}
#mechanism4 .mechanism2_introduce_dynamic:nth-last-of-type(1) {
  border: none
}
#mechanism4 .mechanism2_introduce {
  width: 900px;
  background-color: #ffffff;
  border-radius: 4px;
  margin-top: 20px;
}
#mechanism4 .titel {
  height: 60px;
  border-bottom: 2px solid #f6f6f6;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
#mechanism4 .titel > div {
  width: 4px;
  height: 22px;
  background-color: #d12d2c;
  border-radius: 2px;
  margin: 0 14px 0 26px;
}
#mechanism4 .titel > p {
  font-size: 20px;
  letter-spacing: 2px;
  color: #666666;
}
#mechanism4 {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
}
#mechanism4 .echanism1_right_report > p {
  font-size: 12px;
  letter-spacing: 1px;
  color: #666666;
  white-space: pre-wrap;
  width: 240px;
  padding: 10px 25px 0 25px;
}
#mechanism4 .echanism1_right_report > button {
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
#mechanism4 .echanism1_right_report {
  width: 280px;
  height: 356px;
  background-color: #ffffff;
  border-radius: 4px;
  margin-top: 20px;
}
#mechanism4 .echanism1_right_coupon {
  margin-top: 20px;
  width: 280px;
  height: 360px;
  background-color: #ffffff;
  border-radius: 4px;
  text-align: center;
}
#mechanism4 .echanism1_right_coupon img {
  width: 240px;
  height: 120px;
  margin-bottom: 20px;
  margin-top: 10px;
}
#mechanism4 .tabs2 .el-tabs__item {
  width: 140px;
  font-size: 16px;
  color: #999999;
}
#mechanism4 .tabs .el-tabs__item.is-active {
  color: #d12d2c;
}
#mechanism4 .tabs2 .el-tabs__item.is-active {
  color: #d12d2c;
}
#mechanism4 .tabs .el-tabs__item {
  font-size: 16px;
  color: #cccccc;
  height: 60px;
  line-height: 60px;
}
#mechanism4 .tabs2 .el-tabs__item {
  font-size: 16px;
  color: #cccccc;
  height: 46px;
  line-height: 46px;
  text-align: center;
}
#mechanism4 .tabs .el-tabs__active-bar {
  background-color: #d12d2c;
}
#mechanism4 .tabs2 .el-tabs__active-bar {
  background-color: #d12d2c;
}
#mechanism4 .jigouC span {
  font-size: 20px;
  color: #ff7200;
}
#mechanism4 .jigouC p {
  font-size: 12px;
  color: #999999;
}
#mechanism4 .jigouC {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
#mechanism4 .jigouC > div {
  flex-grow: 1;
  text-align: center;
}
#mechanism4 .jigouC > div:nth-child(2) {
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
}
#mechanism4 .jigouA {
  text-align: center;
  margin-bottom: 20px;
}
#mechanism4 .jigouA > p {
  font-size: 20px;
  color: #333333;
}
#mechanism4 .jigouB {
  padding: 0 10px;
}
#mechanism4 .jigouB p {
  font-size: 12px;
  color: #999999;
}
#mechanism4 .jigouB > div > div > div {
  text-align: center;
}
#mechanism4 .jigouB > div > div {
  display: flex;
  border-bottom: 1px solid #dddddd;
  justify-content: space-between;
  margin-top: 12px;
  padding: 0 15px 10px 15px;
}
#mechanism4 .jigouB img {
  width: 30px;
  height: 30px;
}
#mechanism4 .mechanism1_right_second {
  display: flex;
  padding: 10px;
}
#mechanism4 .mechanism1_right_second img {
  width: 94px;
  height: 71px;
}
#mechanism4 .mechanism1_right_second p {
  font-size: 14px;
  color: #999999;
  margin-left: 10px;
}
#mechanism4 .mechanism1_right {
  width: 280px;
  margin-top: 20px;
}
#mechanism4 .mechanism1_container {
  display: flex;
  justify-content: space-between;
}
</style>