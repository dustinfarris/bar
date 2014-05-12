import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = false;

var App = Ember.Application.extend({
  modulePrefix: 'bar', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'bar');

export default App;
