

import './MainPage.css'

export default function MainPage({stars}) {
  return (
    <>
      <About />
      <StarList stars={stars}/>
    </>
  )
}