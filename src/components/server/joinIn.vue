<template>
  <div class="join-in">
    <div class="title">请填写下列信息申请加盟（*为必填项）</div>
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="男">先生</el-radio>
          <el-radio label="女">女士</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="手机" prop="tel">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item label="E-mail" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-select v-model="form.region" placeholder="省份" style="width:49%;float:left;">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        <el-select v-model="form.region" placeholder="城市" style="width:49%;margin-left:2%;">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.name" placeholder="请输入详细地址"></el-input>
      </el-form-item>
      <el-form-item label="餐饮经验">
        <el-radio-group v-model="form.resource">
          <el-radio label="男">有</el-radio>
          <el-radio label="女">无</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="投资预算">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="门店面积">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="意向位置">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预约时间">
        <el-date-picker v-model="value10" type="date" placeholder="选择日期" format="yyyy/MM/dd " :picker-options="pickerOptions0"></el-date-picker>
      </el-form-item>
      <el-form-item label="获知渠道">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="需求信息">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">立即提交</el-button>
      </el-form-item>
    </el-form>
    <div class="wechat">
        <h3>欢迎加顾问微信进行沟通</h3>
        <span>
            <img src="@/assets/timg.jpg" alt="">
            <p>微信号：15216646273</p>
        </span>
        <span>
            <img src="@/assets/timg.jpg" alt="">
            <p>微信号：15216646273</p>
        </span>
    </div>
    <pageQrcode></pageQrcode>
  </div>
</template>

<script>
import pageQrcode from "../pageQrcode";
export default {
  name: "joinIn",
  data() {
    return {
      form: {
        name: "",
        tel:'',
        email:'',
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        sex: "男",
        resource: "有",
        desc: ""
      },
      value10: "",
      pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        tel: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { pattern: /^1[345678]\d{9}$/, message: '请输入正确的手机号', trigger: ['blur', 'change'] }
        ],
        email: [
          { type: 'email',  message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]        
      }
    };
  },
  methods: {
    radioButton: function(name, $event) {
      simulatorform.radioButton(name, $event);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  components: {
    pageQrcode
  }
};
</script>

<style scoped>
.join-in {
  margin-top: 40px;
}
.join-in .title {
  font-size: 16px;
  color: #c8161e;
  text-align: center;
}
.el-form{
    max-width:680px;
    width:100%;
    margin:0 auto;
    margin-top:50px;
}
.el-select{
    width:100%;
}
.wechat{
    text-align: center;
    color:#c9151e;
    margin-top:80px;
}
.wechat span{
    padding-top:30px;
    max-width: calc(50% - 80px);
    display: inline-block;
    margin:0 30px;
    font-size: 20px;
    color:#333;
    line-height: 2;
}
</style>
