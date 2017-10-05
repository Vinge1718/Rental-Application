import Ember from 'ember';

export default Ember.Component.extend({
  updatePropertyForm: false,
  actions:{
    updatePropertyForm(){
      this.set("updatePropertyForm", true)
    },
    update(property){
      var params = {
        location: this.get("location"),
        town: this.get("town"),
        cost: this.get("cost"),
        bedrooms: this.get("bedrooms"),
        image: this.get("image")
      };
      this.set("updatePropertyForm", false);
      this.sendAction("update", property, params);
    },
  
  }
});
