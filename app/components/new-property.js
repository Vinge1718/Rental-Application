import Ember from 'ember';

export default Ember.Component.extend({
  addNewProperty : false,
  actions: {
    propertyFormShow(){
      this.set("addNewProperty", true );
    },

    saveProperty1(){
      var params = {
        location: this.get("location"),
        town: this.get("town"),
        cost: this.get("cost"),
        bedrooms: this.get("bedrooms"),
        image: this.get("image")
      };
      this.set("addNewProperty", false);
      this.sendAction("saveProperty2", params);
    }
  }
});
