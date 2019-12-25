<template>
  <div id="search">
    <div class="list">
      <li v-for="(item,index) in searchKeyArr" :key="index" @click="getCurrentSearch(item)" :class="item.isCheck?'check':''">
        {{item.name}}
      </li>
    </div>
    <div class="search_text_btn">
      <input type="text" v-model="searchKey" value placeholder="请输入你想要搜索的内容" name="search" class="search_text" />
      <button class="btn"  @click="toSearchList">搜索</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      searchKeyArr: [
        {
          name: "课程",
          id: "1",
          isCheck: true
        },
        {
          name: "机构",
          id: "2",
          isCheck: false
        },
        {
          name: "资讯",
          id: "3",
          isCheck: false
        }
      ],
      currentSearch: "1",
      searchData: "",
      searchKey: ""
    };
  },

  methods: {
    toSearchList() {
      // this.$router.push("./searchList"); //跳转到指定组件
      if (this.currentSearch == "1") {
        this.$router.push({
            path:'/searchList/'+this.searchKey
          });
      }else if(this.currentSearch == "2"){
        this.$router.push({
          path:'/educationalServices2/'+this.searchKey
        });
      }
    },
    getCurrentSearch(type) {
      this.searchKeyArr.map(item => {
        if (item.id == type.id) {
          this.currentSearch = type.id;
          item.isCheck = true;
        } else {
          item.isCheck = false;
        }
      });
    }
  }
};
</script>
<style scoped>
.btn {
  width: 88px;
  height: 100%;
  background-color: #d12d2c;
  outline: none;
  border: none;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  font-size: 20px;
  color: #ffffff;
  box-sizing: border-box;
}
.check {
  color: #d12d2c;
}
.search_text_btn {
  height: 46px;
  display: flex;

  flex-wrap: nowrap;
}
.search_text {
  padding: 0px;
  width: 380px;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: solid 2px #d12d2c;
  font-size: 16px;
  text-indent: 20px;
  outline: none;
  color: #cccccc;
  box-sizing: border-box;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #cccccc;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #cccccc;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #cccccc;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #cccccc;
}
.list {
  display: flex;
  width: 210px;
  justify-content: space-around;
  margin: 5px 0
}
.list > li {
  list-style: none;
  cursor: pointer;
}
.list > li > a {
  font-size: 16px;
  letter-spacing: 0px;
  color: #999999;
}
</style>