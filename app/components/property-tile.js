import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing : false,
  updatePropertyForm: false,
  actions:{
    imageShow(){
      this.set("isImageShowing", true);
    },
    imageHide(){
      this.set("isImageShowing", false);
    },
    update(property, params) {
      this.sendAction("update", property, params);
    },
    delete(property){
      if (confirm("Are you sure you want to delete this Item?")){
        this.sendAction("deleteProperty", property);
      }
    }
  }
});
