import React from 'react'
import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import { Button }  from '../Button'
import Heading from '../Heading'
import banner_pic from '../../assets/banner_pic.png'
import Paragraph from "../Paragraph"


const Banner = () => {
  return (
    <section class="bg-primaryColor py-[80px]">
      
        <Container>
            <Flex className="justify-between">
                <div className="w-1/2">
                
                   <Heading className="font-pop font-semibold text-[64px] pt-[38px] pl-[35px] pr-[80px]" text="Find The Best Fashion Style 
For You" as="h1"/>
                    <Paragraph className="font-pop text-[22px] text-black pt-[38px] pb-[76px] pl-[35px] pr-[80px]" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "/>
                    <Button design="ml-[35px] font-pop py-[25px] text-white bg-black drop-shadow-xl text-[24px] rounded-lg px-[91px]  font-semibold" text="SHOP NOW"/>
  
                </div>
                <div className="w-1/2">
                    <Image src={banner_pic}/>

                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Banner