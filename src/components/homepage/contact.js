import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Contact = () => {
  const data = useStaticQuery(graphql`
      {
    datoCmsHomepage {
      imageContact {
        gatsbyImageData
        alt
      }
      texteContact
      titreContact
    }
  }
  `)
  return   <article id="contact" className=" w-12/12  md:grid gap-x-20 grid-cols-3  ">
   
 
  <section className="col-span-2 py-20 flex flex-col gap-y-10">
    

  <h2 className="text-3xl bg-fourth-color  text-white w-max px-2">{data.datoCmsHomepage.titreContact}</h2>
   <div dangerouslySetInnerHTML={{ __html: data.datoCmsHomepage.texteContact }} />

   <div className="flex flex-col md:grid-cols-2 md:grid">
           

       <GatsbyImage image={data.datoCmsHomepage.imageContact.gatsbyImageData} 
       alt={data.datoCmsHomepage.imageContact.alt}
       />
   <form id="fs-frm" name="simple-contact-form"
    accept-charset="utf-8" action="https://formspree.io/f/mpzbzwyn" method="post"
    className="bg-primary-color p-10">
  <fieldset id="fs-frm-inputs" className="flex flex-col">
    <label for="full-name" className="">Nom</label>
    <input type="text" name="name" id="full-name" 
     className="border mb-2 w-max" required=""/>
    <label for="email-address">Adresse mail</label>
    <input type="email" name="_replyto" id="email-address"  className="border mb-2 w-max" required=""/>
    <label for="message">Message</label>
    <textarea rows="5" name="message" id="message" className="border mb-2"  required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
  </fieldset>
  <input type="submit" className="mx-auto  lg:mx-0  
      bg-black  font-bold text-white  hover:bg-gray-600
      my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform 
      transition hover:scale-105 duration-300 ease-in-out w-max" value="Envoyer" />
</form>
  
</div>
  </section>
  <section className="bg-secondary-color col-span-1 hidden md:block"></section>

</article>
}

export default Contact



