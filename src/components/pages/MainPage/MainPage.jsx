import About from '../../blocks/About/About'
import CatList from '../../blocks/StarList/CatList'

import './MainPage.css'

export default function MainPage({stars}) {
  return (
    <>
      <About />
      <CatList stars={stars}/>
    </>
  )
}