<template>
  <div id="qualityAgency">
    <div class="titel">
      <div></div>
      <p>推荐机构</p>
    </div>
    <div>
      <div v-for="(item,index) in [1,1,1,1,1,1,1,1]" :key="index" class="qualityAgency_text">
        <a href="#">
          <div class="qualityAgency_list">
            <img src="../assets/timg(2).svg" alt />
            <div>
              <p>浙江大学继续教育学院</p>
              <p>已通过教育资质认证</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<style>
#qualityAgency .qualityAgency_list {
  display: flex;
  justify-content: space-between;
}
#qualityAgency .qualityAgency_list>div{
    display: flex;
    flex-direction: column;
    justify-content: space-between
}
#qualityAgency .qualityAgency_list > div > p:nth-child(1) {
  font-size: 14px;
  color: #333333;
}
#qualityAgency .qualityAgency_list > div > p:nth-child(2) {
  font-size: 12px;
  color: #d12d2c;
}
#qualityAgency {
  width: 240px;
  background-color: #ffffff;
  margin-top: 10px;
}
#qualityAgency .qualityAgency_text {
  margin: 0px 14px;
  padding: 13px 0;
  border-bottom: solid 1px #dddddd;
}
#qualityAgency .qualityAgency_text:last-child {
  border: none;
}
#qualityAgency .titel {
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
#qualityAgency .titel > div {
  width: 4px;
  height: 19px;
  background-color: #d12d2c;
  border-radius: 2px;
  margin: 0 14px 0 20px;
}
#qualityAgency .titel > p {
  font-size: 20px;
  letter-spacing: 2px;
  color: #333333;
}
</style>