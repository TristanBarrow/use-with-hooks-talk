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

export type UseWithTogglerArgs = {
  text: string;
  selectedMessage: string;
  unselectedMessage: string;
}

type UseWithTogglerResult = {
  bind: TogglerProps;
  message: string;
}

export const useWithToggler = ({ 
  text, 
  selectedMessage, 
  unselectedMessage,
}: UseWithTogglerArgs): UseWithTogglerResult => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggle = () => {
    setIsChecked(!isChecked)
  }

  const message = isChecked ? selectedMessage : unselectedMessage;

  return {
    message,
    bind: {
      text,
      isChecked,
      toggle,
    }
  }
}

export default Toggler;