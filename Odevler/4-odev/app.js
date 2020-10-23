new Vue({
  el: '#exercise',
  data: {
    color: "highlight"
  },
  methods: {
    startEffect: function() {
      return {
        backgroundColor: this.color
    }
    }
  }
});
