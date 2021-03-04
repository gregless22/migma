import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// Pages
import Home from "@/views/Home.vue";
import Iplant from "@/views/Iplant.vue";

// Templates

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
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
          template: () => import("@/components/templates/SiteDetails.vue")
        }
      },
      {
        path: "equipment",
        components: {
          default: Iplant,
          template: () => import("@/components/templates/Equipment.vue")
        }
      },
      {
        path: "defect",
        components: {
          default: Iplant,
          template: () => import("@/components/templates/Defects.vue")
        }
      },
      {
        path: "certificate",
        components: {
          default: Iplant,
          template: () => import("@/components/templates/Certificates.vue")
        }
      },
      {
        path: "audit",
        components: {
          default: Iplant,
          template: () => import("@/components/templates/Audits.vue")
        }
      },
      {
        path: "classification",
        components: {
          default: Iplant,
          template: () => import("@/components/templates/Classification.vue")
        }
      },
      {
        path: "conformity",
        components: {
          default: Iplant,
          template: () => import("@/components/templates/Conformity.vue")
        }
      },
      {
        path: "calculation",
        components: {
          default: Iplant,
          template: () => import("@/components/templates/Calculations.vue")
        }
      },
      {
        path: "competency",
        components: {
          default: Iplant,
          template: () => import("@/components/templates/Competencies.vue")
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
