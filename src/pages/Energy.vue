<template>
 <div class="content">
     
    <div class="md-layout md-alignment-center">
        <div class="md-layout-item md-size-30 md-xsmall-size-50">
            <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Today's Sleep</p>
                    <h3 class="title">x</h3>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-size-30 md-xsmall-size-50">
            <stats-card data-background-color="green">
                <template slot="header">
                    <md-icon >assignment_turned_in</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Today's Average Energy</p>
                    <h3 class="title">x</h3>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-size-30 md-xsmall-size-100">
            <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Tracking Streak</p>
                    <h3 class="title">x</h3>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-size-50 md-xsmall-size-100">
            <chart-card
                :chart-data="dailySalesChart.data"
                :chart-options="dailySalesChart.options"
                chart-type="Line"
                :data-background-color="bg">

                <template slot="content">
                    <h4 class="title">Daily Sales</h4>
                    <p class="category">
                        <span class="text-success"><i class="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.
                    </p>
                </template>

                <template slot="footer">
                    <div class="stats">
                        <md-icon>access_time</md-icon>
                        updated 4 minutes ago
                    </div>
                </template>
            </chart-card>
        </div>
        <div class="md-layout-item md-size-50 md-xsmall-size-100">
            <chart-card
                :chart-data="dailySalesChart.data"
                :chart-options="dailySalesChart.options"
                chart-type="Line"
                :data-background-color="bg">

                <template slot="content">
                    <h4 class="title">Daily Sales</h4>
                    <p class="category">
                        <span class="text-success"><i class="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.
                    </p>
                </template>

                <template slot="footer">
                    <div class="stats">
                        <md-icon>access_time</md-icon>
                        updated 4 minutes ago
                    </div>
                </template>
            </chart-card>
        </div>
        <div class="md-layout-item md-size-100">
        <md-card>
          <md-card-header :data-background-color="bg">
            <h3 class="title" style="border-bottom: solid 1px white">Sleep and Energy Levels</h3>
          </md-card-header>

          <md-card-content>
            <md-table>
               <md-table-row>
                 <md-table-cell>
                   <md-button @click="menuSelected = 1" class="md-round" :class="[menuSelected == 1 ? activeColor: '']">All-Time</md-button>
               <md-button @click="menuSelected = 2" class="md-round" :class="[menuSelected == 2 ? activeColor: '']">Weekly</md-button>
              <md-button @click="menuSelected = 3" class="md-round" :class="[menuSelected == 3 ? activeColor: '']">Add</md-button>
                 </md-table-cell>
               </md-table-row>
             </md-table>
            
            <div v-if="menuSelected == 1">
              <md-table>
               <md-table-row>
                 <md-table-cell>
               <md-button @click="subMenuSelected = 1" class="md-round" :class="[subMenuSelected == 1 ? activeColor: '']">Sleep</md-button>
               <md-button @click="subMenuSelected = 2" class="md-round" :class="[subMenuSelected == 2 ? activeColor: '']">Energy</md-button>
                 </md-table-cell>
               </md-table-row>
             </md-table>
              

            <md-table v-if="subMenuSelected == 1">
              <md-table-row  v-for="value in sleep" :key="value.date">
                    <md-table-cell>{{value.date}} Sleep Duration: {{value.hours}}</md-table-cell>
              </md-table-row>
            </md-table>

            <div class="gridParent">
              <div class="gridMorning"  v-if="subMenuSelected == 2" >
                <md-table>
                <md-table-row>
                  <md-table-cell class="gridBorder">Morning Energy</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="energy in morningEnergy" :key="energy.date">
                      <md-table-cell class="gridBorder">{{energy.date}} Level: {{energy.energy}}</md-table-cell>
                </md-table-row>
              </md-table>
              </div>

              <div class="gridAfternoon" v-if="subMenuSelected == 2">
                <md-table>
                  <md-table-row>
                  <md-table-cell class="gridBorder">Afternoon Energy</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="energy in afternoonEnergy" :key="energy.date">
                  <md-table-cell class="gridBorder">{{energy.date}} Level: {{energy.energy}}</md-table-cell>
                </md-table-row>
              </md-table>
              </div>

              <div class="gridEvening" v-if="subMenuSelected == 2">
                <md-table  >
                  <md-table-row>
                  <md-table-cell class="gridBorder">Evening Energy</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="energy in eveningEnergy" :key="energy.date">
                  <md-table-cell>{{energy.date}} Level: {{energy.energy}}</md-table-cell>
                </md-table-row>
             </md-table>
              </div>

              <div class="gridNight" v-if="subMenuSelected == 2">
                <md-table  >
                  <md-table-row>
                  <md-table-cell class="gridBorder">Night Energy</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="energy in nightEnergy" :key="energy.date">
                  <md-table-cell class="gridBorder">{{energy.date}} Level: {{energy.energy}}</md-table-cell>
                </md-table-row>
              </md-table>
              </div>
            </div>
      
            </div>
            <div v-else-if="menuSelected == 2">
               <md-table>
               <md-table-row>
                 <md-table-cell>
               <md-button @click="subMenuSelected = 1" class="md-round" :class="[subMenuSelected == 1 ? activeColor: '']">Sleep</md-button>
               <md-button @click="subMenuSelected = 2" class="md-round" :class="[subMenuSelected == 2 ? activeColor: '']">Energy</md-button>
                 </md-table-cell>
               </md-table-row>
             </md-table>
            </div>
            <div v-else-if="menuSelected == 3">
              <md-field>
                <label>Add Sleep</label>
                <md-input v-model="sleepInput"></md-input>
                <md-button @click="add(0)" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
              <md-field>
                <label>Add Morning Energy</label>
                <md-input ></md-input>
                <md-button  class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
              <md-field>
                <label>Add Afternoon Energy</label>
                <md-input ></md-input>
                <md-button  class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
              <md-field>
                <label>Add Evening Energy</label>
                <md-input ></md-input>
                <md-button  class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
              <md-field>
                <label>Add Night Energy</label>
                <md-input ></md-input>
                <md-button  class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
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
import {ChartCard} from '../components/'
import firebase from 'firebase'

