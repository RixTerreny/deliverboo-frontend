<script>
import axios from "axios";
import {store} from "../../store.js";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  data() {
    return {
      store,  
      dishes: [],
      restaurant: {},
    };
  },
  methods: {
    fetchdata() {
      axios.get("http://127.0.0.1:8000/api/dish/" + this.$route.params.id)
      .then((resp) => {
        this.restaurant = resp.data.restaurant;
        resp.data.dish.forEach(dish => {
            if (dish.visible) {
                this.dishes.push(dish);
            }
        });
      });
    },
    AddDish(dish){
          this.store.ShoppingCart.push(dish);

        },
  },
  mounted() {
    this.fetchdata();
    console.log(this.$route.name);
  },
};
</script>

<template>
<div class="container">
    <div class="" v-for="rest in restaurant">
        <h2 class="margin-auto">{{rest.name}}</h2>
        <h3 class="margin-auto">{{rest.description}}</h3>
        <!-- <h3 class="margin-auto">{{rest.vat}}</h3> -->
    </div>   
        <div class="row row-cols-4 g-5 m-5">
        <div v-for="dish in dishes" >
            <div class="col" :key="dish.id" v-if="dish.visible">
              <div class="card bg-success h-100 w-100" style="width: 18rem">
                <!-- <img
                  v-if="restaurant.cover_img"
                  class="card-img-top"
                  src="http://127.0.0.1:8000/ + '/storage/' + restaurant.cover_img)"
                  alt="Card image cap"
                /> -->
                <div class="card-body">
                  <h4 class="card-title">name: {{ dish.name }}</h4>
                  <p class="card-text">description: {{ dish.description }}</p>
                  <div class="card-text mb-3">{{ dish.price + "&#8364;" }}</div>
                  <button @click="AddDish(dish)" class="btn btn-primary">Aggiungi al carrello</button>
                </div>
              </div>
            </div>

        </div>
    </div>
  </div>
</template>

<style></style>
