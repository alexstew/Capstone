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
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
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
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
            <stats-card data-background-color="bluenp">
                <template slot="header">
                    <md-icon >assignment_turned_in</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Food/Water Items Tracked</p>
                    <h3 class="title">{{daysTracked}}</h3>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
             <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Calories</p>
                    <h3 class="title">{{todayCalories}}</h3>
                </template>

                
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
            <stats-card data-background-color="green">
                <template slot="header">
                    <md-icon >local_pizza</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Carbs</p>
                    <h3 class="title">{{todayCarbs}}</h3>
                </template>

                
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
            <stats-card data-background-color="blue">
                <template slot="header">
                    <md-icon >fitness_center</md-icon>
                </template>

                <template slot="content">
                    <p class="category">protein</p>
                    <h3 class="title">{{todayProtien}}</h3>
                </template>

               
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
            <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >fastfood</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Fat</p>
                    <h3 class="title">{{todayFat}}</h3>
                </template>

               
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
            <stats-card data-background-color="green">
                <template slot="header">
                    <md-icon >opacity</md-icon>
                </template>

                <template slot="content">
                    <p class="category">water</p>
                    <h3 class="title">{{todayWater}}</h3>
                </template>

               
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
            <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Sleep / Energy Items tracked</p>
                    <h3 class="title">{{daysTracked3}}</h3>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
            <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Today's Sleep</p>
                    <h3 class="title">{{todaySleep}}</h3>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
            <stats-card data-background-color="green">
                <template slot="header">
                    <md-icon >assignment_turned_in</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Today's Highest Energy</p>
                    <h3 class="title">{{todayEnergy}}</h3>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
            <stats-card data-background-color="blue">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Measurements Tracked</p>
                    <h3 class="title">{{daysTracked2}}</h3>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
             <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >assignment_turned_in</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Bodyweight</p>
                    <h3 class="title">{{todayBodyweight}}</h3>
                </template>

                
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
            <stats-card data-background-color="green">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Chest Size</p>
                    <h3 class="title">{{todayChest}}</h3>
                </template>

                
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
            <stats-card data-background-color="blue">
                <template slot="header">
                    <md-icon >assignment_turned_in</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Waist Size</p>
                    <h3 class="title">{{todayWaist}}</h3>
                </template>

               
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
            <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Quad Size</p>
                    <h3 class="title">{{todayQuad}}</h3>
                </template>

               
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
            <stats-card data-background-color="green">
                <template slot="header">
                    <md-icon >assignment_turned_in</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Arm Size</p>
                    <h3 class="title">{{todayArm}}</h3>
                </template>

               
            </stats-card>
        </div>
        
     </div>
 </div>
 
</template>

<script>
import db from '../firebase/firebaseInit'
import {StatsCard} from '../components'

