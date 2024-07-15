<script>
import { mapActions } from 'vuex'

import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: {
    NavBar,
    FooterComponent
  },
  methods: {
    ...mapActions('auth', ['fetchUsersFromJson'])
  },
  created() {
    this.fetchUsersFromJson()
  },
}

</script>


<template>
  <NavBar />
  <div class="content">
    <router-view/>
  </div>
  <FooterComponent class="footer"/>
</template>

<style>
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content{
  flex:1;
}
</style>
