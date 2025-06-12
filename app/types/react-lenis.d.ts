declare module '@studio-freya/react-lenis' {
  import { ReactNode } from 'react';

  interface ReactLenisProps {
    children: ReactNode;
    root?: boolean;
  }

  const ReactLenis: (props: ReactLenisProps) => JSX.Element;
  export default ReactLenis;
}