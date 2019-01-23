<template>
  <div class="join-in">
    <div class="description">斗石餐饮始终坚持服务为导向，加强公司内部管理，积极优化组织结构，公司经过硬件和软件的系统化建设及优化升级，体系的不断完善，使公司得以迅速发展。以“专心用心
放心”的经营理念规范提升专业度和服务模块，从加盟开店前期选址、装修、开业、培训到后期门店营运、管理、产品、活动、线上线下推广，“快乐星汉堡”已形成了加盟连
锁经营的完整体系。</div>
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="姓名">
        <el-input v-model="form.UserName"></el-input>
      </el-form-item>      
      <el-form-item label="手机">
        <el-input v-model="form.Telephone"></el-input>
      </el-form-item>
      <el-form-item label="主题" prop="Title">
        <el-input v-model="form.Title"></el-input>
      </el-form-item>            
      <el-form-item label="内容" prop="Content">
        <el-input type="textarea" v-model="form.Content" :rows="7"></el-input>
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
import Qs from 'qs'
export default {
  name: "Message",
  data() {
    return {
      form: {
        UserName: "",
        Telephone:'',
        Title:'',
        Content: ""        
      },
      rules: {
        Title: [
          {required: true, min: 3, message: "长度不小于 3 个字符", trigger: "blur" }
        ],
        Content: [
          {required: true, min: 10, message: "长度不小于 10 个字符", trigger: "blur" }
        ],    
      }
    };
  },
  methods: {
    submitForm(formName) {
      let that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {          
          this.$axios.post("/ajaxdata.aspx?Action=Complaints",Qs.stringify(that.form))
          .then(function(res){
            if(res.data.result){
              alert("提交成功")
            }else{
              alert("提交失败")
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
.join-in .description {
  padding:0 10px;
  line-height: 26px;
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
