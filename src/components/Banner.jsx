import '../App.css'
import classnames from 'classnames'
import { IoIosCheckmarkCircle, IoIosWarning, IoIosAlert } from "react-icons/io"
import { MdError } from "react-icons/md";

export default function Banner({children, info, status}) {

  function determineStatusIcon(status) {
    switch(status) {
      case 'success':
        return <IoIosCheckmarkCircle />
      case 'warning':
        return <IoIosAlert />
      case 'alert':
        return <IoIosWarning />
      case 'neutral':
        return <MdError />
    }
  }



  return (
    <div className={`banner-layout banner-layout-${status}`}>
      <div className={`banner-status banner-${status}`}>
        {determineStatusIcon(status)}
      </div>
      <div className='banner-text'>
        <h1>{children}</h1>
        {info && <p>{info}</p>}
      </div>
    </div>
  )
}