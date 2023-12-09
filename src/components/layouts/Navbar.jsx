import React from 'react'
import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import logo from "../../assets/logo.png"
import { Button } from '../Button'
import List from "../../components/List"
// import Pragraph from "../../components/Pragraph"



const Navbar = () => {
  return (
    <nav className="bg-primaryColor pt-[50px]">
    <Container>
    <Flex>
      <div className="w-1/4 p-5">
        <Image src={logo}/>
      </div>
      <div className="w-1/2">
        <ul className='pt-5'>
        <Flex className="justify-evenly">
        
        {/* <Pragraph text="Men"/> */}
        <List href=""  className="font-pop text-[24px] font-semibold" text="Men"/>
        <List href=""   className="font-pop text-[24px] font-semibold" text="Woman"/>
        <List href=""  className="font-pop text-[24px] font-semibold" text="Kids"/>
        <List href=""  className="font-pop text-[24px] font-semibold" text="Collection"/>
        <List href=""  className="font-pop text-[24px] font-semibold"text="trends"/>

        </Flex>
        </ul>
       
       
        
      </div>
      <div className="w-1/4"> 
      <Flex>
      <Button design="py-[10px] mt-[10px] ml-[30px] text-[24px] text-black hover:bg-buttonHover border border-grey rounded-lg px-[27px]  font-semibold mr-4" text="Login"/>
      <Button design="py-[10px] mt-[10px] text-black text-[24px] hover:bg-buttonHover border border-grey rounded-lg px-[27px]  font-semibold" text="Sign Up"/>


        </Flex>
        </div>
      </Flex>
    </Container>
    </nav>
    
  )
}

export default Navbar