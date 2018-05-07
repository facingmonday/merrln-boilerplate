const _ = require('lodash');

module.exports = function(schema, options){
    function validateAuth(schema){
        if(!schema.options || !schema.options.auth){
            throw(new Error('You must specify an auth parameter to query'));
        }
    }
    schema.pre('find', function(next){
        console.log('this', this);

        validateAuth(this);
        this.where({owner: this.options.auth._id});
        next();
    });

    schema.pre('findOne', function (next) {
        this.where({owner: "another"})
        console.log('this', this);
        next();
    });
}