export default {
    components: {
        StatsCard,
    },
  data () {
    return {
        completedGoals: null,
        currentGoals: null,
        workoutArray: [],
        daysTracked: 0,
        todayCalories:"N/A",
        todayCarbs:"N/A",
        todayProtien:"N/A",
        todayFat:"N/A",
        todayWater:"N/A",
        todaySleep: "N/A",
        todayEnergy: "N/A",
        daysTracked2: 0,
        daysTracked3: 0,
        todayBodyweight:"N/A",
        todayChest:"N/A",
        todayWaist:"N/A",
        todayQuad:"N/A",
        todayArm:"N/A",
        bodyweightArray: [],
        chestArray: [],
        waistArray: [],
        quadArray: [],
        armArray: [],
        waterArray: [],
        protienArray: [],
        carbsArray: [],
        fatArray: [],
        caloriesArray: [],
        sleep: [],
        morningEnergy: [],
        afternoonEnergy: [],
        eveningEnergy: [],
        nightEnergy: [],
        
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    var self = this

    var goalRef = db.collection("goals").doc(this.user.email);
    var gymRef = db.collection("gym").doc(this.user.email);
    var trackingRef = db.collection("tracking").doc(this.user.email);
    var sleepRef = db.collection("sleep").doc(this.user.email);
    var measurementRef = db.collection("measurements").doc(this.user.email);

    goalRef.get().then(function(doc) {
    if (doc.exists) {
         self.currentGoals = doc.data().goalList.length;
         self.completedGoals = doc.data().completedGoals;
    } else {
        goalRef.set({
            completedGoals: 0,
            goalList: [],
      }, { merge: true });
    }
    }).catch(function(error) {
      console.log("Error getting Goals:", error);
    });

    gymRef.get().then(function(doc) {
    if (doc.exists) {
        for(var i = 0; i < doc.data().workoutList.length; i++)
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

    trackingRef.get().then(function(doc) {
    if (doc.exists) {
        for(var i = 0; i < doc.data().waterList.length; i++)
        {
            self.waterArray.push(doc.data().waterList[i]);
             self.daysTracked ++;
            if(doc.data().waterList[i].date == self.newDate){
              self.todayWater = doc.data().waterList[i].amount;
            }
        }
        for(i = 0; i < doc.data().proteinList.length; i++)
        {
            self.protienArray.push(doc.data().proteinList[i]);
             self.daysTracked ++;
            if(doc.data().proteinList[i].date == self.newDate){
              self.todayProtien = doc.data().proteinList[i].amount;
            }
        }
        for(i = 0; i < doc.data().carbsList.length; i++)
        {
            self.carbsArray.push(doc.data().carbsList[i]);
             self.daysTracked ++;
            if(doc.data().carbsList[i].date == self.newDate){
              self.todayCarbs = doc.data().carbsList[i].amount;
            }
        }
        for(i = 0; i < doc.data().fatList.length; i++)
        {
            self.fatArray.push(doc.data().fatList[i]);
             self.daysTracked ++;
            if(doc.data().fatList[i].date == self.newDate){
              self.todayFat = doc.data().fatList[i].amount;
            }
        }
        for(i = 0; i < doc.data().caloriesList.length; i++)
        {
            self.caloriesArray.push(doc.data().caloriesList[i]);
            self.daysTracked ++;
            if(doc.data().caloriesList[i].date == self.newDate){
              self.todayCalories = doc.data().caloriesList[i].amount;
            }
        }
         self.streak = doc.data().streak;
         
         
    } else {
        trackingRef.set({
            streak: 0,
            waterList: [],
            proteinList: [],
            carbsList: [],
            fatList: [],
            caloriesList: [],
      }, { merge: true });
    }
    }).catch(function(error) {
      console.log("Error getting values:", error);
    });

     sleepRef.get().then(function(doc) {
    if (doc.exists) {
        for(var i = 0; i < doc.data().sleepList.length; i++)
        {
            self.sleep.push(doc.data().sleepList[i]);
            if(doc.data().sleepList[i].date == self.newDate){
              self.todaySleep = doc.data().sleepList[i].hours;
              self.daysTracked3 ++;
            }
        }
        for(i = 0; i < doc.data().morningList.length; i++)
        {
            self.morningEnergy.push(doc.data().morningList[i]);
            if(doc.data().morningList[i].date == self.newDate){
              if(Number(doc.data().morningList[i].energy)-1 > Number(self.todayEnergy)-1 || isNaN(self.todayEnergy)){
                self.todayEnergy = doc.data().morningList[i].energy;
                }
            }
            self.daysTracked3 ++;
        }
        for(i = 0; i < doc.data().afternoonList.length; i++)
        {
            self.afternoonEnergy.push(doc.data().afternoonList[i]);
            if(doc.data().afternoonList[i].date == self.newDate){
              if(Number(doc.data().afternoonList[i].energy)-1 > Number(self.todayEnergy)-1 || isNaN(self.todayEnergy)){
                self.todayEnergy = doc.data().afternoonList[i].energy;
                }
            }
            self.daysTracked3 ++;
        }
        for(i = 0; i < doc.data().eveningList.length; i++)
        {
            self.eveningEnergy.push(doc.data().eveningList[i]);
            if(doc.data().eveningList[i].date == self.newDate){
              if(Number(doc.data().eveningList[i].energy)-1 > Number(self.todayEnergy)-1 || isNaN(self.todayEnergy)){
                self.todayEnergy = doc.data().eveningList[i].energy;
                }
            }
            self.daysTracked3 ++;
        }
        for(i = 0; i < doc.data().nightList.length; i++)
        {
            self.nightEnergy.push(doc.data().nightList[i]);
            if(doc.data().nightList[i].date == self.newDate){
              if(Number(doc.data().nightList[i].energy)-1 > Number(self.todayEnergy)-1 || isNaN(self.todayEnergy)){
                self.todayEnergy = doc.data().nightList[i].energy;
                }
            }
            self.daysTracked3 ++;
        }
         self.streak = doc.data().streak;
         
         
    } else {
        sleepRef.set({
            streak: 0,
            sleepList: [],
            morningList: [],
            afternoonList: [],
            eveningList: [],
            nightList: [],
      }, { merge: true });
    }
    }).catch(function(error) {
      console.log("Error getting values:", error);
    });

    measurementRef.get().then(function(doc) {
    if (doc.exists) {
        for(var i = 0; i < doc.data().bodyweightList.length; i++)
        {
            self.bodyweightArray.push(doc.data().bodyweightList[i]);
             self.daysTracked2 ++;
            if(doc.data().bodyweightList[i].date == self.newDate){
              self.Bodyweight = doc.data().bodyweightList[i].amount;
            }
        }
        for(i = 0; i < doc.data().chestList.length; i++)
        {
            self.chestArray.push(doc.data().chestList[i]);
             self.daysTracked2 ++;
            if(doc.data().chestList[i].date == self.newDate){
              self.todayChest = doc.data().chestList[i].amount;
            }
        }
        for(i = 0; i < doc.data().waistList.length; i++)
        {
            self.waistArray.push(doc.data().waistList[i]);
             self.daysTracked2 ++;
            if(doc.data().waistList[i].date == self.newDate){
              self.todayWaist = doc.data().waistList[i].amount;
            }
        }
        for(i = 0; i < doc.data().quadList.length; i++)
        {
            self.quadArray.push(doc.data().quadList[i]);
             self.daysTracked2 ++;
            if(doc.data().quadList[i].date == self.newDate){
              self.todayQuad = doc.data().quadList[i].amount;
            }
        }
        for(i = 0; i < doc.data().armList.length; i++)
        {
            self.armArray.push(doc.data().armList[i]);
            self.daysTracked2 ++;
            if(doc.data().armList[i].date == self.newDate){
              self.todayArm = doc.data().armList[i].amount;
            }
        }
         
         
    } else {
        measurementRef.set({
            streak: 0,
            bodyweightList: [],
            chestList: [],
            waistList: [],
            quadList: [],
            armList: [],
      }, { merge: true });
    }
    }).catch(function(error) {
      console.log("Error getting values:", error);
    });
  }
};
</script>

<style lang="scss" scoped>
.dropdown {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.hide{
    display: none;
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
