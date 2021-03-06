import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('appliances/appliances-list', 'Integration | Component | appliances/appliances list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{appliances/appliances-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#appliances/appliances-list}}
      template block text
    {{/appliances/appliances-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
