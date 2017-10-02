import Ember from 'ember';

var propertys = [{
  location:"Kitisuru",
  town:"Nairobi",
  cost:300000,
  bedrooms:4,
  image:"https://images.prop24.com/FetchImage.ashx?uid=187938128&meta=Crop237x198"
},
{
  location:"Runda",
  town:"Nairobi",
  cost:400000,
  bedrooms:3,
  image:"https://images.prop24.com/FetchImage.ashx?uid=187884994&meta=Crop237x198"
},
{
  location:"Ruaka",
  town:"Kiambu",
  cost:35000,
  bedrooms:3,
  image:"https://images.prop24.com/FetchImage.ashx?uid=185131718&meta=Crop237x198"
},
{
  location:"Thindigua",
  town:"Kiambu",
  cost:45000,
  bedrooms:3,
  image:"https://images.prop24.com/FetchImage.ashx?uid=185749792&meta=Crop237x198"
}];


var notices = [{
  title: "Any New Related Issue",
  type: "Animals and Pets",
  about:"contacts, price and location"
},
{
  title:"Pools and Recreational Equipments",
  type:"home or commercial",
  about:"call: 07009876543, Prices are negotiable, loccated in Kiambu town"
}];

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      notices,
      propertys
    });
  }
});
