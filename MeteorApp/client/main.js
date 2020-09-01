import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

Weather = new Mongo.Collection('weather');

Template.weather.events({
  "submit .add-weather": function(event){
    var degree = event.target.degree.value;
    var state = event.target.state.value;
    Weather.insert({
      degree: degree,
      state: state
    });
  }
});