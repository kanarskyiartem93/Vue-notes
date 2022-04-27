<template>
  <br>
  <br>
  {{user}}
  <div v-if="isUserLogged">
    User is logged
  </div>
  <div v-else>
    <button @click="handleLoginClick" class="btn btnPrimary">Login</button>
  </div>
</template>
<script>

export default {
  name: "HomePage",
  data() {
    return {
      userId: 3
    }
  },
  methods:{
    handleLoginClick(){
      this.$store.dispatch('setUser')
    }
  },
  computed: {
    user(){
      return this.$store.getters.getUser
    },
    isUserLogged(){
      return this.$store.getters.isUserLogged
    },
    getUsers() {
      return this.$store.getters.getUsers
    },
    getTotalUsers() {
      return this.$store.getters.getUsersLength
    },
    getUser() {
      return this.$store.getters.getUserById(this.userId)
    }
  }
}
</script>

<style scoped>

</style>