import React from 'react'
import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"

import pointsTwo from "../../assets/pointsTwo.png"

import Heading from '../Heading'
import fasion from '../../assets/fasion.png'



const Fashion = () => {
  return (
    <Container>
        <div className="mb-[20px] mt-[230px]">
            <Flex className="justify-between">
              <div className="relative">
              <Image src={fasion}/>
              <div className="absolute top-[-52px] right-[-90px] z-[-1]">
                
              <Image src={pointsTwo}/>
                
               </div>
              </div>
              
            
            <div className="w-1/3 my-[100px]">
                <Heading className="font-frank text-[64px] font-bold" text="Best Fashion Since 2010 " as="h1"/>
                <p className="text-[24px] font-pop font-semibold pt-[23px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. </p>
            </div>
               </Flex></div>
        
               <div className=" bg-fashionColor p-[20px] w-[743px] h-[220px] ml-[550px] mt-[-70px] rounded-lg mb-[130px]" >
                
                    <div className="p-[30px]"> 
                    <Flex className="justify-around">
                        <div className="border-r-[2px] border-black pr-[15px]">
                        <p className="text-[64px] font-bold font-pod ">2010</p>
                        <p className="text-[28px] font-medium font-pod">Founded</p>
                        </div>
                    
                        <div className="border-r-[2px] border-black pr-[15px]">
                        <p className="text-[64px] font-bold font-pod ">5000+</p>
                        <p className="text-[28px] font-medium font-pod">Product Sold</p>
                        </div>
                        <div className="">
                        <p className="text-[64px] font-bold font-pod">4500+</p>
                        
                        <p className="text-[28px] font-medium font-pod">Best Reviews</p>
                        </div>
                    
                    </Flex>
                    
                    </div>

                

               </div>
               
    </Container>
  )
}

export default Fashion