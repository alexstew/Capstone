<template>
 <div class="content">
     
    <div class="md-layout md-alignment-center">
        
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
            <stats-card data-background-color="green">
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
            <stats-card data-background-color="green">
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
            <stats-card data-background-color="green">
                <template slot="header">
                    <md-icon >assignment_turned_in</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Items Tracked</p>
                    <h3 class="title">{{daysTracked}}</h3>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-size-100">
        <md-card>
          <md-card-header :data-background-color="bg">
            <h3 class="title" style="border-bottom: solid 1px white">Tracking</h3>
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
               <md-button @click="subMenuSelected = 1" class="md-round" :class="[subMenuSelected == 1 ? activeColor: '']">Water</md-button>
               <md-button @click="subMenuSelected = 2" class="md-round" :class="[subMenuSelected == 2 ? activeColor: '']">Macros</md-button>
                 </md-table-cell>
               </md-table-row>
             </md-table>
              

            <md-table v-if="subMenuSelected == 1">
              <md-table-row  v-for="(value,index) in waterArray" :key="value.date">
                    <md-table-cell>{{value.date}} waterArray Duration: {{value.amount}} amount</md-table-cell>
                    <md-table-cell>
                        <md-button @click="edit(value.amount, index,'waterList', 'waterArray', 'amount',value)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('waterList','waterArray',value,index)" class="md-just-icon md-simple md-danger mainBtn">
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
                  <md-table-cell class="gridBorder">protein</md-table-cell>
                  <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(amount,index) in protienArray" :key="amount.date">
                      <md-table-cell class="gridBorder">{{amount.date}} : {{amount.amount}}g
                      </md-table-cell>
                      <md-table-cell class="gridBorder"><md-button @click="edit(amount.amount, index,'proteinList', 'protienArray', 'amount', amount)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('proteinList','protienArray',amount,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
              </md-table>
              </div>

              <div class="gridAfternoon" v-if="subMenuSelected == 2">
                <md-table>
                  <md-table-row>
                  <md-table-cell class="gridBorder">Carbs</md-table-cell>
                  <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(amount,index) in carbsArray" :key="amount.date">
                  <md-table-cell class="gridBorder">{{amount.date}} : {{amount.amount}}g</md-table-cell>
                  <md-table-cell class="gridBorder"><md-button @click="edit(amount.amount, index,'carbsList', 'carbsArray', 'amount', amount)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('carbsList','carbsArray',amount,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
              </md-table>
              </div>

              <div class="gridEvening" v-if="subMenuSelected == 2">
                <md-table  >
                  <md-table-row>
                  <md-table-cell class="gridBorder">Fat</md-table-cell>
                  <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(amount,index) in fatArray" :key="amount.date">
                  <md-table-cell class="gridBorder">{{amount.date}} : {{amount.amount}}g</md-table-cell>
                  <md-table-cell class="gridBorder"><md-button @click="edit(amount.amount, index,'fatList', 'fatArray', 'amount', amount)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('fatList','fatArray',amount,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
             </md-table>
              </div>

              <div class="gridNight" v-if="subMenuSelected == 2">
                <md-table  >
                  <md-table-row>
                  <md-table-cell class="gridBorder">Calories</md-table-cell>
                  <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(amount,index) in caloriesArray" :key="amount.date">
                  <md-table-cell class="gridBorder">{{amount.date}} : {{amount.amount}}</md-table-cell>
                  <md-table-cell class="gridBorder"><md-button @click="edit(amount.amount, index,'caloriesList', 'caloriesArray', 'amount', amount)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('caloriesList','caloriesArray',amount,index)" class="md-just-icon md-simple md-danger mainBtn">
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
               <md-button @click="subMenuSelected = 1" class="md-round" :class="[subMenuSelected == 1 ? activeColor: '']">water</md-button>
               <md-button @click="subMenuSelected = 2" class="md-round" :class="[subMenuSelected == 2 ? activeColor: '']">Macros</md-button>
                 </md-table-cell>
               </md-table-row>
             </md-table>
              

            <md-table v-if="subMenuSelected == 1">
              <md-table-row  v-for="(value,index) in waterArray.slice(0,7)" :key="value.date">
                    <md-table-cell>{{value.date}} waterArray Duration: {{value.amount}} amount</md-table-cell>
                     <md-table-cell>
                        <md-button @click="edit(value.amount, index,'waterList', 'waterArray', 'amount', value)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('waterList','waterArray',value,index)" class="md-just-icon md-simple md-danger mainBtn">
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
                  <md-table-cell class="gridBorder">protein</md-table-cell>
                   <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(amount,index) in protienArray.slice(0,7)" :key="amount.date">
                      <md-table-cell class="gridBorder">{{amount.date}} : {{amount.amount}}g</md-table-cell>
                       <md-table-cell class="gridBorder"><md-button @click="edit(amount.amount, index,'proteinList', 'protienArray', 'amount', amount)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('proteinList','protienArray',amount,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
              </md-table>
              </div>

              <div class="gridAfternoon" v-if="subMenuSelected == 2">
                <md-table>
                  <md-table-row>
                  <md-table-cell class="gridBorder">Carbs</md-table-cell>
                   <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(amount,index) in carbsArray.slice(0,7)" :key="amount.date">
                  <md-table-cell class="gridBorder">{{amount.date}} : {{amount.amount}}g</md-table-cell>
                   <md-table-cell class="gridBorder"><md-button @click="edit(amount.amount, index,'carbsList', 'carbsArray', 'amount', amount)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('carbsList','carbsArray',amount,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
              </md-table>
              </div>

              <div class="gridEvening" v-if="subMenuSelected == 2">
                <md-table  >
                  <md-table-row>
                  <md-table-cell class="gridBorder">Fat</md-table-cell>
                   <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(amount,index) in fatArray.slice(0,7)" :key="amount.date">
                  <md-table-cell class="gridBorder">{{amount.date}} : {{amount.amount}}g</md-table-cell>
                   <md-table-cell class="gridBorder"><md-button @click="edit(amount.amount, index,'fatList', 'fatArray', 'amount', amount)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('fatList','fatArray',amount,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
             </md-table>
              </div>

              <div class="gridNight" v-if="subMenuSelected == 2">
                <md-table  >
                  <md-table-row>
                  <md-table-cell class="gridBorder">Calories</md-table-cell>
                   <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(amount, index) in caloriesArray.slice(0,7)" :key="amount.date">
                  <md-table-cell class="gridBorder">{{amount.date}} : {{amount.amount}}</md-table-cell>
                   <md-table-cell class="gridBorder"><md-button @click="edit(amount.amount, index,'caloriesList', 'caloriesArray', 'amount', amount)" class="md-just-icon md-simple md-warning goalBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('caloriesList','caloriesArray',amount, index)" class="md-just-icon md-simple md-danger goalBtn">
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
                <label>Add Water</label>
                <md-input v-model="waterInput"></md-input>
                <md-button @click="add('waterInput','waterArray','waterList','amount')" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
              <md-field>
                <label>Add protein</label>
                <md-input v-model="protienInput"></md-input>
                <md-button @click="add('protienInput','protienArray','proteinList','amount')" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
              <md-field>
                <label>Add Carbs</label>
                <md-input v-model="carbsInput"></md-input>
                <md-button @click="add('carbsInput','carbsArray','carbsList','amount')" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
              <md-field>
                <label>Add Fat</label>
                <md-input v-model="fatInput"></md-input>
                <md-button @click="add('fatInput','fatArray','fatList','amount')" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
              <md-field>
                <label>Add Calories</label>
                <md-input v-model="caloriesInput"></md-input>
                <md-button @click="add('caloriesInput','caloriesArray','caloriesList','amount')" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
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
      waterInput: "",
      protienInput: "",
      carbsInput: "",
      fatInput: "",
      caloriesInput: "",
      daysTracked: "",
      todayCalories:"N/A",
      todayCarbs:"N/A",
      todayProtien:"N/A",
      todayFat:"N/A",
      todayWater:"N/A",
      waterArray: [
      
      ],
      protienArray: [
      
      ],
      carbsArray: [

      ],
      fatArray: [

      ],
      caloriesArray: [

      ],
    }
  },
  methods: {
    add(input,array, list, type){
    
      var docRef = db.collection('tracking').doc(this.user.email);
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
      if(this[input] != "" && error == false && !isNaN(this[input]))
      {
        docRef.update({
          [list]: firebase.firestore.FieldValue.arrayUnion({date: this.newDate, [type]: this[input]})
        });
        this[array].push({date: this.newDate,[type]: this[input]});
        if(list == "caloriesList"){
         this.todayCalories = this[input]
        }
        if(list == "carbsList"){
         this.todayCarbs = this[input]
        }
        if(list == "proteinList"){
         this.todayProtien = this[input]
        }
        if(list == "fatList"){
         this.todayFat = this[input]
        }
        if(list == "waterList"){
         this.todayWater = this[input]
        }
        this.daysTracked ++;
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
            var docRef = db.collection('tracking').doc(this.user.email);
            docRef.update({
              [array1]: firebase.firestore.FieldValue.arrayRemove(value)
            });
            this[array2].splice(index, 1);
            this.daysTracked --;
            if([array1] == "caloriesList" && value.date == this.newDate){
                this.todayCalories = "N/A"
            }
            if([array1] == "proteinList" && value.date == this.newDate){
                this.todayProtien = "N/A"
            } 
            if([array1] == "fatList" && value.date == this.newDate){
                this.todayFat = "N/A"
            } 
            if([array1] == "carbsList" && value.date == this.newDate){
                this.todayCarbs = "N/A"
            } 
            if([array1] == "waterList" && value.date == this.newDate){
                this.todayWater = "N/A"
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
            var docRef = db.collection('tracking').doc(this.user.email);
            docRef.update({
              [this.editingList]: firebase.firestore.FieldValue.arrayRemove(this.lastValue)
            });
                    
            docRef.update({
              [this.editingList]: firebase.firestore.FieldValue.arrayUnion({date: this.lastDate, [this.editingType]: this.editedValue})
            });
            if(this.lastValue.date == this.newDate && this.editingList == "caloriesList"){
              this.todayCalories = this.editedValue;
            }
            if(this.lastValue.date == this.newDate && this.editingList == "proteinList"){
              this.todayProtien = this.editedValue;
            }
            if(this.lastValue.date == this.newDate && this.editingList == "fatList"){
              this.todayFat = this.editedValue;
            }
            if(this.lastValue.date == this.newDate && this.editingList == "carbsList"){
              this.todayCarbs = this.editedValue;
            }
            if(this.lastValue.date == this.newDate && this.editingList == "waterList"){
              this.todayWater = this.editedValue;
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
    var sleepRef = db.collection("tracking").doc(this.user.email);

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
        sleepRef.set({
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
