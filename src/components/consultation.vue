<template>
  <div id="consultation">
    <div>
      <div class="sanjiao"></div>
      <p>找到适合您的培训机构</p>
      <p>免费预约顾问</p>
    </div>
    <div class="consultation_form">
      <div>
        <p>学员</p>
        <p>136****7606</p>
        <p>9分钟前预约</p>
      </div>
      <div>
        <el-form ref="form" :model="form" style="width:100%">
          <el-form-item>
            <el-input v-model="form.name" placeholder="您感兴趣的课程"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.region" placeholder="您想去的机构（选填）"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.desc" placeholder="您的手机号码"></el-input>
          </el-form-item>
          <div class="text">
            <p>当前地址</p>
            <p>成都</p>
            <i class="el-icon-edit-outline"></i>
          </div>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即预约</el-button>
          </el-form-item>
          <div class="a1023">15分钟内为您推荐3家优质机构</div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style>
#consultation .sanjiao {
  border-top: 30px solid transparent;
  border-left: 239px solid #ffffff;
  margin-bottom: 0px
}
#consultation .a1023 {
  width: 200px;
  height: 22px;
  background-color: #fff6e9;
  height: 17px;
  font-size: 12px;
  color: #ff7200;
  text-align: center;
  margin-top: 13px;
}
#consultation .el-form-item:nth-child(2) {
  margin: 20px 0;
}
#consultation .text {
  display: flex;
  justify-content: flex-end;
  margin: 8px 0;
}
#consultation .text > p {
  font-size: 12px;
  color: #999999;
  margin-right: 6px;
}
#consultation .el-button--primary {
  width: 100%;
  background-color: #d12d2c;
  border-color: #d12d2c;
}
#consultation .consultation_form {
  padding: 10px 20px;
}
#consultation > div:nth-child(1) {
  background-image: url("../assets/adult-blackboard-chalk-734168.svg");
  background-position: center;
  width: 239px;
  height: 139px;
  display: flex;
  flex-direction: column-reverse;
}
#consultation > div:nth-child(1) > p:nth-child(3) {
   font-size: 20px;
  color: #ffffff;
  padding-left: 10px;
}
#consultation > div:nth-child(1) > p:nth-child(2) {
	font-size: 12px;
	color: #ffffff;
  padding: 0 0 40px 10px;
}
#consultation > div > div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 13px;
}
#consultation > div > div > p {
  font-size: 12px;
  color: #999999;
}
#consultation {
  width: 240px;
  background-color: #ffffff;
}
</style>