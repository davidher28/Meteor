import { Weather } from '../imports/api/weather'

import './main.html';


Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('weather', {
    to:"main"
  });
  this.render('bar', {
    to:"navbar"
  });
});

Router.route('/edit/:_id', function () {
  this.render('edit', { 
    data: function (){
      return Weather.findOne(this.params._id);
    }
  });
  this.render('bar', {
    to:"navbar"
  });
});

Template.weather.helpers({
  weather() {
    var upd = 0;
    return Weather.find();
  }
})

Template.weather.events({
  "submit .add-weather": function(event){
    var degree = event.target.degree.value;
    var state = event.target.state.value;
    var date = (new Date()).toISOString().split('T')[0];
    Weather.insert({
      date: date,
      degree: degree,
      state: state
    });
  },
  "click .delete-weather": function(event){
    Weather.remove(this._id);
  },
});

Template.edit.events({
  "submit .update-weather": function(event){
    var degree = event.target.degree.value;
    var state = event.target.state.value;
    Weather.update(this._id, 
      { $set: 
        { 
          degree: degree, 
          state: state 
        }
      }
    );
  }
});