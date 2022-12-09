import styled from 'styled-components/macro';

export const Wrapper = styled.section`
  height: 100vh;
  width: 90vw;
  background-color: #AA96DA;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
`

export const HeaderOne = styled.h1`
margin: 0;
padding: 5px;
`
export const HeaderTwo = styled.h2`
margin: 0;
padding: 5px;
`
export const HeaderThree = styled.h3`
margin: 0;
padding: 5px;
`
export const HeaderWrapper = styled.div`
background-color: #C5FAD5;
border-radius: 10px;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
`

export const Button = styled.button`
  color: black;
  ${props => {
    if (props.reg) {
      return `
      background-color: ${`#C5FAD5`};
      `
    } else if (props.signOut) {
      return `
      background-color: ${`#FFFFD2`};
      `
    } else {
      return `
      background-color: ${`#FFFFD2`};
      `
    }
  }};
  border: none;
  box-shadow: 5px 8px black;
  border-radius: 20px;
  padding: 15px;
  margin: 15px;
  font-weight: bold;
  width: 200px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`
export const FormInput = styled.input`
  border-radius: 10px;
  padding: 8px;
  margin: 5px;
  width: 190px;
  border-color: black;
`
export const RadioButtons = styled.div`
  display: flex;
  flex-direction: row;
`
export const SingleRadioButton = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const ErrorMessage = styled.p`
  font-size: 1.2em;
  color: #ba1a1a;
`