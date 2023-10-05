<template>
  <AppHeader></AppHeader>
  <AppNavigation></AppNavigation>
  <!-- Start #main -->
  <main id="main" class="main">
    <AppBreadcrumb />
    <RouterView />
  </main>
  <!-- End #main -->
  <AppFooter></AppFooter>

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

</template>
<script>
import { RouterView } from 'vue-router'
import AppNavigation from '@/components/AppNavigation.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppBreadcrumb from '@/components/AppBreadcrumb.vue'

export default {
  name: 'AppFrame',
  components: {
    RouterView,
    AppNavigation,
    AppHeader,
    AppFooter,
    AppBreadcrumb,
  }
}
</script>

<style scoped></style>
