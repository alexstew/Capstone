<template>
 <div class="content">
     
    <div class="md-layout md-alignment-center">
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
            <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Current Goals</p>
                    <h3 class="title">{{currentGoals}}</h3>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
            <stats-card data-background-color="green">
                <template slot="header">
                    <md-icon >assignment_turned_in</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Completed Goals</p>
                    <h3 class="title">{{completedGoals}}/{{currentGoals + completedGoals}}</h3>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-80 md-xsmall-size-100 md-size-80">
        <nav-tabs-card>
            <template slot="content">
                <span class="md-nav-tabs-title">Goals:</span>
                <md-tabs md-sync-route :class="color" md-alignment="left">

                    <md-tab id="tab-home" md-label="In Progress" md-icon="notes">
                    </md-tab>
                 </md-tabs>
            <md-table>
                <md-table-row v-for="(goal, index) in goals" :key="index">
                    <md-table-cell>
                        <md-button @click="completeGoal(goal, index)" class="md-just-icon md-simple md-success">
                            <md-icon>check_circle</md-icon>
                            <md-tooltip md-direction="top">Complete</md-tooltip>
                        </md-button>
                    </md-table-cell>
                    <md-table-cell>{{ goal }}</md-table-cell>
                    <md-table-cell>
                        <md-button @click="editGoal(goal, index)" class="md-just-icon md-simple md-warning">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="removeGoal(goal, index)" class="md-just-icon md-simple md-danger">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button>
                    </md-table-cell>
                </md-table-row>
            </md-table>
                
            <md-field v-if="!editing">
                <label>New Goal!</label>
                <md-input v-model="goal"></md-input>
                <md-button @click="addGoal" class="md-simple md-just-icon"><md-icon class="goalBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add Goal</md-tooltip></md-button>
            </md-field>

            <md-field v-else>
                <label>Edit Goal!</label>
                <md-input v-model="editedGoal"></md-input>
                <md-button @click="updateGoal()" class="md-simple md-just-icon"><md-icon class="goalBtn">check_circle</md-icon><md-tooltip md-direction="bottom">Submit Change</md-tooltip></md-button>
                <md-button @click="editing = false" class="md-simple md-just-icon"><md-icon class="goalBtn">cancel_presentation</md-icon><md-tooltip md-direction="bottom">Cancel Edit</md-tooltip></md-button>
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
import {NavTabsCard} from '../components'
import firebase from 'firebase'

