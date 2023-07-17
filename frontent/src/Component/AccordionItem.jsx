import React from 'react'
import { memo } from 'react'
function AccordionItem(props) {
  return (
    <div className="accordion-item mt-3">
      <h2 className="accordion-header" id={props.heading_id}>
        <button className="accordion-button fw-bold text-danger" type="button" data-bs-toggle="collapse" data-bs-target={"#" + props.id} aria-expanded="true" aria-controls={props.id}>
          {props.question}
        </button>
      </h2>
      <div id={props.id} className="accordion-collapse collapse show" aria-labelledby={props.heading_id} data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {props.answer}
        </div>
      </div>
    </div>
  )
}

export default memo(AccordionItem)