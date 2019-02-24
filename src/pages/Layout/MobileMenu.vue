<template>
  <ul class="nav nav-mobile-menu">
    <li class="main" @click="signOut">
        <img :src="user.photoURL" alt="" class="image">
        <h5>Sign Out </h5>
    </li>
    <li class="border"></li>
  </ul>
</template>
<script>
import firebase from 'firebase'

export default {
  data() {
    return {

    }
  },
  methods: {
    signOut() {
      firebase.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });
    }
  },
  computed: {
      user () {
          return this.$store.state.user;
      }
  }
};
</script>

<style scoped>
.main{
    border-radius: 6px;
    color: white;
    display: flex;
    align-items: center;
    margin-left: 1.4rem;
    margin-right: 1.4rem;
    cursor: pointer;
}
.main:hover{
    background: rgba(200, 200, 200, 0.2);
}
.image{
    margin: 1rem;
    height: 2rem;
    width: 2rem;
  }
  .border{
      border-bottom: lightgrey solid 1px;
      height: 1px;
      width: 84%;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
  }
</style>
