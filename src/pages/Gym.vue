<template>
 <div class="content">
     
    <div class="md-layout md-alignment-center">
        
         <div class="md-layout-item md-size-100">
             <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Workouts Completed</p>
                    <h3 class="title">{{this.workoutArray.length}}</h3>
                </template>

                
            </stats-card>
        </div>
        <div class="md-layout-item md-size-100">
        <md-card>
          <md-card-header :data-background-color="bg">
            <h3 class="title" style="border-bottom: solid 1px white">Gym</h3>
          </md-card-header>

          <md-card-content>
            <md-table>
               <md-table-row>
                 <md-table-cell>
                   <md-button @click="menuSelected = 1" class="md-round" :class="[menuSelected == 1 ? activeColor: '']">Completed</md-button>
               <md-button @click="menuSelected = 2" class="md-round" :class="[menuSelected == 2 ? activeColor: '']">Routines</md-button>
              <md-button @click="menuSelected = 3" class="md-round" :class="[menuSelected == 3 ? activeColor: '']">Start</md-button>
                 </md-table-cell>
               </md-table-row>
             </md-table>
            
            <div v-if="menuSelected == 1">
              <md-table>
                <md-table-row v-for="(workout, index) in workoutArray" :key="index">
                 <md-table-cell>{{workout.date}}</md-table-cell>
                  <md-table-cell v-for="(item, i) in workout.exercises" :key="i">
                     {{item.exercise}} Sets:{{item.sets}} Reps:{{item.reps}}
                  </md-table-cell>
                  <md-table-cell>
                    <md-button @click="edit(index,workout)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                    <md-button @click="removeWorkout(workout, index)" class="md-just-icon md-simple md-danger goalBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button>
                  </md-table-cell>
                </md-table-row>
              </md-table>
              <md-table v-if="editing">
                  <md-table-row v-for="(exercise, index) in workoutArray[editIndex].exercises" :key="index">
                      <md-table-cell>{{exercise.exercise}}</md-table-cell>
                      <md-table-cell>
                         <md-field>
                           <label>Sets</label>
                            <md-input v-model="updateSetsInput.setID[index]"></md-input>
                        </md-field>
                       </md-table-cell>
                       <md-table-cell>
                         <md-field>
                           <label>Reps</label>
                            <md-input v-model="updateRepsInput.repID[index]"></md-input>
                        </md-field>
                       </md-table-cell>
                       <md-table-cell>
                         
                          <md-button @click="addtoUpdatedWorkout(index, exercise.exercise)" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
                       
                       </md-table-cell>
                    </md-table-row>
              </md-table>
              <md-field v-if="editing">
                 <md-button @click="updateWorkout" class="md-block" :class="activeColor">Update Workout</md-button>
                <md-button @click="editing = false" class="md-simple md-just-icon"><md-icon class="goalBtn">cancel_presentation</md-icon><md-tooltip md-direction="bottom">Cancel Edit</md-tooltip></md-button>
            </md-field>
            </div>
            <div v-else-if="menuSelected == 2">
                 <md-table>
                    <md-table-row v-for="(exercise, index) in routineArray" :key="index">
                      <md-table-cell>{{exercise}}</md-table-cell>
                      <md-table-cell>
                        <md-button @click="removeExercise(exercise, index)"  class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button>
                       </md-table-cell>
                    </md-table-row>
                 </md-table>
                 <md-field>
                <label>Add Exercise</label>
                <md-input v-model="routineInput"></md-input>
                <md-button @click="addExercise" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
            </div>

            <div v-else-if="menuSelected == 3">
              <md-table>
                    <md-table-row v-for="(exercise, index) in routineArray" :key="index">
                      <md-table-cell>{{exercise}}</md-table-cell>
                      <md-table-cell>
                         <md-field>
                           <label>Sets</label>
                            <md-input v-model="setsInput.setID[index]"></md-input>
                        </md-field>
                       </md-table-cell>
                       <md-table-cell>
                         <md-field>
                           <label>Reps</label>
                            <md-input v-model="repsInput.repID[index]"></md-input>
                        </md-field>
                       </md-table-cell>
                       <md-table-cell>
                         
                          <md-button @click="addtoWorkout(index)" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
                       
                       </md-table-cell>
                    </md-table-row>
                 </md-table>
                 <md-button @click="completeWorkout" class="md-block" :class="activeColor">Complete Workout</md-button>
            </div>
          </md-card-content>
        </md-card>
        </div>
    </div>
 </div>
 
