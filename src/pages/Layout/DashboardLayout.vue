<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    
    <fullscreen ref="fullscreen" @change="fullscreenChange" background="#fff">
      <div v-if="this.user">
      <notifications></notifications>
    <side-bar>
      <sidebar-link to="/home">
        <md-icon>home</md-icon>
        <p>Home</p>
      </sidebar-link>
      <sidebar-link to="/dashboard">
        <md-icon>insert_chart</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/goals">
        <md-icon>person</md-icon>
        <p>Goals</p>
      </sidebar-link>
      <sidebar-link to="/gym">
        <md-icon>fitness_center</md-icon>
        <p>Gym</p>
      </sidebar-link>
      <sidebar-link to="/tracking">
        <md-icon>fastfood</md-icon>
        <p>Tracking</p>
      </sidebar-link>
      <sidebar-link to="/Energy">
        <md-icon>alarm</md-icon>
        <p>Sleep / Energy</p>
      </sidebar-link>
      <sidebar-link to="/measurements">
        <md-icon>content_paste</md-icon>
        <p>Measurements</p>
      </sidebar-link>
      <sidebar-link to="/help">
        <md-icon>help_outline</md-icon>
        <p>Help Center</p>
      </sidebar-link>
       <sidebar-link to="/settings">
        <md-icon>settings</md-icon>
        <p>Settings</p>
      </sidebar-link>

    </side-bar>

    <div class="main-panel" >
      <div>
        <top-navbar></top-navbar>

        <dashboard-content>
          
        </dashboard-content>

        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
    </div>
    <div v-else >
        <loading></loading>
    </div>
    </fullscreen>
  </div>
</template>



<style lang="scss">
</style>

<script>
  import Loading from './Loading.vue';
  import TopNavbar from "./TopNavbar.vue";
  import ContentFooter from "./ContentFooter.vue";
  import DashboardContent from "./Content.vue";
  import fullscreen from 'vue-fullscreen';
  import Vue from 'vue';
  import firebase from 'firebase';
  import { firebaseApp } from '../../firebase/firebaseInit'
  import db from '../../firebase/firebaseInit'

  Vue.use(fullscreen)

  export default {
    components: {
      TopNavbar,
      DashboardContent,
      ContentFooter,
      Loading
    },
    data() {
      return {
        fullscreen: false,
      }
    },
    methods: {
      toggle () {
        this.$refs['fullscreen'].toggle() // recommended
        // this.fullscreen = !this.fullscreen // deprecated
      },
      fullscreenChange (fullscreen) {
        this.fullscreen = fullscreen
      }
    },
    beforeMount() {
    let self=this;
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);
      self.$store.commit('setUser', user);

      var docRef = db.collection("settings").doc(user.email);

      docRef.get().then(function(doc) {
      if (doc.exists) {
        var color = ""
        var bgImg = ""
        bgImg = "sidebar-" + doc.data().Img + ".jpg";

        if(doc.data().Color == 1){
            color = "purple"
        }else if(doc.data().Color == 2){
            color = "blue"
        }else if(doc.data().Color == 3){
            color = "green"
        }else if(doc.data().Color == 4){
            color = "orange"
        }else{
            color = "red"
        }

        self.$store.commit('setColor', color);
        self.$store.commit('setImg', bgImg);
      } else {
      // doc.data() will be undefined in this case
      }
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
    } else {
      var provider = new firebase.auth.GoogleAuthProvider();
      
      firebase.auth().signInWithRedirect(provider);
      firebase.auth().getRedirectResult().then(function(result) {
      // The signed-in user info.
      
      });
    }
    });
  },
  computed: {
    user () {
      return this.$store.state.user;
    }
  }
  }
</script>

<style>
</style>
