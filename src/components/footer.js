/* #jsx */
import React from "react"
import styled from "@emotion/styled"

const _Footer = styled.footer`
  background: #eee;
  padding: 20px;

  & > div {
    max-width: ${props => props.theme.maxWidth};
    padding: 0 10px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  a + a::before {
    content: " - ";
    color: black;
  }

  @media (max-width: ${props => props.theme.maxWidth}) {
    & > div {
      & > * + * {
        margin-top: 20px;
      }
      flex-direction: column;
    }
  }
`

export const Footer = () => {
  return (
    <_Footer>
      <div>
        <p>
          Copyright © 2016 - 2020 <strong>@ludusrusso</strong>
        </p>
        <div>
          <a href="mailto:ludusrusso+website@ludusrusso.space">email</a>
          <a href="https://twitter.com/ludusrusso">twitter</a>
          <a href="https://www.linkedin.com/in/ludusrusso/">linkedin</a>
          <a href="https://github.com/ludusrusso">github</a>
          <a href="https://www.youtube.com/user/Ludus489">youtube</a>
        </div>
      </div>
    </_Footer>
  )
}
