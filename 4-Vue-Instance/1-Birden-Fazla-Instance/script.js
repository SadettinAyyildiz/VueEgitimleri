vm1 = new Vue({
    el: "#app1",
    data: {
        title: 'VueJS Instance',
        showParagraph: false
    },
    methods: {
        show: function() {
            this.showParagraph = true;
            this.updateTitle('Vue Instance (Güncellendi)');
            // ************* $refs kullanımı ***********************
            this.$refs.myButton.innerText = "Test!!!";
        },
        updateTitle: function(title) {
            this.title = title;
        }
    },
    computed: {
        lovercaseTitle: function() {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function(value) {
            alert('Title değişti, yeni değeri: ' +value);
        }
    },
})

setTimeout(function(){
    vm1.title = "JS Timer tarafından değiştirildi!!!"
},2000)

vm2 = new Vue({
    el: "#app2",
    data: {
        title: "Vue Instance 2"
    },
    methods: {
        changeTitle: function() {
            vm1.title = 'inst2 tarafından değiştirildi'
        }
    }
})

