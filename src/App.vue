<script setup>
import HelloWorld from './components/HelloWorld.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
</script>

<template>
<div class="container">
  <h1 class="mb-5">Cerca il tuo piatto preferito!</h1>
  <div class="row gap-4 text-white justify-content-center">
    <div class="col-3 bg-black  pb-2">
      <div><img src="" alt=""></div>
      <i class="fa-solid fa-pizza"></i>
      <div>Pizza</div>
    </div>
    <div class="col-3 bg-black pb-2">
      <div><img src="" alt=""></div>
      <i class="fa-solid fa-sushi"></i>
      <div>Giapponese</div>
    </div>
    <div class="col-3 bg-black pb-2">
      <div><img src="" alt=""></div>
      <div>Vegetariano</div>
    </div>
    <div class="col-3 bg-black pb-2">
      <div><img src="" alt=""></div>
      <div>Dessert</div>
    </div>
    <div class="col-3 bg-black pb-2">
      <div><img src="" alt=""></div>
      <div>Americano</div>
    </div>
    <div class="col-3 bg-black pb-2">
      <div><img src="" alt=""></div>
      <div>Kebab</div>
    </div>
    <div class="col-3 bg-black pb-2">
      <div><img src="" alt=""></div>
      <div>Italiano</div>
    </div>
    <div class="col-3 bg-black pb-2">
      <div><img src="" alt=""></div>
      <div>Poke</div>
    </div>
    <div class="col-3 bg-black pb-2">
      <div><img src="" alt=""></div>
      <div>Messicano</div>
    </div>
    <div class="col-3 bg-black pb-2">
      <div><img src="" alt=""></div>
      <div>Indiano</div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped >
@use './styles/general.scss' as *;

i{
    display: inline-block;
    height: 1rem;
    width: 1rem;
}

.col-3{
  border-radius: 20px;
}

.col-3:hover div{
  color:red;
  
}
</style>
