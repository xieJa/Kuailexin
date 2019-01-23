<template>
  <div class="join-in">
    <div class="title">欢迎来到快乐星，以下填写的隐私信息，快乐星承诺绝不透露给第三方！</div>
    <el-form ref="form" :model="form" label-width="120px" :rules="rules">
      <el-form-item label="姓名" prop="UserName">
        <el-input v-model="form.UserName"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.Sex">
          <el-radio label="男">先生</el-radio>
          <el-radio label="女">女士</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="手机" prop="Telephone">
        <el-input v-model="form.Telephone"></el-input>
      </el-form-item>
      <el-form-item label="接收QQ或微信">
        <el-input v-model="form.QQWechat"></el-input>
      </el-form-item>
      <el-form-item label="地址" v-if="!this.$M">
        <el-cascader :options="siteOptions" @active-item-change="handleItemChange" :props="props"></el-cascader>
      </el-form-item>
      <el-form-item v-if="!this.$M">
        <el-input v-model="Address" placeholder="请输入详细地址"></el-input>
      </el-form-item>
      <el-form-item label="留言内容">
        <el-input type="textarea" v-model="form.Content" :rows="7"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="form.Receive">接收开店资料</el-checkbox>
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
import siteData from "@/json/sitedata_bas.js";
import Qs from 'qs'
export default {
  name: "Message",
  data() {
    return {
      form: {
        UserName: "",
        Sex:'',
        Telephone:'',
        Receive: "",
        QQWechat: "",
        Address: "",
        Content: ""
      },   
      siteOptions: siteData.arrCity,  //城市数据
      site:'',  //城市
      Address:'',  //详细地址
      props: {
        value: 'label',
        children:'sub'
      },   
      rules: {
        UserName: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        Telephone: [
          { pattern: /^1[345678]\d{9}$/, message: '请输入正确的手机号', trigger: ['change'] }
        ]     
      }
    };
  },
  methods: {
    radioButton: function(name, $event) {
      simulatorform.radioButton(name, $event);
    },
    submitForm(formName) {
      this.form.Address = this.site+','+this.Address
      this.form.Receive = this.form.Receive=='true'?'是':'否'
      let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {          
          this.$axios.post("/ajaxdata.aspx?Action=Message",Qs.stringify(that.form))
          .then(function(res){
            if(res.data.result){
              alert("留言成功")
            }else{
              alert("留言失败")
            }
            for(let name in that.form){
              that.form[name]="";
            }
          })
          .catch(function(err){
            console.log(err)
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleItemChange(val) {
      this.site = val
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
.el-select,.el-cascader{
    width:100%;
}
.el-button{
  width:280px;
}
</style>
