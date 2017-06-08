<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
  </div>
</template>

<script>

export default {
  name: 'TopNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
} // export
</script>
