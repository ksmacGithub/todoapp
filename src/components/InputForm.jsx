import React, { useState } from 'react'

export const InputForm = ({taskList, setTaskList}) => {

  const [inputText, setInputText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
    console.log(inputText);
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input type="text" onChange={ handleChange } />
        <button>
          <i className="fa-solid fa-square-plus"></i>
        </button>
      </form>
    </div>
  )
}
