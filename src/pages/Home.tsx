import Cards from '../components/Cards'
import Features from '../components/Features'
import Header from '../components/Header'
import { Hero } from '../components/HeroImage'
import HeroText from '../components/HeroText'
import headerImg from '../img/header-banner.jpg'
import NintendoSwitch from '../components/NintendoSwitch'

function Home() {
  const header: Hero = {
    heading: {
      top: 'Welcome to the World',
      bottom: 'of Nintendo',
    },
    description: 'Shop games, exclusive Nintendo merchandise, and more!',
    ctas: [
      {
        url: '/about',
        title: 'Learn more',
        primary: true,
      },
      {
        url: '/news',
        title: 'Latest news',
        primary: false,
      },
    ],
    image: {
      src: headerImg,
      alt: 'word of nintendo',
    },
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
    description: 'Find out the latest about your favorite games!',
  }

  return (
    <>
      <Header {...header} />
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
    </>
  )
}

export default Home
