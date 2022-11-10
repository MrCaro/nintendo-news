import Header from '../components/Header'
import { Hero } from '../components/HeroImage'
import HeroFeatured from '../components/HeroFeatured'
import headerImg from '../img/header-banner-about.jpg'
import PricingDetails from '../components/PricingDetails'

function About() {
  const header: Hero = {
    heading: {
      top: `It all started with`,
      bottom: 'a spark',
    },
    description: `Nintendo's mission is to put smiles on the faces of everyone we touch. We do so by creating new surprises for people across the world to enjoy together. We've forged our own path since 1889, when we began making hanafuda playing cards in Kyoto, Japan.`,
    ctas: [
      {
        url: '/',
        title: 'Get your Switch',
        primary: true,
      },
      {
        url: '',
        title: '',
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
      <PricingDetails />
    </>
  )
}

export default About
