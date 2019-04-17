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
            </stats-card>
        </div>
        <div class="md-layout-item md-size-100">
    
  </div>
    </div>
 </div>
 
</template>

<script>

import {StatsCard} from '../components'


export default {
    components: {
        StatsCard,
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
