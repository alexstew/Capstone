<template>
 <div class="content">
     
    <div class="md-layout md-alignment-center">
        <div class="md-layout-item md-medium-size-30 md-xsmall-size-50 md-small-size-30 md-size-17">
            <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Calories</p>
                    <h3 class="title">200/4000</h3>
                </template>

                <template slot="footer">
                    <div class="stats">
                            <md-input class="md-layout-item md-size-60" v-model="goal"></md-input>
                            <md-button @click="addGoal" class="md-simple md-just-icon "><md-icon class="goalBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
                    </div>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-30 md-xsmall-size-50 md-small-size-30 md-size-17">
            <stats-card data-background-color="green">
                <template slot="header">
                    <md-icon >local_pizza</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Carbs</p>
                    <h3 class="title">200/400</h3>
                </template>

                <template slot="footer">
                    <div class="stats">
                            <md-input class="md-layout-item md-size-60" v-model="goal"></md-input>
                            <md-button @click="addGoal" class="md-simple md-just-icon "><md-icon class="goalBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
                    </div>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-30 md-xsmall-size-50 md-small-size-30 md-size-17">
            <stats-card data-background-color="green">
                <template slot="header">
                    <md-icon >fitness_center</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Protien</p>
                    <h3 class="title">200/400</h3>
                </template>

                <template slot="footer">
                    <div class="stats">
                            <md-input class="md-layout-item md-size-60" v-model="goal"></md-input>
                            <md-button @click="addGoal" class="md-simple md-just-icon "><md-icon class="goalBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
                    </div>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-30 md-xsmall-size-50 md-small-size-30 md-size-17">
            <stats-card data-background-color="green">
                <template slot="header">
                    <md-icon >fastfood</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Fat</p>
                    <h3 class="title">200/400</h3>
                </template>

                <template slot="footer">
                    <div class="stats">
                            <md-input class="md-layout-item md-size-60" v-model="goal"></md-input>
                            <md-button @click="addGoal" class="md-simple md-just-icon "><md-icon class="goalBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
                    </div>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-30 md-xsmall-size-50 md-small-size-30 md-size-17">
            <stats-card data-background-color="green">
                <template slot="header">
                    <md-icon >opacity</md-icon>
                </template>

                <template slot="content">
                    <p class="category">water</p>
                    <h3 class="title">200/400</h3>
                </template>

                <template slot="footer">
                    <div class="stats">
                            <md-input class="md-layout-item md-size-60" v-model="goal"></md-input>
                            <md-button @click="addGoal" class="md-simple md-just-icon "><md-icon class="goalBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
                    </div>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-30 md-xsmall-size-50 md-small-size-30 md-size-17">
            <stats-card data-background-color="green">
                <template slot="header">
                    <md-icon >assignment_turned_in</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Tracking Streak</p>
                    <h3 class="title">20 Days</h3>
                </template>

                <template slot="footer">
                    <div class="stats">
                           <h4> Goal: 5 days a week</h4>
                    </div>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-size-100">
    <nav-tabs-card>
      <template slot="content">
        <span class="md-nav-tabs-title">Tracking:</span>
        <md-tabs md-sync-route class="md-primary" md-alignment="left">

          <md-tab id="tab-home" md-label="All-Time" >
            <nav-tabs-table></nav-tabs-table>
          </md-tab>

          <md-tab id="tab-pages" md-label="Monthly" >
            <nav-tabs-table></nav-tabs-table>
          </md-tab>

          <md-tab id="tab-posts" md-label="Weekly" >
            <nav-tabs-table></nav-tabs-table>
          </md-tab>
        </md-tabs>
                <div class="trackingBtns">
                    <button class="removeBtnEffect">Add Options <md-icon>arrow_forward</md-icon></button>
                    <md-button @click="addGoal" class="md-simple md-just-icon"><md-icon class="goalBtn">assignment</md-icon><md-tooltip md-direction="bottom">Calories</md-tooltip></md-button>
                    <md-button @click="addGoal" class="md-simple md-just-icon"><md-icon class="goalBtn">local_pizza</md-icon><md-tooltip md-direction="bottom">Carbs</md-tooltip></md-button>
                    <md-button @click="addGoal" class="md-simple md-just-icon"><md-icon class="goalBtn">fitness_center</md-icon><md-tooltip md-direction="bottom">Protien</md-tooltip></md-button>
                    <md-button @click="addGoal" class="md-simple md-just-icon"><md-icon class="goalBtn">fastfood</md-icon><md-tooltip md-direction="bottom">Fat</md-tooltip></md-button>
                    <md-button @click="addGoal" class="md-simple md-just-icon"><md-icon class="goalBtn">opacity</md-icon><md-tooltip md-direction="bottom">Water</md-tooltip></md-button>
                </div>
        <md-field>
                <label>New Goal!</label>
                <md-input v-model="goal"></md-input>
                <md-button @click="addGoal" class="md-simple md-just-icon"><md-icon class="goalBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
        </md-field>
      </template>
    </nav-tabs-card>
    
  </div>
  <div class="md-layout-item md-medium-size-30 md-xsmall-size-50 md-small-size-30 md-size-17">
            <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Today's Sleep</p>
                </template>

                <template slot="footer">
                    <div class="stats">
                            <md-input class="md-layout-item md-size-60" v-model="goal"></md-input>
                            <md-button @click="addGoal" class="md-simple md-just-icon "><md-icon class="goalBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
                    </div>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-30 md-xsmall-size-50 md-small-size-30 md-size-17">
            <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Morning Energy</p>
                   
                </template>

                <template slot="footer">
                    <div class="stats">
                            <md-input class="md-layout-item md-size-60" v-model="goal"></md-input>
                            <md-button @click="addGoal" class="md-simple md-just-icon "><md-icon class="goalBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
                    </div>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-30 md-xsmall-size-50 md-small-size-30 md-size-17">
            <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Afternoon Energy</p>
                  
                </template>

                <template slot="footer">
                    <div class="stats">
                            <md-input class="md-layout-item md-size-60" v-model="goal"></md-input>
                            <md-button @click="addGoal" class="md-simple md-just-icon "><md-icon class="goalBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
                    </div>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-30 md-xsmall-size-50 md-small-size-30 md-size-17">
            <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Evening Energy</p>
                   
                </template>

                <template slot="footer">
                    <div class="stats">
                            <md-input class="md-layout-item md-size-60" v-model="goal"></md-input>
                            <md-button @click="addGoal" class="md-simple md-just-icon "><md-icon class="goalBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
                    </div>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-30 md-xsmall-size-50 md-small-size-30 md-size-17">
            <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Late Night Energy</p>
                </template>

                <template slot="footer">
                    <div class="stats">
                            <md-input class="md-layout-item md-size-60" v-model="goal"></md-input>
                            <md-button @click="addGoal" class="md-simple md-just-icon "><md-icon class="goalBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
                    </div>
                </template>
            </stats-card>
        </div>
    </div>
 </div>
 
</template>

<script>

import {StatsCard} from '../components'
import {NavTabsCard} from '../components'


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
  }
}
</script>

<style lang="scss" scoped>
.row{
    display: flex;
    flex-wrap: none;
}

.removeBtnEffect{
    cursor: default;
    border: none;
    background-color: rgba(0, 0, 0, 0);
}
.trackingBtns{
    display: flex;
    justify-content: center;
    align-content: center;
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
