<template> 
<div>
   <div class="desktop">
      <md-toolbar md-elevation="0" class="md-transparent bottomBorder">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <h3 class="md-title">{{$route.name}}</h3>
          </div>
          {{dateNow}}
          <div class="md-toolbar-section-end">
            <md-button @click="toggle" class=" md-just-icon md-simple" v-if="fullscreen"><md-icon >fullscreen_exit</md-icon><md-tooltip md-direction="bottom">Exit Fullscreen</md-tooltip></md-button>
            <md-button @click="toggle" class=" md-just-icon md-simple" v-else><md-icon >fullscreen</md-icon><md-tooltip md-direction="bottom">Fullscreen</md-tooltip></md-button>
            <div class="user" @click="signOut">
              <h4 class="border"> {{user.displayName}}</h4>
              <img :src="user.photoURL" alt="" class="image">
              <md-tooltip md-direction="bottom"><md-icon>exit_to_app</md-icon> Sign Out</md-tooltip>
            </div>
        
            <md-button class="md-just-icon md-simple" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </md-button>
          </div>
        </div>
      </md-toolbar>
    </div>
    
    <div class="mobile">
      <md-toolbar md-elevation="0" class="md-transparent bottomBorder">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
             {{time}}
          </div>
         
          <div class="md-toolbar-section-end">
            <md-button @click="toggle" class=" md-just-icon md-simple" v-if="fullscreen"><md-icon>{{fullsreenIcon}}</md-icon></md-button>
        
            <md-button class="md-just-icon md-simple md-toolbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </md-button>
          </div>
        </div>
      </md-toolbar>
    </div>
 
  
  </div>
  
  
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      fullscreen: false,
     dateNow: '',
      time: '',
      isDesktop: null
   };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    toggle() {
      this.fullscreen = !this.fullscreen;
      this.$parent.toggle();
    },
    signOut() {
      firebase.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });
    },
    date () {
      let currentDate = new Date();
      let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let date = "";
      date += (day[currentDate.getDay()] + " " + (currentDate.getMonth() + 1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear() + " ");
      
      let hours = currentDate.getHours();
      let minutes = currentDate.getMinutes();
      let ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      let time = hours + ':' + minutes + ' ' + ampm;
  
      setInterval(this.date, 10000);
      this.dateNow = date + time;
      this.time = time;
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    fullscreenIcon () {
      let icon = this.fulscreen
      return icon;    }
  }, mounted () {
    this.date();
  }
};
</script>

<style scoped>
  .mobile{
    display: block;
  }
  .desktop{
    display: none;
  }
  .border{
    border-left: solid grey 1px;
    padding-left: 10px;
    margin: 0px;
  }
  .image{
    height: 2rem;
    width: 2rem;
  }
  .user{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
  }
  img{
    margin-left: 10px;
  }
  .bottomBorder {
    border-bottom: 1px lightgray solid;
  }
  @media screen and (min-width: 991px) {
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }}
</style>