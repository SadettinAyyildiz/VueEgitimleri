<template>
  <div class="container">
    <h3>User Component</h3>
    <hr>
    <router-view></router-view>
    <hr>

    <button class="btn btn-success" @click="navigatetoHome">Home Component</button>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        id: this.$route.params.id
      }
    },
    methods: {
      navigatetoHome(){
        // aşağıdaki üç yöntemle de yapılabilir
        //this.$router.push("/")
        //this.$router.push({path : '/'})
        this.$router.push({name : 'anasayfa'})
      }
    },
    watch : {
      "$route"(to,from){
        this.id = to.params.id
      }
    }
  }
</script>
