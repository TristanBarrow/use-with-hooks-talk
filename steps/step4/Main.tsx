import { useState } from "react";
import Toggler, { useWithToggler } from "./Toggler";


const Main = () => {
  const toggler1 = useWithToggler({ text: 'Do you like apples?' });
  const toggler2 = useWithToggler({ text: 'Did you get her number?' });
  const [message, setMessage] = useState<string>('');
   
  const onSubmit = () => {
    let _message = ''; 
    if (toggler1.isChecked) _message = 'You like apples. ';
    if (!toggler1.isChecked) _message = `You don't like Apples. `;
    if (toggler2.isChecked) _message +=  `You got her number. :D `;
    if (!toggler2.isChecked) _message += `You didn't get her number. :( `; 
    setMessage(_message);
  }

  return (
    <>
      <Toggler {...toggler1} />
      <Toggler {...toggler2} />
      <button onClick={onSubmit}>Submit</button>
      <div>{message}</div>
    </>
  )
}

export default Main;