var Marionette = require('marionette');
var style = require("./public/css/style.scss");

var Controller = Marionette.Object.extend({
  
  initialize: function(options){
    
    this.app = options.app;
    
  }
  
});

module.exports = Controller;
