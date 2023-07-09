<template>
  <v-container>
    <v-col cols="9"></v-col>
    <v-col cols="3">
      <v-row>
        <v-btn @click="addRow">추가</v-btn>
        <v-btn @click="deleteRow">삭제</v-btn>
        <v-btn @click="saveRow">저장</v-btn>
        <v-btn @click="searchUser">조회</v-btn>
        <v-text-field placeholder="이름입력" outlined dense></v-text-field>
      </v-row>
    </v-col>

    <v-data-table :headers="table" :items="user" class="elevation-1">
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "userAdmin",
  data() {
    return {
      table: [
        {
          text: "손님정보",
          align: "start",
          sortable: "false",
          value: "name",
        },
        { text: "이름", value: "name" },
        { text: "전화번호", value: "phoneNumber" },
        { text: "시술내용", value: "service" },
        { text: "금액", value: "money" },
        { text: "최근방문날짜", value: "recentDate" },
      ],

      user: [
        {
          userId: 1,
          name: "김현재",
          phoneNumber: "010-3058-7633",
          service: "커트",
          money: 15000,
          recentDate: "2023-07-09",
        },
      ],
    };
  },
  methods: {
    addRow() {
      alert("추가버튼 클릭");
    },
    deleteRow() {
      alert("삭제버튼 클릭");
    },
    saveRow() {
      alert("저장버튼 클릭");
    },
    searchUser() {
      alert("조회버튼 클릭");
    },
  },
};
</script>

<style></style>
