import Ember from 'ember';

export default Ember.Component.extend({
  addNewNotice: false,
  actions: {
    noticeFormShow(){
      this.set("addNewNotice", true);
    },

    saveNotice1(){
      var params = {
        title: this.get("title"),
        type:this.get("type"),
        about: this.get("about")
      };
      this.set("addNewNotice", false);
      this.sendAction("saveNotice2", params);
    }
  }
});
