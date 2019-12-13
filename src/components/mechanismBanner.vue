<template>
  <div class="banner2">
    <div class="content">
      <div class="logo">
        <img src="../assets/timg@2x.png" alt />
        <div class="message">
          <div class="name">成都琢美彩妆美甲培新学校</div>
          <div class="smallicons">
            <img src="../assets/认证-实名.png" alt />
            <img src="../assets/认证-实地.png" alt />
            <img src="../assets/认证-教育资格.png" alt />
          </div>
          <div class="translation">琢美教育以时尚艺术为名，由金牌一线教师团队定力创建，凭惜对时尚造型长期的探索和积累</div>
        </div>
      </div>
      <div class="Telephone">
        <i class="iconfont icon-gongsidianhua"></i>
        <div class="Telephone-phone">
          <div class="phone">0991-4333984</div>
          <div class="time">咨询时间：09:00-18:00</div>
        </div>
      </div>
    </div>
    <div class="banner2-Nav">
      <div class="nav"> 
        <ul>
          <li>机构首页</li>
          <li>机构介绍</li>
          <li>全部课程</li>
          <li>机构动态</li>
          <li>优惠信息</li>
          <li>校区分布</li>
        </ul>
        <button class="sign-up">我要在线报名</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:'mechanismbanner'
};
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
.banner2 {
  width: 100%;
  height: 240px;
  background-image: url("../assets/Clip@2x.jpg");
}
.banner2 .content {
  width: 1200px;
  padding: 36px 0;
  margin: auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.logo img {
  width: 120px;
  height: 120px;
}
.logo {
  flex-wrap: nowrap;
  display: flex;
}
.smallicons {
  display: flex;
  flex-wrap: nowrap;
  margin: 6px 0 21px;
}
.smallicons img {
  width: 90px;
  height: 24px;
  padding-right: 6px;
}
.message {
  margin-left: 20px;
}
.message .name {
  height: 40px;
  font-family: Source Han Sans CN;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 0px;
  color: #ffffff;
}
.translation {
  width: 574px;
  height: 19px;
  font-family: Source Han Sans CN;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 17px;
  letter-spacing: 0px;
  color: #ffffff;
}
.Telephone {
  display: flex;
  flex-wrap: nowrap;
}
.Telephone i {
  font-size: 52px;
  color: #ffffff;
}
.Telephone-phone {
  margin-left: 13px;
}
.phone {
  width: 208px;
  height: 40px;
  font-family: Source Han Sans CN;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 30px;
  letter-spacing: 0px;
  color: #ffffff;
}
.time {
  width: 170px;
  height: 21px;
  font-family: Source Han Sans CN;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 30px;
  letter-spacing: 0px;
  color: #ffffff;
}
.banner2-Nav {
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0,0, 0.25);
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.banner2-Nav .nav {
  width: 1200px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
 ul{
    list-style: none;
    
}
.banner2-Nav li {
  width: 140px;
  height: 50px;
  font-family: Alibaba PuHuiTi;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0px;
  color:#ffffff;
  display: inline-block;
  text-align: center;
  opacity: 1;

}
.sign-up {
  width: 144px;
  height: 30px;
  background-color: #d12d2c;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  margin: auto 0;
  opacity: 1; 

}
</style>