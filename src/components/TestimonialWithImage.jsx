import '../App.css'
import { ImQuotesLeft } from "react-icons/im"
import Image from "../assets/Image.png"

export default function TestimonialWithImage({pic=Image, text, name, title}) {
  return (
    <div className='testimonial-layout'>
      <img src={pic} alt="" />
      <div className='testimonial-info'>
        <ImQuotesLeft />
        <p>{text}</p>
        <h3>{name}</h3>
        <h2>{title}</h2>
        </div>
    </div>
  )
}