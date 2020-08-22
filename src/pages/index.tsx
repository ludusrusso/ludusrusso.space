import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MyLink = styled(Link)`
  color: red;
  text-decoration: none;
  border: 2px solid rgba(0, 0, 0, 0);
  &:hover {
    border: 2px dashed #ccc;
  }
`

const Cnt = styled.div`
  text-align: center;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
  max-width: 400px;
  margin: auto;
  margin-bottom: 100px;
`

const IndexPage = () => (
  <Layout>
    <Cnt>
      <SEO title="ludusrusso" />
      <h1>Hello! 🖖</h1>
      <p>
        I'm <strong>Ludovico</strong>, ☁️ cloud architect 🚀 and full stack
        developer consultant based in Italy (Milano) with a background in Cloud
        Robotics 🤖 and Computer Vision 📷!
      </p>
      <p>
        I'm a co-organizer of{" "}
        <a href="https://www.youtube.com/channel/UCs2Lulo9cfYrI5RHuDCQehQ">
          GDG Cloud Milano
        </a>
        ! I like to speak at tech events and I a co-founder of{" "}
        <a href="http://www.hackability.it/">Hackability</a>, an Italian non
        profit organization that help designers, makers and people with
        disability to work together on Open Source and Open Hardware assistive
        technologies!
      </p>

      <p>
        I'm passionate on learning new tecs, mainly on web and cloud computing,
        making and robotics! I like also sharing knowldge
      </p>
    </Cnt>
  </Layout>
)

export default IndexPage
