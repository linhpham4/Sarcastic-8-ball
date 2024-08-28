import React from 'react'

import './Input.scss'

const Input = () => {
  return (
    <>

    <form className='form' action="">
        <label htmlFor='textarea'>
            Ask any question!
        </label>
        <textarea type="text" name="question" id="textarea"></textarea>
    </form>
    
    
    </>
  )
}

export default Input