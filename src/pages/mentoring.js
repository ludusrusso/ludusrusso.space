import { css } from "emotion"
import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const P = ({ children }) => {
  return <p className="text-xl mt-5">{children}</p>
}

const A = ({ children, href, target = undefined }) => (
  <a
    href={href}
    className="border-b-2 border-green-500 text-green-900 font-semibold hover:bg-green-200"
    target={target}
  >
     {children}
  </a>
)

const MentoringPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="mentoring"
        image={data.mentoringImg.childImageSharp.fixed.src}
        description="Want to learn together and share knowledge?"
      ></SEO>

      <div className="max-w-xl mx-auto text-gray-900 mb-10">
        <h1 className="text-4xl text-center mt-10 font-bold">
          Want to learn together and share knowledge?
        </h1>

        <OutboundLink
          rel="noreferrer"
          className="inline-block my-10 px-4 py-2 w-full bg-green-500 text-white text-xl font-bold text-center rounded hover:bg-green-700"
          href="https://calendly.com/ludusrusso/one2one"
          target="_blank"
        >
          Schedule a one2one session
        </OutboundLink>

        <img
          className="mt-10 max-w-full m-auto shadow"
          src={data.mentoringImg.childImageSharp.fixed.src}
          alt="Mentoring"
        />

        <P>
          Sharing knowledge is crucial in tech industry and I really enjoy share
          my skills and learn new stuff with other people.
        </P>

        <P>
          For this reason, I offer <span className="font-bold">free</span>{" "}
          1-to-1 <span className="italic">mentoring</span> on many topics:
        </P>

        <ul className="list-disc ml-8 text-md">
          <li>Software Engineering</li>
          <li>Robotics and Artificial Intelligence</li>
          <li>Microservices Architectures</li>
          <li>IoT</li>
        </ul>

        <P>And technologies:</P>

        <ul className="list-disc ml-8 text-md">
          <li>kubernetes</li>
          <li>arduino</li>
          <li>raspberry pi</li>
          <li>nodejs</li>
          <li>golang</li>
          <li>angular and react</li>
          <li>gatsby</li>
        </ul>

        <h2 className="text-2xl text-center mt-20 font-bold">
          How does it work?
        </h2>

        <P>
          Check my availability on
          <A href="https://calendly.com/ludusrusso/one2one" target="_blank">
            Calendly
          </A>{" "}
          We will have <span className="font-bold">~45 minutes</span> to talk
          and do pair coding!
        </P>

        <OutboundLink
          rel="noreferrer"
          className="inline-block px-4 py-2 w-full bg-green-500 text-white text-xl font-bold text-center rounded mt-4 hover:bg-green-700"
          href="https://calendly.com/ludusrusso/one2one"
          target="_blank"
        >
          Schedule a one2one session
        </OutboundLink>

        <img src="/svg/mentor.svg" alt="Mentoring" className="w-full" />

        <h2 className="text-2xl text-center mt-20 font-bold">
          Wanna help me and my project?
        </h2>

        <P>
          I spend much time on helping people and push for{" "}
          <strong> mutual improvement</strong>! So any help are really
          appreciate.
        </P>

        <P>
          You can help me in different ways, here are some suggestions{" "}
          <span role="img" aria-label="face">
            😃
          </span>
        </P>

        <ul
          className={css`
            li {
              margin-top: 10px;
              margin-left: 20px;
            }
            li:before {
              content: "✅";
              padding-right: 5px;
            }
          `}
        >
          <li>
            Add me on{" "}
            <A href="https://www.linkedin.com/in/ludusrusso/" target="_blank">
              {" "}
              Linkedin
            </A>{" "}
            and add a <strong>recommendation</strong> on my profile! This would
            help me find more people to help!
          </li>
          <li>
            Share this page on your favourite social! Help me spread this
            project!
          </li>
          <li>
            Offer me{" "}
            <A
              href="https://www.paypal.com/paypalme/ludusrusso/"
              target="_blank"
            >
              something to drink
            </A>
            <span role="img" aria-label="drink">
              🍸
            </span>
            !
          </li>
        </ul>

        <p className="text-lg  mt-20 font-bold text-center">
          Thanks to
          <A href="https://jagasantagostino.com/mentoring"> Jaga </A>
          for the idea!{" "}
          <span role="img" aria-label="face">
            😆
          </span>
        </p>
      </div>
    </Layout>
  )
}

export default MentoringPage

export const query = graphql`
  query MentoringPage {
    mentoringImg: file(name: { eq: "mentoring" }) {
      childImageSharp {
        fixed(width: 800) {
          src
        }
      }
    }
  }
`
