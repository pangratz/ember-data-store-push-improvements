import 'ember-data-store-push-improvements';
import { moduleFor, test } from 'ember-qunit';

moduleFor('service:store', 'store.normalizePayload', {
  integration: true
});

test('returns normalized payload', function(assert) {
  let store = this.subject();

  let normalized = store.normalizePayload('my-model', {
    data: {
      type: 'my-model',
      id: 1
    }
  });

  assert.deepEqual(normalized, {
    data: {
      type: 'my-model',
      id: '1',
      attributes: {},
      relationships: {}
    }
  });
});
