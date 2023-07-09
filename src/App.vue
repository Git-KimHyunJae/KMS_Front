<template>
  <v-container>
    <v-row>
      <!-- <v-img src="../public/msk.jpg" /> -->
    </v-row>
    <v-row>
      <router-link to="/home">메인화면</router-link>
      <router-link to="/reservation">예약관리</router-link>
      <router-link to="/showSales">매출관리</router-link>
      <router-link to="/userAdmin">손님관리</router-link>
      <router-view></router-view>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style></style>
