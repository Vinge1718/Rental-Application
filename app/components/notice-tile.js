import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(notice){
      if (confirm("Are you sure you want to delete this notice item?")){
        this.sendAction("deleteNotice", notice);
      }
    }
  }
});
