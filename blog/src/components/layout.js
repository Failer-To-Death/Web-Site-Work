/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { propTypes } from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import { Blue } from "./themes/Blue"
import {Header} from "./Header"
import "./layout.css"
import { Main } from './Main'
import { Footer } from "./Footer"

const Content = styled.div`
  margin: 0 auto;
  max-width: var(--size-content);
  padding: var(--size-gutter);
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={Blue}>
      <Header siteT4itle={data.site.siteMetadata.title || `Title`} />
      <Content>
        <Main m={20}>{children}</Main>
        <Footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; <p1>A random store</p1>
        </Footer>
      </Content>
    </ThemeProvider>
  )
}

export default Layout
