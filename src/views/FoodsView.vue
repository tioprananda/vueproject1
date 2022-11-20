<template>
  <div class="about">
    <NavBar></NavBar>

    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar<strong>Makanan</strong></h2>
        </div>
      </div>

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Masukan pencarian anda disini ..."
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model ="caridataproduct" @keyup="cariProduct"
        />
        <span class="input-group-text" id="basic-addon1"><b-icon-search></b-icon-search></span>
      </div>

      <div class="row mb-3">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :productprop="product"></CardProduct>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "FoodsView",
  components: {
    NavBar,
    CardProduct,
  },
  data: function () {
    return {
      products: [],
      caridataproduct: ``,
    };
  },
  methods: {
    setProduct: function (data) {
      this.products = data;
    },
    cariProduct : function (){
      axios
      .get("http://localhost:3000/products?q="+this.caridataproduct)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("gagal : ", error));
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log("gagal : ", error));
  },
};
</script>
  