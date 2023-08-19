import '../App.css'
import { AiOutlineCloudUpload } from 'react-icons/ai'

export default function Card({icon=<AiOutlineCloudUpload/>, title, text, background}) {
  return (
    <div className={`card-layout card-background-${background}`}>
      {icon}
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}
