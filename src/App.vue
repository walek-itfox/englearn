<template>
  <v-app id="inspire">
    <Navbar></Navbar>
    <router-view></router-view>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
    <template v-if="error">
      <v-snackbar
        color="error"
        :multi-line="true"
        :timeout="5000"
        @input="closeError"
        :value="true"
      >
        {{ error }}
        <v-btn
          dark
          text
          @click="closeError"
        >
          Close
        </v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style>
</style>
