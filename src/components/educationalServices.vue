<template>
  <div id="educationalServices">
    <!-- 大banner -->
    <div class="backgroundImage">
      <div id="bbbb">
        <div class="container_left" v-if="listBol">
          <ul v-for="(item,index) in listData" :key="index">
            <!-- <a
                :href="`http://psp.eol.cn/education/classes?id=${item.old_id}`"
                target="blank"
            >{{item.name}}</a>-->
            <a href="#">{{item.name}}</a>
            <li v-for="(item1,index) in item.children.slice(0,2)" :key="index">
              <a
                :href="`http://psp.eol.cn/education/classes?id=${item1.old_id}`"
                target="blank"
              >{{item1.name}}</a>
            </li>
            <ul class="erji_right">
              <li v-for="(item1,index) in item.children" :key="index">
                <ul style="color:black" class="yingcang">
                  <a
                    class="erji_title"
                    :href="`http://psp.eol.cn/education/classes?id=${item1.old_id}`"
                    target="blank"
                  >{{item1.name}}</a>
                  <li v-for="(item2,index) in item1.children" :key="index">
                    <a
                      :href="`http://psp.eol.cn/education/classes?id=${item2.old_id}`"
                      target="blank"
                    >{{item2.name}}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </ul>
          <a href="#" class="xiaodu">
            <img src="../assets/小度.svg" alt />
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
        <div v-for="(item,index) in logos" :key="index" class="excellentLnstitutions_a_img">
          <a href>
            <img :src="`http://www.cepsp.com.cn${item.logo}`" alt />
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
              <img :src="`http://www.cepsp.com.cn${item.image}`" alt />
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
        <div class="new_settled_text" v-for="(item,index) in org_new" :key="index">
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
      <ul class="all">全部</ul>
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
  watch: {
    $route(to, from) {
      console.log(to.path, from);
      if (this.$route.params.proId) {
        this.getProvinceData(this.$route.params.proId);
      }
    }
  },
  methods: {
    toEducationalServices2(item1) {
      let s = item1.rname;
      if (s.length > 2) {
        s = s.substring(0, s.length - 1);
      }
      this.$router.push({
        path: "/educationalServices2/" + s
      });
    },
    getProvinceData(id) {
      fetch(`/api/org/org_index`, {
        // must match 'Content-Type' header
        headers: {
          "content-type": `application/json${id}`
          //  "province" :`${id}`
        },
        method: "GET" // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, cors, *same-origin
      })
        .then(data => {
          return data.json();
        })
        .then(res => {
          this.logos = res.org;
          this.news = res.org_articles;
          this.org_new = res.org_new;
          this.address = res.address;
        });
    }
  },
  mounted() {
    fetch(`/api/category`, {
      headers: {
        "content-type": "application/json"
      },
      method: "GET"
    })
      .then(data => {
        return data.json();
      })
      .then(res => {
        let arr2 = [];
        for (let key in res) {
          arr2.push(res[key]);
        }
        this.listData = arr2;
      });
    this.getProvinceData(this.$route.params.proId);
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
#educationalServices .all {
  padding-left: 30px;
}
#educationalServices .yingcang {
  display: flex;
  flex-wrap: wrap;
  margin: 15px 15px;
}
#educationalServices .yingcang > li {
  font-size: 12px;
  margin: 0 15px 10px 15px;
}
#educationalServices .container_left {
  width: 298px;
  height: 380px;
  background-color: #ffffff;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 0;
  box-sizing: border-box;
}
#educationalServices .container_left > ul {
  position: relative;
}
#educationalServices .container_left > ul > ul {
  position: absolute;
  top: -40px;
}
#educationalServices .container_left > ul:nth-child(2) > ul {
  position: absolute;
  top: -75px;
}
#educationalServices .container_left > ul:nth-child(3) > ul {
  position: absolute;
  top: -110px;
}
#educationalServices .container_left > ul:nth-child(4) > ul {
  position: absolute;
  top: -145px;
}
#educationalServices .container_left > ul:nth-child(5) > ul {
  position: absolute;
  top: -180px;
}
#educationalServices .container_left > ul:nth-child(6) > ul {
  position: absolute;
  top: -215px;
}
#educationalServices .container_left > ul:nth-child(7) > ul {
  position: absolute;
  top: -250px;
}
#educationalServices .container_left > ul:nth-child(8) > ul {
  position: absolute;
  top: -285px;
}
#educationalServices .erji_right {
  width: 672px;
  height: 480px;
  background-color: black;
  position: absolute;
  left: 297px;
  top: 272px;
  opacity: 1;
  display: none;
}
#educationalServices .container_left > ul:hover {
  background-color: #d12d2c;
}
#educationalServices .container_left > ul:hover li a {
  color: #fefefe;
}
#educationalServices .container_left > ul:hover .erji_right {
  display: block;
}
#educationalServices .container_left > ul:hover .container_mid {
  display: none;
}
#educationalServices .container_left > ul > li {
  font-size: 14px;
  letter-spacing: 0px;
  color: #666666;
  width: 60px;
}

#educationalServices .container_left > ul {
  display: flex;
  width: 248px;
  height: 22px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 25px;
}
#educationalServices .container_left > ul > a {
  color: black;
}
#educationalServices .container_left > ul li > a {
  color: black;
}
#educationalServices .xiaodu {
  margin-top: 16px;
  margin-left: 20px;
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
}
#educationalServices .region_titel li {
  list-style: none;
  margin-left: 41px;
  margin-top: 5px;
}
#educationalServices .region_titel li > a {
  font-size: 14px;
  color: #666666;
  align-items: center;
}
#educationalServices .region_titel li:hover a {
  color: #d12d2c;
}
#educationalServices .region {
  width: 1200px;
  padding-bottom: 20px;
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
#educationalServices .region_titel {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 30px;
}
#educationalServices .new_settled_text > p:nth-child(1) {
  font-size: 16px;
  color: #333333;
  margin-bottom: 6px;
  width: 270px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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
  min-width: 1200px;
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
#educationalServices .excellentLnstitutions_a_img img {
  height: 160px;
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
#educationalServices .news_a_image_left img {
  width: 200px;
  height: 150px;
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