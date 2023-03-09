<script>
export default {
  name: "index",
  props: ["filteredRestaurants"],
  data(){
    return{

    }
  },
  methods:{
    search(){
      setTimeout(()=>{
        this.filteredRestaurants = [];
        this.restaurants.forEach((restaurant) =>{

          this.filters.forEach((filtro) => {

            restaurant.categories.forEach((categoria) => {
              if (filtro == categoria.pivot.category_id) {
                return(this.filteredRestaurants.push(restaurant));
              }
            });
          });
        }
        );
      },100)
    }
  }
};
</script>

<template>
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
            <h5 class="card-text text-light">
                VAT: {{ restaurant.vat }}
            </h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
