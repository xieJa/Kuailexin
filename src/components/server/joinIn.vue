<template>
  <div class="join-in">
    <div class="title" v-if="!this.$M">请填写下列信息申请加盟（*为必填项）</div>
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="姓名" prop="UserName" v-if="!this.$M">
        <el-input v-model="form.UserName"></el-input>
      </el-form-item>
      <el-form-item label="性别" v-if="!this.$M">
        <el-radio-group v-model="form.Sex">
          <el-radio label="男">先生</el-radio>
          <el-radio label="女">女士</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="手机" prop="Mobile">
        <el-input v-model="form.Mobile"></el-input>
      </el-form-item>
      <el-form-item label="E-mail" prop="Email" v-if="!this.$M">
        <el-input v-model="form.Email"></el-input>
      </el-form-item>
      <el-form-item label="意向省市" v-if="!this.$M">
        <el-cascader :options="siteOptions" @active-item-change="handleItemChange" :props="props"></el-cascader>
      </el-form-item>
      <el-form-item v-if="!this.$M">
        <el-input v-model="Address" placeholder="请输入详细地址"></el-input>
      </el-form-item>
      <el-form-item label="餐饮经验" v-if="!this.$M">
        <el-radio-group v-model="form.DiningExperience">
          <el-radio label="有">有</el-radio>
          <el-radio label="无">无</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="投资预算">
        <el-select v-model="form.InvestmentBudget" placeholder="请选择">
          <el-option label="5-10万" value="5-10万"></el-option>
          <el-option label="10-20万" value="10-20万"></el-option>
          <el-option label="20-50万" value="20-50万"></el-option>
          <el-option label="50-100万" value="50-100万"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="门店面积">
        <el-select v-model="form.Area" placeholder="请选择">
          <el-option label="10-50㎡" value="10-50㎡"></el-option>
          <el-option label="50-120㎡" value="50-120㎡"></el-option>
          <el-option label="121-200㎡" value="121-200㎡"></el-option>
          <el-option label="200-350㎡" value="200-350㎡"></el-option>
          <el-option label="350㎡以上" value="350㎡以上"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="意向位置">
        <el-select v-model="form.Position" placeholder="请选择">
          <el-option label="学校附近" value="学校附近"></el-option>
          <el-option label="商业街" value="商业街"></el-option>
          <el-option label="住宅小区" value="住宅小区"></el-option>
          <el-option label="车站" value="车站"></el-option>
          <el-option label="其他" value="其他"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="预约时间" v-if="!this.$M">
        <el-date-picker v-model="form.ReservationTime" type="date" placeholder="选择日期" format="yyyy/MM/dd " :picker-options="pickerOptions0"></el-date-picker>
      </el-form-item>
      <el-form-item label="获知渠道" v-if="!this.$M">
        <el-select v-model="form.Know" placeholder="请选择">
          <el-option label="微信公众号" value="微信公众号"></el-option>
          <el-option label="网络图像广告" value="网络图像广告"></el-option>
          <el-option label="搜寻关键字" value="搜寻关键字"></el-option>
          <el-option label="官网" value="官网"></el-option>
          <el-option label="平面媒体广告" value="平面媒体广告"></el-option>
          <el-option label="协办单位介绍" value="协办单位介绍"></el-option>
          <el-option label="其它(电话、邮件等)" value="其它(电话、邮件等)"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="需求信息" v-if="!this.$M">
        <el-input type="textarea" v-model="form.Demand"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">立即提交</el-button>
      </el-form-item>
    </el-form>
    <div class="wechat">
        <h3>欢迎加顾问微信进行沟通</h3>
        <span>
            <img src="@/assets/wechat_zx1.jpg" alt="">
            <p>微信顾问1</p>
        </span>
        <span>
            <img src="@/assets/wechat_zx2.jpg" alt="">
            <p>微信顾问2</p>
        </span>
    </div>
    <pageQrcode></pageQrcode>
  </div>
</template>

<script>
import pageQrcode from "../pageQrcode";
import siteData from "@/json/sitedata_bas.js";
import Qs from 'qs'
export default {
  name: "joinIn",
  data() {
    return {
      form: {
        UserName: "", //姓名
        Sex:"",  //性别
        Mobile:"", //手机
        Email: "", //Email
        Address: "", //地址
        DiningExperience: "", //餐饮行业经验
        InvestmentBudget: "", //投资预算
        Area: "", //门店面积
        Position: "", //意向位置
        ReservationTime: "",  //预约洽谈时间
        Know: "", //获知渠道
        Demand:""  //需求信息
      },
      siteOptions: siteData.arrCity,  //城市数据
      site:'',  //城市
      Address:'',  //详细地址
      props: {
        value: 'label',
        children:'sub'
      },
      pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
      },
      rules: {
        UserName: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        Mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { pattern: /^1[345678]\d{9}$/, message: '请输入正确的手机号', trigger: ['blur', 'change'] }
        ],
        Email: [
          { type: 'email',  message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]        
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.form.Address = this.site+','+this.Address
      let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {          
          this.$axios.post("/ajaxdata.aspx?Action=Join",Qs.stringify(that.form))
          .then(function(res){
            if(res.data.result){
              alert("申请提交成功")
            }else{
              alert("申请提交失败")
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
.wechat{
    text-align: center;
    color:#c9151e;
    margin-top:80px;
}
.wechat span{
    padding-top:30px;
    max-width:160px;
    width: calc(50% - 80px);
    display: inline-block;
    margin:0 30px;
    font-size: 20px;
    color:#333;
    line-height: 2;
}
@media screen and (max-width:1000px){
  .join-in{padding:0 10px;}
  .wechat span{
    max-width: calc(50% - 30px);
    margin:0 10px;
    font-size: 12px;
  }
}
</style>
