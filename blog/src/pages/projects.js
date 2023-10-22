import React from "react";
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import  Layout  from "../components/layout";
import Seo from "../components/seo"

const Projects = ({data}) =>{
    return(
        <Layout>
            <h1>Projects</h1>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default Projects
