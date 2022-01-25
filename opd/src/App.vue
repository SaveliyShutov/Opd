<template>
  <v-app id="inspire">
    <v-navigation-drawer
      class="d-none d-sm-flex"
      v-model="drawer"
      fixed
      temporary
      app
    >
      <v-list nav>
        <!-- active-class="deep-purple--text text--accent-4" -->
        <v-list-item-group>
          <v-list-item v-for="(item, key) in this.routes" :key="key">
            <v-list-item-content @click="routeTo(item.path, item.title)">
              <v-list-item-title v-text="item.title"> </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-text='text'></v-toolbar-title>
    </v-app-bar>

    <v-main>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    dialog: false,
    text:'Главная',
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
      }
    ],
  }),
  methods: {
    routeTo: function (path, title) {
      this.$router.push(path);
      this.drawer = false;
      this.text = title;
    },
  },
  computed: {
  },
};
</script>
<style scoped>
</style>

