<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>Kullanıcı Adı : {{ name }}</p>
    <p>Kullanıcı Adı : {{ switchName() }}</p>
  </div>
</template>
<script>
  export default {
    props : ["name"],
    methods : {
      switchName(){
        return this.name.split("").reverse().join("");
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>
