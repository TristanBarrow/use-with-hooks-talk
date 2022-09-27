import type { NextPage } from 'next'
import Main1 from '../steps/step1/Main';
import Main2 from '../steps/step2/Main';
import Main3 from '../steps/step3/Main';
import Main4 from '../steps/step4/Main';
import Main5 from '../steps/step5/Main';

const Home: NextPage = () => {

  return (
    <>
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Main5 />
    </>
  )
}

export default Home
