import Image from "next/image"
import { Container, Items, Logo, Menu, Navibar } from "./styles"
import logo from '../../app/assets/logo.png'
import { Button } from "@/Shared/Button"
import { IconCategory } from "@tabler/icons-react"
import Link from "next/link"

export const Header = ()=>{
  return(
    <Container>
      <Navibar>
      <Logo>
        <Image src={logo} alt=""/>
      </Logo>
        <Menu>
            <Items>
                <Link href="">What we offer</Link>
            </Items>
            <Items>
                <Link href="">How it works</Link>
            </Items>
            <Items>
                <Link href="">Portfolio</Link>
            </Items>
            <Button/>
        </Menu>
        <IconCategory/>
      </Navibar>
    </Container>
  )
}