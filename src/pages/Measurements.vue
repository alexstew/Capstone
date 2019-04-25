<template>
 <div class="content">
     
    <div class="md-layout md-alignment-center">
        
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
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-small-size-45 md-size-30">
            <stats-card data-background-color="blue">
                <template slot="header">
                    <md-icon >assignment</md-icon>
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
            <h3 class="title" style="border-bottom: solid 1px white">Measurements</h3>
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
               <md-button @click="subMenuSelected = 1" class="md-round" :class="[subMenuSelected == 1 ? activeColor: '']">Bodyweight</md-button>
               <md-button @click="subMenuSelected = 2" class="md-round" :class="[subMenuSelected == 2 ? activeColor: '']">Other</md-button>
                 </md-table-cell>
               </md-table-row>
             </md-table>
              

            <md-table v-if="subMenuSelected == 1">
              <md-table-row  v-for="(value,index) in bodyweightArray" :key="value.date">
                    <md-table-cell>{{value.date}} Bodyweight: {{value.amount}} Lbs</md-table-cell>
                    <md-table-cell>
                        <md-button @click="edit(value.amount, index,'bodyweightList', 'bodyweightArray', 'amount',value)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('bodyweightList','bodyweightArray',value,index)" class="md-just-icon md-simple md-danger mainBtn">
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
                  <md-table-cell class="gridBorder">Chest Size</md-table-cell>
                  <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(amount,index) in chestArray" :key="amount.date">
                      <md-table-cell class="gridBorder">{{amount.date}} : {{amount.amount}}"
                      </md-table-cell>
                      <md-table-cell class="gridBorder"><md-button @click="edit(amount.amount, index,'chestList', 'chestArray', 'amount', amount)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('chestList','chestArray',amount,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
              </md-table>
              </div>

              <div class="gridAfternoon" v-if="subMenuSelected == 2">
                <md-table>
                  <md-table-row>
                  <md-table-cell class="gridBorder">Waist Size</md-table-cell>
                  <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(amount,index) in waistArray" :key="amount.date">
                  <md-table-cell class="gridBorder">{{amount.date}} : {{amount.amount}}"</md-table-cell>
                  <md-table-cell class="gridBorder"><md-button @click="edit(amount.amount, index,'waistList', 'waistArray', 'amount', amount)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('waistList','waistArray',amount,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
              </md-table>
              </div>

              <div class="gridEvening" v-if="subMenuSelected == 2">
                <md-table  >
                  <md-table-row>
                  <md-table-cell class="gridBorder">Quad Size</md-table-cell>
                  <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(amount,index) in quadArray" :key="amount.date">
                  <md-table-cell class="gridBorder">{{amount.date}} : {{amount.amount}}"</md-table-cell>
                  <md-table-cell class="gridBorder"><md-button @click="edit(amount.amount, index,'quadList', 'quadArray', 'amount', amount)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('quadList','quadArray',amount,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
             </md-table>
              </div>

              <div class="gridNight" v-if="subMenuSelected == 2">
                <md-table  >
                  <md-table-row>
                  <md-table-cell class="gridBorder">Arm Size</md-table-cell>
                  <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(amount,index) in armArray" :key="amount.date">
                  <md-table-cell class="gridBorder">{{amount.date}} : {{amount.amount}}"</md-table-cell>
                  <md-table-cell class="gridBorder"><md-button @click="edit(amount.amount, index,'armList', 'armArray', 'amount', amount)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('armList','armArray',amount,index)" class="md-just-icon md-simple md-danger mainBtn">
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
               <md-button @click="subMenuSelected = 1" class="md-round" :class="[subMenuSelected == 1 ? activeColor: '']">Bodyweight</md-button>
               <md-button @click="subMenuSelected = 2" class="md-round" :class="[subMenuSelected == 2 ? activeColor: '']">Other</md-button>
                 </md-table-cell>
               </md-table-row>
             </md-table>
              

            <md-table v-if="subMenuSelected == 1">
              <md-table-row  v-for="(value,index) in bodyweightArray.slice(0,7)" :key="value.date">
                    <md-table-cell>{{value.date}} bodyweight: {{value.amount}} Lbs</md-table-cell>
                     <md-table-cell>
                        <md-button @click="edit(value.amount, index,'bodyweightList', 'bodyweightArray', 'amount', value)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('bodyweightList','bodyweightArray',value,index)" class="md-just-icon md-simple md-danger mainBtn">
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
                  <md-table-cell class="gridBorder">Chest Size</md-table-cell>
                   <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(amount,index) in chestArray.slice(0,7)" :key="amount.date">
                      <md-table-cell class="gridBorder">{{amount.date}} : {{amount.amount}}"</md-table-cell>
                       <md-table-cell class="gridBorder"><md-button @click="edit(amount.amount, index,'chestList', 'chestArray', 'amount', amount)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('chestList','chestArray',amount,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
              </md-table>
              </div>

              <div class="gridAfternoon" v-if="subMenuSelected == 2">
                <md-table>
                  <md-table-row>
                  <md-table-cell class="gridBorder">Waist Size</md-table-cell>
                   <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(amount,index) in waistArray.slice(0,7)" :key="amount.date">
                  <md-table-cell class="gridBorder">{{amount.date}} : {{amount.amount}}"</md-table-cell>
                   <md-table-cell class="gridBorder"><md-button @click="edit(amount.amount, index,'waistList', 'waistArray', 'amount', amount)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('waistList','waistArray',amount,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
              </md-table>
              </div>

              <div class="gridEvening" v-if="subMenuSelected == 2">
                <md-table  >
                  <md-table-row>
                  <md-table-cell class="gridBorder">Quad Size</md-table-cell>
                   <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(amount,index) in quadArray.slice(0,7)" :key="amount.date">
                  <md-table-cell class="gridBorder">{{amount.date}} : {{amount.amount}}"</md-table-cell>
                   <md-table-cell class="gridBorder"><md-button @click="edit(amount.amount, index,'quadList', 'quadArray', 'amount', amount)" class="md-just-icon md-simple md-warning mainBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('quadList','quadArray',amount,index)" class="md-just-icon md-simple md-danger mainBtn">
                            <md-icon>close</md-icon>
                            <md-tooltip md-direction="top">Remove</md-tooltip>
                        </md-button></md-table-cell>
                </md-table-row>
             </md-table>
              </div>

              <div class="gridNight" v-if="subMenuSelected == 2">
                <md-table  >
                  <md-table-row>
                  <md-table-cell class="gridBorder">Arm Size</md-table-cell>
                   <md-table-cell class="gridBorder">Update Values</md-table-cell>
                </md-table-row>
                <md-table-row  v-for="(amount, index) in armArray.slice(0,7)" :key="amount.date">
                  <md-table-cell class="gridBorder">{{amount.date}} : {{amount.amount}}"</md-table-cell>
                   <md-table-cell class="gridBorder"><md-button @click="edit(amount.amount, index,'armList', 'armArray', 'amount', amount)" class="md-just-icon md-simple md-warning goalBtn">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Edit</md-tooltip>
                        </md-button>
                        <md-button @click="remove('armList','armArray',amount, index)" class="md-just-icon md-simple md-danger goalBtn">
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
                <label>Add Bodyweight</label>
                <md-input v-model="bodyweightInput"></md-input>
                <md-button @click="add('bodyweightInput','bodyweightArray','bodyweightList','amount')" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
              <md-field>
                <label>Add Chest Size</label>
                <md-input v-model="chestInput"></md-input>
                <md-button @click="add('chestInput','chestArray','chestList','amount')" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
              <md-field>
                <label>Add Waist Size</label>
                <md-input v-model="waistInput"></md-input>
                <md-button @click="add('waistInput','waistArray','waistList','amount')" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
              <md-field>
                <label>Add Quad Size</label>
                <md-input v-model="quadInput"></md-input>
                <md-button @click="add('quadInput','quadArray','quadList','amount')" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
              </md-field>
              <md-field>
                <label>Add Arm Size</label>
                <md-input v-model="armInput"></md-input>
                <md-button @click="add('armInput','armArray','armList','amount')" class="md-simple md-just-icon"><md-icon class="mainBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
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
      bodyweightInput: "",
      chestInput: "",
      waistInput: "",
      quadInput: "",
      armInput: "",
      daysTracked: 0,
      todayBodyweight:"N/A",
      todayChest:"N/A",
      todayWaist:"N/A",
      todayQuad:"N/A",
      todayArm:"N/A",
      bodyweightArray: [
      
      ],
      chestArray: [
      
      ],
      waistArray: [

      ],
      quadArray: [

      ],
      armArray: [

      ],
    }
  },
  methods: {
    add(input,array, list, type){
    
      var docRef = db.collection('measurements').doc(this.user.email);
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
        if(list == "armList"){
         this.todayArm = this[input]
        }
        if(list == "waistList"){
         this.todayWaist = this[input]
        }
        if(list == "chestList"){
         this.todayChest = this[input]
        }
        if(list == "quadList"){
         this.todayQuad = this[input]
        }
        if(list == "bodyweightList"){
         this.todayBodyweight = this[input]
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
            var docRef = db.collection('measurements').doc(this.user.email);
            docRef.update({
              [array1]: firebase.firestore.FieldValue.arrayRemove(value)
            });
            this[array2].splice(index, 1);
            this.daysTracked --;
            if([array1] == "armList" && value.date == this.newDate){
                this.todayArm = "N/A"
            }
            if([array1] == "chestList" && value.date == this.newDate){
                this.todayChest = "N/A"
            } 
            if([array1] == "quadList" && value.date == this.newDate){
                this.todayQuad = "N/A"
            } 
            if([array1] == "waistList" && value.date == this.newDate){
                this.todayWaist = "N/A"
            } 
            if([array1] == "bodyweightList" && value.date == this.newDate){
                this.todayBodyweight = "N/A"
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
            var docRef = db.collection('measurements').doc(this.user.email);
            docRef.update({
              [this.editingList]: firebase.firestore.FieldValue.arrayRemove(this.lastValue)
            });
                    
            docRef.update({
              [this.editingList]: firebase.firestore.FieldValue.arrayUnion({date: this.lastDate, [this.editingType]: this.editedValue})
            });
            if(this.lastValue.date == this.newDate && this.editingList == "armList"){
              this.todayArm = this.editedValue;
            }
            if(this.lastValue.date == this.newDate && this.editingList == "chestList"){
              this.todayChest = this.editedValue;
            }
            if(this.lastValue.date == this.newDate && this.editingList == "quadList"){
              this.todayQuad = this.editedValue;
            }
            if(this.lastValue.date == this.newDate && this.editingList == "waistList"){
              this.todayWaist = this.editedValue;
            }
            if(this.lastValue.date == this.newDate && this.editingList == "bodyweightList"){
              this.todayBodyweight = this.editedValue;
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
    var measurementRef = db.collection("measurements").doc(this.user.email);

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
    
    measurementRef.get().then(function(doc) {
    if (doc.exists) {
        for(var i = 0; i < doc.data().bodyweightList.length; i++)
        {
            self.bodyweightArray.push(doc.data().bodyweightList[i]);
             self.daysTracked ++;
            if(doc.data().bodyweightList[i].date == self.newDate){
              self.Bodyweight = doc.data().bodyweightList[i].amount;
            }
        }
        for(i = 0; i < doc.data().chestList.length; i++)
        {
            self.chestArray.push(doc.data().chestList[i]);
             self.daysTracked ++;
            if(doc.data().chestList[i].date == self.newDate){
              self.todayChest = doc.data().chestList[i].amount;
            }
        }
        for(i = 0; i < doc.data().waistList.length; i++)
        {
            self.waistArray.push(doc.data().waistList[i]);
             self.daysTracked ++;
            if(doc.data().waistList[i].date == self.newDate){
              self.todayWaist = doc.data().waistList[i].amount;
            }
        }
        for(i = 0; i < doc.data().quadList.length; i++)
        {
            self.quadArray.push(doc.data().quadList[i]);
             self.daysTracked ++;
            if(doc.data().quadList[i].date == self.newDate){
              self.todayQuad = doc.data().quadList[i].amount;
            }
        }
        for(i = 0; i < doc.data().armList.length; i++)
        {
            self.armArray.push(doc.data().armList[i]);
            self.daysTracked ++;
            if(doc.data().armList[i].date == self.newDate){
              self.todayArm = doc.data().armList[i].amount;
            }
        }
         self.streak = doc.data().streak;
         
         
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
