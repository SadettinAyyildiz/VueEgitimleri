<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <app-memory>
          <h3 slot="heading">Lorem, ipsum.</h3>
          <p slot="content">Lorem ipsum dolor sit amet.</p>
          <p>İsimlendirilmemiş slot.</p>
        </app-memory>
      </div>
    </div>
  </div>
</template>

<script>

import Memory from './Memory';

export default {
  components: {
    appMemory: Memory
  }
}
</script>
