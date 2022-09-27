import { useState } from 'react';
import styles from './toggler.module.css';

type TogglerProps = {
  text: string;
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void
}

const Toggler = ({ 
  text,
  isChecked,
  setIsChecked,
}: TogglerProps) => {
  return (
    <div className={styles.toggler}>
      <input 
        type={'checkbox'} 
        checked={isChecked} 
        onChange={() => setIsChecked(!isChecked)}
      />
      <div>{text}</div>
    </div>
  )
}

type UseWithTogglerResult = {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

export const useWithToggler = (): UseWithTogglerResult => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return {
    isChecked,
    setIsChecked,
  }
}

export default Toggler;