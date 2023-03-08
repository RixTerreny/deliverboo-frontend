import { createRouter, createWebHistory } from "vue-router";

import RestaurantsPage from "./pages/Restaurants.vue";
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/Restaurants",
            name:"Restaurants",
            component: RestaurantsPage,
        }
    ]


});
export { router };