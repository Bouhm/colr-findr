import styled from 'styled-components'

type CardProps = {
  width: Number
}

export default styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 3px;
  width: ${(props: any) => props.width}%;
  height: 300px;
`
