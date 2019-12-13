<template>
  <div id="login">
    <el-dialog title="登录" :visible.sync="FormVisible"  center>
      <el-form :model="form" center>
        <div class="username">
          <el-form-item label center>
            <el-input v-model="form.name" autocomplete="off" placeholder="邮箱/手机/用户名" id="username"></el-input>
          </el-form-item>
        </div>
        <div class="passwd">
          <el-form-item label center>
            <el-input v-model="form.passwd" autocomplete="off" placeholder="密码" id="passwd"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="FormVisible = false">登 录</el-button>
        <ul>
          <li>立即注册>></li>
          <li>忘记密码?</li>
        </ul>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      FormVisible: false,
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
  mounted() {
    let that = this;
    this.$root.bus.$on("11", function(value) {
      that.FormVisible = value;
    });
  }
};
</script>
<style >
#login li {
  list-style: none;
  margin-top: 6px;
}
#login ul > li:nth-child(1) {
  font-size: 16px;
  color: #d12d2c;
}
#login ul > li:nth-child(2) {
  font-size: 16px;
  color: #333333;
}
#login ul {
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
#login .username {
  display: flex;
  justify-content: center;
}
#login .passwd {
  display: flex;
  justify-content: center;
}
#login .el-input__inner {
  width: 320px;
  height: 46px;
  background-color: #ffffff;
  border-radius: 4px;
  border: solid 1px #cccccc;
  margin: 0 auto;
  text-indent: 30px;
}
#login #username {
  background-image: url("../assets/nickname.svg");
  background-position: 10px;
  background-repeat: no-repeat;
}
#login #passwd {
  background-image: url("../assets/locking.svg");
  background-position: 10px;
  background-repeat: no-repeat;
}
#login .el-dialog--center {
  width: 400px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 4px;
}
#login .el-dialog__header {
  margin-bottom: 42px;
}
#login .el-dialog__title {
  font-family: Source Han Sans CN;
  font-size: 30px;
  color: #333333;
}
#login .el-form-item {
  margin-bottom: 30px;
}
#login .el-button--primary {
  width: 320px;
  height: 46px;
  background-color: #d12d2c;
  border-radius: 4px;
  border: 0px;
}
#login .el-button--primary span {
  font-family: Source Han Sans CN;
  font-size: 20px;
  color: #ffffff;
}
#login .el-dialog--center .el-dialog__body {
  padding: 0px;
}
</style>