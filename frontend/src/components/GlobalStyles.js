import styled from 'styled-components/macro';

export const Wrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin: 5%;
`

export const Button = styled.button`
  color: #FCF6F5FF;
  ${props => {
    if (props.reg) {
      return `
      background-color: ${`#990011FF`};
      `
    } else if (props.signOut) {
      return `
      background-color: ${`green`};
      `
    } else {
      return `
      background-color: ${`blue`};
      `
    }
  }};
  border: #990011FF;
  border-radius: 20px;
  padding: 15px;
  margin: 15px;
  font-family: 'Montserrat', sans - serif;
  font-weight: bold;
  width: 200px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`
