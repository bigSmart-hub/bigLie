<template>
  <div id="courseDetails">
    <div class="courseDetails_top">
      <div class="courseDetails_top_left">
        <img src="../assets/照片@2x.png" alt />
        <div>
          <img src="../assets/收藏 (2).svg" alt />
          <p>收藏</p>
          <img src="../assets/分享 (1).svg" alt />
          <p>分享（1071）</p>
          <img src="../assets/叹号.svg" alt />
          <p>违规举报</p>
        </div>
      </div>
      <div class="courseDetails_top_right">
        <div>[专科升本科]小学教育 -2019</div>
        <div>新疆师范大学成人教育学院</div>
        <div class="courseDetails_top_right_text">
          <div>
            <p>预约报名：</p>
            <div>
              <p>
                ￥6000
                <span>￥6800</span>
              </p>
              <p>现场缴费，查看本校学费说明</p>
            </div>
          </div>
          <div class="boro">
            优惠券：
            <p>200元</p>
            <p>立即领取</p>
          </div>
        </div>
        <div>上课安排：</div>
        <div>平台服务：</div>
        <div>
          <button class="btn1">我要报名</button>
          <button class="btn2">专业对比</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#courseDetails {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
}
#courseDetails
 .boro>p:nth-child(1) {
  padding:0  10px;
  height: 20px;
  background-color: rgba(255, 114, 0, 0.06);
  border-radius: 4px 0px 0px 4px;
  border: #ff7200 1px solid;
  border-right: #ff7200 1px dashed
}
#courseDetails
 .boro>p:nth-child(2) {
   padding: 0 10px;
  height: 20px;
  border-radius: 0px 4px 4px 0px;
  border: #ff7200 1px solid;
  border-left: none
}
#courseDetails .courseDetails_top_right_text > div > div > p:nth-child(1) {
  font-size: 32px;
  color: #ff7200;
}
#courseDetails .courseDetails_top_right_text > div {
  font-size: 16px;
  color: #707070;
}
#courseDetails .courseDetails_top_right_text > div > div > p:nth-child(2) {
  font-size: 12px;
  color: #999999;
}
#courseDetails
  .courseDetails_top_right_text
  > div
  > div
  > p:nth-child(1)
  > span {
  font-size: 14px;
  color: #999999;
  text-decoration: line-through;
}
#courseDetails .courseDetails_top_right_text > div > p {
  font-size: 16px;
  color: #707070;
}
#courseDetails .courseDetails_top_right_text > div {
  display: flex;
}
#courseDetails .courseDetails_top_right > div:nth-child(1) {
  font-size: 24px;
  color: #707070;
}
#courseDetails .courseDetails_top_right > div{
  font-size: 16px;
	color: #707070;
}
#courseDetails .courseDetails_top_right > div:nth-child(2) {
  font-size: 16px;
  color: #707070;
}
#courseDetails .btn1 {
  width: 140px;
  height: 46px;
  background-color: #d12d2c;
  border-radius: 4px;
  font-size: 20px;
  color: #ffffff;
  border: none;
  outline: none;
}
#courseDetails .btn2 {
  width: 140px;
  height: 46px;
  border-radius: 4px;
  border: solid 2px #d12d2c;
  font-size: 20px;
  color: #d12d2c;
  outline: none;
}
#courseDetails .courseDetails_top {
  width: 1200px;
  height: 402px;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 30px 30px 47px 30px;
  box-sizing: border-box;
  display: flex;
}
#courseDetails .courseDetails_top .courseDetails_top_left {
  margin-right: 30px;
}
#courseDetails .courseDetails_top .courseDetails_top_left > img {
  width: 400px;
  height: 300px;
}
#courseDetails .courseDetails_top .courseDetails_top_left > div {
  display: flex;
}
#courseDetails .courseDetails_top .courseDetails_top_left > div > p {
  font-size: 12px;
  color: #999999;
}
#courseDetails
  .courseDetails_top
  .courseDetails_top_left
  > div
  > p:nth-child(2) {
  margin-right: 20px;
}
#courseDetails
  .courseDetails_top
  .courseDetails_top_left
  > div
  > img:nth-child(5) {
  margin-left: 186px;
}
#courseDetails
  .courseDetails_top
  .courseDetails_top_left
  > div
  > p:nth-child(6) {
  font-size: 12px;
  color: #d12d2c;
}
#courseDetails .courseDetails_top .courseDetails_top_right > div:nth-child(3) {
  width: 700px;
  height: 112px;
  background-color: #f6f6f6;
}
#courseDetails .courseDetails_top .courseDetails_top_right > div:nth-child(6) {
  display: flex;
}
</style>