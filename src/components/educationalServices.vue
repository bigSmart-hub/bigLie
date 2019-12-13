<template>
  <div id="educationalServices">
    <!-- 大banner -->
    <div class="backgroundImage">
      <div id="bbbb">
          <div class="container_left" v-if="listBol" >
            <ul>
              <li>
                <a href="#">成人学历</a>
              </li>
              <li>
                <a href="#">自考考试</a>
              </li>
              <li>
                <a href="#">成人高考</a>
              </li>
              <li></li>
            </ul>
            <ul>
              <li>
                <a href="#">资格考试</a>
              </li>
              <li>
                <a href="#">公职考</a>
              </li>
              <li>
                <a href="#">从业资格</a>
              </li>
              <li></li>
            </ul>
            <ul>
              <li>
                <a href="#">社会培训</a>
              </li>
              <li>
                <a href="#">企业大学</a>
              </li>
              <li>
                <a href="#">社区教育</a>
              </li>
              <li></li>
            </ul>
            <ul>
              <li>
                <a href="#">国际教育</a>
              </li>
              <li>
                <a href="#">考察交流</a>
              </li>
              <li>
                <a href="#">中文国际</a>
              </li>
              <li></li>
            </ul>
            <ul>
              <li>
                <a href="#">职业教育</a>
              </li>
              <li>
                <a href="#">职业大学</a>
              </li>
              <li>
                <a href="#">1+x</a>
              </li>
              <li></li>
            </ul>
            <ul>
              <li>
                <a href="#">语言培训</a>
              </li>
              <li>
                <a href="#">留学考试</a>
              </li>
              <li>
                <a href="#">应用培训</a>
              </li>
              <li></li>
            </ul>
            <ul>
              <li>
                <a href="#">院校培训</a>
              </li>
              <li>
                <a href="#">院校联盟</a>
              </li>
              <li>
                <a href="#">教师培训</a>
              </li>
              <li></li>
            </ul>
            <ul id="list_last">
              <li>
                <a href="#">素质教育</a>
              </li>
              <li>
                <a href="#">人文</a>
              </li>
              <li>
                <a href="#">科技</a>
              </li>
              <li>
                <a href="#">艺术</a>
              </li>
              <li></li>
            </ul>
            <a href="#">
              <img class="xiaodu" src="../assets/小度.svg" alt />
            </a>
          </div>
        </div>
    </div>
    <!-- 优秀机构 -->
    <div class="excellentLnstitutions">
      <div class="titel">
        <div></div>
        <p>优秀机构</p>
      </div>
      <div class="excellentLnstitutions_a">
        <div
          v-for="(item,index) in logos"
          :key="index"
          class="excellentLnstitutions_a_img"
        >
          <a href>
            <img :src="item.logo" alt />
          </a>
        </div>
      </div>
    </div>
    <!-- 行业新闻 -->
    <div class="news">
      <div class="titel">
        <div></div>
        <p>行业新闻</p>
      </div>
      <div class="news_a">
        <div class="news_a_image" v-for="(item,index) in news" :key="index">
          <a href>
            <div class="news_a_image_left">
              <img :src="item.image" alt />
            </div>
          </a>
          <div class="news_a_image_right">
            <a href>{{item.title}}</a>
            <p>简介：{{item.description}}</p>
            <div>
              <p>"{{item.keywords}}"</p>
              <p>{{item.created_at}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 最新入驻 -->
    <div class="settled">
      <div class="titel">
        <div></div>
        <p>最新入驻</p>
      </div>
      <div class="new_settled">
        <div
          class="new_settled_text"
          v-for="(item,index) in org_new"
          :key="index"
        >
          <p>{{item.name}}</p>
          <p>进驻时间：{{item.created_at}}</p>
        </div>
      </div>
    </div>
    <!-- 区域选择 -->
    <div class="region">
      <div class="titel">
        <div></div>
        <p>按区域查</p>
      </div>
      <ul>全部</ul>
      <ul class="region_titel">
        <li
          v-for="(item1,index) in address"
          @click="toEducationalServices2(item1)"
          :key="index"
          class="region_content"
        >
          <a href="#">{{item1.rname}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listBol: false,
      logos: [],
      news: [],
      org_new: [],
      address: []
    };
  },
  methods: {
    toEducationalServices2(item1) {
      this.$router.push({
        name: "educationalServices2",
        params: {
          id: item1.rid
        }
      });
    },
    getProvinceData(id) {
      fetch(`/api/org/org_index`, {
        // must match 'Content-Type' header
        headers: {
          "content-type": `application/json/province=${id}`
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
          this.address = res.address;
        });
    }
  },
  mounted() {
    this.getProvinceData(this.$route.params.id);
    console.log(this.$route.params.id);
    let that = this;
    this.$root.bus.$on("bol", function(value) {
      that.listBol = value;
    });
  }
};
</script>
<style>
#bbbb {
  width: 1200px;
  margin: 0 auto;
}
#educationalServices .xiaodu {
  margin-top: 16px;
  margin-left: 20px;
}
#educationalServices .container_left > ul:not(:nth-child(8)) > li:nth-child(4) {
  background-image: url("../assets/小箭头.svg");
  width: 8px;
  height: 14px;
  margin-top: 5px;
}
#educationalServices .container_left > ul > li:nth-child(1) > a {
  font-size: 16px;
  letter-spacing: 0px;
  color: #666666;
}
#educationalServices .container_left > ul {
  display: flex;
  width: 248px;
  height: 22px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 7px 25px;
}
#educationalServices .container_left > ul:hover {
  background-color: #d12d2c;
}
#educationalServices .container_left > ul:hover li > a {
  color: #fefefe;
}
#educationalServices .container_left > ul > li > a {
  font-size: 14px;
  letter-spacing: 0px;
  color: #666666;
}
#educationalServices #list_last > li:first-child {
  font-size: 16px;
  width: 64px;
}
#educationalServices #list_last > li {
  font-size: 14px;
  width: 28px;
}
#educationalServices #list_last > li:nth-child(5) {
  background-image: url("../assets/小箭头.svg");
  width: 8px;
  height: 14px;
  margin-top: 5px;
  flex-direction: column;
  direction: ltr;
  flex-wrap: nowrap;
}
#educationalServices .container_left {
  width: 298px;
  height: 480px;
  background-color: #ffffff;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 0;
  box-sizing: border-box;
}
#educationalServices .container_left li {
  list-style: none;
  width: 64px;
}
#educationalServices .region_titel li {
  list-style: none;
}
#educationalServices .region_titel li > a {
  font-size: 14px;
  color: #666666;
  margin-left: 41px;
  display: flex;
  align-items: center;
}
#educationalServices ul {
  font-size: 18px;
  color: #333333;
  display: flex;
  flex-wrap: wrap;
  margin: 23px 0 0 41px;
}
#educationalServices .region {
  width: 1200px;
  height: 506px;
  background-color: #ffffff;
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 60px;
}
#educationalServices .new_settled {
  display: flex;
  flex-wrap: wrap;
}
#educationalServices .new_settled_text {
  width: 270px;
  height: 44px;
  margin: 0 0 14px 24px;
}
#educationalServices .new_settled_text > p:nth-child(1) {
  font-size: 16px;
  color: #333333;
  margin-bottom: 6px;
}
#educationalServices .new_settled_text > p:nth-child(2) {
  font-size: 12px;
  color: #999999;
}
#educationalServices .settled {
  width: 1200px;
  height: 248px;
  background-color: #ffffff;
  border-radius: 4px;
  margin: 20px auto;
}
#educationalServices .backgroundImage {
  width: 100%;
  height: 400px;
  background-image: url("../assets/蓝色渐变背景.svg");
  background-position: center;
}
#educationalServices .excellentLnstitutions {
  width: 1200px;
  height: 518px;
  background-color: #ffffff;
  border-radius: 4px;
  margin: 20px auto;
}
#educationalServices .titel {
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
#educationalServices .titel > div {
  width: 4px;
  height: 22px;
  background-color: #d12d2c;
  border-radius: 2px;
  margin: 0 14px 0 26px;
}
#educationalServices .titel > p {
  font-size: 24px;
  letter-spacing: 2px;
  color: #333333;
}
#educationalServices .excellentLnstitutions_a {
  display: flex;
  flex-wrap: wrap;
}
#educationalServices .excellentLnstitutions_a_img {
  width: 268px;
  height: 201px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 0px rgba(102, 102, 102, 0.16);
  border-radius: 4px;
  border: solid 1px #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 22px 24px;
}
#educationalServices .news {
  width: 1200px;
  height: 604px;
  background-color: #ffffff;
  border-radius: 4px;
  margin: 0 auto;
}
#educationalServices .news_a {
  display: flex;
  flex-wrap: wrap;
}
#educationalServices .news_a_image {
  height: 150px;
  width: 556px;
  display: flex;
  justify-content: space-between;
  margin: 0 0 30px 24px;
}
#educationalServices .news_a_image_left {
  width: 200px;
  height: 150px;
}
#educationalServices .news_a_image_right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px;
}
#educationalServices .news_a_image_right > a {
  font-size: 18px;
  color: #d12d2c;
}
#educationalServices .news_a_image_right > p {
  font-size: 12px;
  color: #999999;
}
#educationalServices .news_a_image_right > div {
  display: flex;
  justify-content: space-between;
}
#educationalServices .news_a_image_right > div > p:nth-child(1) {
  font-size: 14px;
  color: #666666;
}
#educationalServices .news_a_image_right > div > p:nth-child(2) {
  font-size: 12px;
  color: #999999;
}
</style>