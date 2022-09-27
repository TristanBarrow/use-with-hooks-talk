import { useState } from "react";
import styles from './toggler.module.css';

type TogglerProps = {
  text: string;
}

const Toggler = ({ text }: TogglerProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  
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

export default Toggler;