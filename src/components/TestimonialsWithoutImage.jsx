import '../App.css'
import { ImQuotesLeft } from "react-icons/im"

export default function TestimonialWithoutImage({text, name, role, title}) {
  return (
    <div className='testimonialWithoutImage-layout'>
        <h1>{title}</h1>
        <p>"{text}"</p>
        <h3>{name} / {role}</h3>
    </div>
  )
}