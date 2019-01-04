<template>
    <div>
        <div class="cd-timeline">
            <div class="cd-timeline-block wow slideInLeft" @click="Popup()">
                <div class="cd-timeline-img">
                    <img src="@/assets/about05.jpg" alt="Picture">
                </div><!-- cd-timeline-img -->

                <div class="cd-timeline-content">
                    <span class="cd-date">2008</span>
                    <div>
                        <p>快乐星汉堡品牌全球运营中心正式成立</p>
                        <p>快乐星汉堡员工向汶川灾区捐款捐物</p>
                    </div>
                </div>
            </div>
            <div class="cd-timeline-block wow slideInRight" @click="Popup()">
                <div class="cd-timeline-img">
                    <img src="@/assets/about05.jpg" alt="Picture">
                </div><!-- cd-timeline-img -->

                <div class="cd-timeline-content">
                    <span class="cd-date">2008</span>
                    <div>
                        <p>快乐星汉堡品牌全球运营中心正式成立</p>
                        <p>快乐星汉堡员工向汶川灾区捐款捐物</p>
                    </div>
                </div>
            </div>
            <div class="cd-timeline-block wow slideInLeft" @click="Popup()">
                <div class="cd-timeline-img">
                    <img src="@/assets/about05.jpg" alt="Picture">
                </div><!-- cd-timeline-img -->

                <div class="cd-timeline-content">
                    <span class="cd-date">2008</span>
                    <div>
                        <p>快乐星汉堡品牌全球运营中心正式成立</p>
                        <p>快乐星汉堡员工向汶川灾区捐款捐物</p>
                    </div>
                </div>
            </div>
            <div class="cd-timeline-block wow slideInRight" @click="Popup()">
                <div class="cd-timeline-img">
                    <img src="@/assets/about05.jpg" alt="Picture">
                </div><!-- cd-timeline-img -->

                <div class="cd-timeline-content">
                    <span class="cd-date">2008</span>
                    <div>
                        <p>快乐星汉堡品牌全球运营中心正式成立</p>
                        <p>快乐星汉堡员工向汶川灾区捐款捐物</p>
                    </div>
                </div>
            </div>
            <div class="cd-timeline-block wow slideInLeft" @click="Popup()">
                <div class="cd-timeline-img">
                    <img src="@/assets/about05.jpg" alt="Picture">
                </div><!-- cd-timeline-img -->

                <div class="cd-timeline-content">
                    <span class="cd-date">2008</span>
                    <div>
                        <p>快乐星汉堡品牌全球运营中心正式成立</p>
                        <p>快乐星汉堡员工向汶川灾区捐款捐物</p>
                    </div>
                </div>
            </div>
            <div class="cd-timeline-block wow slideInRight" @click="Popup()">
                <div class="cd-timeline-img">
                    <img src="@/assets/about05.jpg" alt="Picture">
                </div><!-- cd-timeline-img -->

                <div class="cd-timeline-content">
                    <span class="cd-date">2008</span>
                    <div>
                        <p>快乐星汉堡品牌全球运营中心正式成立</p>
                        <p>快乐星汉堡员工向汶川灾区捐款捐物</p>
                    </div>
                </div>
            </div>
            <div class="cd-timeline-block wow slideInLeft" @click="Popup()">
                <div class="cd-timeline-img">
                    <img src="@/assets/about05.jpg" alt="Picture">
                </div><!-- cd-timeline-img -->

                <div class="cd-timeline-content">
                    <span class="cd-date">2008</span>
                    <div>
                        <p>快乐星汉堡品牌全球运营中心正式成立</p>
                        <p>快乐星汉堡员工向汶川灾区捐款捐物</p>
                    </div>
                </div>
            </div>
            <div class="cd-timeline-block wow slideInRight" @click="Popup()">
                <div class="cd-timeline-img">
                    <img src="@/assets/about05.jpg" alt="Picture">
                </div><!-- cd-timeline-img -->

                <div class="cd-timeline-content">
                    <span class="cd-date">2008</span>
                    <div>
                        <p>快乐星汉堡品牌全球运营中心正式成立</p>
                        <p>快乐星汉堡员工向汶川灾区捐款捐物</p>
                    </div>
                </div>
            </div>
        </div>
        <p class="tomorrow">未来，待续...</p>
        <transition name="fade">
            <div v-show="isshow">
                <div class="shade" @click="closePop()"></div>
                <div class="pop-up-box">
                    <i class="close" @click="closePop()"></i>
                    <span class="pop-up-date">2008</span>
                    <div>
                        <p><img src="@/assets/about07.jpg" alt=""></p>
                        <p>快乐星汉堡品牌全球运营中心正式成立</p>
                        <p>快乐星汉堡员工向汶川灾区捐款捐物</p>
                    </div>
                    
                </div>
            </div>
        </transition>
        
    </div>
