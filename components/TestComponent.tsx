import React from 'react'
import styled from "styled-components";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <StyledButton onClick={() => this.setState({ count: this.state.count + 1 })}>
          click
        </StyledButton>
      </>
    )
  }
}
const color="red"
const StyledButton = styled.button`
  background-color: ${color};
`;

export default App