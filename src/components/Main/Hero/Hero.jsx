import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import heroStyles from "./hero.module.scss"

import OrderBtn from "../../Buttons/OrderBtn"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      contentfulMain {
        heroImg {
          fluid(maxWidth: 1920) {
            srcSetWebp
          }
        }
        title
        subTitle {
          subTitle
        }
      }
    }
  `)

  const imgSrc = data.contentfulMain.heroImg.fluid.srcSetWebp
  const title = data.contentfulMain.title
  const subTitle = data.contentfulMain.subTitle.subTitle

  return (
    <>
      <img className={heroStyles.heroImg} srcSet={imgSrc} alt={"kamaz"} />
      <div className={heroStyles.heroText}>
        <h1 className={heroStyles.title}>{title}</h1>
        <h2 className={heroStyles.subTitle}>{subTitle}</h2>

        <OrderBtn />
      </div>
    </>
  )
}

export default Hero
