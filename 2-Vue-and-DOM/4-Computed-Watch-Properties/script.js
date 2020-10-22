new Vue({
    el: "#app",
    data: {
        counter: 0,
        secondCounter: 0
    },
    methods: {
        result: function() {
            return this.counter > 10 ? "Bigger than 10" : "Less than 10";

        },
    },
    computed: { // her seferinde domu çalıştırmaz. etkileşim olduğunda çalıştırır
        output: function() {
            return this.counter > 10 ? 'Bigger than 10' : 'Less than 10';
        }
    },
    watch: {
        counter: function(value){ // counteri dinler bir değişiklik olduğunda haberdar olur
            vm = this;
            setTimeout(function(){ // 1500 ms sonra tekrar 0 yapar
                vm.counter = 0;
            },1500)
        }
    },
});