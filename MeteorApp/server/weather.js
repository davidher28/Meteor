import { Meteor } from 'meteor/meteor';
import { Weather } from '../imports/api/weatherDB'

Meteor.startup(() => {
  // code to run on server at startup

});


Meteor.publish('weather', function() {
  return Weather.find(); 
});


/* Meteor.publish('weather', function() {
  return Weather.find({degree: {$gt: 30} }); 
});
 */




