<template>
  <!-- 机构 -->
  <div id="mechanism">
    <div class="mechanism_top">
      <div class="mechanism_top_back"></div>
      <div class="mechanism_top_option">
        <ul>
          <li
            @click="changes(item)"
            :id="item.isCheck?'check':''"
            v-for="(item,index) in nameArr"
            :key="index"
          >{{item.name}}</li>
          <li>
            <button>我要在线报名</button>
          </li>
        </ul>
      </div>
      <div class="mechanism_top_content">
        <img src="../assets/timg(2).svg" alt />
        <div class="mechanism_top_content_text">
          <p>成都琢美彩妆美甲培新学院</p>
          <p>琢美教育以时尚艺术为名，由金牌一线教师团队定力创建，凭惜对时尚造型长期的探索和积累</p>
        </div>
        <div class="mechanism_top_content_text1">
          <img src="../assets/形状 9.png" alt />
          <div >
            <p>0991-4333984</p>
            <p>咨询时间：09:00-18:00</p>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentSearch: "1",
      nameArr: [
        {
          name: "机构首页",
          id: "1",
          isCheck: true
        },
        {
          name: "机构介绍",
          id: "2",
          isCheck: false
        },
        {
          name: "全部课程",
          id: "3",
          isCheck: false
        },
        {
          name: "机构动态",
          id: "4",
          isCheck: false
        },
        {
          name: "优惠信息",
          id: "5",
          isCheck: false
        },
        {
          name: "校区分布",
          id: "6",
          isCheck: false
        }
      ]
    };
  },
  mounted() {
    
  },
  methods: {
    
    changes(type) {
      this.nameArr.map(item => {
        if (item.id == type.id) {
          this.currentSearch = type.id;
          item.isCheck = true;
        } else {
          item.isCheck = false;
        }
      });
      if (this.currentSearch == "1") {
        this.$router.push({
          name: "mechanism1"
        });
      } else if (this.currentSearch == "2") {
        this.$router.push({
          path: "/mechanism2/"
        });
      } else if (this.currentSearch == "3") {
        this.$router.push({
          path: "/mechanism3/"
        });
      } else if (this.currentSearch == "4") {
        this.$router.push({
          path: "/mechanism4/"
        });
      } else if (this.currentSearch == "5") {
        this.$router.push({
          path: "/mechanism5/"
        });
      } else if (this.currentSearch == "6") {
        this.$router.push({
          path: "/mechanism6/"
        });
      }
    }
  }
};
</script>
<style>
#mechanism .mechanism_top_content_text > p:nth-child(1) {
  font-size: 30px;
  color: #ffffff;
  margin-top: 30px
}
#mechanism .mechanism_top_content_text > p:nth-child(2) {
  font-size: 14px;
  color: #ffffff;
}
#mechanism .mechanism_top_content_text1  p:nth-child(1) {
  font-size: 30px;
  color: #ffffff;
}
#mechanism .mechanism_top_content_text1  p:nth-child(2) {
  font-size: 16px;
  color: #ffffff;
}
#mechanism .mechanism_top_content_text1{
    display: flex;
    margin-left: 200px;
    align-items: center
}
#mechanism .mechanism_top_content_text1>img{
    
    height: 56px;
    margin-right: 13px
}
#mechanism .mechanism_top_content {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 34px
}
#mechanism .mechanism_top_content > img {
  width: 120px;
  height: 120px;
  margin-right: 20px;
}
#mechanism #check {
  background-color: #f6f6f6;
  font-size: 20px;
  color: #666666;
}
#mechanism .mechanism_top {
  width: 100%;
  height: 240px;
  background-image: url("../assets/Clip@2x.jpg");
  display: flex;
  flex-direction: column-reverse;
  position: relative;
}
#mechanism .mechanism_top_option {
  position: absolute;
  width: 100%;
}
li {
  list-style: none;
}
#mechanism .mechanism_top_option > ul {
  display: flex;
  width: 1200px;
  margin: 0 auto;
}
#mechanism .mechanism_top_back {
  width: 100%;
  height: 50px;
  background-color: #000000;
  opacity: 0.25;
}
#mechanism .mechanism_top_option > ul > li:nth-child(7) {
  flex-grow: 1;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
#mechanism .mechanism_top_option > ul > li:nth-child(7) > button {
  width: 144px;
  height: 30px;
  background-color: #d12d2c;
  border-radius: 4px;
  font-size: 16px;
  color: #ffffff;
  outline: none;
  border: none;
}
#mechanism .mechanism_top_option > ul > li {
  font-size: 20px;
  color: #ffffff;
  width: 140px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}
</style>