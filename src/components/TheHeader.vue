<script>
import "bootstrap/dist/css/bootstrap.min.css";
import {store} from "../store.js";
export default {
  data() {
    return {
      store,  
    };
  },
  methods: {
        
  },
  mounted() {
    
  },
};
</script>

<template>
    <div class="d-flex justify-content-end">
        <div>
          <nav class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown" >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active text-orange" aria-current="page" href="/">Home</a>
                    
                  </li>
<<<<<<< HEAD
=======
                  <li class="nav-item">
                    <a class="nav-link text-orange" href="/restaurants">Ristoranti</a>
                  </li>
>>>>>>> parent of 031ac7f (Merge branch 'Paolo')
                  <li class="nav-item">
                    <a class="nav-link text-orange" href="http://127.0.0.1:8000/">Area Ristoratori</a>
                  </li>

                    <!-- menu destinato al carrello -->
                  
                  <li v-if="(this.$route.name === 'dish.show')" class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Shopping-Cart {{this.store.totalCounter}}
                    </a>
                    <ul class="dropdown-menu">
                      
                      <li v-for="item in this.store.ShoppingCart"><div class="dropdown-item">{{item.name+ " " + item.counter}}</div></li>
                      
                  
                    </ul>
                  </li>



                </ul>
              </div>
            </div>
          </nav>
        </div>
    </div>
</template>

<style scoped>
.fixed {
position: fixed;
top: 0;
z-index: 999;
margin: auto;
background-color: gainsboro;
}
.text-orange {
  color: orange !important;
}
.font-cat {
  font-size: 23px;
}
</style>