export default {
    components: {
        StatsCard,
        ChartCard
    },
  data () {
    return {
      bg: "purple",
      picked: "",
      activeColor: null,
      noColor: "md-default",
      menuSelected: 1,
      subMenuSelected: 1,
      streak: "",
      sleepInput: "",
      sleep: [
      
      ],
      morningEnergy: [
      
      ],
      afternoonEnergy: [

      ],
      eveningEnergy: [

      ],
      nightEnergy: [

      ],
      dailySalesChart: {
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
            [12, 17, 7, 17, 23, 18, 38]
          ]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      }
    }
  },
  methods: {
    add(id){
       let currentDate = new Date();
       let newDate = ""
       newDate += ((currentDate.getMonth() + 1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear()); 
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
    var sleepRef = db.collection("sleep").doc(this.user.email);

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

    sleepRef.get().then(function(doc) {
    if (doc.exists) {
        for(var i = 0; i < doc.data().sleepList.length; i++)
        {
            self.sleep.push({date: doc.data().sleepList[i].date, hours: doc.data().sleepList[i].hours});
        }
        for(i = 0; i < doc.data().morningList.length; i++)
        {
            self.morningEnergy.push(doc.data().morningList[i]);
        }
        for(i = 0; i < doc.data().afternoonList.length; i++)
        {
            self.afternoonEnergy.push(doc.data().afternoonList[i]);
        }
        for(i = 0; i < doc.data().eveningList.length; i++)
        {
            self.eveningEnergy.push(doc.data().eveningList[i]);
        }
        for(i = 0; i < doc.data().nightList.length; i++)
        {
            self.nightEnergy.push(doc.data().nightList[i]);
        }
         self.streak = doc.data().streak;
    } else {
        sleepRef.set({
            streak: 0,
            sleepList: [{
              hours: 0,
              date: "Default"
            }],
            morningList: [{
              energy: 0,
              date: "Default"
            }],
            afternoonList: [{
              energy: null,
              date: null
            }],
            eveningList: [{
              energy: null,
              date: null
            }],
            nightList: [{
              energy: null,
              date: null
            }],
      }, { merge: true });
    }
    }).catch(function(error) {
      console.log("Error getting Goals:", error);
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
