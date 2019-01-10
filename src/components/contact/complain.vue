<template>
  <div class="join-in">
    <div class="description">斗石餐饮始终坚持服务为导向，加强公司内部管理，积极优化组织结构，公司经过硬件和软件的系统化建设及优化升级，体系的不断完善，使公司得以迅速发展。以“专心用心
放心”的经营理念规范提升专业度和服务模块，从加盟开店前期选址、装修、开业、培训到后期门店营运、管理、产品、活动、线上线下推广，“快乐星汉堡”已形成了加盟连
锁经营的完整体系。</div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>      
      <el-form-item label="手机">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item label="主题">
        <el-input v-model="form.email"></el-input>
      </el-form-item>            
      <el-form-item label="内容">
        <el-input type="textarea" v-model="form.desc" :rows="7"></el-input>
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
