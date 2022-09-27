import { useState } from "react";
import Toggler, { useWithToggler, UseWithTogglerArgs } from "./MessageToggler";

const t1: UseWithTogglerArgs = { 
  text: 'Do you like apples?',
  selectedMessage: 'You like apples.',
  unselectedMessage: `You don't like apples. `,
}

const t2: UseWithTogglerArgs = { 
  text: 'Did you get her number?',
  selectedMessage: 'You got her number! ',
  unselectedMessage: `You didn't get her number. :( `,
}

const t3: UseWithTogglerArgs = { 
  text: 'Do you want to go to the party? ',
  selectedMessage: 'You like parties. ',
  unselectedMessage: `You don't like parties. `,
}

const Main2 = () => {
  const toggler1 = useWithToggler(t1);
  const toggler2 = useWithToggler(t2);
  const toggler3 = useWithToggler(t3);
  
  const [messageIsVisible, setMessageIsVisible] = useState<boolean>(false);
  
  const onSubmit = () => {
    setMessageIsVisible(true);
  }

  const message = toggler1.message + toggler2.message + toggler3.message;
  return (
    <>
      <Toggler {...toggler1.bind} />
      <Toggler {...toggler2.bind} />
      <Toggler {...toggler3.bind} />
      <button onClick={onSubmit}>Submit</button>
      <div>{messageIsVisible && message}</div>
    </>
  )
}

export default Main2;