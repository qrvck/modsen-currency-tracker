class Observer {
  fnListeners: {
    [index: string]: Array<() => void> | undefined;
  };

  constructor() {
    this.fnListeners = {};
  }

  subscribe(eventType: string, listener: () => void) {
    const typeListeners = this.fnListeners[eventType];

    if (typeListeners) {
      typeListeners.push(listener);
    } else {
      this.fnListeners[eventType] = [listener];
    }
  }

  unsubscribe(eventType: string, listener: () => void) {
    const typeListeners = this.fnListeners[eventType];

    if (typeListeners) {
      typeListeners.filter((i) => i !== listener);
    }
  }

  notify(eventType: string) {
    const typeListeners = this.fnListeners[eventType];

    if (typeListeners) {
      typeListeners.forEach((fnListener) => fnListener());
    }
  }
}

export { Observer };
