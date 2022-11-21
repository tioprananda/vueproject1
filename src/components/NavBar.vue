<template>
  <div class="container-fluid">
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
      <b-navbar-brand href="#">kulineran.com</b-navbar-brand>
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