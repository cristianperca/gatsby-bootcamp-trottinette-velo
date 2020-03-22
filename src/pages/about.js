import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"


const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
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
