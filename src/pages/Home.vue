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
                this.search();
            });
        },
        getFiltered($category) {
            axios.get("http://127.0.0.1:8000/api/restaurants/category/" + $category)
                .then((resp) => {
                    this.filteredRestaurants.push(resp.data.restaurants);

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
    <div class="margin-bg" :style="{ backgroundImage: '../public/img/background-food.png' }">
        <div class="container bg-container">
            <img src="public/img/deliveboo.png" class="logo margin-logo" alt="">
            <h3 class="ms-2 mt-4 text-orange">Scegli cosa vuoi mangiare</h3>
            <div class="row gap-4 text-white justify-content-center space-category-top space-category-bottom">
                <div class="col-3" v-for="category in categories">
                    <!-- <input type="checkbox" :value="category.id" v-model="filters" />
              <div><img src="" alt="" /></div>
              <div>{{ category.name }}</div> -->
                    <button class="text-orange font-cat bg-transparent" :key="category.id" type="button"
                        @click="getFiltered(category.id)">{{ category.name }}</button>
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
</style>