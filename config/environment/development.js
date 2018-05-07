'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost:27017/merrln-dev'
  },
  facebook: {
    clientID:     process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL:  (process.env.DOMAIN || 'http://localhost:9000') + '/auth/facebook/callback',
    profileURL: process.env.PROFILE_URL || 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
    profileFields : ['id', 'email', 'name']
  },

  twitter: {
    clientID:     process.env.TWITTER_ID,
    clientSecret: process.env.TWITTER_SECRET,
    callbackURL:  (process.env.DOMAIN || '') + '/auth/twitter/callback'
  }
};
