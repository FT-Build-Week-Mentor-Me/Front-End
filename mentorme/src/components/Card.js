import React,{useRef,useEffect} from "react";
import { NavLink } from "react-router-dom";
import {TweenMax, Power3 } from "gsap/all"; 

const Card = props => {
    let cardContent = useRef(null)
    // console.log("Card Props", props.questions)
    useEffect(() => {
        TweenMax.to(
            cardContent,
            .8, {opacity: 100, y:20, ease: Power3.easeOut}
        )
    },[])

    const trim = props.questions;
    
    return(
        <NavLink to = {`/questions/${trim.id}`}>
            <div className="card"  ref={el => cardContent = el}>
                <section key={trim.id} >
                    <h3>{trim.thread_title}</h3>
                    <h4>{trim.business_type}</h4>
                    <p>{trim.thread_body}</p>
                </section>
            </div>
        </NavLink>
    )
}
export default Card;