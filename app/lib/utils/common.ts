import { closeSearchModal } from '@/app/context/modals';

export const removeOverflowHiddenFromBody = () => {
  const body = document.querySelector('body') as HTMLBodyElement;
  body.classList.remove('overflow-hidden');
};

export const addScrollToBody = () => {
  window.document.body.style.overflow = 'visible';
};

export const removeScrollToBody = () => {
  window.document.body.style.overflow = 'hidden';
};

export const addOverflowHiddenToBody = (paddingRight = '') => {
  const body = document.querySelector('body') as HTMLBodyElement;
  body.classList.add('overflow-hidden');

  if (paddingRight) {
    body.style.paddingRight = paddingRight;
  }
};

export const getWindowWidth = () => {
  const { innerWidth: windowWidth } = typeof window !== 'undefined' ? window : { innerWidth: 0 };

  return { windowWidth };
};

export const handleCloseSearchModal = () => {
  closeSearchModal();
  removeOverflowHiddenFromBody();
};
