import { createRouter, createWebHistory } from "vue-router";

import RestaurantsPage from "./pages/Restaurants.vue";
import DishPage from "./pages/dish/Dish.vue";
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/Restaurants",
            name:"Restaurants",
            component: RestaurantsPage,
        },
        {
            path: "/dish/:id",
            name: "dish.show",
            component: DishPage
        },
    ]


});
export { router };