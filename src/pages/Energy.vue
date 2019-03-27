<template>
 <div class="content">
     
    <div class="md-layout md-alignment-center">
        <div class="md-layout-item md-size-30 md-xsmall-size-50">
            <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Current Goals</p>
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
                    <p class="category">Completed Goals</p>
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
                    <p class="category">Current Goals</p>
                    <h3 class="title">x</h3>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-size-50 md-xsmall-size-100">
            <chart-card
                :chart-data="dailySalesChart.data"
                :chart-options="dailySalesChart.options"
                chart-type="Line"
                data-background-color="green">

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
                data-background-color="green">

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
        <nav-tabs-card>
            <template slot="content">
                <span class="md-nav-tabs-title">Logs:</span>
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
import db from '../firebase/firebaseInit'
import {StatsCard} from '../components'
import {NavTabsCard} from '../components'
import {ChartCard} from '../components/'
import firebase from 'firebase'

export default {
    components: {
        StatsCard,
        NavTabsCard,
        ChartCard
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
      currentGoals: null,
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
