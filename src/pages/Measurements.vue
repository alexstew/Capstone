<template>
 <div class="content">
     
    <div class="md-layout md-alignment-center">
        <div class="md-layout-item md-size-50 md-xsmall-size-50">
            <stats-card data-background-color="red">
                <template slot="header">
                    <md-icon >assignment</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Average Bodyweight</p>
                    <h3 class="title">x</h3>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-size-50 md-xsmall-size-50">
            <stats-card data-background-color="green">
                <template slot="header">
                    <md-icon >assignment_turned_in</md-icon>
                </template>

                <template slot="content">
                    <p class="category">Tracking Streak</p>
                    <h3 class="title">x</h3>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-size-100">
           
               
        </div>
        
        <div class="md-layout-item md-size-50 md-xsmall-size-100">
            <chart-card
                :chart-data="dailySalesChart.data"
                :chart-options="dailySalesChart.options"
                chart-type="Line"
                data-background-color="green">

                <template slot="content">
                    <h4 class="title">Bodyweight</h4>
                    <p class="category">
                        <span class="text-success"><i class="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.
                    </p>
                </template>

                <template slot="footer">
                    <div class="stats">
                        
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
                     <md-button @click="dropdown">Default</md-button>
                </template>

                <template slot="footer">
                    <div class="stats">
                       <div :class="{dropdown: dropdown1 == true, hide: dropdown1 == false}">
                    <md-button>Default</md-button>
                    <md-button>Default</md-button>
                    <md-button>Default</md-button>
                    <md-button>Default</md-button>
                    <md-button>Default</md-button>
                    <md-button>Default</md-button>
                    <md-button>Default</md-button>
                </div>
                    </div>
                </template>
            </chart-card>
        </div>
        <div class="md-layout-item md-size-100">
        <nav-tabs-card>
      <template slot="content">
        <span class="md-nav-tabs-title">Data:</span>
        <md-tabs md-sync-route class="md-primary" md-alignment="left">

          <md-tab id="tab-home" md-label="All-Time" >
            
          </md-tab>

          <md-tab id="tab-pages" md-label="Weekly" >
            Coming Soon
          </md-tab>

          <md-tab id="tab-posts" md-label="Add" >
            <md-field>
                <label>New Goal!</label>
                <md-input v-model="goal"></md-input>
                <md-button  class="md-simple md-just-icon"><md-icon class="goalBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
        </md-field>
        <md-field>
                <label>New Goal!</label>
                <md-input v-model="goal"></md-input>
                <md-button  class="md-simple md-just-icon"><md-icon class="goalBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
        </md-field>
        <md-field>
                <label>New Goal!</label>
                <md-input v-model="goal"></md-input>
                <md-button  class="md-simple md-just-icon"><md-icon class="goalBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
        </md-field>
        <md-field>
                <label>New Goal!</label>
                <md-input v-model="goal"></md-input>
                <md-button  class="md-simple md-just-icon"><md-icon class="goalBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
        </md-field>
        <md-field>
                <label>New Goal!</label>
                <md-input v-model="goal"></md-input>
                <md-button class="md-simple md-just-icon"><md-icon class="goalBtn">add_circle</md-icon><md-tooltip md-direction="bottom">Add</md-tooltip></md-button>
        </md-field>
          </md-tab>
        </md-tabs>
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
      dropdown1: false,
      dropdown2: false,
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
  },
  methods: {
      dropdown() {
         this.dropdown1 = !this.dropdown1;
      }
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
