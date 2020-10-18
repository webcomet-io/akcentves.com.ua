import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import advantagesStyles from "./advantages.module.scss"

import MoreBtn from "../../Buttons/MoreBtn"

import advantageOneImg from "../../../../static/ad1.png"
import advantageTwoImg from "../../../../static/ad2.png"
import advantageThreeImg from "../../../../static/ad3.png"

const Advantages = () => {
  const data = useStaticQuery(graphql`
    query AdvantageQuery {
      contentfulMain {
        advantageOne
        advantageTwo
        advantageThree
      }
    }
  `)

  const { advantageOne, advantageTwo, advantageThree } = data.contentfulMain
  return (
    <div className={advantagesStyles.advantage}>
      <h2 className={advantagesStyles.advantageTitle}>Преимущества</h2>

      <div className={advantagesStyles.advantageItem}>
        <img src={advantageOneImg} alt={"ad1"} />
        <p>{advantageOne}</p>
      </div>
      <div className={advantagesStyles.advantageItem}>
        <img src={advantageTwoImg} alt={"ad2"} />
        <p>{advantageTwo}</p>
      </div>
      <div className={advantagesStyles.advantageItem}>
        <img src={advantageThreeImg} alt={"ad3"} />
        <p>{advantageThree}</p>
      </div>

      <MoreBtn />
    </div>
  )
}

export default Advantages
