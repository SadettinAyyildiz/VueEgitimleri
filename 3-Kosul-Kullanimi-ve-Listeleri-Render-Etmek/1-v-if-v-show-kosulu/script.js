new Vue({
    el: "#app",
    data: {
        show: false,
        sayi: 0,
        showParagh: true
    },
    methods: {
        changeCount: function() {
            this.sayi++;
        }
    },
})