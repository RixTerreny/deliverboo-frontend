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
      filtercategory: []
    };
  },
  methods: {
    fetchdata() {
      axios.get("http://127.0.0.1:8000/api/restaurants").then((resp) => {
        this.categories = resp.data.categories;
        this.restaurants = resp.data.restaurants;
        this.search();
      });
    },
    getFiltered($category) {
      axios.get("http://127.0.0.1:8000/api/restaurants/category/" + $category)
        .then((resp) => {
          this.filteredRestaurants = [];
          resp.data.restaurants.forEach(restaurant => {
            this.filteredRestaurants.push(restaurant);
            
          });
  
        });
    },
    filterCategoryPush($category) {
      

        if(this.filtercategory.length === this.categories.length){
          this.filtercategory = [] ;
          this.filteredRestaurants = [] ;
  
        }
        
        if (!this.filtercategory.includes($category)) {
          
          this.filtercategory.push($category);
          this.filteredRestaurants = [] ;
        
        this.filtercategory.forEach(element => {
          
          axios.get("http://127.0.0.1:8000/api/restaurants/category/" + element)
            .then((resp) => {
              
              resp.data.restaurants.forEach(restaurant => {
                if (this.filteredRestaurants.some(r => r.id === restaurant.id)){
                  
                  return;
                  
                }else{
                  this.filteredRestaurants.push(restaurant);
  
                }
                
              });
      
            });
  
  
        });
        }else{
          this.filtercategory.splice(this.filtercategory.indexOf($category), 1);
          this.filteredRestaurants = [] ;
        
        this.filtercategory.forEach(element => {
          
          axios.get("http://127.0.0.1:8000/api/restaurants/category/" + element)
            .then((resp) => {
              
              resp.data.restaurants.forEach(restaurant => {
                if (this.filteredRestaurants.some(r => r.id === restaurant.id)){
                  
                  return;
                  
                }else{
                  this.filteredRestaurants.push(restaurant);
  
                }
                
              });
      
            });
  
  
        });


        }
        
      
    },
    getAllRestaurants() {
      axios.get("http://127.0.0.1:8000/api/restaurants").then((resp) => {
        this.filtercategory = [];
        this.filteredRestaurants = [];
        this.filteredRestaurants = resp.data.restaurants;
        if(this.filtercategory.length === this.categories.length){

        }else{
          
          this.categories.forEach((category) => {
            this.filtercategory.push(category.id);});
        }

      });
    },


    
    search() {
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
    }
  },
  mounted() {
    this.fetchdata();
  },
};

</script>

<template>
  
  <div class="margin-bg" :style="{backgroundImage:'../public/img/background-food.png'}">
    <div class="container bg-container">
      <img src="public/img/deliveboo.png" class="logo margin-logo" alt="">
      <h3 class="ms-2 mt-4 text-orange">Scegli cosa vuoi mangiare</h3>      
      <div class="row gap-4 text-white justify-content-center space-category-top space-category-bottom">
        <h2 class="text-danger" v-if="(this.filtercategory != '' )|| (this.filtercategory.length == this.categories.length)">categorie attualmente selezionate: {{this.filtercategory}}</h2>
        <div class="col-3" v-for="category in categories">
          <!-- <input type="checkbox" :value="category.id" v-model="filters" />
          <div><img src="" alt="" /></div>
          <div>{{ category.name }}</div> -->
          <button class="text-orange font-cat bg-transparent" :class="{'bg-danger': this.filtercategory.includes(category.id)} " :key="category.id" type="button" @click="filterCategoryPush(category.id)">{{category.name}}</button>
        </div>
        <button class="text-orange font-cat bg-transparent"  type="button" @click="getAllRestaurants()">tutti i ristoranti</button>
      </div>
      
    </div>
  </div>
  
  <h1 class="text-orange mb-5">Scegli il Ristorante:</h1>
  <div class="container">
    <div class="row row-cols-4 g-5">
      <div class="col" v-for="restaurant in filteredRestaurants" :key="restaurant.id">
        <div class="card bg-orange h-100 w-100" style="width: 18rem">
          <img
              v-if="restaurant.cover_img"
              class="card-img-top"
              src="http://127.0.0.1:8000/ + '/storage/' + restaurant.cover_img)"
              alt="Card image cap"
            />
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <h6 class="mt-5">Categorie:</h6>
            <div class="card-title" v-for="categor in restaurant.categories">{{categor.name}}</div>
            <h6 class="mt-5">Indirizzo:</h6>
            <p class="card-text">{{ restaurant.address }}</p>
            <a :href="'/dish/' + restaurant.id" class="btn btn-light mt-4">Menù</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.bg-container {
  background-image: url(public/img/background-food.png);
}
.margin-bg {
  margin-top: 50px;
  margin-bottom: 30px;
}

.bg-orange {
  background-color: #F3C18B;
}
.space-category-top {
  padding-top: 10px;
}
.space-category-bottom {
  padding-bottom: 5px;
}
.text-orange {
  color: orange;
}
.font-cat {
  font-size: 23px;
}

.logo {
  width: 18%;
  border-radius: 25px;

}

.margin-logo {
  margin-top: 30px;
}
.selectedbtn{

  border-radius: 2px solid red;

}


</style>