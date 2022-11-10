import { motion } from 'framer-motion'
import HeroImage from '../HeroImage'
import { Hero } from '../HeroImage'
import { Link } from 'react-router-dom'

function Header(props: Hero) {
  const transition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  }
  return (
    <div className="relative overflow-hidden bg-white z-[1]">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <motion.div
            initial={{ translateX: '-50%' }}
            animate={{
              translateX: 0,
              transition: { delay: 0.5, ...transition },
            }}
            exit={{ translateX: '-50%' }}
            transition={transition}
          >
            <HeroImage {...props} />
          </motion.div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={transition}
          initial={{ scale: 2 }}
          animate={{
            scale: 1,
            transition: { delay: 0.5, ...transition },
          }}
          exit={{ scale: 2 }}
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full cursor-pointer"
          src={props.image.src}
          alt={props.image.alt}
        />
      </div>
    </div>
  )
}

export default Header
