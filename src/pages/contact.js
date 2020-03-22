import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <h1>Contact page</h1>
        <p>
          You can reach me here{" "}
          <a href="http://www.google.com" target="_blank">
            Contact me
          </a>
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
