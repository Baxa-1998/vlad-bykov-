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




export const shuffle = <T>(array: T[]) => {
  let currentIndex = array.length,
    randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}