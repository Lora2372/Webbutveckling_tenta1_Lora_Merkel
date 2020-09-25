// Contains the layout of the blog.

import React from "react"
import { ContainerWrapper } from "../elements"
import { Footer } from "../components"
import Navbar from "../components/Navbar/Navbar"

export const Container = ({ children }) => {
  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <Navbar />
        <ContainerWrapper>
          {children}
        </ContainerWrapper>
        <Footer />
      </div>
    </>
  )
}
