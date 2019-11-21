import React,{useRef,useEffect} from "react";
import { NavLink } from "react-router-dom";
import {TweenMax, Power3 } from "gsap/all"; 

const CommentCard = props => {
    let cardContent = useRef(null)
    console.log("Card Props", props)
    useEffect(() => {
        TweenMax.to(
            cardContent,
            .8, {opacity: 100, y:20, ease: Power3.easeOut}
        )
    },[])
    

    return(
            <div className="card"  ref={el => cardContent = el}>
                <section key={props.id} >
                    <h3>{props.thread_title}</h3>
                    <h4>{props.business_type}</h4>
                    <p>{props.thread_body}</p>
                </section>
            </div>
    )
}
export default CommentCard;