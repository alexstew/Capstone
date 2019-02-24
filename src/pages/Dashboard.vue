<template>
  <div>
      <h1>Welcome</h1>
      {{user.displayName}}
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  data () {
    return {
      
    }
  },
  computed: {
    user () {
      return this.$store.state.user;
    }
  }
}
</script>
