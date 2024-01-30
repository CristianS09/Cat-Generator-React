import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

function App(){

    const [img,setImg] = useState();

    const changeImg = () => {
        setImg(<img src={'https://cataas.com/cat?' + Math.random()} alt='' />);
    }

    return(
       <div>
        <img  className='logo' src='https://th.bing.com/th/id/R.8b7264c55c7fccdb9d3c07d0460f575d?rik=GPZl2I8fzLXLFA&pid=ImgRaw&r=0' alt='' />
        <h1>Cat Generator</h1>
        <br></br>
       {img}
       <br></br>
       <button onClick={changeImg}>Gerar imagem</button>
       </div>
    )
}



ReactDOM.render(<App/>,document.getElementById('root'));