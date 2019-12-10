import styled from 'styled-components'

type CardProps = {
  size?: string
}

export default styled.div<CardProps>`
  border-radius: 8px;
  display: flex;
  box-shadow: 0 0 5px #ccc;
  flex-direction: column;
  overflow: hidden;
  width: ${props => (props.size === 'large' ? 'auto' : '250px')};
  height: ${props => (props.size === 'large' ? 'auto' : '250px')};
  margin: 1em;
  padding: 1px;

  @media (max-width: 400px) {
    width: auto;
  }
`
