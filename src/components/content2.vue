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
    <div v-if="currentData.children.length" class="homeContainerContent_content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="currentData.children[0].name" name="first">
          <div id="text">
            <div v-for="(item,index) in currentData.children[0].courses" :key="index">
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
                  <a href v-for="(item,index) in currentData.children[0].articles" :key="index">{{item.title}}</a>
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
                  <el-carousel-item v-for="(item,index) in 1" :key="index">
                    <img :src="item.src" alt id="samll_img" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="currentData.children[1].name" name="second">
          <div id="text">
            <div v-for="(item,index) in currentData.children[1].courses" :key="index">
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
                  <a href v-for="(item,index) in currentData.children[1].articles" :key="index">{{item.title}}</a>
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
                  <el-carousel-item v-for="(item,index) in 1" :key="index">
                    <img :src="item.src" alt id="samll_img" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="currentData.children[2].name" name="third">
          <div id="text">
            <div v-for="(item,index) in currentData.children[2].courses" :key="index">
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
                  <a href v-for="(item,index) in currentData.children[2].articles" :key="index">{{item.title}}</a>
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
                  <el-carousel-item v-for="(item,index) in 1" :key="index">
                    <img :src="item.src" alt id="samll_img" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="currentData.children[3].name" name="fourth">
          <div id="text">
            <div v-for="(item,index) in currentData.children[3].courses" :key="index">
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
                  <a href v-for="(item,index) in currentData.children[3].articles" :key="index">{{item.title}}</a>
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
                  <el-carousel-item v-for="(item,index) in 1" :key="index">
                    <img :src="item.src" alt id="samll_img" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="currentData.children[4].name" name="five">
          <div id="text">
            <div v-for="(item,index) in currentData.children[4].courses" :key="index">
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
                  <a href v-for="(item,index) in currentData.children[4].articles" :key="index">{{item.title}}</a>
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
                  <el-carousel-item v-for="(item,index) in 1" :key="index">
                    <img :src="item.src" alt id="samll_img" />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="currentData.children[5].name" name="six">
          <div id="text">
            <div v-for="(item,index) in currentData.children[5].courses" :key="index">
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
                  <a href v-for="(item,index) in currentData.children[5].articles" :key="index">{{item.title}}</a>
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
                  <el-carousel-item v-for="(item,index) in 1" :key="index">
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
      currentData: {
        children: [],
        name: "123"
      },
      activeName: "first"
    };
  },
  mounted() {
    this.$root.bus.$on("content2", this.getCurrentProvince);
  },
  methods: {
    handleClick(node) {
                  fetch(`/api/index/contents/${this.currentData.children[node.index].id}`, {
        // must match 'Content-Type' header
        headers: {
          "content-type": "application/json",
        },
        method: "GET" // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, cors, *same-origin
      })
        .then(data => {
          return data.json();
        })
        .then(res => {
          console.log(res);
          this.currentData.children[node.index].recommend_orgs = res.recommend_orgs
          this.currentData.children[node.index].articles = res.articles
          this.currentData.children[node.index].courses = res.courses
          this.$set(this.currentData.children,node.index,this.currentData.children[node.index])
        });
    },
    getCurrentProvince(data) {
      this.currentData = data;
    }
  }
};
</script>