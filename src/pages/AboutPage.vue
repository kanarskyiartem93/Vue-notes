<template>
  <h1>All users</h1>
  <ul>
    <li v-for="user in getUsers" :key="user.id">
      <p>{{user.id}}</p>
      <p>{{user.name}}</p>
      <p>{{user.admin ? 'Admin' : 'User'}}</p>
    </li>
  </ul>
  <br>
  {{getTotalUsers}}
</template>

<script>
export default {
  name: "AboutPage",
  computed: {
    getTotalUsers() {
      return this.$store.getters.getUsersLength
    },
    getUsers() {
      return this.$store.getters.getAllUsers
    }
  }
}
</script>

<style scoped>

</style>