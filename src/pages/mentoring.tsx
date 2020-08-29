import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

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
      <div className="max-w-xl mx-auto text-gray-900 mb-10">
        <h1 className="text-4xl text-center mt-10 font-bold">
          Want to learn together and share knowledge?
        </h1>
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

        <a
          className="inline-block px-4 py-2 w-full bg-green-500 text-white text-xl font-bold text-center rounded mt-4 hover:bg-green-700"
          href="https://calendly.com/ludusrusso/one2one"
          target="_blank"
        >
          Schedule a meeting
        </a>

        <p className="text-lg  mt-20 font-bold text-center">
          Thanks to
          <A href="https://jagasantagostino.com/mentoring"> Jaga </A>
          for the idea! 😀
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
