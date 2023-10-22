import React from "react";
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import  Layout  from "../components/layout";
import Seo from "../components/seo"

const About = ({data}) =>{
    const { name, email } = data.site.siteMetadata.contact;
    return(
        <Layout>
            <Seo title="About" />
            <h1>About me</h1>
            <p>{`${email}`}</p>
            <p>{`this will be a website that I will use to show my projects `}</p>
            <div style={{ maxWidth: `300px` , marginBottom: `1.45rem`}}>
                <StaticImage
                    src="../images/Random.jpg"
                    width={300}
                    quality={95}
                    formats={["auto","webp","avif"]}
                    alt="A Gatsby icon"
                    style={{ marginBottom: `1.45rem`}}
                />
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default About

export const query = graphql`
    query
    {
        site
        {
            siteMetadata
            {
                contact
                {
                    name
                    email
                }
            }
        }
    }
`