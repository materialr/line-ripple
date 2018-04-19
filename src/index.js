import { MDCLineRippleFoundation } from '@material/line-ripple';

import adapterUtilities from './adapter-utilities';

export default ({ elementRoot, propClassNames, updateClassNames }) => {
  const {
    addClass,
    deregisterInteractionHandler,
    hasClass,
    registerInteractionHandler,
    removeClass,
    setStyle,
  } = adapterUtilities();

  return new MDCLineRippleFoundation({
    addClass: addClass(updateClassNames),
    removeClass: removeClass(updateClassNames),
    hasClass: hasClass(propClassNames),
    setStyle: setStyle(elementRoot),
    registerEventHandler: registerInteractionHandler(elementRoot),
    deregisterEventHandler: deregisterInteractionHandler(elementRoot),
  });
};
