<template>
    <div class="productDetail">
        111aaaa
    </div>
</template>

<script>
export default {
    name:'productDetail',
    data(){
        return{
            childValue:false
        }
    },
    created:function(){
        this.$emit('childViewShow', true)
    },
    destroyed:function(){
        this.$emit('childViewShow', false)
    }
}
</script>

<style>

</style>
