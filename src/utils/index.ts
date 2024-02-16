function isRelevantData(updateTimestamp: number) {
  const dataRelevanceInMilliseconds = 21600000;
  return Date.now() - updateTimestamp < dataRelevanceInMilliseconds;
}

function getRandomInteger(min: number, max: number) {
  const rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

function blockPageScrolling() {
  const { scrollY } = window;
  const bodyStyle = document.body.style;

  bodyStyle.top = `-${scrollY}px`;
  bodyStyle.left = '0';
  bodyStyle.right = '0';
  bodyStyle.position = 'fixed';
  document.documentElement.style.scrollBehavior = 'auto';
}

function unblockPageScrolling() {
  const bodyStyle = document.body.style;
  const scrollY = bodyStyle.top;

  bodyStyle.position = '';
  bodyStyle.top = '';
  bodyStyle.left = '';
  bodyStyle.right = '';
  window.scrollTo(0, parseInt(scrollY) * -1);
  document.documentElement.style.scrollBehavior = '';
}

function convertTimestampToStringDate(timestamp: number) {
  const date = new Date(timestamp);
  const fullYear = date.getFullYear();
  const fullMonth = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const fullDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  return `${fullYear}-${fullMonth}-${fullDate}`;
}

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

export {
  blockPageScrolling,
  convertTimestampToStringDate,
  getRandomInteger,
  isRelevantData,
  Observer,
  unblockPageScrolling,
};
