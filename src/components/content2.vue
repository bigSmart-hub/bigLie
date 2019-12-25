<template>
  <div id="homeContainerContent">
    <div class="titel_img">
      <div class="titel">
        <div></div>
        <p>{{currentData.name}}</p>
      </div>
      <div class="img">
        <img :src="`http://www.cepsp.com.cn${currentData.pc_img}`" alt />
      </div>
    </div>
    <!-- 选项卡内容 -->
    <div v-if="currentData.children.length" class="homeContainerContent_content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="currentData.children[0].name" name="first">
          <div id="text">
            <div v-for="(item,index) in currentData.children[0].courses" :key="index">
              <a :href="`http://psp.eol.cn/class/${item.old_id}`" target="blank">
                <img :src="`http://www.cepsp.com.cn${(item.image.length!=0||item.logo.length==0)?(item.image.length?item.image:item.logo):cdb}`" alt />
                <p class="text1">{{item.title}}</p>
              </a>
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
                  <p>{{currentData.children[0].articles[0].title}}</p>
                  <a
                    :href="`http://psp.eol.cn/edu/a/${currentData.children[0].articles[0].old_id}`"
                    target="blank"
                  >
                    <img
                      :src="`http://www.cepsp.com.cn/${currentData.children[0].articles[0].image}`"
                      alt
                    />
                  </a>
                </div>
                <div>
                  <a
                    :href="`http://psp.eol.cn/edu/a/${item.old_id}`"
                    target="blank"
                    v-for="(item,index) in currentData.children[0].articles"
                    :key="index"
                  >{{item.title}}</a>
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
                  <el-carousel-item
                    v-for="(item,index) in [currentData.children[0].recommend_orgs.slice(0,6),
                      currentData.children[0].recommend_orgs.slice(6,12),
                      currentData.children[0].recommend_orgs.slice(12,18)]"
                    :key="index"
                  >
                    <div class="recommend_orgs">
                      <a
                        :href="`http://psp.eol.cn/organization/${item.old_id}/index`"
                        v-for="(item,index) in item"
                        :key="index"
                        target="blank"
                      >
                        <img :src="`http://www.cepsp.com.cn${item.logo}`" alt id="samll_img" />
                      </a>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="currentData.children[1].name" name="second">
          <div id="text">
            <div v-for="(item,index) in currentData.children[1].courses" :key="index">
              <a :href="`http://psp.eol.cn/class/${item.old_id}`" target="blank">
                <img :src="`http://www.cepsp.com.cn${(item.image.length!=0||item.logo.length==0)?(item.image.length?item.image:item.logo):cdb}`" alt />
                <p class="text1">{{item.title}}</p>
              </a>
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
                  <p>{{aa}}</p>
                  <a
                    :href="`http://psp.eol.cn/edu/a/${item1.old_id}`"
                    target="blank"
                    v-for="(item1,index) in currentData.children[1].articles"
                    :key="index"
                  >
                    <img :src="`http://www.cepsp.com.cn${bb}`" alt />
                  </a>
                </div>
                <div>
                  <a
                    :href="`http://psp.eol.cn/edu/a/${item.old_id}`"
                    target="blank"
                    v-for="(item,index) in currentData.children[1].articles"
                    :key="index"
                  >{{item.title}}</a>
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
                  <el-carousel-item v-for="(item,index) in [orgs,orgs1,orgs2]" :key="index">
                    <div class="recommend_orgs">
                      <a
                        :href="`http://psp.eol.cn/organization/${item.old_id}/index`"
                        v-for="(item,index) in item"
                        :key="index"
                        target="blank"
                      >
                        <img :src="`http://www.cepsp.com.cn${item.logo}`" alt id="samll_img" />
                      </a>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="currentData.children[2].name" name="third">
          <div id="text">
            <div v-for="(item,index) in currentData.children[2].courses" :key="index">
              <a :href="`http://psp.eol.cn/class/${item.old_id}`" target="blank">
                <img :src="`http://www.cepsp.com.cn${(item.image.length!=0||item.logo.length==0)?(item.image.length?item.image:item.logo):cdb}`" alt />
                <p class="text1">{{item.title}}</p>
              </a>
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
                  <p>{{aa}}</p>
                  <a
                    :href="`http://psp.eol.cn/edu/a/${item1.old_id}`"
                    target="blank"
                    v-for="(item1,index) in currentData.children[2].articles"
                    :key="index"
                  >
                    <img :src="`http://www.cepsp.com.cn${bb}`" alt />
                  </a>
                </div>
                <div>
                  <a
                    :href="`http://psp.eol.cn/edu/a/${item.old_id}`"
                    target="blank"
                    v-for="(item,index) in currentData.children[2].articles"
                    :key="index"
                  >{{item.title}}</a>
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
                  <el-carousel-item v-for="(item,index) in [orgs,orgs1,orgs2]" :key="index">
                    <div class="recommend_orgs">
                      <a
                        :href="`http://psp.eol.cn/organization/${item.old_id}/index`"
                        v-for="(item,index) in item"
                        :key="index"
                        target="blank"
                      >
                        <img :src="`http://www.cepsp.com.cn${item.logo}`" alt id="samll_img" />
                      </a>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="currentData.children[3].name" name="fourth">
          <div id="text">
            <div v-for="(item,index) in currentData.children[3].courses" :key="index">
              <a :href="`http://psp.eol.cn/class/${item.old_id}`" target="blank">
                <img :src="`http://www.cepsp.com.cn${(item.image.length!=0||item.logo.length==0)?(item.image.length?item.image:item.logo):cdb}`" alt />
                <p class="text1">{{item.title}}</p>
              </a>
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
                  <p>{{aa}}</p>
                  <a
                    :href="`http://psp.eol.cn/edu/a/${item1.old_id}`"
                    target="blank"
                    v-for="(item1,index) in currentData.children[4].articles"
                    :key="index"
                  >
                    <img :src="`http://www.cepsp.com.cn${bb}`" alt />
                  </a>
                </div>
                <div>
                  <a
                    :href="`http://psp.eol.cn/edu/a/${item.old_id}`"
                    target="blank"
                    v-for="(item,index) in currentData.children[3].articles"
                    :key="index"
                  >{{item.title}}</a>
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
                  <el-carousel-item v-for="(item,index) in [orgs,orgs1,orgs2]" :key="index">
                    <div class="recommend_orgs">
                      <a
                        :href="`http://psp.eol.cn/organization/${item.old_id}/index`"
                        v-for="(item,index) in item"
                        :key="index"
                        target="blank"
                      >
                        <img :src="`http://www.cepsp.com.cn${item.logo}`" alt id="samll_img" />
                      </a>
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="currentData.children[4].name" name="five">
          <div id="text">
            <div v-for="(item,index) in currentData.children[4].courses" :key="index">
              <a :href="`http://psp.eol.cn/class/${item.old_id}`" target="blank">
                <img :src="`http://www.cepsp.com.cn${(item.image.length!=0||item.logo.length==0)?(item.image.length?item.image:item.logo):cdb}`" alt />
                <p class="text1">{{item.title}}</p>
              </a>
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
                  <p>{{aa}}</p>
                  <a
                    :href="`http://psp.eol.cn/edu/a/${item1.old_id}`"
                    target="blank"
                    v-for="(item1,index) in currentData.children[4].articles"
                    :key="index"
                  >
                    <img :src="`http://www.cepsp.com.cn${bb}`" alt />
                  </a>
                </div>
                <div>
                  <a
                    :href="`http://psp.eol.cn/edu/a/${item.old_id}`"
                    target="blank"
                    v-for="(item,index) in currentData.children[4].articles"
                    :key="index"
                  >{{item.title}}</a>
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
                  <el-carousel-item v-for="(item,index) in [orgs,orgs1,orgs2]" :key="index">
                    <div class="recommend_orgs">
                      <a
                        :href="`http://psp.eol.cn/organization/${item.old_id}/index`"
                        v-for="(item,index) in item"
                        :key="index"
                        target="blank"
                      >
                        <img :src="`http://www.cepsp.com.cn${item.logo}`" alt id="samll_img" />
                      </a>
                    </div>
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
      orgs:'',
      orgs1:'',
      orgs2:'',
      aa: "",
      bb: "",
      currentData: {
        children: [],
        name: ""
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
          province: `${this.$route.params.id}`
        },
        method: "GET" // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, cors, *same-origin
      })
        .then(data => {
          return data.json();
        })
        .then(res => {
          if (res.articles.length) {
            this.aa = res.articles[0].title;
            this.bb = res.articles[0].image;
          } else {
            this.aa = "aaaaaa";
          }
          this.orgs = res.recommend_orgs.slice(0, 6);
          this.orgs1 = res.recommend_orgs.slice(6, 12);
          this.orgs2 = res.recommend_orgs.slice(12, 18);
          this.currentData.children[node.index].recommend_orgs =
            res.recommend_orgs;
          this.currentData.children[node.index].articles = res.articles;
          this.currentData.children[node.index].courses = res.courses;
          this.$set(
            this.currentData.children,
            node.index,
            this.currentData.children[node.index]
          );
        });
    },
    getCurrentProvince(data) { 
      this.currentData = data;
     console.log( this.currentData.children[0].courses);
     
    }
  }
};
</script>