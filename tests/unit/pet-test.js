import { test, moduleForModel } from 'ember-qunit';
import Pet from 'bar/models/pet';
import Person from 'bar/models/person';

moduleForModel('pet', 'Pet Model', {
  needs: ['model:person']
});

test('Pet is a valid ember-data Model', function() {
  var pet = this.subject();
  ok(pet);
  ok(pet instanceof DS.Model);
});

test('A Pet belongs to a Person', function() {
  this.subject();
  var relationships = Ember.get(Pet, 'relationships');
  deepEqual(relationships.get(Person), [
    { name: 'owner', kind: 'belongsTo' }
  ]);
});
