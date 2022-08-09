<template lang="">
  <v-card class="elevation-0 datepicker">
    <v-row class="ma-3 mt-5">
      <v-btn-toggle
        class="text-center d-table datepick-tabs"
        style="width:100%;"
      >
        <v-btn
          v-for="item in others"
          :key="item.id"
          class="elevation-0 d-table-cell"
        >
          {{ item.title }}
        </v-btn>
      </v-btn-toggle>
    </v-row>

    <v-row class="ma-3">
      <v-col
        cols="6"
        class="pa-0 pr-1"
      >
        <v-dialog
          ref="startMenu"
          :close-on-content-click="false"
          :return-value.sync="dateRange.start"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateRange.start"
              append-icon="mdi-calendar-blank-outline"
              readonly
              v-bind="attrs"
              class="pt-0"
              hide-details
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="date"
            no-title
            scrollable
            :weekday-format="getDay"
            :month-format="getMonth"
          >
            <v-spacer />
            <v-btn
              class="elevation-0"
              color="white"
              width="50%"
              @click="$refs.startMenu.isActive = false"
            >
              취소
            </v-btn>
            <v-btn
              class="white--text elevation-0"
              color="#FD7B54"
              width="50%"
              @click="$refs.startMenu.save(date)"
            >
              확인
            </v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
      <v-col
        cols="6"
        class="pa-0"
      >
        <v-dialog
          ref="endMenu"
          class="datepicker"
          :close-on-content-click="false"
          :return-value.sync="dateRange.end"
          offset-y
          width="290px"
          hide-details
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateRange.end"
              append-icon="mdi-calendar-blank-outline"
              readonly
              v-bind="attrs"
              class="pt-0 default-txt"
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="date"
            no-title
            scrollable
            :weekday-format="getDay"
            :month-format="getMonth"
          >
            <v-btn
              class="elevation-0"
              color="white"
              width="50%"
              @click="$refs.endMenu.isActive = false"
            >
              취소
            </v-btn>
            <v-btn
              class="white--text elevation-0"
              color="#FD7B54"
              width="50%"
              @click="$refs.endMenu.save(date)"
            >
              확인
            </v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
  export default {
    name: 'DatePicker',
    data: vm => ({
      date: null,
      dateRange: {
        start: null,
        end: null,
      },
      others: [
            { id: 1, title: "오늘", range:'0'},
            { id: 2, title: "1개월" ,range:'1'},
            { id: 3, title: "3개월" ,range:'3'},
            { id: 4, title: "6개월",range:'6'},
            { id: 5, title: "12개월",range:'12'},
        ],
      getDay(date) {
      const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
      let i = new Date(date).getDay(date);
      return daysOfWeek[i];
      },
      getMonth(date) {
      const monthName = [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
      ];
      console.log(date);
      let i = new Date(date).getMonth(date);
      return monthName[i];
    },
    }),
  }
</script>
<style scoped>

</style>
