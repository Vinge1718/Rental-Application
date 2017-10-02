import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr(),
  town: DS.attr(),
  cost: DS.attr(),
  bedrooms: DS.attr(),
  image:  DS.attr()
});