</template>

<script>
export default {
    name:'TimeLine',
    data(){
        return{
            isshow:false
        }
    },
    mounted:function(){         	
       this.$nextTick(function(){
           new this.$WOW.WOW().init()
       })      
    },
    methods:{
        Popup:function(){
            this.isshow = true
            document.body.classList.add('swiper-slide')
        },
        closePop:function(){
            this.isshow = false
            document.body.classList.remove('swiper-slide')
        }
    }
}
</script>

<style scoped>
.cd-timeline{
    margin-top:40px;
    position: relative;
    padding-bottom: 100px;
}
.cd-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 1px;
    background: #747474;
    left: 50%;
}
.cd-timeline::after {
    content: '';
    position: absolute;
    top: 0;
    height: 16px;
    width: 16px;
    left: 50%;
    margin-left:-8px;
    border-radius: 50%;
    border:1px solid #282828;
    background:#fff;
}
.cd-timeline-block{
    position: relative;
    top:80px;
    width:50%;    
    margin-bottom: 40px;
    cursor: pointer;
}
.cd-timeline-block::before {
    content: '';
    position: absolute;
    top: 0;
    height: 16px;
    width: 16px;
    right: 0;
    margin-right:-12px;
    border-radius: 50%;
    border:4px solid #f6d8d9;
    background:#c8161e;
}
.cd-timeline-block::after {
    content: '';
    display:block;
    clear:both;
}
.cd-timeline-img{
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    width:23%;    
}
.cd-timeline-content{
    float: right;
    width:57%;
    padding-right:13%;
    text-align: right;
    
}
.cd-timeline-block:nth-child(even){
    left:50%;
}
.cd-timeline-block:nth-child(even)::before{
    right:100%;
}
.cd-timeline-block:nth-child(even) .cd-timeline-img{
    right:0;
}
.cd-timeline-block:nth-child(even) .cd-timeline-content{
    float: left;
    padding-right:0;
    padding-left:13%;
    text-align: left;
}
.cd-date{
    font-size: 24px;
    color:#000000;
    line-height: 100%;
    padding-bottom:24px;
    display: block;
}
.cd-timeline-block:hover .cd-timeline-content:before{
    position: absolute;
    right:6.5%;
    top:50%;
    margin-right:-11px;
    margin-top:-9px;
    content: '';
    background:url(~@/assets/arrow_r.png);
    display: block;
    width:22px;
    height:18px;
}
.cd-timeline-block:nth-child(even):hover .cd-timeline-content:before{
    position: absolute;
    left:6.5%;
    margin-left:-11px;
    right:0;
    margin-right:0;
    transform:rotateY(180deg);
}
.tomorrow{
    font-size:18px;
    text-align: center;
    margin:30px 0;
}
.pop-up-box{
    position:fixed;
    top:150px;
    left:50%;
    margin-left:-395px;
    background:#fff;
    width:550px;
    max-height:calc(100% - 300px);    
    z-index: 1000;
     overflow-y:auto;
     padding:120px;
     padding-top:0;     
}

.pop-up-box::-webkit-scrollbar {
 width: 4px;
}
.pop-up-box::-webkit-scrollbar-track {
 background-color:#565656;
 -webkit-border-radius: 2em;
 -moz-border-radius: 2em;
 border-radius:2em;
}
.pop-up-box::-webkit-scrollbar-thumb {
 background-color:#ececec;
 -webkit-border-radius: 2em;
 -moz-border-radius: 2em;
 border-radius:2em;
}

.pop-up-date{
    font-size: 26px;
    text-align: center;
    display: block;
    padding-bottom: 20px;
    font-weight:bold;
    margin-top:50px;
}
.close{
    display: block;
    position: fixed;
    top: 150px;
    left: 50%;
    width:18px;
    height:18px;
    margin-left:365px;
    margin-top:10px;
    z-index: 1001;
    cursor: pointer;
}
.close:before,.close:after{
    content:'';
    display:block;
    position:absolute;
    top:9px;
    width:100%;
    height:1px;
    background:#333;
    transform:rotate(45deg)
}
.close:after{
    transform:rotate(-45deg)

}
</style>
