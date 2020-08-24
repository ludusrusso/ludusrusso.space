/* #jsx */
import React from "react"
import styled from "@emotion/styled"

const _Footer = styled.footer`
  background: #eee;
  padding: 20px;

  p {
    padding: 0;
    margin: 0;
  }

  & > div {
    max-width: ${props => props.theme.maxWidth};
    padding: 0 10px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    * + * {
      margin-top: 20px;
    }
  }
  a {
    text-decoration: none;
  }
  a.social + a.social::before {
    content: " - ";
    color: black;
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
          <a
            className="social"
            href="mailto:ludusrusso+website@ludusrusso.space"
          >
            email
          </a>
          <a className="social" href="https://twitter.com/ludusrusso">
            twitter
          </a>
          <a className="social" href="https://www.linkedin.com/in/ludusrusso/">
            linkedin
          </a>
          <a className="social" href="https://github.com/ludusrusso">
            github
          </a>
          <a className="social" href="https://www.youtube.com/user/Ludus489">
            youtube
          </a>
        </div>

        <p>
          This blog is written with{" "}
          <a href="https://www.gatsbyjs.com/">Gatsby</a> and deployed on{" "}
          <a href="https://www.netlify.com/">Netlify</a>!
        </p>
        <p>
          Source Code is{" "}
          <a href="https://github.com/ludusrusso/ludusrusso.space">
            Available on Github
          </a>
        </p>
      </div>
    </_Footer>
  )
}
