<script>
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.vue";
import axios from "axios";
import {store} from './store';
import { DOMDirectiveTransforms } from "@vue/compiler-dom";
import { useAttrs } from "vue";

export default {
  components: { Home },
  data() {
    return {
    };
  }

}
</script>

<template>
  <Home></Home>


  <RouterView ></RouterView>
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
