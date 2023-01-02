import { GatsbyImage } from "gatsby-plugin-image"

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ContactAccompagnement = () => {
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
  return   <article id="" className=" w-12/12  md:grid gap-x-20 grid-cols-8  ">
   
 
  <section className="col-span-6 pt-20 flex flex-col gap-y-5">
    

  <h2 className="text-2xl md:text-3xl  bg-fourth-color  text-white md:w-max px-2">Envie d'en savoir plus ?</h2>
   <p className="px-2">Vous souhaitez faire évoluer votre stratégie digitale de manière la plus écoresponsable possible ?
<br/>N’hésitez pas à nous contacter en prenant un rendez-vous d’introduction d’une demi-heure. 
<br/>Ou en remplissant le formulaire ci-dessous  </p>
<a className="pl-2" ><button className="  
      bg-black  font-bold text-white  hover:bg-gray-600
       py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform 
      transition hover:scale-105 duration-300 ease-in-out w-max"> Prendre un rendez-vous</button>
      </a>
   <div className="flex flex-col md:grid-cols-2 md:grid">
           

       <GatsbyImage image={data.datoCmsHomepage.imageContact.gatsbyImageData} 
       alt={data.datoCmsHomepage.imageContact.alt}
       />
   <form id="fs-frm" name="simple-contact-form"
    accept-charset="utf-8" action="https://formspree.io/f/mpzbzwyn" method="post"
    className="bg-primary-color p-10">
  <fieldset id="fs-frm-inputs" className="flex flex-col">
    <label  htmlFor="full-name" className="">Nom</label>
    <input type="text"  name="name" id="full-name" 
     className="border mb-2 w-full" required=""/>
    <label htmlFor="email-address">Adresse mail</label>
    <input type="email" name="_replyto" id="email-address"  className="border mb-2 w-full" required=""/>
    <label htmlFor="message">Message</label>
    <textarea rows="7" name="message" id="message" className="border mb-2"  required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
  </fieldset>
  <input type="submit" className="mx-auto  lg:mx-0  
      bg-black  font-bold text-white  hover:bg-gray-600
      my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform 
      transition hover:scale-105 duration-300 ease-in-out w-max" value="Envoyer" />
      
</form>

</div>
  </section>
  <section className="bg-secondary-color col-span-2 hidden md:block"></section>

</article>
}

export default ContactAccompagnement



