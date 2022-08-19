<template>
  <div>
    <v-toolbar
      color="white"
      class="search-bar elevation-3"
    >
      <v-container
        fluid
        class="px-0"
      >
        <v-row
          align="center"
        >
          <v-col
            cols="1"
            class="px-2"
            justify="center"
            align="center"
          >
            <v-icon
              @click="$router.go(-1)"
            >
              mdi-arrow-left
            </v-icon>
            <!-- >mdi-chevron-left -->
          </v-col>
          <v-col
            cols="10"
            align="center"
            justify="center"
            class="px-5"
          >
            <v-text-field
              v-model="searchTerm"
              flat
              hide-details
              label="검색어 입력"
              clearable
              rounded
              prepend-inner-icon="mdi-magnify"
              solo-inverted
              @keydown.enter="doSearch()"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-toolbar>

    <v-snackbar
      v-model="snackbar"
      :width="$vuetify.breakpoint.width - 50"
      :timeout="3000"
      :style="`margin-bottom:${this.$vuetify.application.bottom + 30}px`"
      color="#FF7B54"
      elevation="2"
      height="50"
      rounded="pill"
      transition="fade-transition"
    >
      검색어를 입력하시고 다시 시도해주세요.
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        searchTerm: '',
        snackbar: false,
      };
    },
    methods: {
      doSearch() {
        if (!this.searchTerm) {
          this.snackbar = true;
          return;
        }
        this.$router.push({
          name: 'SearchResult',
        });
      },
    },
  };
</script>

<style>

</style>
