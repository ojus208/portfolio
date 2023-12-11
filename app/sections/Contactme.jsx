'use client'
import Image from 'next/image'
import { dev2 } from '../asset/images'
import Link from 'next/link'
import { instagram, linkedin } from '../asset/icon'
import emailjs from 'emailjs-com';

const Contactme = () => {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    
    emailjs.sendForm('service_8e27sar', 'template_palcx2a', e.target, 'fK5JJfYzG9iJR2CMu')
      .then((result) => {
          alert("mail is successfully sent")  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
          alert("There is some issue in send me message pls try after some time")
      });
  }


  return (
    <div className='bg-white rounded-[20px] shadow-xl p-10' id='contact-me'>
    <div className='flex flex-wrap justify-evenly items-center gap-16 max-w-8xl'>
      <div className='flex flex-1 flex-col gap-10 justify-between items-start min-w-[300px] max-w-[500px]'>
        <h1 className='font-palanquin font-bold text-4xl'>
          Contact <span className='text-blue-3'>Me</span>
        </h1>
        <Image src={dev2} alt='dev2 image' className='md:m-0 m-auto' />
      </div>
      <div className='flex-1 min-w-[250px] max-w-[500px] bg-white p-5 rounded-[10px] shadow-lg'>
        <div className='mb-5'>
          <p className='info-text'>
            Fill out this form
          </p>
        </div>
        <form  className='flex flex-col justify-between gap-3 items-start flex-1' onSubmit={(e)=>sendEmail(e)}>
          <input type="text" placeholder='Enter Your Name' className='input' name='from_name' />
          <input type="email" placeholder='Enter Your Email' className='input' name='user_email' />
          <textarea  placeholder='What I can do for you.....' className='input' name='message'/>
          <div>
            <button type='submit' className='font-montserrat px-5 py-2 bg-blue-3 text-white font-bold hover:bg-white hover:text-blue-3 duration-200 rounded-md'>
              Submit
            </button>
          </div>
        </form>
        <div className='mt-5'>
          <h3 className='font-palanquin font-bold text-lg'>
            My <span className='text-blue-3'>social</span> links
          </h3>
          <ul className='flex flex-1 justify-items-start gap-3 mt-2'>
            <Link href="#">
            <Image src={instagram} />
            </Link>
            <Link href="#">
            <Image src={linkedin} />
            </Link>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contactme