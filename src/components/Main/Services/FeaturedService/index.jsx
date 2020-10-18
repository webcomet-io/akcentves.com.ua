import React from "react"

import FeaturedServiceComponent from "./FeaturedService"

const FeaturedServiceIndex = ({service}) => {
  const { serviceTitle, serviceShortDescription } = service
  const { srcSetWebp } = service.serviceImage.fluid

  return (
    <FeaturedServiceComponent
      title={serviceTitle}
      description={serviceShortDescription}
      srcSet={srcSetWebp}
    />
  )
}

export default FeaturedServiceIndex
