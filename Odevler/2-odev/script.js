new Vue({
 el: "#app",
 data: {
    message: "Hello world!",
    message2: "Hello world!",
 },
 methods: {
     showAlert: function() {
         alert();
     },
     changeMessage: function() {
        this.message = event.target.value;
     },
     clickEnter: function() {
        this.message2 = event.target.value;
     }
 },
});