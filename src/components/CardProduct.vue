<template>
  <div class="cardproduct">
    <div class="card shadow">
      <img :src="'assets/images/'+productprop.gambar" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{productprop.nama}}</h5>
        <p class="card-text">Rp. {{productprop.harga}}</p>
        <router-link :to="'/foods/'+productprop.id"  class="btn btn-success"><b-icon-cart></b-icon-cart> Pesan</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `CardProduct`,
  props: [`productprop`],
};
</script>

<style scoped>

</style>