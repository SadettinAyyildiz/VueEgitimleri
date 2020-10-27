export const demoMixin = {
    data(){
        return {
          message: ''
        }
      },
      filters: {
        reverseString(value){
          return value.split("").reverse().join("");
        },
        kelimeSayisi(value){
          return value.length;
        }
      },
      computed: {
        filtered(){
            return this.message.split("").reverse().join(""); 
        },
        filtered2(){
            return this.message.length;
        }
      }
}