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
                dish.counter = 0;
                this.dishes.push(dish);
            }
        });
      });
    },
    AddDish(dish){
      dish.counter ++;
      this.store.totalCounter ++;
      if (!this.store.ShoppingCart.includes(dish)) {
        this.store.ShoppingCart.push(dish);
      }
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
        <h2 class="margin-auto text-orange mt-5">{{rest.name}}</h2>
        <h4 class="margin-auto text-orange">{{rest.description}}</h4>
        <!-- <h3 class="margin-auto">{{rest.vat}}</h3> -->
    </div>   
        <div class="row row-cols-4 g-5 m-5">
        <div v-for="dish in dishes" >
            <div class="col" :key="dish.id" v-if="dish.visible">
              <div class="card bg-orange h-100 w-100" style="width: 1rem">
                <!-- <img
                  v-if="restaurant.cover_img"
                  class="card-img-top"
                  src="http://127.0.0.1:8000/ + '/storage/' + restaurant.cover_img)"
                  alt="Card image cap"
                /> -->
                <div class="card-body">
                  <h5 class="card-title">{{ dish.name }}</h5>
                  <h6 class="mt-4">Ingredienti:</h6>
                  <p class="card-text">{{ dish.description }}</p>
                  <div class="card-text mb-3">{{ dish.price + "&#8364;" }}</div>
                  <button @click="AddDish(dish)" class="btn btn-light">Aggiungi al carrello</button>
                </div>
              </div>
            </div>

        </div>
    </div>
  </div>
</template>

<style scoped>
.bg-orange {
  background-color: #F3C18B;
}
.text-orange {
  color: orange;
}
</style>
