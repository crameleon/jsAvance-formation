export function createPubSub() {
  const pubsub = {
    events: new Map()
  };

  pubsub.on = function (event, callback) {
    // TODO: register the callback to trigger when `event` happens
    if (pubsub.events.has(event)) {
      pubsub.events.get(event).push(callback);
    } else {
      pubsub.events.set(event, [callback]);
    }
  };

  pubsub.emit = function (event, data) {
    // TODO: call the callbacks registered for `event`
    if (pubsub.events.has(event)) {
      pubsub.events.get(event).forEach((callback) => callback(data));
    }
    // if (pubsub.events.has("*")) {
    //   pubsub.events.get("*").map((callback) => callback(data));
    // }
  };

  // pubsub.off = function (event, callback) {
  //   const evt = pubsub.events.get(event);
  //   if (pubsub.events.has(event) && evt.includes(callback)) {
  //     evt.splice(evt.indexOf(callback), 1);
  //   }
  //   pubsub.events.set(
  //     event,
  //     callback.filter((c) => c !== callback)
  //   );
  // };

  return pubsub;
}

// To go further:
// - add a method off(event, callback) to remove a subscription
// - on('*') to react to all events
