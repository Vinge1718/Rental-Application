import Ember from 'ember';

export default Ember.Component.extend({
  updateNoticeForm: false,
  actions: {
    updateAdvert(notice){
      var params = {
        title: this.get("title"),
        type: this.get("type"),
        about: this.get("about")
      };
      this.set("updateNoticeForm", false);
      this.sendAction("updateAdvert", notice, params);
    },
    updateNoticeForm(){
      this.set("updateNoticeForm", true);
    }
  }
});
