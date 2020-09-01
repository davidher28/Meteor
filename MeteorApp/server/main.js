import { Meteor } from 'meteor/meteor';

Weather = new Mongo.Collection('weather');

Meteor.startup(() => {
  // code to run on server at startup
});
