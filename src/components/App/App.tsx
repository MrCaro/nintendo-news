import React from 'react'
import './App.css'
import Cards from '../Cards'
import Features from '../Features'
import Footer from '../Footer'
import Header from '../Header'
import HeroText from '../HeroText'
import NintendoSwitch from '../NintendoSwitch'
import Banner from '../Banner'

function App() {
  const headerBanner = {
    calloutIcon: 'FireIcon',
    description: `Find your next favorite in this pipin' - hot batch of fresh games.`,
    cta: {
      url: '/#banner',
      title: 'New releases ',
    },
    closeIcon: 'XMarkIcon',
  }
  const heroTextAbout = {
    id: 'about',
    kicker: 'ABOUT',
    title: 'We strive for better',
    description:
      'Three modes in one – Nintendo Switch is designed to fit your life, transforming from home console to portable system in a snap.',
  }
  const aboutFeatures = [
    {
      title: 'TV mode',
      description: 'Dock your system to enjoy HD gaming on your TV.',
      heroicon: 'TvIcon',
    },
    {
      title: 'Tabletop mode',
      description:
        'Flip the stand to share the screen, then share the fun with a multiplayer game.',
      heroicon: 'DeviceTabletIcon',
    },
    {
      title: 'Handheld mode',
      description:
        'Pick it up and play with the Joy-Con™ controllers attached to enjoy the 7-inch OLED screen.',
      heroicon: 'HandRaisedIcon',
    },
  ]
  const heroTextNews = {
    id: 'news',
    kicker: 'NEWS',
    title: 'Keep up to date',
    description:
      'An API showing all the latest Nintendo news from popular news channels.',
  }

  return (
    <div className="">
      <Banner {...headerBanner} />
      <Header />
      <HeroText {...heroTextAbout} />
      <div className="relative container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 z-10">
        {aboutFeatures.map((feature, i) => (
          <Features key={`feature-${i}`} {...feature} />
        ))}
      </div>
      <div className="z-1">
        <NintendoSwitch />
      </div>
      <HeroText {...heroTextNews} />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
