<template>
    <div class="mapSide">
        <p>根据我国权威统计2018年中国餐饮市场零售额将达到7万亿元，到2020年后将达到10万亿元。从多个数据中可得出餐饮业永远是众多投资者的入行优选！千亿美食市场形成井喷增长趋势。根据我国权威统计2018年中国餐饮市场零售额将达到7万亿元，到2020年后将达到10万亿元。从多个数据中可得出餐饮业永远是众多投资者的入行优选！千亿美食市场形成井喷增长趋势。</p>
        <iframe id="allmap" src="https://map.baidu.com/?newmap=1&shareurl=1&l=5&tn=B_NORMAL_MAP&hb=B_SATELLITE_STREET&c=11606355,4669276&s=s%26da_src%3DsearchBox.button%26wd%3D%E5%BF%AB%E4%B9%90%E6%98%9F%E6%B1%89%E5%A0%A1%26c%3D1%26src%3D0%26wd2%3D%26pn%3D0%26sug%3D0%26l%3D5%26from%3Dwebmap%26biz_forward%3D%7B%22scaler%22%3A1%2C%22styles%22%3A%22pl%22%7D%26sug_forward%3D%26auth%3DU0e80XP51y5WNP%40YMX3G7Dxa7V%40NZ9Z4uxHELTxRRLztBnlQADZZzcvY1SGpuztFHhxQ7E%40Z5Z3%40wWv1cv3uVtGccZcuztQYxLHwWvUvhgMZSguxzBEHLNRTVtcEWe1aDYyuVt%40ZPuVteuxtf0wd0vyIFMUySSyUuwAYYKi3rZZWuB%26device_ratio%3D1" frameborder="0"></iframe>
        <h3>我们的伙伴</h3>
        <p>优秀的供应商才能保证我们的品质始终如一，才能让消费者吃的放心，这是我们一直坚持和追求的...</p>
        <p style="margin-bottom:30px;"><img src="@/assets/partner.jpg" alt=""></p>
        <h3>我们的品质</h3>
        <p>优秀的供应商才能保证我们的品质始终如一，才能让消费者吃的放心，这是我们一直坚持和追求的...</p>        
        <pageQrcode></pageQrcode>
    </div>
</template>

<script>
import pageQrcode from '../pageQrcode'
export default {
    name:'mapSide',
    data(){
        return{
                 
        }
    },
    components:{
        pageQrcode
    },
    watch:{
        '$route'(to,from){            
            this.pTitle=this.$route.query.name            
        }
    }
}
</script>

<style scoped>
.mapSide{
    margin-top:40px;
    line-height: 30px;
}
.mapSide p{
    text-indent: 2em;
}
#allmap{
    width:100%;
    height:580px;
    margin:30px 0;
}
.mapSide h3 {
    font-size: 24px;
    margin-bottom: 15px;
}
</style>
