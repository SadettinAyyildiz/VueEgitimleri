<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <h3>Directive Sınavı</h3>

      <button v-custom-on:click="clicked" class="btn btn-success">
        Tıkla!
      </button>
    </div>

  </div>
</template>

<script>
export default {
  directives: {
    customOn : {
      bind(el, binding){
        el.onclick = function(){
          binding.value();
        }
      }
    }
  },
  methods: {
    clicked(){
      alert('Tıklandı');
    }
  }
}
</script>