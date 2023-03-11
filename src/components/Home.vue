<script>
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "../store.js";
import TheHeader from "./TheHeader.vue";
export default {
    components: { TheHeader },
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
    <TheHeader></TheHeader>
    <div class="container">
        <div class="row">
            <div class="card col">
                <div class="text-center">
                    <i class="fa-solid fa-burger icon"></i>
                </div>
                <div class="card-body">
                    <p class="card-text">Categoria</p>
                </div>
            </div>
            
        </div>

    </div>
</template>

<style>
.icon{
    width: 20px;
}
</style>