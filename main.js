new Vue({
  el: "#app",
  data: {
    color: "gray",
    width: 50
  },
  computed: {
    myStyle: function() {
      return {
        backgroundColor: this.color,
        width: this.width + "px"
      };
    }
  }
});
