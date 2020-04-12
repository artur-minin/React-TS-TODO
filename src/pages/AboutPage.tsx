import React from 'react'
import { useHistory } from 'react-router-dom'

const AboutPage: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus cumque voluptas magni
        praesentium, quod sunt, ratione aut inventore voluptatibus, iure eius reiciendis doloremque.
        Recusandae iste tenetur, ipsam magnam ipsum dolorem, assumenda modi qui repellendus quasi
        tempore aperiam nisi quos saepe?
      </p>
      <button className='btn' onClick={() => history.push('/')}>
        Обратно к списку дел
      </button>
    </>
  )
}

export default AboutPage
