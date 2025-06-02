import { createDomain } from 'effector';

const modals = createDomain();

export const openMenu = modals.createEvent();
export const closeMenu = modals.createEvent();
export const openSearchModal = modals.createEvent();
export const closeSearchModal = modals.createEvent();
export const toggleSearchModal = modals.createEvent();
export const toggleCurrencyModal = modals.createEvent();
export const openCartPopup = modals.createEvent();
export const closeCartPopup = modals.createEvent();

export const $menuIsOpen = modals
  .createStore(false)
  .on(openMenu, () => true)
  .on(closeMenu, () => false);

export const $searchModal = modals
  .createStore(false)
  .on(openSearchModal, () => true)
  .on(closeSearchModal, () => false)
  .on(toggleSearchModal, (state) => !state)



  export const $cartModal = modals
  .createStore(false)
  .on(openCartPopup, () => true)
  .on(closeCartPopup, () => false)



  export const $currencyModal = modals
  .createStore(false)

  .on(toggleCurrencyModal, (state) => !state)

