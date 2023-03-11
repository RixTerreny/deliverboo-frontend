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
    <div class="d-flex justify-content-center">
        <div class="fixed">
          <nav class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
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
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/restaurants">Ristoranti</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="http://127.0.0.1:8000/">Backend</a>
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
</style>
