<template>
  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="" />
        <span class="d-none d-lg-block">My To Do App</span>
      </a>
      <i class="bi bi-list toggle-sidebar-btn"></i>
    </div>
    <!-- End Logo -->

    <div class="search-bar">
      <form class="search-form d-flex align-items-center" method="POST" action="#">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
        <button type="submit" title="Search"><i class="bi bi-search"></i></button>
      </form>
    </div>
    <!-- End Search Bar -->

    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">

        <li v-if="isLogin" class="nav-item dropdown pe-3">
          <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle" />
            <span class="d-none d-md-block dropdown-toggle ps-2">Neha Patel</span></a> 
            <!-- End Profile Iamge Icon -->

           <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li class="dropdown-header">
              <h6>Neha Patel</h6>
              <span>Web developer</span>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="#" @click.prevent="onLogoutClicked()">
                <i class="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </a>
            </li>
          </ul> 
          <!-- End Profile Dropdown Items -->
      </li> 
        <!-- End Profile Nav -->

        <!-- login button -->

        <li v-if="!isLogin" class="nav-item dropdown pe-3">
          <button type="button" class="btn btn-primary btn-sm" @click="onLoginClicked">Login</button>
        </li>
        <!-- End login button-->
        <!-- Register button -->

        <li v-if="!isLogin" class="nav-item dropdown pe-3">
          <button type="button" class="btn btn-primary btn-sm" @click="onRegisterClicked">Register</button>
        </li>
        <!-- End Register button-->
      </ul>
    </nav>
    <!-- End Icons Navigation -->
  </header>

  <!-- End Header -->
</template>

<script>
import { useUserStore } from '../stores/user';

export default {
  name: 'AppHeader',
  computed: {
    isLogin() {
      return this.userStore.isAuthenticated;
    },
    fullName() {
      return this.userStore.fullName;
    },
    occupation(){
      return this.userStore.occupation;
    },
  },
  methods: {
    onLoginClicked() {
      this.$router.push({name: 'login'});
    },
    onRegisterClicked(){
      this.$router.push({name: 'register'});
    },
    onLogoutClicked() {
                this.userStore.logoutUser();
                this.$router.push({name:'login'});
            }
  },
  setup() {
    const userStore = useUserStore();
    return{ userStore};

  },
}
</script>

<style scoped></style>