</template>

<script>
import db from '../firebase/firebaseInit'
import {StatsCard} from '../components'
import firebase from 'firebase'

export default {
    components: {
        StatsCard
    },
  data () {
    return {
      bg: "purple",
      editing: false,
      editIndex: null,
      activeColor: null,
      noColor: "md-default",
      menuSelected: 1,
      subMenuSelected: 1,
      totalWorkouts: null,
      lastWorkout: null,
      routineInput: "",
      updateObj: null,
      repsInput: {
        repID: []
      },
      setsInput: {
        setID: []
      },
      updateRepsInput: {
        repID: []
      },
      updateSetsInput: {
        setID: []
      },
      routineArray: [],
      workoutArray: [],
      currWorkout: [],
      updatedWorkout: []
    }
  },
  methods: {
    addtoWorkout(id) {
      if(this.setsInput.setID[id] == "" || this.repsInput.repID[id] == "" || isNaN(this.setsInput.setID[id])|| isNaN(this.repsInput.repID[id])){
        this.$notify({
            message: 'Make sure you eneted a value and it is a number',
            icon: 'error',
            horizontalAlign: 'center',
            verticalAlign: 'top',
            type: 'danger'
          });
      } else {
        if(this.currWorkout[id] != null || this.currWorkout[id] != "")
        {
          this.currWorkout.splice(id,1)
        }
        this.currWorkout.push({exercise: this.routineArray[id], sets: this.setsInput.setID[id], reps: this.repsInput.repID[id]})
    
        this.$notify({
            message: 'added',
            icon: 'add_circle',
            horizontalAlign: 'center',
            verticalAlign: 'top',
            type: 'success'
          });
        }
    },
     addtoUpdatedWorkout(id,exerciseName) {
      if(this.updateSetsInput.setID[id] == "" || this.updateRepsInput.repID[id] == "" || isNaN(this.updateSetsInput.setID[id])|| isNaN(this.updateRepsInput.repID[id])){
        this.$notify({
            message: 'Make sure you eneted a value and it is a number',
            icon: 'error',
            horizontalAlign: 'center',
            verticalAlign: 'top',
            type: 'danger'
          });
      } else {
        if(this.updatedWorkout[id] != null || this.updatedWorkout[id] != "")
        {
          this.updatedWorkout.splice(id,1)
        }

        this.updatedWorkout.push({exercise: exerciseName, sets: this.updateSetsInput.setID[id], reps: this.updateRepsInput.repID[id]})
        this.$notify({
            message: 'added',
            icon: 'add_circle',
            horizontalAlign: 'center',
            verticalAlign: 'top',
            type: 'success'
          });
        }
    },
     updateWorkout(){
        var docRef = db.collection('gym').doc(this.user.email);
      
        if(this.updatedWorkout != null && this.updatedWorkout != 0){
          docRef.update({
              workoutList: firebase.firestore.FieldValue.arrayRemove(this.updateObj)
            });
         docRef.update({
          workoutList: firebase.firestore.FieldValue.arrayUnion({date: this.newDate, exercises: this.updatedWorkout})
        });
        this.workoutArray.splice(this.editIndex, 1);
        this.workoutArray.push({date: this.newDate, exercises: this.updatedWorkout});
        this.$notify({
            message: 'added',
            icon: 'add_circle',
            horizontalAlign: 'center',
            verticalAlign: 'top',
            type: 'success'
          });
          this.editing = false;
          this.editIndex = null
          this.updateObj = null
      } else {
        this.$notify({
            message: 'Make sure you added to the workout',
            icon: 'error',
            horizontalAlign: 'center',
            verticalAlign: 'top',
            type: 'danger'
          });
      }
    },
    completeWorkout(){
       var docRef = db.collection('gym').doc(this.user.email);
       console.log(this.currWorkout)
      if(this.currWorkout != null && this.currWorkout.length != 0){
         docRef.update({
          workoutList: firebase.firestore.FieldValue.arrayUnion({date: this.newDate, exercises: this.currWorkout})
        });
        this.workoutArray.push({date: this.newDate, exercises: this.currWorkout});
        this.currWorkout = null
        this.$notify({
            message: 'added',
            icon: 'add_circle',
            horizontalAlign: 'center',
            verticalAlign: 'top',
            type: 'success'
          }); 
      } else {
        this.$notify({
            message: 'Make sure you added to the workout',
            icon: 'error',
            horizontalAlign: 'center',
            verticalAlign: 'top',
            type: 'danger'
          });
      }
    },
    addExercise() {
      var docRef = db.collection('gym').doc(this.user.email);

      var error = false

      if(this.routineArray.length >= 0){
        for(var i = 0; i < this.routineArray.length; i++)
        {
          if(this.routineArray[i] == this.routineInput)
          {
            error = true;
            this.$notify({
              message: "You already added that exercise",
              icon: 'error',
              horizontalAlign: 'center',
              verticalAlign: 'top',
              type: 'danger'
            });
          }
        }
      }
      if(this.routineInput != "" && error != true)
      {
        docRef.update({
          routineList: firebase.firestore.FieldValue.arrayUnion(this.routineInput)
        });
        this.routineArray.push(this.routineInput);
        this.routineInput = "";
      } else {
        if(this.routineInput === "")
        {
          this.$notify({
            message: 'Make sure you entered a value!',
            icon: 'error',
            horizontalAlign: 'center',
            verticalAlign: 'top',
            type: 'danger'
          });
        }
        this.routineInput = "";
      }
    },
    removeExercise(value, index){
       var confirmed = confirm("Are you sure you want to remove this?")
        if (confirmed == true)
        {
            var docRef = db.collection('gym').doc(this.user.email);
            docRef.update({
              routineList: firebase.firestore.FieldValue.arrayRemove(value)
            });
            this.routineArray.splice(index, 1);
          }
    },
    removeWorkout(value, index){
      var confirmed = confirm("Are you sure you want to remove this?")
        if (confirmed == true)
        {
            var docRef = db.collection('gym').doc(this.user.email);
            docRef.update({
              workoutList: firebase.firestore.FieldValue.arrayRemove(value)
            });
            this.workoutArray.splice(index, 1);
          }
    },
    edit(index,obj) {
      for(var i = 0 ; i < obj.exercises.length; i++)
      {
        this.updateSetsInput.setID[i] = obj.exercises[i].sets;
        this.updateRepsInput.repID[i] = obj.exercises[i].reps;
      }
      this.editing = true
      this.editIndex = index
      this.updateObj = obj
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    newDate () {
      let currentDate = new Date();
       let newDate = ""
       newDate += ((currentDate.getMonth() + 1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear()); 
       return newDate;
    },
  },  
  created () {
    var self = this

    var docRef = db.collection("settings").doc(this.user.email);
    var gymRef = db.collection("gym").doc(this.user.email);

    docRef.get().then(function(doc) {
    if (doc.exists) {
        if(doc.data().Color == 1){
            self.bg = "purple"
            self.activeColor= "md-primary"
        }else if(doc.data().Color == 2){
            self.bg = "blue"
            self.activeColor= "md-info"
        }else if(doc.data().Color == 3){
            self.bg = "green"
            self.activeColor= "md-success"
        }else if(doc.data().Color == 4){
            self.bg = "orange"
            self.activeColor= "md-warning"
        }else{
            self.bg = "red"
            self.activeColor= "md-danger"
        }
    } else {
        docRef.set({
          Img: 1,
          color: 1
      }, { merge: true });
    }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
    
    gymRef.get().then(function(doc) {
    if (doc.exists) {
        for(var i = 0; i < doc.data().routineList.length; i++)
        {
            self.routineArray.push(doc.data().routineList[i]);
        }
        for(i = 0; i < doc.data().workoutList.length; i++)
        {
            self.workoutArray.push(doc.data().workoutList[i]);
        }  
    } else {
        gymRef.set({
            routineList: [],
            workoutList: []
      }, { merge: true });
    }
    }).catch(function(error) {
      console.log("Error getting values:", error);
    });
  }
};
</script>

<style lang="scss" scoped>
.gridParent{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: "morning afternoon evening night"
                        "editBtn editBtn editBtn editBtn";
}

.gridMorning{
  grid-area: morning;
}

.gridAfternoon{
  grid-area: afternoon;
}

.gridEvening{
  grid-area: evening;
}

.gridNight{
  grid-area: night;
}

.gridEdit{
  grid-area: editBtn;
}

.gridBorder{
  border: lightgrey solid .5px;
}

.btnGroup{
  display:flex;
  justify-content: space-around;
  color: white;
  padding: 10px 20px;;
}

.btnGroup:hover {
    background-color: white;
    color: black;
    border-radius: 25px;
}
.activeBtn{
  border-radius: 25px;
  background-color:rgba(50, 50, 50, 0.8);
}
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

.mainBtn:hover {
    transform: scale(1.3);
}
</style>
