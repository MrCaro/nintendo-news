import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import console from '../../img/nintendo-switch-screen-trans.png'
import controller_right from '../../img/nintendo-switch-controller-right.png'
import controller_left from '../../img/nintendo-switch-controller-left.png'
import game from '../../img/mario-game.gif'

gsap.registerPlugin(ScrollTrigger)

function NintendoSwitch() {
  const controllerLeftRef = useRef()
  const controllerRightRef = useRef()

  useEffect(() => {
    // @ts-ignore
    gsap.to(controllerLeftRef.current, {
      // @ts-ignore
      scrollTrigger: {
        // @ts-ignore
        trigger: controllerLeftRef.current,
        start: '-300px center',
        end: '0px 350px',
        scrub: true,
        // markers: true,
      },
      // @ts-ignore
      y: 0,
      opacity: 1,
    })
    // @ts-ignore
    gsap.to(controllerRightRef.current, {
      // @ts-ignore
      scrollTrigger: {
        // @ts-ignore
        trigger: controllerRightRef.current,
        start: '300px center',
        end: '600px 350px',
        scrub: true,
        // markers: true,
      },
      // @ts-ignore
      y: 0,
      opacity: 1,
    })
  }, [])

  return (
    <div className="relative mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <img
          className="h-[400px] translate-y-[300px] opacity-0"
          src={controller_left}
          alt="nintendo switch console"
          // @ts-ignore
          ref={controllerLeftRef}
        />
        <img
          className="h-[400px] hidden lg:block relative z-10"
          src={console}
          alt="nintendo switch console"
        />
        <img
          className="hidden lg:block lg:absolute inset-0 m-auto h-[310px] z-0"
          src={game}
          alt=""
        />
        <img
          className="h-[400px] translate-y-[-300px] opacity-0"
          src={controller_right}
          alt="nintendo switch console"
          // @ts-ignore
          ref={controllerRightRef}
        />
      </div>
    </div>
  )
}

export default NintendoSwitch
