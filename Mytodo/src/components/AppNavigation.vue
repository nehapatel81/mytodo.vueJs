<template>
  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">

        <li class="nav-item">
            <RouterLink class="nav-link collapsed" to="/">
              <i class="bi bi-box-arrow-in-right"></i>
          <span>Add Task</span>
        </RouterLink>
      </li>

     
      <!-- End Home Nav -->

      <!-- <li class="nav-heading">Pages</li> -->

      <!-- <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="/profile">
          <i class="bi bi-person"></i>
          <span>Profile</span>
        </RouterLink>
      </li> -->
      <!-- End Profile Page Nav -->

      <li v-if="!isLogin" class="nav-item">
        <RouterLink class="nav-link collapsed" to="/register">
          <i class="bi bi-card-list"></i>
          <span>Register</span>
        </RouterLink>
      </li>
      <!-- End Register Page Nav -->

      <li v-if="!isLogin" class="nav-item">
        <RouterLink class="nav-link collapsed" to="/login">
          <i class="bi bi-box-arrow-in-right"></i>
          <span>Login</span>
        </RouterLink>
      </li>

      <!-- End Login Page Nav -->
    </ul>
  </aside>
  <!-- End Sidebar-->
</template>

<script>
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/user';


export default {
  name: 'AppNavigation',
  components: {
        RouterLink,
  },
  computed: {
    isLogin() {
      return this.userStore.isAuthenticated;
    }
  },
  setup() {
    const userStore = useUserStore();
    return{ userStore};

  },
}
</script>

<style scoped></style>
