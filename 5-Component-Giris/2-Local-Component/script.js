var cmp = {
    data: function() {
        return {
            status: "Pasif"
        }
    },
    template: '<p> Sunucu durumu: {{ status }} (<button @click="changeStatus">Değiştir</button>) </p>',
    methods: {
        changeStatus: function() {
            this.status = "Active"
        }
    },
    
};

new Vue({
    el: "#app",
    components: {
        "my-comp" : cmp
    }
})

new Vue({
    el: "#app2",
})