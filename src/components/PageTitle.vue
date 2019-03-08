<template>
  <div class="pageTitle">
    <h2>{{pTitle}}</h2>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
  name: "pageTitle",
  props: {
    description: {
      type: String,
      required: false
    }
  },
  data: function() {
    return {
      pTitle: ""
    };
  },
  created: function() {
    this.loadTypeTitle();
  },
  methods: {
    loadTypeTitle: function() {
      let that = this;
      if (this.$route.query.name) {
        switch (this.$route.query.name) {
          case "CompanyInfo":
            this.pTitle = "公司简介";
            break;
          case "EnterpriseVision":
            this.pTitle = "企业愿景";
            break;
          case "SystemConstruction":
            this.pTitle = "体系建设";
            break;
          case "NewProductMarketing":
            this.pTitle = "新品营销";
            break;
          case "HolidayMarketing":
            this.pTitle = "节日营销";
            break;
          case "DailyMarketing":
            this.pTitle = "日常营销";
            break;
          case "order":
            this.pTitle = "微信点餐";
            break;
          case "takeOut":
            this.pTitle = "外卖运营";
            break;
          case "choose":
            this.pTitle = "如何选择";
            break;
          case "process":
            this.pTitle = "加盟流程";
            break;
          case "side":
            this.pTitle = "在您身边";
            break;
        }
      } else if (this.$route.name) {
        this.pTitle = this.$route.name;
      } else {
        this.$axios
          .get("/ajaxdata.aspx?Action=typetitle", {
            params: {
              Id: that.$route.query.id || that.$route.query.Id
            }
          })
          .then(function(res) {
            that.pTitle = res.data.list[0].Title;
          });
      }
    }
  },
  watch: {
    $route(to, from) {
      this.loadTypeTitle();
    }
  }
};
</script>

<style scoped>
.pageTitle {
  padding-top: 50px;
}
.pageTitle h2 {
  position: relative;
  font-size: 24px;
  line-height: 100%;
  color: #000;
  text-align: center;
  padding: 15px 0;
}
.pageTitle h2:after {
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-left: -26px;
  content: "";
  display: block;
  width: 52px;
  height: 2px;
  background: #c8161e;
}
.pageTitle p {
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
  color: #c8161e;
}
</style>
