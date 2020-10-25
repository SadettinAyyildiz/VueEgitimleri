new Vue ({
	el: "#app",
  data: {
  	title: "Hello world!",
    name: "Sadettin",
    surname: "Ayyildiz",
    link: "https://www.biobilgi.com/",
    blogLink: "<a href='https://www.biobilgi.com/'>BioBilgi</a>"
  },

  methods: {
  	changeTitle : function() {
      this.title = "Good bye!"
    	this.title = event.target.value
    },

    methods: function() {
      return this.surname
    }

  }
});