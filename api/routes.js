'use strict';

var controller = require ('./controller')

module.exports = function(app){

    app.route('/findtweets')
        .get(controller.gettweets)


}