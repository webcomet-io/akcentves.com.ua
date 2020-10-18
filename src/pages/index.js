import React from "react"

import Layout from "../components/layout"
import Hero from "../components/Main/Hero"
import Advantages from "../components/Main/Advantages"
import ReadyForOrder from "../components/Main/ReadyForOrder"
import Services from "../components/Main/Services"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Advantages />
      <ReadyForOrder />
      <Services />
    </Layout>
  )
}
