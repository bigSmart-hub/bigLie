<template>
  <div id="register">
    <el-dialog title="注册" :visible.sync="registerVisible"  center>
      <el-form :model="form" center>
        <div>
          <el-form-item>
            <el-radio-group v-model="form.resource">
              <el-radio label="学员"></el-radio>
              <el-radio label="机构"></el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
        <div class="Email">
          <el-form-item label center>
            <el-input v-model="form.Email" autocomplete="off" placeholder="邮件" id="Emali"></el-input>
          </el-form-item>
        </div>
        <div class="username">
          <el-form-item label center>
            <el-input v-model="form.name" autocomplete="off" placeholder="用户名" id="username"></el-input>
          </el-form-item>
        </div>
        <div class="passwd">
          <el-form-item label center>
            <el-input v-model="form.passwd" autocomplete="off" placeholder="密码" id="passwd"></el-input>
          </el-form-item>
        </div>
        <div class="phone">
          <el-form-item label center>
            <el-input v-model="form.phone" autocomplete="off" placeholder="电话" id="phone"></el-input>
          </el-form-item>
        </div>
        <div class="safety">
          <el-form-item label center>
            <el-input v-model="form.safety" autocomplete="off" placeholder="验证码" id="safety"></el-input>
            <img src="../assets/图层505.svg" alt />
          </el-form-item>
        </div>
        <div class="province">
          <p>所属地址</p>
          <el-form-item label>
            <el-select v-model="form.region" placeholder="省份">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-form>
      <ul>
        <li @click="agreement" :class="agreement1"></li>
        <li>
          <a href>我认真阅读并接受此协议</a>
        </li>
        <li>
          <a href>服务协议</a>
        </li>
      </ul>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="registerVisible = false">注册并登录</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      registerVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      agreement1: ""
    };
  },
  methods: {
    agreement() {
      if (this.agreement1) {
        this.agreement1 = "";
      } else {
        this.agreement1 = "agreement";
      }
    }
  },
  mounted() {
    let that = this;
    this.$root.bus.$on("12", function(value) {
      that.registerVisible = value;
    });
  }
};
</script>
<style >
#register .agreement {
  background-color: #d12d2c;
}
#register li:nth-child(2) {
  margin-left: -20px;
}
#register li:nth-child(1) {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 2px solid #cccccc;
  box-sizing: border-box;
}
#register li:nth-child(2) > a {
  color: #d12d2c;
  text-decoration: underline;
  font-size: 16px;
  margin-left: -20px;
}
#register li:nth-child(3) > a {
  color: #333333;
  text-decoration: underline;
  font-size: 16px;
}
#register .el-form-item__content {
  display: flex;
}
#register li {
  list-style: none;
  margin-top: 6px;
}
#register .el-radio__label {
  font-size: 20px;
  line-height: 13px;
  color: #666666;
}
#register .el-radio__input.is-checked .el-radio__inner {
  background: #d12d2c;
}
#register .province > p {
  font-size: 16px;
  color: #333333;
  margin-bottom: 24px;
}
#register .province {
  width: 320px;
  margin: 0 auto;
}
#register .el-radio__inner {
  width: 20px;
  height: 20px;
  border: solid 2px #cccccc;
}
#register ul > li:nth-child(1) {
  font-size: 16px;
  color: #d12d2c;
}
#register ul > li:nth-child(2) {
  font-size: 16px;
  color: #333333;
}
#register ul {
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
#register .username {
  display: flex;
  justify-content: center;
}
#register .passwd {
  display: flex;
  justify-content: center;
}
#register .el-input__inner {
  width: 320px;
  height: 46px;
  background-color: #ffffff;
  border-radius: 4px;
  border: solid 1px #cccccc;
  margin: 0 auto;
  text-indent: 30px;
}
#register .safety img {
  margin-right: 40px;
}
#register .el-radio-group {
  margin-left: 56px;
}
#register #username {
  background-image: url("../assets/nickname.svg");
  background-position: 10px;
  background-repeat: no-repeat;
}
#register #safety {
  background-image: url("../assets/safety.svg");
  background-position: 10px;
  background-repeat: no-repeat;
  margin-left: 40px;
}
#register #passwd {
  background-image: url("../assets/locking.svg");
  background-position: 10px;
  background-repeat: no-repeat;
}
#register #Emali {
  background-image: url("../assets/youjian.svg");
  background-position: 10px;
  background-repeat: no-repeat;
}
#register #phone {
  background-image: url("../assets/phone.svg");
  background-position: 10px;
  background-repeat: no-repeat;
}
#register #safety {
  width: 170px;
}
#register .el-dialog--center {
  width: 400px;
  height: 746px;
  background-color: #ffffff;
  border-radius: 4px;
}
#register .el-dialog__header {
  margin-bottom: 42px;
}
#register .el-dialog__title {
  font-family: Source Han Sans CN;
  font-size: 30px;
  color: #333333;
}
#register .el-form-item {
  margin-bottom: 30px;
}
#register .el-button--primary {
  width: 320px;
  height: 46px;
  background-color: #d12d2c;
  border-radius: 4px;
  border: 0px;
}
#register .el-button--primary span {
  font-family: Source Han Sans CN;
  font-size: 20px;
  color: #ffffff;
}
#register .el-dialog--center .el-dialog__body {
  padding: 0px;
}
#register .el-input {
  display: flex;
  justify-content: center;
}
</style>