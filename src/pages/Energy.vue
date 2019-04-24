<template>
 <div class="content">
     
    <div class="md-layout md-alignment-center">
        
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
              <md-table-row  v-for="(value,index) in sleep" :key="value.date">
                    <md-table-cell>{{value.date}} Sleep Duration: {{value.hours}} Hours</md-table-cell>
                    <md-table-cell>
                        <md-button @click="edit(value.hours, index,'sleepList', 'sleep', 'hours',value)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('sleepList','sleep',value,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button>
                    </md-table-cell>
              </md-table-row>
            </md-table>

            <div class="gridParent">
              <div class="gridMorning"  v-if="subMenuSelected == 2" >
                <md-table>
                <md-table-row>
                  <md-table-cell class="gridBorder">Morning Energy</md-table-cell>
                  <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(energy,index) in morningEnergy" :key="energy.date">
                      <md-table-cell class="gridBorder">{{energy.date}} Level: {{energy.energy}}
                      </md-table-cell>
                      <md-table-cell class="gridBorder"><md-button @click="edit(energy.energy, index,'morningList', 'morningEnergy', 'energy', energy)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('morningList','morningEnergy',energy,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
              </md-table>
              </div>

              <div class="gridAfternoon" v-if="subMenuSelected == 2">
                <md-table>
                  <md-table-row>
                  <md-table-cell class="gridBorder">Afternoon Energy</md-table-cell>
                  <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(energy,index) in afternoonEnergy" :key="energy.date">
                  <md-table-cell class="gridBorder">{{energy.date}} Level: {{energy.energy}}</md-table-cell>
                  <md-table-cell class="gridBorder"><md-button @click="edit(energy.energy, index,'afternoonList', 'afternoonEnergy', 'energy', energy)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('afternoonList','afternoonEnergy',energy,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
              </md-table>
              </div>

              <div class="gridEvening" v-if="subMenuSelected == 2">
                <md-table  >
                  <md-table-row>
                  <md-table-cell class="gridBorder">Evening Energy</md-table-cell>
                  <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(energy,index) in eveningEnergy" :key="energy.date">
                  <md-table-cell class="gridBorder">{{energy.date}} Level: {{energy.energy}}</md-table-cell>
                  <md-table-cell class="gridBorder"><md-button @click="edit(energy.energy, index,'eveningList', 'eveningEnergy', 'energy', energy)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('eveningList','eveningEnergy',energy,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
             </md-table>
              </div>

              <div class="gridNight" v-if="subMenuSelected == 2">
                <md-table  >
                  <md-table-row>
                  <md-table-cell class="gridBorder">Night Energy</md-table-cell>
                  <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(energy,index) in nightEnergy" :key="energy.date">
                  <md-table-cell class="gridBorder">{{energy.date}} Level: {{energy.energy}}</md-table-cell>
                  <md-table-cell class="gridBorder"><md-button @click="edit(energy.energy, index,'nightList', 'nightEnergy', 'energy', energy)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('nightList','nightEnergy',energy,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
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
              

            <md-table v-if="subMenuSelected == 1">
              <md-table-row  v-for="(value,index) in sleep.slice(0,7)" :key="value.date">
                    <md-table-cell>{{value.date}} Sleep Duration: {{value.hours}} Hours</md-table-cell>
                     <md-table-cell>
                        <md-button @click="edit(value.hours, index,'sleepList', 'sleep', 'hours', value)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('sleepList','sleep',value,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button>
                    </md-table-cell>
              </md-table-row>
            </md-table>

            <div class="gridParent">
              <div class="gridMorning"  v-if="subMenuSelected == 2" >
                <md-table>
                <md-table-row>
                  <md-table-cell class="gridBorder">Morning Energy</md-table-cell>
                   <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(energy,index) in morningEnergy.slice(0,7)" :key="energy.date">
                      <md-table-cell class="gridBorder">{{energy.date}} Level: {{energy.energy}}</md-table-cell>
                       <md-table-cell class="gridBorder"><md-button @click="edit(energy.energy, index,'morningList', 'morningEnergy', 'energy', energy)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('morningList','morningEnergy',energy,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
              </md-table>
              </div>

              <div class="gridAfternoon" v-if="subMenuSelected == 2">
                <md-table>
                  <md-table-row>
                  <md-table-cell class="gridBorder">Afternoon Energy</md-table-cell>
                   <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(energy,index) in afternoonEnergy.slice(0,7)" :key="energy.date">
                  <md-table-cell class="gridBorder">{{energy.date}} Level: {{energy.energy}}</md-table-cell>
                   <md-table-cell class="gridBorder"><md-button @click="edit(energy.energy, index,'afternoonList', 'afternoonEnergy', 'energy', energy)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('afternoonList','afternoonEnergy',energy,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
              </md-table>
              </div>

              <div class="gridEvening" v-if="subMenuSelected == 2">
                <md-table  >
                  <md-table-row>
                  <md-table-cell class="gridBorder">Evening Energy</md-table-cell>
                   <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(energy,index) in eveningEnergy.slice(0,7)" :key="energy.date">
                  <md-table-cell class="gridBorder">{{energy.date}} Level: {{energy.energy}}</md-table-cell>
                   <md-table-cell class="gridBorder"><md-button @click="edit(energy.energy, index,'eveningList', 'eveningEnergy', 'energy', energy)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('eveningList','eveningEnergy',energy,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
             </md-table>
              </div>

              <div class="gridNight" v-if="subMenuSelected == 2">
                <md-table  >
                  <md-table-row>
                  <md-table-cell class="gridBorder">Night Energy</md-table-cell>
                   <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(energy, index) in nightEnergy.slice(0,7)" :key="energy.date">
                  <md-table-cell class="gridBorder">{{energy.date}} Level: {{energy.energy}}</md-table-cell>
                   <md-table-cell class="gridBorder"><md-button @click="edit(energy.energy, index,'nightList', 'nightEnergy', 'energy', energy)" class="md-just-icon md-simple md-warning goalBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('nightList','nightEnergy',energy, index)" class="md-just-icon md-simple md-danger goalBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
              </md-table>
              </div>
            </div>
            </div>

            <div v-else-if="menuSelected == 3">
              <md-field>
                <label>Add Sleep</label>
                <md-input v-model="sleepInput"></md-input>
                <md-button @click="add('sleepInput','sleep','sleepList','hours')" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
              <md-field>
                <label>Add Morning Energy</label>
                <md-input v-model="morningInput"></md-input>
                <md-button @click="add('morningInput','morningEnergy','morningList','energy')" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
              <md-field>
                <label>Add Afternoon Energy</label>
                <md-input v-model="afternoonInput"></md-input>
                <md-button @click="add('afternoonInput','afternoonEnergy','afternoonList','energy')" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
              <md-field>
                <label>Add Evening Energy</label>
                <md-input v-model="eveningInput"></md-input>
                <md-button @click="add('eveningInput','eveningEnergy','eveningList','energy')" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
              <md-field>
                <label>Add Night Energy</label>
                <md-input v-model="nightInput"></md-input>
                <md-button @click="add('nightInput','nightEnergy','nightList','energy')" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
            </div>
            <md-field v-if="editing">
                <label>Edit Goal!</label>
                <md-input v-model="editedValue"></md-input>
                <md-button @click="update()" class="md-simple md-just-icon"><md-icon class="goalBtn">check_circle</md-icon><md-tooltip md-direction="bottom">Submit Change</md-tooltip></md-button>
                <md-button @click="editing = false" class="md-simple md-just-icon"><md-icon class="goalBtn">cancel_presentation</md-icon><md-tooltip md-direction="bottom">Cancel Edit</md-tooltip></md-button>
            </md-field>
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
      test1: 0,
      test2: 1,
      picked: "", 
      editing: false,
      editedValue: "",
      lastValue: "",
      lastDate: null,
      editingArray: null,
      editingType: null,
      editingList: null,
      currentIndex: null,
      activeColor: null,
      noColor: "md-default",
      menuSelected: 1,
      subMenuSelected: 1,
      streak: "",
      sleepInput: "",
      morningInput: "",
      afternoonInput: "",
      eveningInput: "",
      nightInput: "",
      todaySleep: "N/A",
      todayEnergy: "N/A",
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
    }
  },
  methods: {
    add(input,array, list, type){
    
      var docRef = db.collection('sleep').doc(this.user.email);
      var error = false
      if(this[array].length >= 0){
        for(var i = 0; i < this[array].length; i++)
        {
          if(this.newDate == this[array][i].date)
          {
            error = true;
            this.$notify({
              message: "Make sure the you didn't add today, you can update existing dates!",
              icon: 'error',
              horizontalAlign: 'center',
              verticalAlign: 'top',
              type: 'danger'
            });
          }
        }
      }
      if([type] == "energy" && (this[input] < 0 || this[input] > 10))
      {
        error = true;
        this.$notify({
            message: 'Make sure the value is between 1 and 10!',
            icon: 'error',
            horizontalAlign: 'center',
            verticalAlign: 'top',
            type: 'danger'
          });
      }
      if([type] == "hours" && this[input] < 0 || this[input] > 24)
      {
        error = true;
        this.$notify({
            message: 'Make sure the value is between 1 and 24!',
            icon: 'error',
            horizontalAlign: 'center',
            verticalAlign: 'top',
            type: 'danger'
          });
      }
      if(this[input] != "" && error == false && !isNaN(this[input]))
      {
        docRef.update({
          [list]: firebase.firestore.FieldValue.arrayUnion({date: this.newDate, [type]: this[input]})
        });
        this[array].push({date: this.newDate,[type]: this[input]});
        if(type == "hours"){
         this.todaySleep = this[input]
        }
        if(type != "hours"){
          if(Number(this[input])-1 > Number(this.todayEnergy)-1){
            this.todayEnergy = this[input]
          }
        }
        this[input] = "";
      } else {
        if(this[input] == "")
        {
          this.$notify({
            message: 'Make sure you entered a value!',
            icon: 'error',
            horizontalAlign: 'center',
            verticalAlign: 'top',
            type: 'danger'
          });
        } else if(isNaN(this[input])) {
            this.$notify({
              message: 'Make sure you entered a number!',
              icon: 'error',
              horizontalAlign: 'center',
              verticalAlign: 'top',
              type: 'danger'
            });
        }
          this[input] = "";
      }
    },
    remove (array1,array2, value, index){
        var confirmed = confirm("Are you sure you want to remove this?")
        if (confirmed == true)
        {
            var docRef = db.collection('sleep').doc(this.user.email);
            docRef.update({
              [array1]: firebase.firestore.FieldValue.arrayRemove(value)
            });
            this[array2].splice(index, 1);
      
        if([array1] == "sleepList" && value.date == this.newDate){
          this.todaySleep = "N/A"
        } 
        if([array1] != "sleepList" && value.date == this.newDate){
          if(value.energy == this.todayEnergy){
            this.todayEnergy = "N/A"
            for(var i =0; i < this.morningEnergy.length; i++){
              if(this.todayEnergy == "N/A" && this.morningEnergy[i].date == this.newDate){
                this.todayEnergy = this.morningEnergy[i].energy;
              } else if(this.morningEnergy[i].date == this.newDate && Number(this.morningEnergy[i].energy)-1 > Number(this.todayEnergy)-1){
                this.todayEnergy = this.morningEnergy[i].energy;
              }
            }
            for( i =0; i < this.afternoonEnergy.length; i++){
              if(this.todayEnergy == "N/A" && this.afternoonEnergy[i].date == this.newDate){
                this.todayEnergy = this.afternoonEnergy[i].energy;
              } else if(this.afternoonEnergy[i].date == this.newDate && Number(this.afternoonEnergy[i].energy)-1 > Number(this.todayEnergy)-1){
                this.todayEnergy = this.afternoonEnergy[i].energy;
              }
            }
            for( i =0; i < this.eveningEnergy.length; i++){
              if(this.todayEnergy == "N/A" && this.eveningEnergy[i].date == this.newDate){
                this.todayEnergy = this.eveningEnergy[i].energy;
              } else if(this.eveningEnergy[i].date == this.newDate && Number(this.eveningEnergy[i].energy)-1 > Number(this.todayEnergy)-1){
                this.todayEnergy = this.eveningEnergy[i].energy;
              }
            }
            for( i =0; i < this.nightEnergy.length; i++){
              if(this.todayEnergy == "N/A" && this.nightEnergy[i].date == this.newDate){
                this.todayEnergy = this.nightEnergy[i].energy;
              } else if(this.nightEnergy[i].date == this.newDate && Number(this.nightEnergy[i].energy)-1 > Number(this.todayEnergy)-1){
                this.todayEnergy = this.nightEnergy[i].energy;
              }
            }
          }
        }
          }
      },
      edit(value, index, list, array, type, object) {
          this.editing = true
          this.editedValue = value
          this.lastValue = object
          this.currentIndex = index
          this.editingArray = array
          this.editingList = list
          this.editingType = type
          this.lastDate = object.date
      },
      update(){
        var confirmed = confirm("Are you sure you want to update this?")
        if (confirmed == true)
        {
          if(this.editedValue != "" && !isNaN(this.editedValue))
          {
            this[this.editingArray].splice(this.currentIndex, 1);
            this[this.editingArray].push({date: this.lastDate, [this.editingType]: this.editedValue})
            var docRef = db.collection('sleep').doc(this.user.email);
            docRef.update({
              [this.editingList]: firebase.firestore.FieldValue.arrayRemove(this.lastValue)
            });
                    
            docRef.update({
              [this.editingList]: firebase.firestore.FieldValue.arrayUnion({date: this.lastDate, [this.editingType]: this.editedValue})
            });
            if(this.lastValue.date == this.newDate && this.editingType == "hours"){
              this.todaySleep = this.editedValue;
            }
            if(this.lastValue.date == this.newDate && this.editingType == "energy" && this.todayEnergy == this.lastValue.energy){
              if(Number(this.editedValue)-1 > Number(this.todayEnergy)-1){
                this.todayEnergy = this.editedValue
              } else {
                this.todayEnergy = "N/A"
                for(var i =0; i < this.morningEnergy.length; i++){
                   if(this.morningEnergy[i].date == this.newDate){
                     if(this.todayEnergy == "N/A")
                     {
                       this.todayEnergy = this.morningEnergy[i].energy;
                     } else if(Number(this.morningEnergy[i].energy)-1 > Number(this.todayEnergy)-1){
                       this.todayEnergy = this.morningEnergy[i].energy
                     }
                    
                  } 
                }
                for( i =0; i < this.afternoonEnergy.length; i++){
                   if(this.afternoonEnergy[i].date == this.newDate){
                     if(this.todayEnergy == "N/A")
                     {
                       this.todayEnergy = this.afternoonEnergy[i].energy;
                     } else if(Number(this.afternoonEnergy[i].energy)-1 > Number(this.todayEnergy)-1){
                       this.todayEnergy = this.afternoonEnergy[i].energy
                     }
                    
                  } 
                }
                for( i =0; i < this.eveningEnergy.length; i++){
                   if(this.eveningEnergy[i].date == this.newDate){
                     if(this.todayEnergy == "N/A")
                     {
                       this.todayEnergy = this.eveningEnergy[i].energy;
                     } else if(Number(this.eveningEnergy[i].energy)-1 > Number(this.todayEnergy)-1){
                       this.todayEnergy = this.eveningEnergy[i].energy
                     }
                    
                  } 
                }
                for( i =0; i < this.nightEnergy.length; i++){
                   if(this.nightEnergy[i].date == this.newDate){
                     if(this.todayEnergy == "N/A")
                     {
                       this.todayEnergy = this.nightEnergy[i].energy;
                     } else if(Number(this.nightEnergy[i].energy)-1 > Number(this.todayEnergy)-1){
                       this.todayEnergy = this.nightEnergy[i].energy
                     }
                    
                  } 
                }
              }
            } else {
              if(Number(this.editedValue)-1 > Number(this.todayEnergy)-1)
              {
                this.todayEnergy = this.editedValue;
              }
            }
            this.currentIndex = null
            this.editing = false;
          } else {
            if(this.editedValue == "")
            {
              this.$notify({
                message: 'Make sure you entered a value!',
                icon: 'error',
                horizontalAlign: 'center',
                verticalAlign: 'top',
                type: 'danger'
              });
           } else if(isNaN(this.editedValue)) {
              this.$notify({
                message: 'Make sure you entered a number!',
                icon: 'error',
                horizontalAlign: 'center',
                verticalAlign: 'top',
                type: 'danger'
               });
            }
            this.editedValue = "";
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
            self.sleep.push(doc.data().sleepList[i]);
            if(doc.data().sleepList[i].date == self.newDate){
              self.todaySleep = doc.data().sleepList[i].hours;
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
        }
        for(i = 0; i < doc.data().afternoonList.length; i++)
        {
            self.afternoonEnergy.push(doc.data().afternoonList[i]);
            if(doc.data().afternoonList[i].date == self.newDate){
              if(Number(doc.data().afternoonList[i].energy)-1 > Number(self.todayEnergy)-1 || isNaN(self.todayEnergy)){
                self.todayEnergy = doc.data().afternoonList[i].energy;
                }
            }
        }
        for(i = 0; i < doc.data().eveningList.length; i++)
        {
            self.eveningEnergy.push(doc.data().eveningList[i]);
            if(doc.data().eveningList[i].date == self.newDate){
              if(Number(doc.data().eveningList[i].energy)-1 > Number(self.todayEnergy)-1 || isNaN(self.todayEnergy)){
                self.todayEnergy = doc.data().eveningList[i].energy;
                }
            }
        }
        for(i = 0; i < doc.data().nightList.length; i++)
        {
            self.nightEnergy.push(doc.data().nightList[i]);
            if(doc.data().nightList[i].date == self.newDate){
              if(Number(doc.data().nightList[i].energy)-1 > Number(self.todayEnergy)-1 || isNaN(self.todayEnergy)){
                self.todayEnergy = doc.data().nightList[i].energy;
                }
            }
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
