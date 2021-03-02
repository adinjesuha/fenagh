import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Content, Constrain } from "../components/globals"
import Hero from "../components/hero"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "proyectos_page.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      fenaghReforestaI: file(relativePath: {eq: "projects/fenagh_reforesta.webp"}){
        childImageSharp {
          fluid(maxWidth: 620, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fenaghReforestaII: file(relativePath: {eq: "projects/fenagh_reforesta_02.webp"}){
        childImageSharp {
          fluid(maxWidth: 620, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fenaghReforestaIII: file(relativePath: {eq: "projects/fenagh_reforesta_03.webp"}){
        childImageSharp {
          fluid(maxWidth: 620, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fenaghReforestaIV: file(relativePath: {eq: "projects/fenagh_reforesta_04.webp"}){
        childImageSharp {
          fluid(maxWidth: 620, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      webinarsI: file(relativePath: {eq: "projects/webinars_01.webp"}){
        childImageSharp {
          fluid(maxWidth: 620, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      webinarsII: file(relativePath: {eq: "projects/webinars_02.webp"}){
        childImageSharp {
          fluid(maxWidth: 620, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mipymesI: file(relativePath: {eq: "projects/consolidacion_mipymes_01.webp"}){
        childImageSharp {
          fluid(maxWidth: 620, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mipymesII: file(relativePath: {eq: "projects/consolidacion_mipymes_02.webp"}){
        childImageSharp {
          fluid(maxWidth: 620, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fundapanaca: file(relativePath: {eq: "projects/fundapanaca.webp"}){
        childImageSharp {
          fluid(maxWidth: 620, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <Layout>
      <SEO title="Proyectos" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-short hero-alignBottom"
        headline="Proyectos"
      />
      <Constrain>
        <Content>
          <h2>Programa “FENAGH Reforesta</h2>
          <p>Gracias a un convenio firmado entre la FENAGH y el Instituto de Conservación Forestal en junio del 2019. A la fecha se han reforestado 1365 manzanas de distintos productores a nivel nacional. Se han instalado 2 viveros en las asociaciones de la FENAGH (AGATC, AGASE).</p>
          <div className="content-media content-media--fullWidth content-media--double">
            <div className="content-media-items">
              <div className="content-media-item">
                <Img fluid={data.fenaghReforestaI.childImageSharp.fluid} alt="FENAGH reforesta"/>
              </div>
              <div className="content-media-item">
                <Img fluid={data.fenaghReforestaII.childImageSharp.fluid} alt="FENAGH reforesta"/>
              </div>
            </div>
            <figure className="content-caption">Descripción de la imagen.</figure>
          </div>
          <div className="content-media content-media--fullWidth content-media--double">
            <div className="content-media-items">
              <div className="content-media-item">
                <Img fluid={data.fenaghReforestaIII.childImageSharp.fluid} alt="FENAGH reforesta"/>
              </div>
              <div className="content-media-item">
                <Img fluid={data.fenaghReforestaIV.childImageSharp.fluid} alt="FENAGH reforesta"/>
              </div>
            </div>
            <figure className="content-caption">Descripción de la imagen.</figure>
          </div>
          <h2>Programas de Capacitación a traves de Webinar</h2>
          <p>Desarrollo de WEBINARS con diferentes instituciones en temas técnicos a través de plataformas virtuales. Se han capacitado más de dos mil productores a nivel nacional.</p>
          <div className="content-media content-media--fullWidth content-media--double">
            <div className="content-media-items">
              <div className="content-media-item">
                <Img fluid={data.webinarsI.childImageSharp.fluid} alt="FENAGH reforesta"/>
              </div>
              <div className="content-media-item">
                <Img fluid={data.webinarsII.childImageSharp.fluid} alt="FENAGH reforesta"/>
              </div>
            </div>
            <figure className="content-caption">Ejemplo de los artes utilizados para promocionar los webinars.</figure>
          </div>
          <h2>Consolidación de las MIPYMES del sector agricola</h2>
          <p>Se capacitaron a más de 30 agro empresas en los siguientes temas: Promoción Comercial, Empoderamiento de Mujeres, Cultura de Mejora y Aprendizaje constante, Desarrollo de Nuevos Productos y/o Servicios - Calidad y responsabilidad social y mejora ambiental.</p>
          <div className="content-media content-media--fullWidth content-media--double">
            <div className="content-media-items">
              <div className="content-media-item">
                <Img fluid={data.mipymesI.childImageSharp.fluid} alt="FENAGH reforesta"/>
              </div>
              <div className="content-media-item">
                <Img fluid={data.mipymesII.childImageSharp.fluid} alt="FENAGH reforesta"/>
              </div>
            </div>
            <figure className="content-caption">Descripción de la imagen.</figure>
          </div>
        </Content>
      </Constrain>
    </Layout>
  )
}

export default ProjectsPage