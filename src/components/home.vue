<template>
  <div class="home">
    <div class="swiper-container home-banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in ad" :key="index">
          <router-link :to="item.Url"><img :src="item.Image" :title="item.Title"></router-link>
        </div>
        <div class="swiper-slide">
          <img src="../assets/banner01.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../assets/banner01.jpg">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination banner-swiper-pagination"></div>
    </div>
    <div class="layer clearfix relative">
      <div class="cover zx-cover">
        <div class="mod-hd zx-hd">
          <h2>{{threehearts[0].Keyword}}</h2>
          <p>{{threehearts[0].Description}}</p>
        </div>
        <ul class="zx-hb-bd" v-if="!this.$M">
          <li>
            <div class="flipper">
              <img src="../assets/zx_hb01.jpg">
              <div class="zx-hb-inner">
                <div class="zx-hb-item">
                  <div class="zx-hb-hd">新品动态</div>
                  <p>快乐星汉堡拥有专业的研发团队，定时推出新品，增加产品的吸引力和门店活跃度，吸引消费者的眼球，俘虏吃货的心</p>
                  <router-link to="/">查看详情 ></router-link>
                </div>
              </div>
            </div>
            <div class="zx-bt">新品动态</div>
          </li>
          <li>
            <div class="flipper">
              <img src="../assets/zx_hb01.jpg">
              <div class="zx-hb-inner">
                <div class="zx-hb-item">
                  <div class="zx-hb-hd">精美小食</div>
                  <p>快乐星汉堡拥有专业的研发团队，定时推出新品，增加产品的吸引力和门店活跃度，吸引消费者的眼球，俘虏吃货的心</p>
                  <router-link to="/">查看详情 ></router-link>
                </div>
              </div>
            </div>
            <div class="zx-bt">精美小食</div>
          </li>
          <li>
            <div class="flipper">
              <img src="../assets/zx_hb01.jpg">
              <div class="zx-hb-inner">
                <div class="zx-hb-item">
                  <div class="zx-hb-hd">明星产品</div>
                  <p>快乐星汉堡拥有专业的研发团队，定时推出新品，增加产品的吸引力和门店活跃度，吸引消费者的眼球，俘虏吃货的心</p>
                  <router-link to="/">查看详情 ></router-link>
                </div>
              </div>
            </div>
            <div class="zx-bt">明星产品</div>
          </li>
        </ul>
        <div class="m-zx-hb-bd" v-if="this.$M">
          <div class="m-zx-bt">
            <button @click="reds(1)" :class="zx==1?'active':''">新品动态</button>
            <button @click="reds(2)" :class="zx==2?'active':''">精美小食</button>
            <button @click="reds(3)" :class="zx==3?'active':''">明星产品</button>
          </div>
          <transition>
            <div class="m-zx-inner" :key="zx">              
              <img src="../assets/zx_hb01.jpg">
              <p>快乐星汉堡拥有专业的研发团队，定时推出新品，增加产品的吸引力和门店活跃度，吸引消费者的眼球，俘虏吃货的心{{zx}}</p>
            </div>
          </transition>
        </div>
      </div>
      <div class="modifying modifying01">
        <img src="../assets/modifying_01.png">
      </div>
      <div class="modifying modifying02">
        <img src="../assets/modifying_02.png">
      </div>
    </div>
    <div class="layer clearfix relative bg-gray" v-if="!this.$M">
      <div class="cover ad-propaganda-cover">
        <div class="swiper-container ad-propaganda">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="ad-pic">
                <img src="../assets/ad_01.jpg">
              </div>
              <div class="ad-inner">
                <div class="ad-bt">快乐星昔果乐</div>
                <p>果中“C”女王——西柚驾到！饱满果肉搭配香溢鲜奶，一场维C盛宴舞动开场。更多营养，更低卡路里，味感香滑，入口即化。昔果乐，吃出美丽健康！</p>
                <router-link to>查看详情 ></router-link>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="ad-pic">
                <img src="../assets/ad_01.jpg">
              </div>
              <div class="ad-inner">
                <div class="ad-bt">快乐星昔果乐</div>
                <p>果中“C”女王——西柚驾到！饱满果肉搭配香溢鲜奶，一场维C盛宴舞动开场。更多营养，更低卡路里，味感香滑，入口即化。昔果乐，吃出美丽健康！</p>
                <router-link to>查看详情 ></router-link>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="ad-pic">
                <img src="../assets/ad_01.jpg">
              </div>
              <div class="ad-inner">
                <div class="ad-bt">快乐星昔果乐</div>
                <p>果中“C”女王——西柚驾到！饱满果肉搭配香溢鲜奶，一场维C盛宴舞动开场。更多营养，更低卡路里，味感香滑，入口即化。昔果乐，吃出美丽健康！</p>
                <router-link to>查看详情 ></router-link>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination propaganda-swiper-pagination"></div>
          <div class="swiper-button-prev swiper-button-black propaganda-prev"></div>
          <div class="swiper-button-next swiper-button-black propaganda-next"></div>
        </div>
      </div>
      <div class="modifying modifying03">
        <img src="../assets/modifying_03.png">
      </div>
    </div>
    <div class="ad-activity" v-if="!this.$M">
      <img src="../assets/ad_02.jpg" alt>
    </div>
    <div class="layer clearfix relative">
      <div class="cover yx-cover">
        <div class="mod-hd yx-hd">
          <h2>{{threehearts[1].Keyword}}</h2>
          <p>{{threehearts[1].Description}}</p>
        </div>
        <ul class="yx-server clearfix" v-if="!this.$M">
          <li>
            <img src="../assets/server_icon1.png">
            <span>微信点餐</span>
            <p>通过微信自助点餐更加方便快捷，建立属于自己的消费者社群</p>
          </li>
          <li>
            <img src="../assets/server_icon2.png">
            <span>外卖运营</span>
            <p>深度对接，专业的外卖的接单系统自动接收第三方平台订单</p>
          </li>
          <li>
            <img src="../assets/server_icon3.png">
            <span>加盟方案</span>
            <p>让每一位加盟快乐星汉堡店的加盟商，都能更加轻松经营，助力加盟者成就梦想</p>
          </li>
          <li>
            <img src="../assets/server_icon4.png">
            <span>如何选择</span>
            <p>精心挑选每一个食材，精心烹饪每一种产品，通过专业、科学、严格的制作工艺而成</p>
          </li>
        </ul>
        <div class="join-new" v-if="this.$M">
          <PageTitle title="加盟资讯"></PageTitle>
          <ul>
            <li>
              <div class="newPic">
                <img src="@/assets/newpic.jpg" alt>
              </div>
              <div class="new-inner">
                <div class="new-title">快乐星汉堡加盟品牌带你解读权威4p营销理论</div>
                <div class="new-intro">
                  其实现在火爆的餐饮店，或多或少都离不开恰到好处的营销。不少加盟商就是看中快乐星汉堡有计划性、
                  能洞察市场爆点的营销策略方案，这也是未来店铺长期运营，人气依旧火爆的主要原因。对于营销这块...
                </div>
              </div>
            </li>
            <li>
              <div class="newPic">
                <img src="@/assets/newpic.jpg" alt>
              </div>
              <div class="new-inner">
                <div class="new-title">快乐星汉堡加盟品牌带你解读权威4p营销理论</div>
                <div class="new-intro">
                  其实现在火爆的餐饮店，或多或少都离不开恰到好处的营销。不少加盟商就是看中快乐星汉堡有计划性、
                  能洞察市场爆点的营销策略方案，这也是未来店铺长期运营，人气依旧火爆的主要原因。对于营销这块...
                </div>
              </div>
            </li>
          </ul>
          <router-link to="/" class="seeAll">查看全部</router-link>
        </div>
      </div>
      <div class="modifying modifying04">
        <img src="../assets/modifying_04.png">
      </div>
      <div class="modifying modifying05">
        <img src="../assets/modifying_05.png">
      </div>
    </div>
    <div class="layer clearfix relative bg-gray" v-if="!this.$M">
      <div class="cover campaign-cover">
        <div class="cover-hd clearfix">
          <h2 class="cover-hd-title">营销经典</h2>
          <div class="cover-hd-r">
            <span
              class="tab-btn"
              :class="campaignTab=='1'?'cur':''"
              data-num="1"
              @click="campaignTabTrigger($event)"
            >日常营销</span>
            <span
              class="tab-btn"
              :class="campaignTab=='2'?'cur':''"
              data-num="2"
              @click="campaignTabTrigger($event)"
            >新品营销</span>
            <span
              class="tab-btn"
              :class="campaignTab=='3'?'cur':''"
              data-num="3"
              @click="campaignTabTrigger($event)"
            >节日营销</span>
          </div>
        </div>
        <ul class="campaign clearfix" v-show="campaignTab=='1'">
          <li>
            <div class="campaign-item">
              <div class="campaign-item-pic">
                <img src="../assets/ad_03.jpg">
              </div>
              <div class="campaign-item-bt">新品发布会</div>
              <div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
              <div class="campaign-item-btn">
                <router-link to>查看详情</router-link>
              </div>
            </div>
          </li>
          <li>
            <div class="campaign-item">
              <div class="campaign-item-pic">
                <img src="../assets/ad_03.jpg">
              </div>
              <div class="campaign-item-bt">新的口味，体验不一样的好...</div>
              <div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
              <div class="campaign-item-btn">
                <router-link to>查看详情</router-link>
              </div>
            </div>
          </li>
          <li>
            <div class="campaign-item">
              <div class="campaign-item-pic">
                <img src="../assets/ad_03.jpg">
              </div>
              <div class="campaign-item-bt">官宣！！快乐星汉堡3款新...</div>
              <div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
              <div class="campaign-item-btn">
                <router-link to>查看详情</router-link>
              </div>
            </div>
          </li>
          <li>
            <div class="campaign-item">
              <div class="campaign-item-pic">
                <img src="../assets/ad_03.jpg">
              </div>
              <div class="campaign-item-bt">餐饮加盟盛典：快乐星...</div>
              <div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
              <div class="campaign-item-btn">
                <router-link to>查看详情</router-link>
              </div>
            </div>
          </li>
        </ul>
        <ul class="campaign clearfix" v-show="campaignTab=='2'">
          <li>
            <div class="campaign-item">
              <div class="campaign-item-pic">
                <img src="../assets/ad_03.jpg">
              </div>
              <div class="campaign-item-bt">新品发布会</div>
              <div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
              <div class="campaign-item-btn">
                <router-link to>查看详情</router-link>
              </div>
            </div>
          </li>
          <li>
            <div class="campaign-item">
              <div class="campaign-item-pic">
                <img src="../assets/ad_03.jpg">
              </div>
              <div class="campaign-item-bt">新品发布会</div>
              <div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
              <div class="campaign-item-btn">
                <router-link to>查看详情</router-link>
              </div>
            </div>
          </li>
          <li>
            <div class="campaign-item">
              <div class="campaign-item-pic">
                <img src="../assets/ad_03.jpg">
              </div>
              <div class="campaign-item-bt">新品发布会</div>
              <div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
              <div class="campaign-item-btn">
                <router-link to>查看详情</router-link>
              </div>
            </div>
          </li>
          <li>
            <div class="campaign-item">
              <div class="campaign-item-pic">
                <img src="../assets/ad_03.jpg">
              </div>
              <div class="campaign-item-bt">新品发布会</div>
              <div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
              <div class="campaign-item-btn">
                <router-link to>查看详情</router-link>
              </div>
            </div>
          </li>
        </ul>
        <ul class="campaign clearfix" v-show="campaignTab=='3'">
          <li>
            <div class="campaign-item">
              <div class="campaign-item-pic">
                <img src="../assets/ad_03.jpg">
              </div>
              <div class="campaign-item-bt">新品发布会</div>
              <div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
              <div class="campaign-item-btn">
                <router-link to>查看详情</router-link>
              </div>
            </div>
          </li>
          <li>
            <div class="campaign-item">
              <div class="campaign-item-pic">
                <img src="../assets/ad_03.jpg">
              </div>
              <div class="campaign-item-bt">新品发布会</div>
              <div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
              <div class="campaign-item-btn">
                <router-link to>查看详情</router-link>
              </div>
            </div>
          </li>
          <li>
            <div class="campaign-item">
              <div class="campaign-item-pic">
                <img src="../assets/ad_03.jpg">
              </div>
              <div class="campaign-item-bt">新品发布会</div>
              <div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
              <div class="campaign-item-btn">
                <router-link to>查看详情</router-link>
              </div>
            </div>
          </li>
          <li>
            <div class="campaign-item">
              <div class="campaign-item-pic">
                <img src="../assets/ad_03.jpg">
              </div>
              <div class="campaign-item-bt">新品发布会</div>
              <div class="campaign-item-text">番茄先生牛肉饼的出现，总能拯救每一次低谷，瞬间补满元气。每口弹...</div>
              <div class="campaign-item-btn">
                <router-link to>查看详情</router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="modifying modifying06">
        <img src="../assets/modifying_06.png">
      </div>
    </div>
    <div class="layer clearfix relative" :class="!this.$M?'bg-black':''">
      <div class="cover fx-cover">
        <div class="mod-hd fx-hd">
          <h2>{{threehearts[2].Keyword}}</h2>
          <p>{{threehearts[2].Description}}</p>
        </div>
        <div class="join-scheme clearfix" v-if="this.$M">
          <PageTitle title="加盟方案"></PageTitle>
          <ul>
            <li>
              <div class="newPic">
                <img src="@/assets/newpic.jpg" alt>
              </div>
              <div class="new-inner">
                <div class="new-title">快乐星汉堡加盟标准店</div>
              </div>
            </li>
            <li>
              <div class="newPic">
                <img src="@/assets/newpic.jpg" alt>
              </div>
              <div class="new-inner">
                <div class="new-title">快乐星汉堡加盟标准店</div>
              </div>
            </li>
            <li>
              <div class="newPic">
                <img src="@/assets/newpic.jpg" alt>
              </div>
              <div class="new-inner">
                <div class="new-title">快乐星汉堡加盟标准店</div>
              </div>
            </li>
            <li>
              <div class="newPic">
                <img src="@/assets/newpic.jpg" alt>
              </div>
              <div class="new-inner">
                <div class="new-title">快乐星汉堡加盟标准店</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="cover-hd clearfix">
          <h2 class="cover-hd-title">成功案例</h2>
          <div class="cover-hd-r">
            <router-link to="/">查看全部 ></router-link>
          </div>
        </div>
        <div class="swiper-container fx-cases">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../assets/ad_04.jpg">
              <div class="fx-hb-inner">
                <div class="fx-hb-item">
                  <p>98年妹子加盟快乐星汉堡，成最小加盟商</p>
                  <router-link to="/">查看详情 ></router-link>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/ad_05.jpg">
              <div class="fx-hb-inner">
                <div class="fx-hb-item">
                  <p>98年妹子加盟快乐星汉堡，成最小加盟商</p>
                  <router-link to="/">查看详情 ></router-link>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/ad_04.jpg">
              <div class="fx-hb-inner">
                <div class="fx-hb-item">
                  <p>98年妹子加盟快乐星汉堡，成最小加盟商</p>
                  <router-link to="/">查看详情 ></router-link>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/ad_05.jpg">
              <div class="fx-hb-inner">
                <div class="fx-hb-item">
                  <p>98年妹子加盟快乐星汉堡，成最小加盟商</p>
                  <router-link to="/">查看详情 ></router-link>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/ad_04.jpg">
              <div class="fx-hb-inner">
                <div class="fx-hb-item">
                  <p>98年妹子加盟快乐星汉堡，成最小加盟商</p>
                  <router-link to="/">查看详情 ></router-link>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="../assets/ad_05.jpg">
              <div class="fx-hb-inner">
                <div class="fx-hb-item">
                  <p>98年妹子加盟快乐星汉堡，成最小加盟商</p>
                  <router-link to="/">查看详情 ></router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination cases-swiper-pagination"></div>
        </div>
      </div>
      <div class="modifying modifying05" v-if="!this.$M">
        <img src="../assets/fx_bg.jpg">
      </div>
    </div>
    <div class="layer clearfix relative bg-gray" v-if="!this.$M">
      <div class="cover team-cover relative">
        <div class="cover-hd clearfix">
          <h3 class="cover-hd-bt">优秀团队</h3>
          <p class="cover-hd-p">我们拥有一支结构完善优秀且高效的团队</p>
        </div>
        <div class="swiper-container team-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="team-portraits">
                <img src="../assets/ad_04.jpg">
              </div>
              <div class="team-name">周云重</div>
              <div class="team-job">门店培训师</div>
              <div class="team-intro">8年西式快餐门店和培训经验，做事一丝不苟</div>
              <router-link to="/">查看详情</router-link>
            </div>
            <div class="swiper-slide">
              <div class="team-portraits">
                <img src="../assets/team.png">
              </div>
              <div class="team-name">周云重</div>
              <div class="team-job">门店培训师</div>
              <div class="team-intro">8年西式快餐门店和培训经验，做事一丝不苟</div>
              <router-link to="/">查看详情</router-link>
            </div>
            <div class="swiper-slide">
              <div class="team-portraits">
                <img src="../assets/ad_04.jpg">
              </div>
              <div class="team-name">周云重</div>
              <div class="team-job">门店培训师</div>
              <div class="team-intro">8年西式快餐门店和培训经验，做事一丝不苟</div>
              <router-link to="/">查看详情</router-link>
            </div>
            <div class="swiper-slide">
              <div class="team-portraits">
                <img src="../assets/ad_04.jpg">
              </div>
              <div class="team-name">周云重</div>
              <div class="team-job">门店培训师</div>
              <div class="team-intro">8年西式快餐门店和培训经验，做事一丝不苟</div>
              <router-link to="/">查看详情</router-link>
            </div>
            <div class="swiper-slide">
              <div class="team-portraits">
                <img src="../assets/ad_04.jpg">
              </div>
              <div class="team-name">周云重</div>
              <div class="team-job">门店培训师</div>
              <div class="team-intro">8年西式快餐门店和培训经验，做事一丝不苟</div>
              <router-link to="/">查看详情</router-link>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-button-prev swiper-button-black team-prev"></div>
        <div class="swiper-button-next swiper-button-black team-next"></div>
      </div>
      <div class="modifying modifying07">
        <img src="../assets/modifying_07.png">
      </div>
    </div>
    <div class="layer clearfix relative" v-if="!this.$M">
      <div class="cover storefront-cover relative">
        <div class="cover-hd clearfix">
          <h3 class="cover-hd-bt">店面规划</h3>
        </div>
        <div
          class="storefront-intro"
        >店面规划和设计是门店取得成功的基础。厨房结构，设备规划摆放流程对于操作和产出率和出餐速度是极大的影响，油烟机、空调和炸炉、烤箱和裹粉台的关系决定门店的能耗的高低及粉尘的溅落和漂浮，进而决定机器的使用寿命。吧台和厨房适宜的高度差决定了员工的状态和激情，也能更好的提高配单效率，吧台和门的距离有店面大小和客户心理叠加系数决定，餐厅位置摆放决定主动客户和被动客户的占比等</div>
        <ul class="storefront clearfix">
          <li>
            <router-link to>
              <img src="../assets/ad_06.jpg">
            </router-link>
          </li>
          <li>
            <router-link to>
              <img src="../assets/ad_06.jpg">
            </router-link>
          </li>
          <li>
            <router-link to>
              <img src="../assets/ad_06.jpg">
            </router-link>
          </li>
          <li>
            <router-link to>
              <img src="../assets/ad_06.jpg">
            </router-link>
          </li>
        </ul>
      </div>
      <div class="modifying modifying08">
        <img src="../assets/modifying_08.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  metaInfo:function(){
    return{
      title:this.metaInfo.Title, // set a title
      meta: [{                 // set meta
        name: 'keyWords',
        content: this.metaInfo.Keyword
      },{                 // set meta
        name: 'description',
        content: this.metaInfo.Description
      },{
        name:'viewport',
        content:'width=device-width,initial-scale=1.0'
      }]
    }
  },
  data: function() {
    return {
      metaInfo:[{Page:'',Title:'',Keyword:'',Description:''}], // meta
      threehearts:[{
            Title: "",
            Keyword: "",  //关键字
            Description: ""  //描述
            },{
            Title: "",
            Keyword: "",
            Description: "" 
            },
            {
            Title: "",
            Keyword: "",
            Description: "" 
            }],//三心标题
      ad:[],
      campaignTab: 1,
      zx: "1"
    };
  },
  created:function(){
    // seo数据    
    let that = this;
    this.$axios.get(this.HOST+'/ajaxdata.aspx?Action=SEO&Page=首页')
    .then(function (res) {
      that.metaInfo = res.data.list[0]   
    })
    .catch(function (error) {
      console.log(error);
    });
    // 专心,用心，放心
    this.$axios.get(this.HOST+'/ajaxdata.aspx?Action=threehearts')
    .then(function(res){
      that.threehearts = res.data.list   
    })
    .catch(function(err){
      console.log(err)
    })
    // Banner列表
    this.$axios.get(this.HOST+'/ajaxdata.aspx?Action=ad')
    .then(function(res){
      that.ad = res.data.list   
    })
    .catch(function(err){
      console.log(err)
    })
  },
  mounted: function() {    
    new this.$Swiper(".home-banner", {
      loop: true,
      // 如果需要分页器
      pagination: ".banner-swiper-pagination",
      paginationClickable: true
    });
    new this.$Swiper(".ad-propaganda", {
      loop: true,
      // 如果需要分页器
      pagination: ".propaganda-swiper-pagination",
      paginationClickable: true,
      prevButton: ".propaganda-prev",
      nextButton: ".propaganda-next"
    });
    let fxcase = this.$M ? 2 : 4;
    new this.$Swiper(".fx-cases", {
      slidesPerView: fxcase,
      slidesPerGroup: fxcase,
      spaceBetween: 15,
      // 如果需要分页器
      pagination: ".cases-swiper-pagination",
      paginationClickable: true
    });
    new this.$Swiper(".team-swiper", {
      slidesPerView: 4,
      slidesPerGroup: 4,
      prevButton: ".team-prev",
      nextButton: ".team-next"
    });
  },
  methods: {
    campaignTabTrigger: function(e) {
      this.campaignTab = e.target.dataset.num;
    },
    reds: function(index) {
      this.zx = index;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 1000px) {
  .home {
    background: #f4f4f4;
  }
  .layer {
	  background:#fff;
	  margin-top:.2rem;
  }
  .home-banner {
    height: 5rem;
  }
  .home-banner img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    max-width: none;
    height: 100%;
  }
  .mod-hd h2 {
    font-size: 0.3rem;
    line-height: 1.4rem;
    padding-left: 1.6rem;
    background-size: auto 1.4rem;
  }
  .mod-hd p {
    margin-top: -10px;
    font-size: 0.22rem;
    padding: 0 10px;
    line-height: 1.5;
  }
  .zx-cover{
	  padding-bottom:30px;
  }
  .m-zx-bt {
    margin-top: 20px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
  .m-zx-bt button {
    border: 0;
    background: none;
    font-size: 0.36rem;
    position: relative;
    outline: none;
    padding-bottom: 5px;
  }
  .m-zx-bt .active {
    color: #c9151e;
  }
  .m-zx-bt .active:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #c9151e;
  }
  .m-zx-inner {
    margin: 0 10px;
    text-align: center;
  }
  .m-zx-inner img {
    margin-top: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  .m-zx-inner p {
    margin-top: 10px;
  }
  .join-new {
    padding: 0 10px;
  }
  .join-new li {
    margin-top: 30px;
  }
  .join-new .new-title {
    font-size: 0.3rem;
    font-weight: bold;
    margin: 10px 0;
  }
  .join-new .new-intro {
    font-size: 0.24rem;
  }
  .fx-hd h2 {
    color: #333;
  }
  .fx-hd p {
    color: #c8161e;
  }
  .fx-cover {
    padding: 0 10px;
  }
  .join-scheme li {
    position: relative;
    margin-bottom: 10px;
    font-size: 0.3rem;
    overflow: hidden;
  }
  .join-scheme li:after {
    content: "";
    display: block;
    padding-bottom: 50%;
  }
  .join-scheme li .newPic {
    position: absolute;
    height: 100%;
  }
  .join-scheme li .new-title {
    padding: 5px 0;
    position: absolute;
    bottom: 0;
    text-align: center;
    color: #fff;
    width: 100%;
    box-shadow: 0 -15px 20px rgba(0, 0, 0, 0.8) inset;
  }
  .join-scheme li:nth-child(n + 3) {
    width: calc(50% - 5px);
    float: left;
    font-size: 0.24rem;
  }
  .join-scheme li:nth-child(n + 3):after {
    padding-bottom: 100%;
  }
  .join-scheme li:nth-child(n + 3) img {
    max-width: none;
    height: 100%;
  }
  .join-scheme li:nth-child(2n) {
    margin-left: 10px;
  }
  .join-scheme li:nth-child(2) {
    margin-left: 0px;
  }
  .fx-cover .cover-hd{
	  position: relative;
	  margin-top:0;
	  padding-top:.2rem;	 
  }
  .fx-cover .cover-hd:before{
	  content:'';
	  display: block;
	  left:0;
	  margin-left:-10px;
	  margin-right:-10px;
	  height:.2rem;
 	  background:#f4f4f4;
  }
  .fx-cover .cover-hd,
  .fx-cover .cover-hd a {
    color: #333;
  }
  .cover-hd .cover-hd-title {
    font-size: 0.34rem;
    height: 2em;
	line-height: 2em;
	margin-top:.3rem;
  }
  .fx-cover .cover-hd .cover-hd-r {
	height: 2em;
	line-height: 2em;
    margin-top:.3rem;
  }
  .fx-cover .cover-hd .cover-hd-title:after {
    background: #c8161e;
  }
  .pageTitle {
    padding-top: 10px !important;
  }
}
</style>
