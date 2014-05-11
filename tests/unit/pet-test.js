import { test, moduleForModel } from 'ember-qunit';

moduleForModel('pet', 'Pet Model', {
  needs: ['model:person']
});

test('Pet is a valid ember-data Model', function() {
  var pet = this.subject();
  ok(pet);
  ok(pet instanceof DS.Model);
});

test('A Pet belongs to a Person', function() {
  var Pet = this.store().modelFor('pet');
  var Person = this.store().modelFor('person');
  var relationships = Ember.get(Pet, 'relationships');

  deepEqual(relationships.get(Person), [
    { name: 'owner', kind: 'belongsTo' }
  ]);
});
