import React,{Suspense, useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Spacecraft from '../Models/Spacecraft'

import Loader from '../components/Loader'

const Contact = () => {


  const formRef = useRef(null);
  const[form,setForm] = useState({ name: '', email: '' , message: ''})
  const[isLoading,setisLoading] = useState(false); 
  const[currAnimation,setCurrAnimation]=useState('Hover')

  const handleChange = (e) => {
    setForm({...form,[e.target.name] : e.target.value})
  };
  const handleFocus = () => {
   setCurrAnimation('Hover')
   setDuration(2);
  };
  const handleBlur = () => { setCurrAnimation('Hover')};

  const handleSubmit= (e) => { e.preventDefault();
    setisLoading(true);
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Ankit",
        from_email: form.email,
        to_email: 'ankitlucky1016@gmail.com',
        message: form.message
        
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setisLoading(false);
      //TODO: Show success message
      //TODO: Hide an alert

      setForm({name:'', email: '', message: ''});
    }).catch((error) =>{
      setisLoading(false);
      console.log(error);
      //TODO: Show error message
    })}

  return (
    <section className="relative flex lg:flex-row flex-col max-container">

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in touch</h1>
        <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
          <label className="text-black-500 font-semibold">
            Name
            <input

            type="text"
            name="name"
            className="input"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            onFocus = {handleFocus}
            onBlur = {handleBlur}

            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input

            type="email"
            name="email"
            className="input"
            placeholder="Your_email"
            required
            value={form.email}
            onChange={handleChange}
            onFocus = {handleFocus}
            onBlur = {handleBlur}

            />
          </label>
          <label className="text-black-500 font-semibold">
            Short Message
            <textarea

            name="message"
            rows={4}
            className="textarea"
            placeholder="how may i help you"
            required
            value={form.message}
            onChange={handleChange}
            onFocus = {handleFocus}
            onBlur = {handleBlur}

            />
          </label>

          <button

          type="submit"
          className="btn"
          onFocus={handleFocus}
          disabled={isLoading}
          onBlur={handleBlur}
          >{isLoading ? 'Sending...' : 'Send Message'}</button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">

        <Canvas camera={{
            position: [0,0,5],
            fov: 75,
            near: 0.1,
            far: 1000
          }} >
            <directionalLight intensity={2.5} position={[0,0,1]}/>
            <Suspense fallback={<Loader/>}>
              <Spacecraft

              position={[.1,-0.55,0]}
              rotation={[25,2.4,0]}
              scale={[0.35,0.35,0.25]}
              />
            </Suspense>
          
          </Canvas>       
      </div>

    </section>
  )
}

export default Contact