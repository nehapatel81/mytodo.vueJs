<template>
  <header>

    <AppNoFrame v-if="noFrame"></AppNoFrame>
    <AppFrame v-else></AppFrame>
    
    
  </header>

</template>

<script>
import AppFrame from '@/components/AppFrame.vue'
import AppNoFrame from '@/components/AppNoFrame.vue'

const noFrameRoutes = ['/login', '/register'];

export default {
  name: 'App',
  components: {
    AppFrame,
    AppNoFrame,
  },
  computed: {
    noFrame() {
      return noFrameRoutes.includes(this.$route.fullPath);
    }

  },
  mounted() {
    console.log(this.$route);
  },
  updated() {
    console.log(this.$route);
  }
}
</script>

<style scoped></style>
