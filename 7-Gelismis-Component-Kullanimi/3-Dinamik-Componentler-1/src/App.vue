<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <br><br>
        <button @click="selectedComponent = 'appMemory'" class="btn btn-sm btn-primary">appMemory</button>
        <button @click="selectedComponent = 'newMemory'" class="btn btn-sm btn-primary">appNewMemory</button>
        <button @click="selectedComponent = 'appAuthor'" class="btn btn-sm btn-primary">appAuthor</button>
        <hr>
        <p>{{ selectedComponent }}</p>
        <hr>
        <component :is="selectedComponent">  <!-- Her seferinde tekrardan oluşturur -->
          <h3 slot="heading">Lorem, ipsum.</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </component>

        <keep-alive>  <!-- Her seferinde tekrardan destroy etmez -->
          <component :is="selectedComponent">
          <h3 slot="heading">Lorem, ipsum.</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </component>
        </keep-alive>
 
      </div>
    </div>
  </div>
</template>

<script>

import Memory from './components/Memory';
import Author from './components/Author';
import NewMemory from './components/NewMemory';

export default {
  data(){
    return {
      selectedComponent: "appMemory"
    }
  },
  components: {
    appMemory: Memory,
    appAuthor: Author,
    newMemory: NewMemory
  }
}
</script>
