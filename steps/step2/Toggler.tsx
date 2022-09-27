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

export default Toggler;