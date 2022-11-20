<template>
  <div class="hero">

    <!-- desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <strong>Delicious Food Menu,</strong><br />In Your Gadget
              <p>ayo segera pesan makanan kesukaan anda.</p>
              <router-link class="btn btn-lg btn-success" to="/foods">
                <b-icon-arrow-right></b-icon-arrow-right>Pesan
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/Hero.png" alt="hero" width="100%" />
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <img src="../assets/Hero.png" alt="hero" width="100%" />
        </div>
        <div class="col md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <strong>Delicious Food Menu,</strong><br />In Your Gadget
              <p>ayo segera pesan makanan kesukaan anda.</p>
              <button class="btn btn-lg btn-success">
                <b-icon-arrow-right></b-icon-arrow-right>Pesan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: `Hero`,
};
</script>

<style scoped>
.hero {
  font-size: 40px;
}

.hero p {
  font-size: 20px;
  color: gray;
}
</style>