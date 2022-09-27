import { useState } from "react";
import Toggler from "./Toggler";


const Main = () => {
  const [isChecked1, setIsChecked1] = useState<boolean>(false);
  const [isChecked2, setIsChecked2] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
   
  const onSubmit = () => {
    let _message = ''; 
    if (isChecked1) _message = 'You like apples.';
    if (!isChecked1) _message = `You don't like Apples. `;
    if (isChecked2) _message +=  `You got her number! :D `;
    if (!isChecked2) _message += `You didn't get her number. :( `; 
    setMessage(_message);
  }

  return (
    <>
      <Toggler 
        text="Do you like apples?"
        isChecked={isChecked1}
        setIsChecked={setIsChecked1}
      />
      <Toggler 
        text="Did you get her number?"
        isChecked={isChecked2}
        setIsChecked={setIsChecked2}
      />
      <button onClick={onSubmit}>Submit</button>
      <div>{message}</div>
    </>
  )
}

export default Main;