import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('button-with-confirmation-route', 'Integration | Component | button with confirmation route', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{button-with-confirmation-route}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#button-with-confirmation-route}}
      template block text
    {{/button-with-confirmation-route}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
