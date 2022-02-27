<template>
  <v-app id="inspire">
    <v-navigation-drawer
      class="d-flex flex-row align-center"
      v-model="drawer"
      fixed
      temporary
      app
    >
      <v-list nav>
        <v-list-item-group>
          <v-list-item v-for="(item, key) in this.routes" :key="key">
            <v-list-item-content @click="routeTo(item.path, item.title)">
              <v-list-item-title v-text="item.title"> </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="green lighten-1 d-flex justify-center">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <h1 class="white--text">Opd Saveliy</h1>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    dialog: false,
    routes: [
      {
        title: "Главная",
        path: "/",
      },
      {
        title: "Продукт",
        path: "/prod",
      },
      {
        title: "Контакты",
        path: "/cont",
      },
      {
        title: "Литература",
        path: "/lit",
      },

      {
        title: "Презентация",
        path: "/pres",
      },
    ],
  }),
  methods: {
    routeTo: function (path, title) {
      this.$router.push(path);
      this.drawer = false;
      this.text = title;
    },
  },
  computed: {},
};
</script>
<style scoped>
h1 {
  font-family: Kopenhagen;
  font-size: 40px;
  font-weight: 300;
}
.v-app-bar {
  width: 100%;
}
#inspire {
  height: 75px;
}
</style>

