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


Router.route('/save', function () {
  this.render('save');
  this.render('bar', {
    to:"navbar"
  });
});


Template.bar.helpers({
  bar() {
    var temp = Weather.find();
    var degrees = temp.map(function(weather){return weather.degree;});
    if (degrees.length != 0){
      return Math.round(degrees.reduce((a,b) => a + b) / degrees.length);
    }else{
      return '-';
    }
  },
})


Template.weather.helpers({
  weather() {
    var upd = 0;
    return Weather.find();
  }
})


Template.weather.events({
  "click .delete-weather": function(event){
    Weather.remove(this._id);
  },
});


Template.save.events({
  "submit .add-weather": function(event){
    var degree = event.target.degree.value;
    var state = event.target.state.value;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    Weather.insert({
      date: dateTime,
      degree: parseInt(degree),
      state: state
    });
  }
});


Template.edit.events({
  "submit .update-weather": function(event){
    var degree = event.target.degree.value;
    var state = event.target.state.value;
    Weather.update(this._id, 
      { $set: 
        { 
          degree: parseInt(degree), 
          state: state 
        }
      }
    );
  }
});