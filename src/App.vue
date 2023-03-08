<script>
import HelloWorld from './components/HelloWorld.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { DOMDirectiveTransforms } from "@vue/compiler-dom";
import { useAttrs } from "vue";

export default {
  pages: {},
  data() {
    return {
      categories:[],
      restaurants: [],
      filtered_restaurants: [],
      filters:[],
    };

  },
  methods: {
    fetchdata() {
      axios.get("http://127.0.0.1:8000/api/restaurants")
        .then((resp) => {
          this.categories = (resp.data.categories);
          this.restaurants = (resp.data.restaurants);
        })
    },
    search(){
      setTimeout(()=>{
        this.restaurants.forEach(restaurant =>{

          this.filters.forEach(filtro => {
            
            restaurant.categories.forEach(categoria => {
              if (filtro == categoria.pivot.category_id) {
                this.filtered_restaurants.push(restaurant);
              }
            });
          });
        }
        );
      },100)
    }
  },
  mounted() {
    this.fetchdata();

  }

};
</script>

<template>
  <div class="container">
    <h1 class="mb-5">Cerca il tuo piatto preferito!</h1>
    <div class="row gap-4 text-white justify-content-center">

      <div class="col-3 bg-black pb-2" v-for="category in categories" @click="search">
        <input type="checkbox" :value="category.id" v-model="filters">
        <div><img src="" alt="" /></div>
        <div>{{ category.name }}</div>
      </div>

    </div>
  </div> 
<RouterView :restaurants="restaurants"></RouterView>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

i {
  display: inline-block;
  height: 1rem;
  width: 1rem;
}

.col-3 {
  border-radius: 20px;
}

.col-3:hover div {
  color: red;
}
</style>
