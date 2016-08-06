import DS from 'ember-data';

const { Store } = DS;

function assert() {}
function deprecate() {}

Store.reopen({

  normalizePayload(modelName, payload) {
    let serializer = this.serializerFor(modelName);

    if (serializer.normalizePayload) {
      return serializer.normalizePayload(this, ...arguments);
    }

    if (serializer.pushPayload) {
      deprecate("rename `serializer.pushPayload` to `serializer.normalizePayload`" +
                " and return normalized payload instead of pushing it into the store");

      return serializer.__normalizePayload(this, payload);
    }

    assert("serializer needs to implement normalizePayload");
  }

});
