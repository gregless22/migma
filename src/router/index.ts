import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// Pages
import Home from "@/views/Home.vue";
import Iplant from "@/views/Iplant.vue";

// Templates
import SiteDetails from "@/components/templates/SiteDetails.vue";
import Equipment from "@/components/templates/Equipment.vue";
import Defect from "@/components/templates/Defects.vue";
import Competency from "@/components/templates/Competencies.vue";
import Conformity from "@/components/templates/Conformity.vue";
import Classification from "@/components/templates/Classification.vue";
import Certificate from "@/components/templates/Certificates.vue";
import Audit from "@/components/templates/Audits.vue";
import Calculation from "@/components/templates/Calculations.vue";

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
          template: SiteDetails
        }
      },
      {
        path: "equipment",
        components: {
          default: Iplant,
          template: Equipment
        }
      },
      {
        path: "defect",
        components: {
          default: Iplant,
          template: Defect
        }
      },
      {
        path: "certificate",
        components: {
          default: Iplant,
          template: Certificate
        }
      },
      {
        path: "audit",
        components: {
          default: Iplant,
          template: Audit
        }
      },
      {
        path: "classification",
        components: {
          default: Iplant,
          template: Classification
        }
      },
      {
        path: "conformity",
        components: {
          default: Iplant,
          template: Conformity
        }
      },
      {
        path: "calculation",
        components: {
          default: Iplant,
          template: Calculation
        }
      },
      {
        path: "competency",
        components: {
          default: Iplant,
          template: Competency
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
