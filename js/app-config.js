jQuery.support.cors = true;
jQuery.ajaxSetup({ cache: false });

_.extend(Backbone.Model.prototype,
Backbone.MongoModel.mixin);

var appConfig = {
    baseURL: 'https://api.mongolab.com/api/1/databases/socialmobile-app/collections/',
    addURL: '?apiKey=yGobEjzhT76Pjo9RaOLGfA89xCJXegpl'
}