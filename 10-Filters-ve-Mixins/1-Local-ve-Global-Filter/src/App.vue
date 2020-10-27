<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>
        <p>{{ message | upper | lower }}</p>

        <hr>
        <input type="text" v-model="searchText">
        <ul>
          <li v-for="product in filtered" :key="product"> {{ product }} </li>
        </ul>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>

import FilterList from './FilterList';

export default {
  components: {
    appList: FilterList
  },
  data(){
    return {
      message: "Hello world!!",
      products: ["Klavye", "Monitör", "Mouse", "Hoperlör", "Leptop"],
      searchText: ''
    }
  },
  filters: {
    upper(value){
      return value.toUpperCase();
    }
  },
  computed: {
    filtered(){
      return this.products.filter((element) => {
        return element.match(this.searchText);
      })
    }
  }
}
</script>

<style>

</style>
