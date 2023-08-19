import Badge from './components/Badge'
import Banner from './components/Banner'
import Card from './components/Card'
import TestimonialWithImage from './components/TestimonialWithImage'
import TestimonialWithoutImage from './components/TestimonialsWithoutImage'
import { AiOutlineCloudUpload, AiFillAudio } from 'react-icons/ai'
import './App.css'

function App() {
  const colors = ['gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']

  return (
    <div className=''>
      <div className='badge-container'>

        <h1>Badges</h1>

        <span className='pill-textSpan'>Pill{' ->'}</span>
        <span className='square-textSpan'>Square{' ->'}</span>

        <div className='square-badges'>
          {colors.map(color => <Badge key={color} color={color} shape='square'>Badge</Badge>)}
        </div>

        <div className='pill-badges'>
          {colors.map(color => <Badge key={color} color={color} shape='pill'>Badge</Badge>)}
        </div>
      </div>


      <div className='banner-container'>

        <h1>Banners</h1>

        <div className='banners-multi'>
          <Banner info='Lorem ipsum dolor si, ipsum similique veniam.' status='success'>Congratulations!</Banner>
          <Banner info='Lorem ipsum dolor si, ipsum similique veniam.' status='alert'>Attention</Banner>
          <Banner info='Lorem ipsum dolor si, ipsum similique veniam.' status='warning'>There is a problem with your application</Banner>
          <Banner info='Lorem ipsum dolor si, ipsum similique veniam.' status='neutral'>Update available</Banner>
        </div>

        <div className='banners-single'>
          <Banner status='success'>Congratulations!</Banner>
          <Banner status='alert'>Attention</Banner>
          <Banner status='warning'>There is a problem with your application</Banner>
          <Banner status='neutral'>Update available</Banner>
        </div>
      </div>


      <div className='card-container'>

        <h1>Cards</h1>

        <div className='card-one'>
          <Card icon={<AiOutlineCloudUpload/>} title="Easy Deployment" text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis." />
        </div>

        <div className='card-two'>
          <Card icon={<AiFillAudio/>} title="Easy Deployment" text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis." />
        </div>

      </div>

      <div className='testimonial-container'>

        <h1>Testimonials</h1>

        <div>
          <TestimonialWithImage text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit." title="May Andersons" name="Workcation, CTO" />
        </div>

        <div>
          <TestimonialWithoutImage title="Workcation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit." role="May Andersons" name="Workcation, CTO" />
        </div>


      </div>


    </div>
  )
}

export default App
