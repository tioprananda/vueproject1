<template>
  <div class="container-fluid">
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/foods" class="nav-link">Foods</router-link>
          </li>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <li class="nav-item">
            <router-link to="/keranjang" class="nav-link"
              >Keranjang
              <b-icon-bag></b-icon-bag>
              <span class="badge badge-success ml-2">{{
                keranjangprop ? keranjangprop.length : this.pesanans.length
              }}</span>
            </router-link>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>

  <!-- <nav class="navbar navbar-expand-lg fixed-top bg-white">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/foods" class="nav-link">Foods</router-link>
        </li>
      </ul>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <router-link to="/keranjang" class="nav-link">Keranjang
                <b-icon-bag></b-icon-bag>
                <span class="badge badge-success ml-2">{{ keranjangprop ? keranjangprop.length : this.pesanans.length}}</span>
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav> -->
</template>

<script>
import axios from "axios";
export default {
  name: `NavBar`,
  props: [`keranjangprop`],

  data: function () {
    return {
      pesanans: [],
    };
  },
  methods: {
    getpesanans: function (data) {
      this.pesanans = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs/")
      .then((response) => this.getpesanans(response.data))
      .catch((error) => console.log("gagal : ", error));
  },
};
</script>

<style>
</style>