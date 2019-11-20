import React,{useRef,useEffect} from "react";
import {TweenMax, Power3 } from "gsap/all"; 

const Card = props => {
    let cardContent = useRef(null)
    console.log("Card Props", props.questions)
    useEffect(() => {
        TweenMax.to(
            cardContent,
            .8, {opacity: 100, y:20, ease: Power3.easeOut}
        )
    },[])

    
    return(

        <div className="card"  ref={el => cardContent = el}>

            <section key={props.questions.id} >
                <h3>{props.questions.thread_title}</h3>
                <h4>{props.questions.business_type}</h4>
                <p>{props.questions.thread_body}</p>
            </section>
            

        </div>
    )
}
export default Card;