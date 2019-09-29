<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item @click="">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item  @click="">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Learn English</v-toolbar-title>

      <div class="flex-grow-1"></div>
      <v-toolbar-items
        class="hidden-sm-and-down"
        v-if="!isUserLoggedIn"
      >
        <v-btn
          text
          v-for="link of authLinks"
          :key="link.url"
          :to="link.text"
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.text}}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items
        class="hidden-sm-and-down"
        v-else
      >
        <v-btn
          text
          @click="onLogout"
        >
          <v-icon left>person</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>

      <v-menu
        left
        bottom
      >
        <template
          v-slot:activator="{ on }"
        >
          <v-btn
            icon
            v-on="on"
            class="hidden-md-and-up"
          >
            <v-icon>more_vert</v-icon>
          </v-btn>
        </template>

        <v-list v-if="!isUserLoggedIn">
          <v-list-item
            v-for="link in authLinks"
            :key="link.url"
            :to="link.text"
          >
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list v-else>
          <v-list-item
            @click="onLogout"
          >
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      authLinks: [
        {
          text: 'Login',
          url: '/login',
          icon: 'person'
        },
        {
          text: 'Register',
          url: '/register',
          icon: 'person_add'
        }
      ]
    }
  },
  computed: {
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logoutUser')
        .then(() => {
          this.$router.push('/login')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
