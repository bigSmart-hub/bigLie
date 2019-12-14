<template>
  <div id="city">
    <el-dialog title="请选择合适的学校所在地" :visible.sync="changeCity" center>
      <div class="container">
        <div class="city_top">
          <div>
            <i class="el-icon-location-outline"></i>当前位置
          </div>
          <p>{{nowposObj.name}}</p>
          <button class="queding" @click="efiningCities(province)">确定</button>
        </div>
        <div class="city_bottom">
          <el-scrollbar style="height: 100%;">
            <!-- 滚动条 -->
            <div class="country">
              <a href="#" name="全国站" @click="province1(nowpos)">全国站</a>
            </div>
            <ul>
              <li v-for="(item1,index1) in province" :key="index1">
                <a href="#" @click="province1(item1)" :name="item1.name">{{item1.name}}</a>
              </li>
            </ul>
          </el-scrollbar>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      nowpos: { name: "全国站", id: "0" },
      nowposObj: { name: "全国站", id: "0" },
      nowposId: "",
      changeCity: false,
      province: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  created() {
    fetch(`/api/common/areas`, {
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
        this.province = res;
      });
  },
  mounted() {
    let that = this;
    this.$root.bus.$on("13", function(value) {
      that.changeCity = value;
    });
  },
  methods: {
    province1(item) {
      console.log(item);
      this.nowposObj.name = item.name;
      this.nowposObj.id = item.id;
      this.nowposId = item.id;
      // this.nowpos = e.target.name;
    },
    efiningCities() {
      console.log(this.$route.name);
      this.$root.bus.$emit("provinceName", this.nowposObj.name);
      this.$root.bus.$emit("province",this.nowposId)
      this.changeCity = false;
      if (this.nowposObj.name == "全国站") {
        this.$router.push({
          name: "countryHomePage"
        });
      } else if (this.$route.name == "educationalServices") {
        this.$router.push({
          path: "/educationalServices/" + this.nowposId
        });
      } else {
        this.$router.push({
          path: "/homePage/" + this.nowposId
        });
      }
    }
  }
};
</script>
<style>
#city .country {
  margin: 20px 0 0 15px;
}
#city .country > a {
  font-size: 16px;
  color: #cccccc;
}
#city a:hover {
  color: #d12d2c;
}
#city .el-dialog__body {
  padding: 0;
}
#city li {
  list-style: none;
  margin-bottom: 10px;
}
#city li > a {
  margin-left: 16px;
  color: #cccccc;
}
#city ul {
  font-size: 16px;
  color: #d12d2c;
}
#city ul {
  display: flex;
  margin-top: 18px;
  flex-wrap: wrap;
}
#city .city_bottom {
  height: 327px;
  border-top: solid 1px #dddddd;
}
#city .container {
  height: 400px;
  margin: 0px 40px 40px 40px;
}
#city .city_top {
  height: 60px;
  display: flex;
  align-items: center;
}
#city .city_top > p {
  margin: 0 20px;
}
#city .el-dialog--center {
  width: 800px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 4px;
  border: solid 1px #707070;
}

#city .queding {
  width: 62px;
  height: 30px;
  background-color: #d12d2c;
  border-radius: 4px;
  font-size: 16px;
  color: #ffffff;
  border: none;
  outline: none;
}
</style>