import Ember from 'ember';



  export default Ember.Route.extend({
    model(){
      return Ember.RSVP.hash({
        notices: this.store.findAll("notice"),
        propertys: this.store.findAll("property")
      });
    },

    actions: {
      deleteProperty(property){
        property.destroyRecord();
        this.transitionTo("index");
      },

      deleteNotice(notice){
        notice.destroyRecord();
        this.transitionTo("index");
      },

      update(property, params){
        Object.keys(params).forEach(function(key){
          if(params[key]!==undefined){
            property.set(key,params[key]);
          }
        });
        property.save();
        this.transitionTo("index");
      },

      updateAdvert(notice, params){
        Object.keys(params).forEach(function(key){
          if(params[key]!==undefined){
            notice.set(key, params[key]);
          }
        });
        notice.save();
        this.transitionTo("index");
      },

      saveProperty3(params){
        var newProperty = this.store.createRecord("property", params);
        newProperty.save();
        this.transitionTo("index");
      },

      saveNotice3(params) {
        var newNotice = this.store.createRecord("notice", params);
        newNotice.save();
        this.transitionTo("index");
      }
    }
});
