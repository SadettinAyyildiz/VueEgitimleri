new Vue({
    el: "#exercise",
    data: {
        counter: 0,
    },
    methods: {
        result: function() {
            return this.counter == 33 ? "Eşit" : "Eşit değil";

        },
    },
    watch: {
        counter: function(value){ // counteri dinler bir değişiklik olduğunda haberdar olur
            vm = this;
            setTimeout(function(){ 
                vm.counter = 0;
            },5000)
        }
    },
});