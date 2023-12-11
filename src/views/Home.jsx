import React from 'react'
import { LandingSection } from '../components/LandingSection';
import { CardSection } from '../components/CardSection';
import { UsNetworks } from '../components/UsNetworks';

function Home() {
  const landingSections = [
    {
      name: "main",
      infoPosition: "center"
    },
    {
      name: "renewableEnergy",
      infoPosition: "bottom"
    },
    {
      name: "productsAndServices",
      infoPosition: "right"
    },
    {
      name: "aboutUs",
      infoPosition: "left"
    },
  ]

  return (
    <>
      {landingSections.map((section, index) => (
        <LandingSection key={index} section={section} />
      ))}

      <CardSection />

      <UsNetworks />
    </>
  )
}

export { Home }