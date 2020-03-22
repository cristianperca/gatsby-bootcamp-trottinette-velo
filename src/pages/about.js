import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1>About me.</h1>
        <p>My name is Cristian and I am 43 years</p>
        <p>
          Want to reach me <Link to="/contact">Click here</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
