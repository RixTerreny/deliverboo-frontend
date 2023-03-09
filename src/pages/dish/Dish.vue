<script>
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  data() {
    return {
      dishes: [],
    };
  },
  methods: {
    fetchdata() {
      axios.get("http://127.0.0.1:8000/api/dish/" + this.$route.params.id)
      .then((resp) => {
        resp.data.dish.forEach(dish => {
            if (dish.visible) {
                this.dishes.push(dish);
            }
        });
      });
    },
  },
  mounted() {
    this.fetchdata();
  },
};
</script>

<template>
<div class="container">
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
                  <a :href="'/dish/' + dish.id" class="btn btn-primary">Aggiungi al carrello</a>
                </div>
              </div>
            </div>

        </div>
    </div>
  </div>
</template>

<style></style>
