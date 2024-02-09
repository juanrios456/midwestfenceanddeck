import { Button, ButtonGroup, Link, Divider } from "@nextui-org/react"
import Image from "next/image"

export function Footer(){
  return(
    <footer id="footer">
      <div className="w-full flex flex-col justify-center py-20 space-y-4 px-4 bg-zinc-500">
        <div className="flex justify-center">
          <Image
            src='/logo.jpg'
            alt='Logo of Midwest Fence and Deck'
            height={200}
            width={200}
            className=" h-auto w-[130px] rounded"
          />
        </div>
        <div className="flex justify-center">
          <div className=" sm:hidden flex flex-wrap justify-center">
            <Button color="success" className="m-2" as={Link} href="/tel:+17857270645" >Call Today</Button>
            <Button color="warning" className="m-2" as={Link} href="mailto:john@midwestfenceanddeck.com" >Email Us</Button>
            <Button className="m-2" as={Link} href="https://www.instagram.com/midwestfenceanddeck/">Follow on Instagram</Button>
          </div>
          <ButtonGroup className="hidden sm:flex">
            <Button color="success" as={Link} href="/tel:+17857270645" >Call Today</Button>
            <Button color="warning"  as={Link} href="mailto:john@midwestfenceanddeck.com" >Email Us</Button>
            <Button as={Link} href="https://www.instagram.com/midwestfenceanddeck/">Follow on Instagram</Button>
          </ButtonGroup>
        </div>
        <div className="flex flex-wrap justify-center text-stone-50">
          <p><Link href="/sitemap" className=" text-sky-400">View Sitemap</Link>&nbsp;| Website Created By <Link href="mailto:juanriis456@gmail.com" className=" text-sky-400">Brainstorm Creative</Link></p>
        </div>
      </div>
    </footer>
  )
}