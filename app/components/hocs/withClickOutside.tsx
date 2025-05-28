'use client'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

// import { useClickOutside } from '@/hooks/useClickOutside'
import { IWrappedComponentProps } from '@/app/types/hocs'

export function withClickOutside(
  WrappedComponent: ForwardRefExoticComponent<
    IWrappedComponentProps & RefAttributes<HTMLDivElement>
  >
) {
  const Component = () => {
    const { open, setOpen, ref } = useClickOutside()

    return <WrappedComponent open={open} setOpen={setOpen} ref={ref} />
  }

  return Component
}
