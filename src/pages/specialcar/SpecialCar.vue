<template>
    <div>
        <head-bar></head-bar>
         <main-map></main-map>
    </div>
</template>
<script>
import HeadBar from '@/components/Head.vue' 
import MainMap from "@/pages/home/MainMap";
    export default{
        components:{
            HeadBar,
            MainMap
        }
    }
</script>