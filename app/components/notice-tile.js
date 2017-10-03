import Ember from 'ember';

export default Ember.Component.extend({
  updateNoticeForm: false,
  actions: {
    delete(notice){
      if (confirm("Are you sure you want to delete this notice item?")){
        this.sendAction("deleteNotice", notice);
      }
    },

    updateAdvert(notice, params) {
      this.sendAction("updateAdvert", notice, params);
    }
  }
});
