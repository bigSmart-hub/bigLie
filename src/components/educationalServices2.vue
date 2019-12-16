<template>
  <div id="educationalServices2">
    <div class="backgroundImage"></div>
    <div class="educationalServices2_container">
      <!-- 左边内容 -->
      <div class="educationalServices2_container_left">
        <!-- 区域选择 -->
        <div class="region">
          <div class="titel">
            <div></div>
            <p>按区域查</p>
          </div>
          <ul>全部</ul>
          <ul class="region_titel"
          >
            <li 
              v-for="(item1,index) in address"
              @click="changeCurrentData(item1)"
              :key="index"
              class="region_content"
            >
              <a href="#">{{item1.name}}</a>
            </li>
          </ul>
        </div>
        <!-- 机构列表 -->
        <div class="educationalServices2_list">
          <div class="educationalServices2_list_top">
            <p>
              共找到
              <span>177</span>条搜索结果
            </p>
            <div>
              <button>最新发布</button>
              <button>默认排序</button>
            </div>
          </div>
          <div class="educationalServices2_list_mid">
            <div
              class="educationalServices2_list_mid_text"
              v-for="(item,index) in logos"
              :key="index"
            >
              <div class="educationalServices2_list_mid_text_left">
                <div>
                  <img :src="item.logo" alt />
                </div>
                <div class="educationalServices2_jigou">
                  <p>{{item.name}}</p>
                  <img src="../assets/84a550ffc60b1e042cd585e9d33ec05.svg" alt />
                  <img src="../assets/a3689b6dade3695708c07746a0631bf.svg" alt />
                  <img src="../assets/e810f360d92f26b30f8787ad4559494.svg" alt />
                  <p>电话：180-2019-2018</p>
                  <p>地址：浙江省温州市鹿城区万源路855</p>
                </div>
                <div class="educationalServices2_list_mid_text_right">
                  <button>咨询机构</button>
                </div>
              </div>
            </div>
          </div>
          <div class="educationalServices2_list_bottom"></div>
        </div>
        <!-- 分页器 -->
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
      <!-- 右边内容 -->
      <div class="educationalServices2_container_right">
          <div >
              <consultation/>
          </div>
          <div>
              <recommenderAgency/>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import consultation from "../components/consultation";
import recommenderAgency from "../components/recommenderAgency";
export default {
  components: {
    consultation,
    recommenderAgency
  },
  data() {
    return {
      logos:[],
      address:[],
      currentaddress:""
    };
  },
  methods: {
    getProvinceData(id) {
      fetch(`/api/org/org_index`, {
        // must match 'Content-Type' header
        headers: {
          "content-type": `application/json`,
           "province" :`${id}`
        },
        method: "GET" // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, cors, *same-origin
      })
        .then(data => {
          return data.json();
        })
        .then(res => {
          console.log(res);
          this.logos = res.org;
          this.news = res.org_articles;
          this.org_new = res.org_new;
          this.currentaddress = res.address;
        });
    },
    changeCurrentData(data){
      this.getProvinceData(data.id)
    }
  },
  mounted() {
    this.getProvinceData(this.$route.params.id)
    fetch(`/api/common/areas`, {
        // must match 'Content-Type' header
        headers: {
          "content-type": `application/json`,
        },
        method: "GET" // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, cors, *same-origin
      })
        .then(data => {
          return data.json();
        })
        .then(res => {
          console.log(res);
          this.address = res
        });
  },
};
</script>
<style>
#educationalServices2 .el-pagination {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
#educationalServices2 .educationalServices2_list_mid_text_right {
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
}
#educationalServices2 .educationalServices2_list_mid_text_right > button {
  width: 104px;
  height: 36px;
  background-color: #d12d2c;
  border-radius: 4px;
  outline: none;
  border-color: transparent;
  box-shadow: none;
  font-size: 16px;
  color: #ffffff;
}
#educationalServices2 .educationalServices2_list_mid {
  padding: 40px;
}
#educationalServices2 .educationalServices2_jigou {
  padding-left: 20px;
}
#educationalServices2 .educationalServices2_jigou > img {
  padding: 6px 10px 10px 0;
}
#educationalServices2 .educationalServices2_jigou > p:nth-child(1) {
  font-size: 20px;
  color: #333333;
}
#educationalServices2 .educationalServices2_jigou > p {
  font-size: 12px;
  color: #666666;
}
#educationalServices2 .educationalServices2_list_mid_text_left {
  display: flex;
  padding: 10px 0;
  border-bottom: solid 1px #dddddd;
}
#educationalServices2 .educationalServices2_list_top {
  display: flex;
  justify-content: space-between;
}
#educationalServices2 .educationalServices2_list_top div {
  margin: 16px 40px 0 0;
}
#educationalServices2 .educationalServices2_list_top p {
  margin: 16px 0 0 20px;
  font-size: 12px;
  color: #666666;
}
#educationalServices2 .educationalServices2_list_top p > span {
  color: #d12d2c;
}
#educationalServices2 .educationalServices2_list_top button {
  border: none;
  font-size: 14px;
  color: #666666;
  margin-left: 50px;
  outline: none;
  border-color: transparent;
  box-shadow: none;
}
#educationalServices2 .backgroundImage {
  width: 100%;
  height: 400px;
  background-image: url("../assets/蓝色渐变背景.svg");
  background-position: center;
}
#educationalServices2 .educationalServices2_container {
  width: 1200px;
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
}
#educationalServices2 .educationalServices2_container_left {
  width: 940px;
}
#educationalServices2 .educationalServices2_container_right {
  width: 239px;
}
#educationalServices2 .region_content {
  list-style: none;
}
#educationalServices2 li > a {
  font-size: 14px;
  color: #666666;
  margin-left: 41px;
  display: flex;
  align-items: center;
}
#educationalServices2 .region ul {
  font-size: 18px;
  color: #333333;
  display: flex;
  flex-wrap: wrap;
  margin: 23px 0 0 41px;
}
#educationalServices2 .region {
  width: 940px;
  height: 506px;
  background-color: #ffffff;
  border-radius: 4px;
  margin: 0 auto;
}
#educationalServices2 .titel {
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
#educationalServices2 .titel > div {
  width: 4px;
  height: 22px;
  background-color: #d12d2c;
  border-radius: 2px;
  margin: 0 14px 0 26px;
}
#educationalServices2 .titel > p {
  font-size: 24px;
  letter-spacing: 2px;
  color: #333333;
}
#educationalServices2 .educationalServices2_list {
  width: 940px;
  height: 1630px;
  background-color: #ffffff;
  border-radius: 4px;
  margin-top: 20px;
}
</style>