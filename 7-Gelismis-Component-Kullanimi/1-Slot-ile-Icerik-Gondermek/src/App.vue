<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <app-memory content="Bugün hava çok güze..."></app-memory>
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
