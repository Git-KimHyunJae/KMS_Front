<template>
  <v-container>
      <div>
        <v-row>
        <v-col cols="3">
                  <v-img 
            src = '../public/msk.jpg'
            />
        </v-col>
        <v-col>
          <div id="mainNav">
            <router-link to="/home">메인화면</router-link>
            <router-link to="/reservation">예약관리</router-link>
            <router-link to="/showSales">매출관리</router-link>
            <router-link to="/userAdmin">손님관리</router-link>
            <router-view></router-view>
          </div>
        </v-col>

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

<style>

</style>