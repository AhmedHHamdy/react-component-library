import '../App.css'
import classnames from 'classnames'

export default function Badge({children, shape, color}) {

  let shapeClass = shape && `button-${shape}`
  let colorClass = color && `button-${color}`
  const allClasses = classnames(shapeClass, colorClass)

  return (
    <div>
      <button className={allClasses}>{children}</button>
    </div>
  )
}