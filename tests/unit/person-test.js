import { test, moduleForModel } from 'ember-qunit';

moduleForModel('person', 'Person Model');

test('Person is a valid ember-data Model', function() {
  var person = this.subject();
  ok(person);
  ok(person instanceof DS.Model);
});
