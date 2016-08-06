import DS from 'ember-data';

const { Serializer } = DS;

Serializer.reopen({

  __normalizePayload(store, payload) {
    const originalPushMethod = store.push;
    let normalizedPayload;

    // temporarily patch store.push, which is invoked in serializer.pushPayload
    store.push = function(_normalizedPayload) {
      normalizedPayload = _normalizedPayload;
    }

    this.pushPayload(store, payload);

    // restore original store.push
    store.push = originalPushMethod;

    return normalizedPayload;
  }

});
