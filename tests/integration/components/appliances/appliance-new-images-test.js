import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('appliances/appliance-new-images', 'Integration | Component | appliances/appliance new images', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{appliances/appliance-new-images}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#appliances/appliance-new-images}}
      template block text
    {{/appliances/appliance-new-images}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
