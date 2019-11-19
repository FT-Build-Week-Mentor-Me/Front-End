import React,{useRef,useEffect} from "react";
import {TweenMax, Power3 } from "gsap/all"; 

const Card = props => {
    let cardContent = useRef(null)

    useEffect(() => {
        TweenMax.to(
            cardContent,
            .8, {opacity: 100, y:20, ease: Power3.easeOut}
        )
    },[])

    
    return(

        <div className="card"  ref={el => cardContent = el}>

            <section key={props.threadId} >
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </section>
            

        </div>
    )
}
export default Card;