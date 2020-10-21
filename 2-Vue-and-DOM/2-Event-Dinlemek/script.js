new Vue ({
    el: "#app",
    data: {
        count: 0,
        x: 0,
        y: 0
    },
    methods: {
        changeCount: function() {
            this.count ++;
        },
        showAlert: function() {
            alert("Hello world!");
        },
        updateCoords: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;

        },
        alertName: function(name) {
            alert(name);
        },
        changeCount2: function(val, event) {
            this.count += val;
            alert(this.count);
        },
        alertInput: function(event) {
            alert(event.target.value);
        },
    }

});