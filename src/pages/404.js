import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404 Error">
      <p>Oops! Page not found</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/clifford.jpg"
      />
    </Layout>
  )
}

export default NotFoundPage