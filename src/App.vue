<template>
  <v-container>
      <div>
        <v-row>
        <v-img 
          src = '../public/msk.jpg'
          />
        </v-row>

        <v-row>
        <router-link to="/home">메인화면</router-link> <br>
        <router-link to="/reservation">예약관리</router-link><br>
        <router-link to="/showSales">매출관리</router-link><br>
        <router-link to="/userAdmin">손님관리</router-link><br>
        <router-view></router-view>
        </v-row>
    </div>
  </v-container>


</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
