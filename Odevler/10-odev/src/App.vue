<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <h3>1:</h3>
      <input type="text" v-model="message">
      <p>Mesaj: {{ message }}</p>
      <p>Tersten: {{ message | reverseString }}</p>
      <p>Karakter sayısı: {{ message | kelimeSayisi }}</p>
      <hr>
      <h3>2:</h3>
      <p>Mesaj: {{ message }}</p>
      <p>Tersten: {{ filtered }}</p>
      <p>Karakter sayısı: {{ filtered2 }}</p>
      
    </div>

  </div>
</template>

<script>

import { demoMixin } from './demoMixin'

export default {
  mixins: [demoMixin]
}
</script>