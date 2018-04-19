const PASSIVE_EVENT_LISTENERS = ['touchstart'];

export default () => {
  let classNames = [];

  return {
    addClass: updateClassNames => (className) => {
      classNames = [...classNames, className];
      updateClassNames(classNames);
    },
    deregisterInteractionHandler: element => (type, handler) =>
      element.removeEventListener(type, handler),
    hasClass: propClassNames => className =>
      [...classNames, ...propClassNames].includes(className),
    registerInteractionHandler: element => (type, handler) =>
      element.addEventListener(
        type,
        handler,
        PASSIVE_EVENT_LISTENERS.includes(type) ? { passive: true } : null,
      ),
    removeClass: updateClassNames => (className) => {
      classNames = classNames.filter(currentClassName => currentClassName !== className);
      updateClassNames(classNames);
    },
    setStyle: element => (property, value) => {
      // eslint-disable-next-line no-param-reassign
      element.style[property] = value;
    },
  };
};
