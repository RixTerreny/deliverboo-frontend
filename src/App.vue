<script>
import "bootstrap/dist/css/bootstrap.min.css";
import TheHeader from "./components/TheHeader.vue";
import axios from "axios";
import {store} from './store';
import { DOMDirectiveTransforms } from "@vue/compiler-dom";
import { useAttrs } from "vue";
import { RouterView } from "vue-router";

export default {
  components: { TheHeader, RouterView},
  data() {
    return {
    };
  }

}
</script>

<template>
  <TheHeader></TheHeader>


  <RouterView></RouterView>
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
