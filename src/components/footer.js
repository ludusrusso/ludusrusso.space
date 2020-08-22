/* #jsx */
import React from "react"
import styled from "@emotion/styled"

const MyFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eee;
  padding: 20px;
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

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const Footer = () => {
  return (
    <MyFooter>
      <p>Copyright © 2016 - 2020 @ludusrusso</p>
      <div>
        <a href="mailto:ludusrusso+website@ludusrusso.space">email</a>
        <a href="https://twitter.com/ludusrusso">twitter</a>
        <a href="https://www.linkedin.com/in/ludusrusso/">linkedin</a>
        <a href="https://github.com/ludusrusso">github</a>
      </div>
    </MyFooter>
  )
}
