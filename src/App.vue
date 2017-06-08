<template>
  <div id="app">
    <header-component></header-component>
    <sidebar></sidebar>
    <top-nav></top-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'

export default {
  name: 'app',
  components: {
    TopNav,
    HeaderComponent,
    Sidebar
  }
}
</script>

<style>
</style>
