<!-- 예약관리 화면 -->
<template>
  <v-container>
    <v-btn
    @click="btnSearch">
      조회
    </v-btn>
    <v-btn
    @click="btnReserveCancle">
      예약취소
    </v-btn>
    <v-btn
    @click="btnReserveConfirm">
      예약확정
    </v-btn>
  </v-container>
</template>

<script>
export default {
    name:'reservationAdmin',
    data(){
      return {

      }
    },
    methods:{
      btnSearch(){
        alert("예약조회 버튼 클릭")
      },
      btnReserveCancle(){
        alert("예약취소 버튼 클릭")
      },
      btnReserveConfirm(){
        alert("예약확정 버튼 클릭")
      }
      
    }

}
</script>

<style>

</style>