import { Button, Link } from "@nextui-org/react";
import { FaPhoneAlt,FaInstagram, FaFacebook  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { CreditedBusiness } from "../creditedBusiness";

export default function Page(){
  return(
    <div className="py-6 px-2">
      <h1 className="text-center">!GET IN TOUCH!</h1>
      <p className="text-center text-3xl text-slate-500">(Talk to Someone Today)</p>
      <ContactMethod/>
      <CreditedBusiness/>
    </div>
  )
}

function ContactMethod(){

  return(
    <div className="flex flex-wrap flex-row justify-center items-start gap-4 py-4">
      <div className="max-w-[300px] w-full flex flex-col justify-center items-center space-y-2">
        <div className="border bg-slate-100 rounded-full p-4 shadow" >
          <FaPhoneAlt size={70} className=""/>
        </div>
        <p className="text-center">Call Us Today For A Free Estimate!<br/>
        Tap the button below to call <i className="text-2xl ">John Schmidt</i> today!</p>
        <Button as={Link} href="tel:+17857270645" color="success">(785)727-0645</Button>
      </div>
      <div className="max-w-[300px] w-full flex flex-col justify-center items-center space-y-2">
        <div className="border bg-slate-100 rounded-full p-4 shadow" >
          <MdEmail size={70} className=""/>
        </div>
        <p className="text-center">Email Us Today For a Free Estimate!<br/>
        Tap the button below to send an email to <i className="text-2xl ">John Schmidt</i> today!</p>
        <Button as={Link} href="mailto:john@midwestfenceanddeck.com" color="danger">john@midwestfenceanddeck.com</Button>
      </div>
      <div className="max-w-[300px] w-full flex flex-col justify-center items-center space-y-2">
        <div className="border  bg-slate-100 rounded-full p-4 shadow" >
          <IoShareSocialSharp size={70} className=""/>
        </div>
        <p className="text-center">Follow Us on Social Media!<br/>
        Tap any button below to follow us on the following social media!</p>
        <Button as={Link} href="https://www.instagram.com/midwestfenceanddeck/" color="primary" endContent={<FaInstagram/>}>View Instagram</Button>
        <Button as={Link} href="https://www.facebook.com/profile.php?id=61556341003818" color="primary" endContent={<FaFacebook/>}>View Facebook</Button>
      </div>
    </div>
  )
}