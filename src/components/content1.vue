<template>
  <div id="homeContainerContent">
    <div class="titel_img">
      <div class="titel">
        <div></div>
        <p>{{currentData.name}}</p>
      </div>
      <div class="img">
        <img src alt />
      </div>
    </div>
    <!-- 选项卡内容 -->
    <div class="homeContainerContent_content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="currentData.courses[0].category.name" name="first">
          <div id="text">
            <div v-for="(item,index) in [currentData]" :key="index">
              <img :src="item.logo" alt />
              <p class="text1">{{item.title}}</p>
            </div>
          </div>
          <!-- 底部内容 -->
          <div class="text_bottom">
            <!-- 底部左边内容 -->
            <div class="text_bottom_left">
              <div>
                <div></div>
                <p>新闻资讯</p>
              </div>
              <div>
                <div>
                  <p>河南高职高专批开录 特色专科受青睐</p>
                  <img src alt />
                </div>
                <div>
                  <a href v-for="(item,index) in contents" :key="index">{{item.title}}</a>
                </div>
              </div>
            </div>
            <!-- 底部右边内容 -->
            <div class="text_bottom_right">
              <div>
                <div></div>
                <p>推荐机构</p>
              </div>
              <!-- 底部右边轮播图 -->
              <div>
                <el-carousel :interval="5000" arrow="always">
                  <el-carousel-item v-for="(item,index) in items2" :key="index">
                    <img :src="item.src" alt id="samll_img" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="childrenName1" name="second">
          <div id="text">
            <div v-for="(item,index) in items1" :key="index">
              <img :src="item.logo" alt />
              <p class="text1">{{item.title}}</p>
            </div>
          </div>
          <!-- 底部内容 -->
          <div class="text_bottom">
            <!-- 底部左边内容 -->
            <div class="text_bottom_left">
              <div>
                <div></div>
                <p>新闻资讯</p>
              </div>
              <div>
                <div>
                  <p>河南高职高专批开录 特色专科受青睐</p>
                  <img src alt />
                </div>
                <div>
                  <a href v-for="(item,index) in contents1" :key="index">{{item.title}}</a>
                </div>
              </div>
            </div>
            <!-- 底部右边内容 -->
            <div class="text_bottom_right">
              <div>
                <div></div>
                <p>推荐机构</p>
              </div>
              <!-- 底部右边轮播图 -->
              <div>
                <el-carousel :interval="5000" arrow="always">
                  <el-carousel-item v-for="(item,index) in items2" :key="index">
                    <img :src="item.src" alt id="samll_img" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="childrenName2" name="third">
          <div id="text">
            <div v-for="(item,index) in items2" :key="index">
              <img :src="item.logo" alt />
              <p class="text1">{{item.title}}</p>
            </div>
          </div>
          <!-- 底部内容 -->
          <div class="text_bottom">
            <!-- 底部左边内容 -->
            <div class="text_bottom_left">
              <div>
                <div></div>
                <p>新闻资讯</p>
              </div>
              <div>
                <div>
                  <p>河南高职高专批开录 特色专科受青睐</p>
                  <img src alt />
                </div>
                <div>
                  <a href v-for="(item,index) in contents2" :key="index">{{item.title}}</a>
                </div>
              </div>
            </div>
            <!-- 底部右边内容 -->
            <div class="text_bottom_right">
              <div>
                <div></div>
                <p>推荐机构</p>
              </div>
              <!-- 底部右边轮播图 -->
              <div>
                <el-carousel :interval="5000" arrow="always">
                  <el-carousel-item v-for="(item,index) in items2" :key="index">
                    <img :src="item.src" alt id="samll_img" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="childrenName3" name="fourth">
          <div id="text">
            <div v-for="(item,index) in items3" :key="index">
              <img :src="item.logo" alt />
              <p class="text1">{{item.title}}</p>
            </div>
          </div>
          <!-- 底部内容 -->
          <div class="text_bottom">
            <!-- 底部左边内容 -->
            <div class="text_bottom_left">
              <div>
                <div></div>
                <p>新闻资讯</p>
              </div>
              <div>
                <div>
                  <p>河南高职高专批开录 特色专科受青睐</p>
                  <img src alt />
                </div>
                <div>
                  <a href v-for="(item,index) in contents3" :key="index">{{item.title}}</a>
                </div>
              </div>
            </div>
            <!-- 底部右边内容 -->
            <div class="text_bottom_right">
              <div>
                <div></div>
                <p>推荐机构</p>
              </div>
              <!-- 底部右边轮播图 -->
              <div>
                <el-carousel :interval="5000" arrow="always">
                  <el-carousel-item v-for="(item,index) in items2" :key="index">
                    <img :src="item.src" alt id="samll_img" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="childrenName4" name="five">
          <div id="text">
            <div v-for="(item,index) in items4" :key="index">
              <img :src="item.logo" alt />
              <p class="text1">{{item.title}}</p>
            </div>
          </div>
          <!-- 底部内容 -->
          <div class="text_bottom">
            <!-- 底部左边内容 -->
            <div class="text_bottom_left">
              <div>
                <div></div>
                <p>新闻资讯</p>
              </div>
              <div>
                <div>
                  <p>河南高职高专批开录 特色专科受青睐</p>
                  <img src alt />
                </div>
                <div>
                  <a href v-for="(item,index) in contents4" :key="index">{{item.title}}</a>
                </div>
              </div>
            </div>
            <!-- 底部右边内容 -->
            <div class="text_bottom_right">
              <div>
                <div></div>
                <p>推荐机构</p>
              </div>
              <!-- 底部右边轮播图 -->
              <div>
                <el-carousel :interval="5000" arrow="always">
                  <el-carousel-item v-for="(item,index) in items2" :key="index">
                    <img :src="item.src" alt id="samll_img" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="childrenName5" name="six">
          <div id="text">
            <div v-for="(item,index) in items5" :key="index">
              <img :src="item.logo" alt />
              <p class="text1">{{item.title}}</p>
            </div>
          </div>
          <!-- 底部内容 -->
          <div class="text_bottom">
            <!-- 底部左边内容 -->
            <div class="text_bottom_left">
              <div>
                <div></div>
                <p>新闻资讯</p>
              </div>
              <div>
                <div>
                  <p>河南高职高专批开录 特色专科受青睐</p>
                  <img src alt />
                </div>
                <div>
                  <a href v-for="(item,index) in contents5" :key="index">{{item.title}}</a>
                </div>
              </div>
            </div>
            <!-- 底部右边内容 -->
            <div class="text_bottom_right">
              <div>
                <div></div>
                <p>推荐机构</p>
              </div>
              <!-- 底部右边轮播图 -->
              <div>
                <el-carousel :interval="5000" arrow="always">
                  <el-carousel-item v-for="(item,index) in items2" :key="index">
                    <img :src="item.src" alt id="samll_img" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
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
      currentData:"",
      imgUrl: "",
      titelName: "",
      activeName: "first",
      childrenName: "",
      childrenName1: "",
      childrenName2: "",
      childrenName3: "",
      childrenName4: "",
      childrenName5: "",
      contents: "",
      contents1: "",
      contents2: "",
      contents3: "",
      contents4: "",
      contents5: "",
      items1: "",
      items: "",
      items2: "",
      items3: "",
      items4: "",
      items5: ""
    };
  },
    mounted() {
    this.$root.bus.$on("content1", this.getCurrentProvince);
  },
  created() {
    fetch(`/api/index/contents`, {
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

        for (let key in res) {
          arr.push(res[key]);
        }
        this.titelName = arr[1].name;
        this.childrenName = arr[1].children[0].name;
        this.childrenName1 = arr[1].children[1].name;
        this.childrenName2 = arr[1].children[2].name;
        this.childrenName3 = arr[1].children[3].name;
        this.childrenName4 = arr[1].children[4].name;
        this.childrenName5 = arr[1].children[5].name;
        this.imgUrl = arr[1].pc_img;
        this.items = arr[1].children[0].courses;
        this.items1 = arr[1].children[1].courses;
        this.items2 = arr[1].children[2].courses;
        this.items3 = arr[1].children[3].courses;
        this.items4 = arr[1].children[4].courses;
        this.items5 = arr[1].children[5].courses;
        this.contents = arr[1].children[0].articles;
        this.contents1 = arr[1].children[1].articles;
        this.contents2 = arr[1].children[2].articles;
        this.contents3 = arr[1].children[3].articles;
        this.contents4 = arr[1].children[4].articles;
        this.contents5 = arr[1].children[5].articles;
      });
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getCurrentProvince(data){
      this.currentData = data
      console.log(this.currentData)
    }
  }
};
</script>