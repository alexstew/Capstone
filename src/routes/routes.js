import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Goals from "@/pages/Goals.vue";
import Gym from "@/pages/Gym.vue";
import Tracking from "@/pages/Tracking.vue";
import Energy from "@/pages/Energy.vue";
import Measurements from "@/pages/Measurements.vue";
import Help from "@/pages/Help.vue";
import Settings from "@/pages/Settings.vue";
import Donate from "@/pages/Donate.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "goals",
        name: "Goals",
        component: Goals
      },
      {
        path: "gym",
        name: "Gym",
        component: Gym
      },
      {
        path: "tracking",
        name: "Tracking",
        component: Tracking
      },
      {
        path: "energy",
        name: "Energy",
        component: Energy
      },
      {
        path: "measurements",
        name: "Measurements",
        component: Measurements
      },
      {
        path: "help",
        name: "Help",
        component: Help
      },
      {
        path: "settings",
        name: "Settings",
        component: Settings
      },
      {
        path: "donate",
        name: "Donate",
        component: Donate
      }
    ]
  }
];

export default routes;
