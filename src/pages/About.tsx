import Header from '../components/Header'
import { Hero } from '../components/HeroImage'
import HeroFeatured from '../components/HeroFeatured'
import headerImg from '../img/header-banner-about.jpg'

function About() {
  const header: Hero = {
    heading: {
      top: `It all started with`,
      bottom: 'a spark',
    },
    description:
      'An API showing all the latest Nintendo news from popular news channels.',
    ctas: [
      {
        url: '#about',
        title: 'Get your Switch',
        primary: true,
      },
      {
        url: '#news',
        title: 'Latest news',
        primary: false,
      },
    ],
    image: {
      src: headerImg,
      alt: 'word of nintendo',
    },
  }
  return (
    <>
      <Header {...header} />
    </>
  )
}

export default About
