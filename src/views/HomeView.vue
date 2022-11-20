<template>
  <div class="home">
    <NavBar></NavBar>
    <div class="container">
      <Hero></Hero>

      <div class="row mt-4">
        <div class="col">
          <h2>Best<strong>Foods</strong></h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-succes float-right"
            ><b-icon-eye></b-icon-eye> Lihat Semua</router-link
          >
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :productprop="product"></CardProduct>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavBar,
    Hero,
    CardProduct,
  },
  data: function () {
    return {
      products: [],
    };
  },
  methods: {
    setProduct: function (data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProduct(response.data))
      .catch((error)=>console.log('gagal : ',error));
  },
};
</script>
