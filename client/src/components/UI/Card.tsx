import styled from 'styled-components'

export default styled.div`
  border-radius: 8px;
  box-shadow: 0 0 5px #ccc;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 250px;
  height: 250px;
  margin: 1em;
  padding: 1px;

  @media (max-width: 400px) {
    display: flex;
    width: auto;
  }
`
