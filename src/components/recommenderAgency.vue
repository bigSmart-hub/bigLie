<template>
  <div id="qualityAgency">
    <div class="titel">
      <div></div>
      <p>推荐机构</p>
    </div>
    <div>
      <div v-for="(item,index) in org_data" :key="index" class="qualityAgency_text">
        <a :href="`http://psp.eol.cn/organization/${item.old_id}/index`">
          <div class="qualityAgency_list">
            <img :src="`http://www.cepsp.com.cn/${item.logo?item.logo:cdb}`" alt />
            <div>
              <p>{{item.name}}</p>
              <p>已通过教育资质认证</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      org_data:'',
      cdb: require("../assets/WechatIMG10.png"),
    };
  },
  created() {
      fetch(
        // `/api/index/contents`,
        `/api/org/org_list?name=${this.$route.params.name}`,

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
          this.org_data=res.recommend          
        });
    }
};
</script>
<style>
#qualityAgency .qualityAgency_list {
  display: flex;
  justify-content: space-between;
}
#qualityAgency .qualityAgency_list > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#qualityAgency .qualityAgency_list > div > p:nth-child(1) {
  width: 137px;
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis; /*文字隐藏后添加省略号*/
  white-space: nowrap; /*强制不换行*/
  font-size: 14px;
  color: #333333;
}
#qualityAgency .qualityAgency_list img{
  width: 70px;

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