export default {
    components: {
        StatsCard,
        NavTabsCard
    },
  data () {
    return {
      bg: "purple",
      color: "md-success",
      goal: "",
      editedGoal: "",
      lastGoal: "",
      editing: false,
      currentIndex: null,
      goals: [
        
      ],
      completedGoals: null,
      currentGoals: null
    }
  },
  methods: {
      addGoal () {
        if(this.goals.length >= 0){
            var notFound = true
            for(var i = 0; i < this.goals.length; i++)
            {
                if(this.goal == this.goals[i])
                {
                    notFound = false;
                }
            }
            if(this.goal != "" && notFound == true)
            {
                var docRef = db.collection('goals').doc(this.user.email);
                docRef.update({
                    goalList: firebase.firestore.FieldValue.arrayUnion(this.goal)
                });
                this.goals.push(this.goal)
                this.goal = ""
                this.currentGoals = this.currentGoals + 1
            } else {
                   if(this.goal == "")
                   {
                       this.$notify({
                        message: 'Make sure you entered a value!',
                        icon: 'error',
                        horizontalAlign: 'center',
                        verticalAlign: 'top',
                        type: 'danger'
                    });
                   } else {
                       this.$notify({
                        message: "Make sure the goal doesn't already exist!",
                        icon: 'error',
                        horizontalAlign: 'center',
                        verticalAlign: 'top',
                        type: 'danger'
                    });
                   }
                    this.goal = "" 
            }
        }else {
            if(this.goal != "")
            {
                docRef.update({
                    goalList: firebase.firestore.FieldValue.arrayUnion(this.goal)
                });
                this.goals.push(this.goal)
                this.goal = ""
                this.currentGoals = this.currentGoals + 1
            } else {
                this.$notify({
                    message: 'Make sure you entered a value!',
                    icon: 'error',
                    horizontalAlign: 'center',
                    verticalAlign: 'top',
                    type: 'danger'
                });
                this.goal = "" 
            }
        }
           
      },
      removeGoal (goal, index){
        var confirmed = confirm("Are you sure you want to remove this goal?")
        if (confirmed == true)
        {
            var docRef = db.collection('goals').doc(this.user.email);
            docRef.update({
              goalList: firebase.firestore.FieldValue.arrayRemove(goal)
            });
            this.goals.splice(index, 1);
             this.currentGoals = this.currentGoals - 1
        }
      },
      completeGoal (goal, index){
        var confirmed = confirm("Are you sure you completed this goal!?")
        var cGoals = null

        if (confirmed == true)
        {
            var docRef = db.collection('goals').doc(this.user.email);

            docRef.update({
              goalList: firebase.firestore.FieldValue.arrayRemove(goal)
            });

            this.goals.splice(index, 1);

            docRef.get().then(function(doc) {
            if (doc.exists) {
                
                if(doc.data().completedGoals != null)
                {
                    cGoals = doc.data().completedGoals
                    docRef.set({
                        completedGoals: cGoals + 1
                    }, { merge: true });
                }else {
                    cGoals = 0

                    docRef.set({
                        completedGoals: cGoals + 1
                    }, { merge: true });
                }
            } else {
                // doc.data() will be undefined in this case
                
            }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
             this.currentGoals = this.currentGoals - 1
             this.completedGoals = this.completedGoals + 1
        }
      },
      editGoal (goal, index) {
          this.editing = true
          this.editedGoal = goal
          this.lastGoal = goal
          this.currentIndex = index
      },
      updateGoal(){
        var confirmed = confirm("Are you sure you want to update this goal?")
        if (confirmed == true)
        {
            if(this.goals.length >= 0){
                var notFound = true
                for(var i = 0; i < this.goals.length; i++)
                {
                    if(this.editedGoal == this.goals[i])
                    {
                        notFound = false;
                    }
                }
                if(this.editedGoal != "" && notFound == true)
                {
                    this.goals.splice(this.currentIndex, 1);
                    this.goals.push(this.editedGoal)
                    var docRef = db.collection('goals').doc(this.user.email);
                    docRef.update({
                        goalList: firebase.firestore.FieldValue.arrayRemove(this.lastGoal)
                    });
                    
                    docRef.update({
                        goalList: firebase.firestore.FieldValue.arrayUnion(this.editedGoal)
                    });
                    
                    this.currentIndex = null
                    this.editing = false;
                } else {
                   if(this.editedGoal == "")
                   {
                       this.$notify({
                        message: 'Make sure you entered a value!',
                        icon: 'error',
                        horizontalAlign: 'center',
                        verticalAlign: 'top',
                        type: 'danger'
                    });
                   } else {
                       this.$notify({
                        message: "Make sure the goal doesn't already exist!",
                        icon: 'error',
                        horizontalAlign: 'center',
                        verticalAlign: 'top',
                        type: 'danger'
                    });
                   }
                }
            }
        }else {
            this.currentIndex = null
            this.editing = false;
        }
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
    var goalRef = db.collection("goals").doc(this.user.email);

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
      console.log("Error getting Settings:", error);
    });
    goalRef.get().then(function(doc) {
    if (doc.exists) {
        for(var i = 0; i < doc.data().goalList.length; i++)
        {
            self.goals.push(doc.data().goalList[i]);
        }
         self.currentGoals = doc.data().goalList.length;
         self.completedGoals = doc.data().completedGoals;
    } else {
        // doc.data() will be undefined in this case
    }
    }).catch(function(error) {
      console.log("Error getting Goals:", error);
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
