<template>
  <div class="FAQ">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item name="1">
        <template slot="title">
          <span>1.</span>请问开一家快乐星汉堡店大概需要多少投资？
        </template>
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <span>2.</span>请问开一家快乐星汉堡店大概需要多少投资？
        </template>
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <span>3.</span>请问开一家快乐星汉堡店大概需要多少投资？
        </template>
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <span>4.</span>请问开一家快乐星汉堡店大概需要多少投资？
        </template>
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>
    <button class="moreBtn">加载更多</button>
    <pageQrcode></pageQrcode>
  </div>
</template>

<script>
import pageQrcode from "../pageQrcode";
export default {
  name: "FAQ",
  data() {
    return {
      activeNames: ["1"]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  },
  components: {
    pageQrcode
  }
};
</script>

<style>
.FAQ{
  text-align: center;
}
.el-collapse{
  margin-top:40px;
  text-align: left;
}
.el-collapse-item__header {
  font-size: 16px;
}
.el-collapse-item__header span{
  color:#c8161e;
  font-weight: bold;
}
.moreBtn{
  margin:0;
  margin-top:60px;
}
</style>
