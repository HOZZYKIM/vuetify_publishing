<template lang="">
  <v-dialog
    v-model="dialog"
    persistent
    transition="dialog-bottom-transition"
    content-class="modal-bottom modal-best"
  >
    <v-card class="elevation-0">
      <v-toolbar
        class="elevation-2"
        light
        color="#fff"
      >
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
              <v-radio-group
                v-model="radios"
                column
                class="mt-0 pa-6 pt-1"
                hide-details
              >
                <v-radio
                  label="인기상품순"
                  color="primary"
                  value="default"
                />
                <v-radio
                  label="상품명순"
                  color="primary"
                />
                <v-radio
                  label="가격 낮은 순"
                  color="primary"
                />
                <v-radio
                  label="가격 높은 순"
                  color="primary"
                />
              </v-radio-group>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name:'SearchResltBest',
  props: {
      dialog: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        selectedItem: 1,
        radios: 'default',
      }
    },
}
</script>
<style lang="">

</style>
