import React, { useState } from 'react';

const TextForm = ({mode}) => {

    const [currentInput, setCurrentInput] = useState('')

    let characters = currentInput.length
    let words = currentInput.split(" ").length

    const handleUpperCase = (e) => {
        e.preventDefault()
        setCurrentInput(currentInput.toUpperCase())
    }
    const handleLowerCase = (e) => {
        e.preventDefault()
        setCurrentInput(currentInput.toLowerCase())
    }

    const handleClearText = () => {
        setCurrentInput("")
    }

    const handleCopy = () => {
        const inputField = document.getElementById('myInput'); 
        inputField.select();
        navigator.clipboard.writeText(currentInput)
    }

    const handleExtraSpaces = () =>{
        const trimmedText = currentInput.split(/[ ] +/)
        setCurrentInput(trimmedText.join(" "))
    }

    return (
        <div style={{marginTop : "5px"}}>
            <form>
                <h1 className="">Enter Text</h1>
                <div className="input-group" >
                    <textarea style={{background: mode === 'light' ? "white" : "lightblue" , color : mode === 'light' ? "black" : 'white' , border : mode === 'light' ? '2px solid black' : '2px solid white'}} id='myInput' className="form-control" aria-label="With textarea" placeholder='Enter text...' value={currentInput} onChange={(e) => setCurrentInput(e.target.value)} rows='10'></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpperCase}>Convert to Upper case</button>
                <button type="button" className="btn btn-secondary m-2" onClick={handleLowerCase}>Convert to Lower case</button>
                <button type="button" className="btn btn-danger m-2" onClick={handleClearText}>Clear text</button>
                <button type='button' className='btn btn-warning m-2' onClick={handleCopy} >Copy Text</button>
                <button type='button' className='btn btn-success m-2' onClick={handleExtraSpaces} >Remove Extra spaces</button>
            </form>
            <div className='container'></div>
            <h1>Your text summary:</h1>
            <h5>Number of characters : {characters}</h5>
            <h5>Number of words : {words} </h5>
            <h5>{0.008 * words} Minutes to read</h5>
            <h5>Preview</h5>
            <h4>{currentInput}</h4>
        </div>
    );
}

export default TextForm;
