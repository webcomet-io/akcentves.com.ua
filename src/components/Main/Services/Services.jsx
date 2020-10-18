import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import servicesStyles from "./services.module.scss"

import FeaturedService from "./FeaturedService"
import MoreBtn from "../../Buttons/MoreBtn"

const Services = () => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      contentfulMain {
        featuredServices {
          serviceImage {
            fluid(maxWidth: 640) {
              srcSetWebp
            }
          }
          id
          serviceTitle
          serviceShortDescription
        }
      }
    }
  `)

  const { featuredServices } = data.contentfulMain

  return (
    <div className={servicesStyles.services}>
      <h2>Услуги</h2>
      {featuredServices.map(service => {
        return <FeaturedService key={service.id} service={service} />
      })}
      <MoreBtn />
    </div>
  )
}

export default Services
