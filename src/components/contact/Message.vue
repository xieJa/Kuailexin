<template>
  <div class="join-in">
    <div class="title">欢迎来到快乐星，以下填写的隐私信息，快乐星承诺绝不透露给第三方！</div>
    <el-form ref="form" :model="form" label-width="120px" :rules="rules">
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
      <el-form-item label="接收QQ或微信" prop="email">
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
      <el-form-item label="留言内容:">
        <el-input type="textarea" v-model="form.desc" :rows="7"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox >接收开店资料</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">立即提交</el-button>
      </el-form-item>
    </el-form>
    <pageQrcode></pageQrcode>
  </div>
</template>

<script>
import pageQrcode from "../pageQrcode";
export default {
  name: "Message",
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
.el-button{
  width:280px;
}
</style>
