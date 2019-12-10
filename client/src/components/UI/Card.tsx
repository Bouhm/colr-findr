import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 5px;
  width: 250px;
  height: 250px;
  margin: 1em;

  @media (max-width: 400px) {
    display: flex;
    width: auto;
  }
`
