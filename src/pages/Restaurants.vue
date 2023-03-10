<script>
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  data() {
    return {
      categories: [],
      restaurants: [],
      filteredRestaurants: [],
      filters: [],
    };
  },
  methods: {
    fetchdata() {
      axios.get("http://127.0.0.1:8000/api/restaurants").then((resp) => {
        this.categories = resp.data.categories;
        this.restaurants = resp.data.restaurants;
       /*  this.search(); */
      });
    },
    getFiltered($category) {
      axios.get("http://127.0.0.1:8000/api/restaurants/category/" + $category)
        .then((resp) => {
          this.filteredRestaurants.push(resp.data.restaurants);
  
        });
    },


    
    /* search() {
      setTimeout(() => {
        if (this.filters.length === 0) {
          this.filteredRestaurants = this.restaurants;
        } else {
          this.filteredRestaurants = [];
          this.restaurants.forEach((restaurant) => {
            this.filters.forEach((filtro) => {
              restaurant.categories.forEach((categoria) => {
                if (
                  filtro == categoria.pivot.category_id &&
                  !this.filteredRestaurants.some(
                    (filteredRestaurant) =>
                      filteredRestaurant.id === restaurant.id
                  )
                ) {
                  this.filteredRestaurants.push(restaurant);
                }
              });
            });
          });
        }
      }, 100);
    } */
  },
  mounted() {
    this.fetchdata();
  },
};

</script>

<template>
  <div class="container">
    <h1 class="my-5">Cerca il tuo piatto preferito!</h1>
    <div class="row gap-4 text-white justify-content-center">
      <div class="col-3 bg-black pb-2" v-for="category in categories">
        <!-- <input type="checkbox" :value="category.id" v-model="filters" />
        <div><img src="" alt="" /></div>
        <div>{{ category.name }}</div> -->
        <button :key="category.id"  type="button" @click="getFiltered(category.id)">{{category.name}}</button>
      </div>
    </div>
  </div>
  <h1>Risultati:</h1>
  <div class="container">
    <div class="row row-cols-4 g-5">
      <div class="col" v-for="restaurant in filteredRestaurants" :key="restaurant.id">
        <div class="card bg-success h-100 w-100" style="width: 18rem">
          <!-- <img
              v-if="restaurant.cover_img"
              class="card-img-top"
              src="http://127.0.0.1:8000/ + '/storage/' + restaurant.cover_img)"
              alt="Card image cap"
            /> -->
          <div class="card-body">
            <h4 class="card-title">name: {{ restaurant.name }}</h4>
            <p class="card-text">address: {{ restaurant.address }}</p>
            <a :href="'/dish/' + restaurant.id" class="btn btn-primary">Menù</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>