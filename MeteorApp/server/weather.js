import { Meteor } from 'meteor/meteor';
import { Weather } from '../imports/api/weatherDB';
import SimpleSchema from 'simpl-schema';


Meteor.publish('weather', function() {
  return Weather.find(); 
});


/* Meteor.publish('weather', function() {
  return Weather.find({degree: {$gt: 40} }); 
}); */


Meteor.methods({
  'weather.update'({ _id, degree, state }) {
    new SimpleSchema({
      _id : { type: String },
      degree: { type: String },
      state: { type: String }
    });
    Weather.update(_id, { 
      $set: { 
          degree: parseInt(degree), 
          state: state 
        }
      });
  }
});

