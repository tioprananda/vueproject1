<template>
  <div class="FoodsDetail">
    <NavBar></NavBar>

    <div class="container">
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb" mt-5>
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Order</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <img :src="'../assets/images/'+product.gambar" class="img-fluid shadow" alt="">
        </div>
        <div class="col-md-6">
          <h3>
            <strong>{{ product.nama }}</strong>
          </h3>
          <h4>
            Harga :<strong> Rp. {{ product.harga }}</strong>
          </h4>
          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="jumlah">Jumlah Pemesanan</label>
              <input type="number" class="form-control" v-model="pesan.jumlahPesan" />
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan</label>
              <textarea name="keterangan" id="keterangan" v-model="pesan.keterangan" class="form-control" placeholder="ex : pedas, double, dll"></textarea>
            </div>
            <button type="submit" class="btn btn-success" @click="pemesanan">Beli</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";

export default {
  name: `FoodsDetail`,
  components: {
    NavBar,
  },
  data: function () {
    return {
      product: ``,
      pesan : {
        jumlahPesan:``,
        keterangan:``,
        products:[],
      },
    };
  },
  methods: {
    getProduct: function (data) {
      this.product = data;
    },
    pemesanan : function (){
      if(this.pesan.jumlahPesan){

        this.pesan.products = this.product;
      axios
      .post("http://localhost:3000/keranjangs",this.pesan)
      .then(() => { 
      this.$router.push({ path : '/keranjang' })
      this.$toast.success(`Pesanan ditambahkan ke keranjang`,{
        duration : 3000,
        message : `Pesanan berhasil ditambahkan`,
        position : `top-right`,
        dismissible : true,
      });
    })
      .catch((error) => console.log("gagal : ", error));
      }else{
        this.$toast.error(`Jumlah pesanan harus diisi`,{
        duration : 3000,
        message : `Jumlah pesanan harus diisi`,
        position : `top-right`,
        dismissible : true,
      })
      }
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.getProduct(response.data))
      .catch((error) => console.log("gagal : ", error));
  },
};
</script>

<style>
</style>