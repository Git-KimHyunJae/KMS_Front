<template>
  <v-container>
    <h1>매출관리화면</h1>
   <v-chart></v-chart>
  </v-container>

</template>

<script>
import Vue from 'vue'
import Echart from 'vue-echarts'
import 'echarts-gl'

export default {
  components:{
    v-chart : Echart
  }
    name:'showSales'
}

</script>

<style>

</style>