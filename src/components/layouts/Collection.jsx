import Image from "../Image"
import sweater from '../../assets/sweater.png'
import newCollection2 from '../../assets/newCollection2.png'
import newCollection3 from '../../assets/newCollection3.png'
import Paragraph from "../Paragraph"
import Flex from "../Flex"
import Container from "../Container"
import Heading from '../Heading'
import List from "../../components/List"

import React from 'react'

const Collection = () => {
  return (
    <Container>
      <Heading className="font-frank font-bold text-[64px] text-center pt-[230px] pb-[120px]" text="New Collection" as="h1"/>
      <div className="mb-[100px]">
      <Flex className="justify-around">
        <div className="relative">
        <Image src={newCollection3}/>
        <div className="absolute bottom-[44px] left-[21px] bg-white list-none font-pop text-[24px] rounded-lg px-[108px] py-[10px] font-normal">
       
        <List href="" text="Sweater"/>

        </div>
        </div>
        <div className="relative">
        <Image src={newCollection2}/>
        <div className="absolute bottom-[44px] left-[21px] bg-white list-none font-pop text-[24px] rounded-lg px-[108px] py-[10px] font-normal">
       
        <List href="" text="Jeans"/>

        </div>
        </div>
        
        
        
        <div className="relative">
        <Image src={sweater}/>
        <div className="absolute bottom-[44px] left-[21px] bg-white list-none font-pop text-[24px] rounded-lg px-[108px] py-[10px] font-normal">
       
        <List href="" text="Baskets"/>

        </div>
        </div>
        
        

      </Flex>
      </div>
     
    </Container>
    
  )
}

export default Collection


