<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
       
        
        <md-card>
          <md-card-header :data-background-color="bg">
            <h4 class="title">Dashboard Help</h4>
          </md-card-header>

          <md-card-content>
            <img src="../../src/assets/img/sidebar-1.jpg" alt="">
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
        <md-card>
          <md-card-header :data-background-color="bg">
            <h4 class="title">Goals Help</h4>
          </md-card-header>

          <md-card-content>
            <img src="../../src/assets/img/sidebar-1.jpg" alt="">
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
        <md-card>
          <md-card-header :data-background-color="bg">
            <h4 class="title">Gym Help</h4>
          </md-card-header>
        
            <h3 class="center">Desktop Version</h3>
          <md-card-content>
            <img src="../../src/assets/img/sidebar-1.jpg" alt="">
          </md-card-content>
          <h3 class="center">Mobile Version</h3>
          <md-card-content>
            <img src="../../src/assets/img/sidebar-1.jpg" alt="">
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
        <md-card>
          <md-card-header :data-background-color="bg">
            <h4 class="title">Tracking Help</h4>
          </md-card-header>

          <md-card-content>
            <img src="../../src/assets/img/sidebar-1.jpg" alt="">
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
        <md-card>
          <md-card-header :data-background-color="bg">
            <h4 class="title">Sleep / Energy Help</h4>
          </md-card-header>

          <md-card-content>
            <img src="../../src/assets/img/sidebar-1.jpg" alt="">
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
        <md-card>
          <md-card-header :data-background-color="bg">
            <h4 class="title">Measurements Help</h4>
          </md-card-header>

          <md-card-content>
            <img src="../../src/assets/img/sidebar-1.jpg" alt="">
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
        <md-card>
          <md-card-header :data-background-color="bg">
            <h4 class="title">Settings Help</h4>
          </md-card-header>

          <md-card-content>
            <img src="../../src/assets/img/sidebar-1.jpg" alt="">
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '../firebase/firebaseInit'

export default {
    data () {
      return {
        bg: null
      }
    },
    computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created () {
    var self = this

    var docRef = db.collection("settings").doc(this.user.email);

    docRef.get().then(function(doc) {
    if (doc.exists) {
        self.activeColor = doc.data().Color
        if(doc.data().Color == 1){
            self.bg = "purple"
        }else if(doc.data().Color == 2){
            self.bg = "blue"
        }else if(doc.data().Color == 3){
            self.bg = "green"
        }else if(doc.data().Color == 4){
            self.bg = "orange"
        }else{
            self.bg = "red"
        }
    } else {
        docRef.set({
        Img: 1,
        color: 1
      }, { merge: true });
    }
    }).catch(function(error) {
      console.log("Error getting Settings:", error);
    });
  }
}
</script>

<style scoped>
.button{
    margin: 0;
    padding:0;
    width: 5%;
}
.row{
    display:flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}
.mx-auto {
  margin-left: auto !important;
  margin-right: auto !important;
}

.md-card {
  margin-top: 50px;
}


.center{
    text-align: center;
}

.img{
    width:10rem;
    height: 20rem;
    
}
</style>
