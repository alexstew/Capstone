<template>
 <div class="content">
     
    <div class="md-layout md-alignment-center">
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-30">
            <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Current Goals</p>
                    <h3 class="title">10</h3>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-30">
            <stats-card data-background-color="green">
                <template slot="header">
                    <md-icon >assignment_turned_in</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Completed Goals</p>
                    <h3 class="title">49/50</h3>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-80">
        <nav-tabs-card>
            <template slot="content">
                <span class="md-nav-tabs-title">Goals:</span>
                <md-tabs md-sync-route :class="color" md-alignment="left">

                <md-tab id="tab-home" md-label="In Progress" md-icon="notes">
                    <nav-tabs-table></nav-tabs-table>
                </md-tab>
                 </md-tabs>
                
            <md-field>
                <label>New Goal!</label>
                <md-input v-model="type"></md-input>
                <md-button class="md-simple md-just-icon"><md-icon class="goalBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add Goal</md-tooltip></md-button>
                <!-- <md-button class="md-simple md-just-icon"><md-icon class="goalBtn">check_circle</md-icon><md-tooltip md-direction="bottom">Complete Goal</md-tooltip></md-button>
                <md-button class="md-simple md-just-icon"><md-icon class="goalBtn">create</md-icon><md-tooltip md-direction="bottom">Edit Goal</md-tooltip></md-button>
                <md-button class="md-simple md-just-icon"><md-icon class="goalBtn">remove_circle</md-icon><md-tooltip md-direction="bottom">Remove Goal</md-tooltip></md-button> -->
            </md-field>
      
            </template>
            
        </nav-tabs-card>
        
        </div>
        
        
    </div>
 </div>
 
</template>

<script>
import db from '../firebase/firebaseInit'
import {StatsCard} from '../components'
import {NavTabsCard, NavTabsTable} from '../components'

export default {
    components: {
        StatsCard,
        NavTabsCard,
        NavTabsTable
    },
  data () {
    return {
      bg: "purple",
      color: "md-success"
    }
  },
  methods: {
   
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
            self.color = "md-primary"
        }else if(doc.data().Color == 2){
            self.bg = "blue"
             self.color = "md-info"
        }else if(doc.data().Color == 3){
            self.bg = "green"
             self.color = "md-success"
        }else if(doc.data().Color == 4){
            self.bg = "orange"
             self.color = "md-warning"
        }else{
            self.bg = "red"
             self.color = "md-danger"
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

.goalBtn:hover {
    transform: scale(1.3);
}

.goalTitle{
    color: grey;
    text-align: center;
    margin: 2rem;
    border-bottom: 1px solid lightgrey;
}
</style>
