import Toggler from "./Toggler";


const Main = () => {
  const onSubmit = () => {

  }

  return (
    <>
      <Toggler text="Do you like apples?"/>
      <Toggler text="Did you get her number?"/>
      <button onClick={onSubmit}>Submit</button>
    </>
  )
}

export default Main;