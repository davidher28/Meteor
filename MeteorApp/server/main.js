import { Meteor } from 'meteor/meteor';
import { Weather } from '../imports/api/weather'

Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.methods({
  'get_avg': function (){
    console.log('Correcto.')
  }
})
/*
Meteor.publish('weather',function(){
  console.log("HOLA");
  return Weather.find().fetch();
  ReactiveAggregate(this, Weather, [{
    $group: {
      '_id': null,
      'avg': { 
        $avg: 'degree'
      }
    }, 
      $project: {
        avg: '$avg'
      }
  }], { clientCollection: "weather" });
})  
*/
