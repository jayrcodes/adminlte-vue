<template>


  <!-- Left side column. contains the sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
            <img v-bind:src="user2Img" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Alexander Pierce</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">MAIN NAVIGATION</li>
        <li>
          <router-link to="/">
            <i class="fa fa-th"></i> <span>Home</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green">Hot</small>
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard">
            <i class="fa fa-th"></i> <span>Dashboard</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green">Hot</small>
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/datatables">
            <i class="fa fa-th"></i> <span>DataTables</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green">Hot</small>
            </span>
          </router-link>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>

</template>

<script>
import user2Img from 'admin-lte/dist/img/user2-160x160.jpg'

export default {
  title: 'headerComponent',
  data () {
    return {
      title: 'HeaderComponent',
      user2Img
    }
  }
}
</script>

