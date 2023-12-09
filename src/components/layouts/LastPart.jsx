
import React from 'react'
import Container from "../Container"
import Paragraph from "../Paragraph"
import Flex from "../Flex"
import Image from "../Image"
import bestSeller from "../../assets/bestSeller.png"
import bestSellerTwo from "../../assets/bestSellerTwo.png"
import pointsTwo from "../../assets/pointsTwo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import List from "../../components/List"

import Heading from "../Heading"


import { Button } from '../Button'


const LastPart = () => {
  return (
     
    <div className="bg-footerColor pt-[45px] pb-[170px] mt-[-35px]" >
     
     <Container>
      
    <Flex>
    
       
        <div className="w-[458px] relative">
            <div className="absolute left-0 top-[-105px] z-[-1]">
            <Image src={pointsTwo}/>
            </div>
            <Heading className="font-frank text-[64px] font-bold text-white" text="Best Seller Product" as="h1"/>
            <Paragraph className="font-frank text-[24px] font-bold text-white py-[43px] pr-[31px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."/>
            <Button design="text-white font-pop bg-black text-[24px] rounded-lg px-[86px] py-[24px] font-semibold" text="Learn MORE"/> 
        </div>
         <div className='pr-[30px] mt-[28px]'>
         <Image src={bestSeller}/>
          <div className='bg-white pb-2 '>
        
        <FontAwesomeIcon icon={faStar} className="text-yellow-500 p-2"/>
        <FontAwesomeIcon icon={faStar} className="text-yellow-500 p-2"/>
        <FontAwesomeIcon icon={faStar} className="text-yellow-500 p-2"/>
        <FontAwesomeIcon icon={faStar} className="text-yellow-500 p-2"/>
        <FontAwesomeIcon icon={faStar} className="text-yellow-500 p-2"/>
        <List href="" text="Sweater Shirt" className="list-none font-pop text-[22px] font-semibold pl-1"/>
         <Flex>
          <Paragraph text="$45.99" className="pl-1  text-inactiveColor pr-[31px] font-pop text-[24px]"/>
          <Paragraph text="$35.99" className="pl-1  text-black pr-[7px] font-pop text-[24px]"/>
         </Flex>
          </div>
        

        </div>
        <div className='mt-[28px]'>
        <Image src={bestSellerTwo}/>
        <div className='bg-white pb-2'>
        
        <FontAwesomeIcon icon={faStar} className="text-yellow-500 p-2"/>
        <FontAwesomeIcon icon={faStar} className="text-yellow-500 p-2"/>
        <FontAwesomeIcon icon={faStar} className="text-yellow-500 p-2"/>
        <FontAwesomeIcon icon={faStar} className="text-yellow-500 p-2"/>
        <FontAwesomeIcon icon={faStar} className="text-yellow-500 p-2"/>
        <List href="" text="Pants Fashion" className="list-none font-pop text-[22px] font-semibold pl-1"/>
         <Flex>
          <Paragraph text="$55" className="pl-1  text-inactiveColor pr-[31px] font-pop text-[24px]"/>
          <Paragraph text="$45.99" className="pl-1  text-black pr-[7px] font-pop text-[24px]"/>
         </Flex>
          </div>

        </div>

       
    
    </Flex>

    
   </Container>

    </div>
    )
}

export default LastPart