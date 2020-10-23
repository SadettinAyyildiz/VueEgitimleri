new Vue({
    el: "#app",
    data: {
        show: false,
        isArray: false,
        names: ["Kuzey", "Alp", "Sadettin", "İpek"],
        members: [
            {name: "Kuzey Alp", surname: "Ayyıldız", sevdigiRakamlar: [1,2,3,4]},
            {name: "Sadettin", surname: "Ayyıldız", sevdigiRakamlar: [3,4,5,6]},
            {name: "Kuzey", surname: "Ayyıldız", sevdigiRakamlar: [1,2,3,4]}
        ]
    }
})