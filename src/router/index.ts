import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// Pages
import Home from "@/layouts/Home.vue";
import Iplant from "@/layouts/Iplant.vue";

// Templates

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/iplant",
    name: "Iplant",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Iplant,
    children: [
      {
        path: "site-details",
        components: {
          default: Iplant,
          template: () => import("@/views/SiteDetails.vue")
        }
      },
      {
        path: "equipment",
        components: {
          default: Iplant,
          template: () => import("@/views/Equipment.vue")
        }
      },
      {
        path: "defect",
        components: {
          default: Iplant,
          template: () => import("@/views/Defects.vue")
        }
      },
      {
        path: "certificate",
        components: {
          default: Iplant,
          template: () => import("@/views/Certificates.vue")
        }
      },
      {
        path: "audit",
        components: {
          default: Iplant,
          template: () => import("@/views/Audits.vue")
        }
      },
      {
        path: "classification",
        components: {
          default: Iplant,
          template: () => import("@/views/Classification.vue")
        }
      },
      {
        path: "conformity",
        components: {
          default: Iplant,
          template: () => import("@/views/Conformity.vue")
        }
      },
      {
        path: "calculation",
        components: {
          default: Iplant,
          template: () => import("@/views/Calculations.vue")
        }
      },
      {
        path: "competency",
        components: {
          default: Iplant,
          template: () => import("@/views/Competencies.vue")
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
