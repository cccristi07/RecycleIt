<template>
<div>
    <h1>RecycleIT</h1>
  <v-layout column>
    <v-flex>
      <div class="white elevation-4">
        <v-toolbar flat dense class="green" dark>
          <v-toolbar-title>Login page</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <input 
            type="email" 
            name="email"
            v-model="email"
            placeholder="email" />
          <br>
          <input 
            type="password" 
            name="password"
            v-model="password"
            placeholder="password" />
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn
            class="green"
            @click="register">
            Login
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard'
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1'
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2'
        }
      ]
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error { 
  color: red;
}
</style>