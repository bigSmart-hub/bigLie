<template>
  <div id="homeContainerBottom">
    <div class="homeContainerBottom_top">
      <div></div>
      <p>猜你喜欢</p>
      <button @click="qiehuanxihuan">换一批</button>
    </div>
    <div class="homeContainerBottom_mid">
      <div>
        <div v-for="(item,index) in contents" :key="index" id="homeContainerBottom_mid_content">
          <a :href="`http://psp.eol.cn/class/${item.old_id}`" target="blank">
            <img
              :src="`http://www.cepsp.com.cn${(item.image.length!=0||item.logo.length==0)?(item.image.length?item.image:item.logo):cdb}`"
              alt
            />
            <div>
              <p>{{item.category.name}}</p>
              <p>{{item.category_parent.name}}</p>
            </div>
            <p>{{item.title}}</p>
          </a>
        </div>
      </div>
    </div>
    <div class="homeContainerBottom_bottom">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="指导单位" name="first">
          <div class="countryHomePage7_bottom_text">
            <li v-for="(item3,index) in partner[0]" :key="index">
              <a :href="item3.url" target="blank">{{item3.title}}</a>
            </li>
          </div>
        </el-tab-pane>
        <el-tab-pane label="合作伙伴" name="second">
          <div class="countryHomePage7_bottom_text">
            <li v-for="(item3,index) in partner[1]" :key="index">
              <a :href="item3.url" target="blank">{{item3.title}}</a>
            </li>
          </div>
        </el-tab-pane>
        <el-tab-pane label="CEPSP省级合作发展中心" name="third">
          <div class="countryHomePage7_bottom_text">
            <li v-for="(item3,index) in partner[2]" :key="index">
              <a :href="item3.url" target="blank">{{item3.title}}</a>
            </li>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      partner: "",
      activeName: "first",
      contents: "",
      contents1: "",
      contents2: "",
      contents3: "",
      cdb: require("../assets/WechatIMG10.png")
    };
  },
  mounted() {
    this.getCooperativePartner();
    fetch(`/api/index/favorite`, {
      headers: {
        "content-type": "application/json"
      },
      method: "GET"
    })
      .then(data => {
        return data.json();
      })
      .then(res => {
        this.contents = res.slice(1, 7);
        console.log(res,2222);
        
      });
    fetch(`/api/index/urls`, {
      // must match 'Content-Type' header
      headers: {
        "content-type": "application/json"
      },
      method: "GET" // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, cors, *same-origin
    })
      .then(data => {
        return data.json();
      })
      .then(res => {
        this.contents1 = res;
      });
  },
  methods: {
    getCooperativePartner() {
      fetch(`/api/index/urls`, {
        // must match 'Content-Type' header
        headers: {
          "content-type": "application/json"
        },
        method: "GET" // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, cors, *same-origin
      })
        .then(data => {
          return data.json();
        })
        .then(res => {
          let arr = [];
          for (let i in res) {
            arr.push(res[i]);
          }
          this.partner = arr;
          console.log(arr);
        });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    qiehuanxihuan() {
      fetch(`/api/index/favorite`, {
        // must match 'Content-Type' header
        headers: {
          "content-type": "application/json"
        },
        method: "GET" // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, cors, *same-origin
      })
        .then(data => {
          return data.json();
        })
        .then(res => {
          this.contents = res.slice(1, 7);
        });
    }
  }
};
</script>
<style>
#homeContainerBottom .countryHomePage7_bottom_text > li {
  list-style: none;
  margin-top: 5px
}
#homeContainerBottom .countryHomePage7_bottom_text > li > a {
  font-size: 14px;
  letter-spacing: 1px;
  color: #999999;
  margin-right: 60px;
  margin-top: 10px;
}
#homeContainerBottom .countryHomePage7_bottom_text {
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 20px 0;
}
#homeContainerBottom {
  width: 1200px;
  margin-top: 11px;
  background-color: #ffffff;
  box-sizing: border-box;
  margin: 0 auto
}
#homeContainerBottom .homeContainerBottom_top {
  height: 62px;
  border-bottom: 2px solid #f6f6f6;
}
#homeContainerBottom .homeContainerBottom_mid {
  height: 226px;
}
#homeContainerBottom .homeContainerBottom_top {
  display: flex;
  align-items: center;
}
#homeContainerBottom .homeContainerBottom_top > p {
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  color: #333333;
}
#homeContainerBottom .homeContainerBottom_top > div {
  width: 4px;
  height: 22px;
  background-color: #d12d2c;
  border-radius: 2px;
  margin: 0 14px 0 26px;
}
#homeContainerBottom .homeContainerBottom_top > button {
  width: 70px;
  height: 24px;
  background-color: #eeeeee;
  border-radius: 12px;
  border: none;
  margin-left: 40px;
  font-size: 16px;
  letter-spacing: 2px;
  color: #666666;
  outline: none;
}
#homeContainerBottom .homeContainerBottom_mid {
  display: flex;
  justify-content: center;
  align-items: center;
}
#homeContainerBottom .homeContainerBottom_mid > div {
  width: 1142px;
  height: 172px;
  display: flex;
  justify-content: space-between;
}
#homeContainerBottom_mid_content a{
  height: 100%;
   display: flex;
  flex-direction: column;
  justify-content: space-between
}
#homeContainerBottom_mid_content {
  width: 170px;
  height: 200px;
 
}
#homeContainerBottom_mid_content div {
  display: flex;
  justify-content: space-between;
}
#homeContainerBottom_mid_content div > p {
  font-size: 12px;
  letter-spacing: 1px;
  color: #d12d2c;
}
#homeContainerBottom_mid_content > a > p {
  font-size: 14px;
  letter-spacing: 1px;
  color: #666666;
  width: 180px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 15px;
}
#homeContainerBottom_mid_content > a > img {
  width: 170px;
  height: 128px;
}
#homeContainerBottom_mid_content > a > p > span {
  margin-right: 5px;
}
#homeContainerBottom .homeContainerBottom_bottom .el-tabs--top {
  width: 1142px;
  margin: 0 auto;
  padding-top: 50px
}
#homeContainerBottom .el-tabs__active-bar {
  background-color: #d12d2c;
}
#homeContainerBottom .el-tabs__item.is-active {
  color: #d12d2c;
}
#homeContainerBottom .el-tabs__item {
  color: #999999;
  font-size: 16px;
  letter-spacing: 2px;
}
</style>