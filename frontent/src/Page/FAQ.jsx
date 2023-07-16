import React from 'react'
import AccordionItem from '../Component/AccordionItem'
import { memo } from 'react'
function FAQ() {
  return (
    <section className="justify-content-center row faq " >
      <div className="accordion col-10  mt-3 " id="accordionExample" >
        <h1 className='text-center fw-bold  py-0 '>Frequently Asked Questions</h1>
        <AccordionItem id={"nn1"} heading_id="n1" question="#1 How can i Contact you ?  " answer={<strong>Email : bijayniraula7@gmail.com</strong>} />
        <AccordionItem id={"nn2"} heading_id="n2" question=" #2 How to get the facebook page id and facebook access token ?" answer={<>  <p className='mb-3 fw-bold'> Watch  this video :</p>
          <div className='d-flex justify-content-center'>
            <iframe allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
              className='' width="560" height="315"
              src="https://www.youtube.com/embed/rRdIWnXJY1Q"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
            </iframe>
          </div></>} />
        <AccordionItem id={"nn3"} heading_id="n3" question="#3 What is the use of this app (postpilot) ?" answer={<> <strong>This website (postpilot) </strong> helps you to publish post in your facebook page in  a selected date and time .</>} />
        <AccordionItem id={"nn4"} heading_id="n4" question="#4 What to do if the facebook access token exprire ?" answer={<strong> You have to generate another access token.</strong>} />
        <AccordionItem id={"nn5"} heading_id="n5" question=" #5  Is it save to share page access token with this site ?" answer={<>  Yes it is 100% save and secure because we use one side hashing while store in db  and use signatured token (jwt token) for verification of authentication .</>} />

      </div>

    </section>

  )
}

export default memo(FAQ)