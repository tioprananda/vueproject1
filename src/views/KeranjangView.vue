<template>
  <div class="keranjang">
    <NavBar :keranjangprop="isiKeranjang"></NavBar>
    <div class="container">
      <h2>Halaman <strong>Keranjang</strong></h2>
      <div class="row mt-4">
        <div class="col">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Gambar</th>
                <th scope="col">Nama Makanan</th>
                <th scope="col">Keterangan</th>
                <th scope="col">Harga</th>
                <th scope="col">Porsi</th>
                <th scope="col">Total</th>
                <th scope="col">Hapus</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(keranjang,index) in isiKeranjang" :key="keranjang.id">
                <th scope="row">{{index+1}}.</th>
                <td><img :src="'../assets/images/'+keranjang.products.gambar" class="img-fluid shadow" alt="" width="200"></td>
                <td>{{keranjang.products.nama}}</td>
                <td>{{keranjang.keterangan ? keranjang.keterangan : `-`}}</td>
                <td>{{keranjang.products.harga}}</td>
                <td>{{keranjang.jumlahPesan}}</td>
                <td>{{keranjang.products.harga * keranjang.jumlahPesan}}</td>
                <td align="center" class="text-danger"><b-icon-trash @click="hapusKeranjang(keranjang.id)"></b-icon-trash></td>
              </tr>
              <tr>
                <td colspan="8 " align="right">Total Harga : <strong>Rp. {{totalHarga}}</strong></td>
              </tr>

           
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios"

export default {
  name: `KeranjangView`,
  components: {
    NavBar,
  },
  data: function () {
    return {
        isiKeranjang : [],
    }
  },
  methods : {
    getKeranjang : function (data) {
        this.isiKeranjang = data;
    },
    hapusKeranjang : function(id) {
      // axios hapus data
      axios
      .delete("http://localhost:3000/keranjangs/"+id)
      .then(() => {
        this.$toast.error(`Pesanan berhasil dihapus`,{
        duration : 3000,
        message : `Pesanan berhasil dihapus`,
        position : `top-right`,
        dismissible : true,
      })

      // setelah dihapus, panggil kembali data yg tersisa
      axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.getKeranjang(response.data))
      .catch((error)=>console.log('gagal : ',error));
      })

      // axios gagal mengambil data
      .catch((error)=>console.log('gagal : ',error));
    }
  },
  computed : {
    totalHarga : function(){
      return this.isiKeranjang.reduce((acc,curr) => {
        return (acc + curr.products.harga * curr.jumlahPesan)
      },0)
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.getKeranjang(response.data))
      .catch((error)=>console.log('gagal : ',error));
  },
};
</script>

<style>
</style>