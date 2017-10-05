import Ember from 'ember';

export default Ember.Component.extend({

  actions:{
    delete(property){
      if (confirm("Are you sure you want to delete this Item?")){
        this.sendAction("deleteProperty", property);
      }
    }
  }
});
