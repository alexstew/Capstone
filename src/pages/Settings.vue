<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
        <md-card>
          <md-card-header :data-background-color="bg">
            <h4 class="title">Fitness App Settings</h4>
          </md-card-header>

          <md-card-content>
            <h3 class="center">App Color</h3>
            <div class="table-responsive">
               <md-button @click="changeColor(1)" class="md-primary center" id="purpleBtn"><md-icon :class="{ selectedColor : activeColor == 1, hide : activeColor != 1}">done</md-icon></md-button>
               <md-button @click="changeColor(2)" class="md-info center" id="blueBtn"><md-icon :class="{ selectedColor : activeColor == 2, hide : activeColor != 2}">done</md-icon></md-button>
               <md-button @click="changeColor(3)" class="md-success center" id="greenBtn"><md-icon :class="{ selectedColor : activeColor == 3, hide : activeColor != 3}">done</md-icon></md-button>
               <md-button @click="changeColor(4)" class="md-warning center" id="yellowBtn"><md-icon :class="{ selectedColor : activeColor == 4, hide : activeColor != 4}">done</md-icon></md-button>
               <md-button @click="changeColor(5)" class="md-danger center" id="redBtn"><md-icon :class="{ selectedColor : activeColor == 5, hide : activeColor != 5}">done</md-icon></md-button>
            </div>
            <h3 class="center">Side Bar Image</h3>
            <div class="table-responsive">
               <md-button @click="changeImg(1)" class="md-simple" id="sideImg1"><img class="img" :class="{ selectedImg : activeImg == 1}" src="../assets/img/sidebar-1.jpg" alt=""></md-button>
               <md-button @click="changeImg(2)" class="md-simple" id="sideImg2"><img class="img" :class="{ selectedImg : activeImg == 2}" src="../assets/img/sidebar-2.jpg" alt=""></md-button>
               <md-button @click="changeImg(3)" class="md-simple" id="sideImg3"><img class="img" :class="{ selectedImg : activeImg == 3}" src="../assets/img/sidebar-3.jpg" alt=""></md-button>
               <md-button @click="changeImg(4)" class="md-simple" id="sideImg4"><img class="img" :class="{ selectedImg : activeImg == 4}" src="../assets/img/sidebar-4.jpg" alt=""></md-button>
            </div>
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
      activeImg: 1,
      activeColor: 2,
      bg: "purple"
    }
  },
  methods: {
    changeImg (img) {
      this.$store.commit('setImg', "sidebar-" + img + ".jpg");

      this.activeImg = img;

      var docRef = db.collection('settings').doc(this.user.email);
      docRef.set({
        Img: img
      }, { merge: true });
    },
    changeColor (color) {
      var colorFB = ""
    
       if(color == 1){
            colorFB = "purple"
            this.bg = "purple"
        }else if(color == 2){
            colorFB = "blue"
            this.bg = "blue"
        }else if(color == 3){
            colorFB = "green"
            this.bg = "green"
        }else if(color == 4){
            colorFB = "orange"
            this.bg = "orange"
        }else{
            colorFB = "red"
            this.bg = "red"
        }
        this.$store.commit('setColor', colorFB);

      this.activeColor = color;
      
      var docRef = db.collection('settings').doc(this.user.email);
      docRef.set({
        Color: color
      }, { merge: true });
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
        self.activeImg = doc.data().Img
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
        // doc.data() will be undefined in this case
    }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  }
};
</script>

<style lang="scss" scoped>
.mx-auto {
  margin-left: auto !important;
  margin-right: auto !important;
}

.md-card {
  margin-top: 50px;
}

.table-responsive {
  overflow: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.center{
    text-align: center;
}

.img{
    width:10rem;
    height: 20rem;
    
}
.selectedImg{
  opacity: .5;
  border: black solid 5px;
}
.selectedColor{
  display: block;
}
.hide{
  display:none;
}
</style>
