<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>
        <p>{{ message | upper }}</p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message: "Hello world!!"
    }
  },
  filters: {
    upper(value){
      return value.toUpperCase();
    }
  }
}
</script>

<style>

</style>
