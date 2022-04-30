import React from 'react'
import Member from './member'

const AboutUs: React.FC = () => {
  return (
    <section className='flex flex-col bg-white py-20 text-3xl md:text-4xl '>
        <div className='container mx-auto px-11 '>
            <div className='font-bold text-center'>
                I love to everyone of us
                <p className='leading-tight max-w-5xl mx-auto text-4xl lg:text-5xl tracking-tight'> My team  expert</p>
            </div>
        </div>
        <div className='container mx-auto px-11 text-center mt-28'>
            <h2>My Team</h2>
            <div className='mt-2'>The BEST</div>
            <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-5 lg:gap-20'>
                <Member id='thomas' name='Igor' socialId='@ibelehai' link='https://google.com'/>
                <Member id='janic' name='Kolya Taranovkiy' socialId='@t_kolya' link='https://google.com'/>
                <Member id='mo' name='Muhailo Yanitskiy' socialId='@myanitskiy' link='https://google.com'/>
               
                <Member id='viktoria' name='Yana Senuk' socialId='@y.senyuk' link='https://google.com'/>
                

            </div>
        </div>
    </section>
  )
}

export default AboutUs