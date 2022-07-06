import React from 'react'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

const Hero = () => {
   const [isOpen, setIsOpen] = useState(false)
   const toggle = () => {
      setIsOpen(!isOpen)
   }

   return (
      <HeroContainer>
         <Navbar toggle={toggle} />
         <SideBar isOpen={isOpen} toggle={toggle} />
         <HeroContent>
            <HeroItems>
               <HeroH1>Greatest Pizza Ever</HeroH1>
               <HeroP>Ready in 5 minutes</HeroP>
               <HeroBtn>Place Order</HeroBtn>
            </HeroItems>
         </HeroContent>
      </HeroContainer>
   )
}

export default Hero