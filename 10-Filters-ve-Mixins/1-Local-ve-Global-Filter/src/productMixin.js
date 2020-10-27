export const productMixin = {
    data() {
        return {
          products: ["Klavye", "Monitör", "Mouse", "Hoperlör", "Leptop"],
          searchText: "",
        };
      },
      computed: {
        filtered() {
          return this.products.filter((element) => {
            return element.match(this.searchText);
          });
        },
      },
      created() {
          console.log('Mixin created!');
      },
}