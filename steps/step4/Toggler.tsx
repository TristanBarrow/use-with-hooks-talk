import { useState } from 'react';
import styles from './toggler.module.css';

type TogglerProps = {
  text: string;
  isChecked: boolean;
  toggle: () => void
}

const Toggler = ({ 
  text,
  isChecked,
  toggle,
}: TogglerProps) => {
  return (
    <div className={styles.toggler}>
      <input 
        type={'checkbox'} 
        checked={isChecked} 
        onChange={toggle}
      />
      <div>{text}</div>
    </div>
  )
}

type UseWithTogglerArgs = {
  text: string;
}

export const useWithToggler = ({ text }: UseWithTogglerArgs): TogglerProps => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggle = () => {
    setIsChecked(!isChecked);
  }

  return {
    text,
    isChecked,
    toggle,
  }
}

export default Toggler;