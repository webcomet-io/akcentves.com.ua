import React from "react"

import featuredServiceStyles from "./featuredservice.module.scss"

const FeaturedService = ({ title, description, srcSet }) => {
  return (
    <div className={featuredServiceStyles.featuredService}>
      <img srcSet={srcSet} alt={"img"} />
      <div className={featuredServiceStyles.textBlock}>
        <h3>{title}</h3>
        <h4>{description}</h4>
      </div>
    </div>
  )
}

export default FeaturedService
