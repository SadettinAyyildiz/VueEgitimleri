var vm1 = new Vue({
    data: {
        message: "",
        title: "Title"
    },
    //template: "<h1> Başlık Atandı </h1>",
    methods: {
        clicked: function() {
            this.message = "Clicked";
        }
    },
})

vm1.$mount("#app");

Vue.component('hello', {
    template: "<h3>Hello...</h3>"
});