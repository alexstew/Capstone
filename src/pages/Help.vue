<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
        <md-card>
          <md-card-header :data-background-color="bg">
            <h4 class="title">Menu Help</h4>
          </md-card-header>

          <md-card-content>
            <h4>Desktop Menu</h4>
            <img src="../../src/assets/img/Menu1.png" alt="">
            <h4>Mobile Menu</h4>
            <img src="../../src/assets/img/Menu2.png" alt="">
            <h4>Sidebar Menu</h4>
            <img src="../../src/assets/img/Menu3.png" alt="" height="200px">
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
       
        
        <md-card>
          <md-card-header :data-background-color="bg">
            <h4 class="title">Dashboard Help</h4>
          </md-card-header>

          <md-card-content>
            <img src="../../src/assets/img/Dashboard.png" alt="">
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
        <md-card>
          <md-card-header :data-background-color="bg">
            <h4 class="title">Goals Help</h4>
          </md-card-header>

          <md-card-content>
            <img src="../../src/assets/img/Goals.png" alt="">
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
        <md-card>
          <md-card-header :data-background-color="bg">
            <h4 class="title">Gym Help</h4>
          </md-card-header>
          <md-card-content>
            <h4>Completed Tab</h4>
            <img src="../../src/assets/img/Gym1.png" alt="">
            <h4>Routines Tab</h4>
            <img src="../../src/assets/img/Gym2.png" alt="">
            <h4>Start Tab</h4>
            <img src="../../src/assets/img/Gym3.png" alt="">
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
        <md-card>
          <md-card-header :data-background-color="bg">
            <h4 class="title">Tracking Help</h4>
          </md-card-header>
          <md-card-content>
            <h4>All-time Water Tab</h4>
            <img src="../../src/assets/img/Tracking1.png" alt="">
            <h4>All-time Macros Tab</h4>
            <img src="../../src/assets/img/Tracking2.png" alt="">
            <h4>Add Tab</h4>
            <img src="../../src/assets/img/Tracking3.png" alt="">
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
        <md-card>
          <md-card-header :data-background-color="bg">
            <h4 class="title">Sleep / Energy Help</h4>
          </md-card-header>

          <md-card-content>
            <h4>All-time Sleep Tab</h4>
            <img src="../../src/assets/img/Sleep1.png" alt="">
            <h4>All-time Energy Tab</h4>
            <img src="../../src/assets/img/Sleep2.png" alt="">
            <h4>Add Tab</h4>
            <img src="../../src/assets/img/Sleep3.png" alt="">
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
        <md-card>
          <md-card-header :data-background-color="bg">
            <h4 class="title">Measurements Help</h4>
          </md-card-header>

          <md-card-content>
            <h4>All-time Bodyweight Tab</h4>
            <img src="../../src/assets/img/Measurements1.png" alt="">
            <h4>All-time Other Tab</h4>
            <img src="../../src/assets/img/Measurements2.png" alt="">
            <h4>Add Tab</h4>
            <img src="../../src/assets/img/Measurements3.png" alt="">
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
        <md-card>
          <md-card-header :data-background-color="bg">
            <h4 class="title">Settings Help</h4>
          </md-card-header>

          <md-card-content>
            <img src="../../src/assets/img/Settings.png" alt="">
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
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
