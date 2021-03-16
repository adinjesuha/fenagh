import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// Components
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Content, Constrain } from "../components/globals"
import Hero from "../components/hero"
import { Convocatoria, Agenda, Registro, Hoteles } from '../components/convencion'

const ConvencionContent = [
  {
    id: 0,
    name: 'Convocatoria',
    content: <Convocatoria />
  },
  {
    id: 1,
    name: 'Agenda',
    content: <Agenda />
  },
  {
    id: 2,
    name: 'Registro',
    content: <Registro />
  },
  {
    id: 3,
    name: 'Hoteles',
    content: <Hoteles />
  },
]

const ConvencioPage = () => {
  const [active, setActive] = useState(ConvencionContent[0].id);
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "convencion_page.webp" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <Layout>
      <SEO title="Convención: Convocatoria" />
      <Hero
        sources={data.file.childImageSharp.fluid}
        className="hero-default hero-alignBottom hero-alignRight"
        headline="LXXXVIII Convención Nacional Ordinaria"
      />
      <Constrain>
        <Content>
          <section className="page-meta">
            <div className="page-meta__files">
              <span className="page-meta__files--title">Descargar Archivos: </span>
              <a 
                href='https://assets.ctfassets.net/zg4fwo9e8dmk/36Vv8Ui4xffTc6d8I0ImBj/a0c5d0704d49abaeb77adc451096b029/WhatsApp_Image_2021-03-11_at_8.52.12_AM.jpeg' 
                download
                rel="noopener noreferrer" 
                target="_blank"
                className="page-meta__files--file"
              >
                Convocatoria
              </a>
              <a 
                href='https://assets.ctfassets.net/zg4fwo9e8dmk/76feXc8ns8OooHVSIp3JFl/f002e1dbad2b9cbc1c8d305e59fc9e46/CREDENCIAL_2021.pdf' 
                download
                rel="noopener noreferrer" 
                target="_blank"
                className="page-meta__files--file"
              >
                Credencial
              </a>
            </div>
            <nav className="page-meta__nav">
              <ul className="page-meta__nav--list">
              {ConvencionContent.map(({id, name}) => (
                <li
                  key={id}  
                  className={`list-item ${active === id ? 'list-item__active': ''}`}
                  onClick={() => setActive(id)}
                >
                  <span>
                    <div className="tag-name">
                      {name}
                      <hr />
                    </div>
                  </span>
                  
                </li>
              ))}
              </ul>
            </nav>
          </section>
          <>{ConvencionContent[active].content}</>
        </Content>
      </Constrain>
    </Layout>
  )
}

export default ConvencioPage