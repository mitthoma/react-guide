import react from 'react';
import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`

  width: 60%;
  margin-top: 5vh;
  margin-bottom: 5vh;
  border: 2px solid lightslategrey;
  text-align: center;
  padding-top:5%;
  padding-bottom: 5%;

  @media (min-width: 500px)': {
    width: '450px'
  }

`

const person = (props) => {

  const style= {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };

  return(

    <div className="Person" style={style}>




      <p onClick={props.click}>I am a {props.name}. I am {props.age} years old. -- {props.children}</p>

      <input type="text" onChange={props.changed} value={props.name}/>

    </div>



  )


}

export default person;
