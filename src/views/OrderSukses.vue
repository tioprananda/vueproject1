<template>
  <div class="ordersukses">
    <NavBar></NavBar>
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <img src="../assets/ordersukses.png" width="40%" /><br />
          <h3>
            <strong>Pesanan berhasil</strong><br />Mohon menunggu beberapa saat
            <br />
            terimakasih
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: `OrderSukses`,
  components: {
    NavBar,
  },
};
</script>

<style>
</style>