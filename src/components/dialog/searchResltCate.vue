<template lang="">
  <v-dialog
    v-model="dialog"
    persistent
    transition="dialog-bottom-transition"
    content-class="modal-bottom modal-category"
  >
    <v-card class="elevation-0">
      <v-toolbar
        class="elevation-1"
        light
        color="#fff"
      >
        <v-toolbar-items>
          <v-btn
            icon
            light
            class="ml-2"
            style="width:max-content;"
          >
            <v-icon>mdi-restore</v-icon>
            선택초기화
          </v-btn>
        </v-toolbar-items>
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            icon
            light
            @click="$emit('close')"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-container class="elevation-0">
        <v-row
          class="pt-0"
        >
          <v-col
            cols="12"
            justify="center"
            align="center"
            class="pa-0 pt-0"
            style="background:#f5f5f5;"
          >
            <v-card
              tile
            >
              <v-list
                dense
                class="ma-0 pa-0"
              >
                <v-list-item-group
                  v-model="selectedItem"
                  color="primary"
                  class="clearfix"
                >
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text" />
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name:'SearchResltCate',
  props: {
      dialog: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        selectedItem: 1,
        items: [
          { text: '전체보기', link: '/' },
          { text: '베이커리/떡/도넛', link: '/' },
          { text: '카페', link: '/' },
          { text: '아이스크림', link: '/' },
          { text: '상품권', link: '/' },
          { text: '편의점', link: '/' },
          { text: '햄버거', link: '/' },
          { text: '피자', link: '/' },
          { text: '치킨', link: '/' },
        ],
      }
    },
}
</script>
<style lang="">

</style>
