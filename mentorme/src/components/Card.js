import React from "react";

const Card = props => {



    return(

        <div className="card">

            <section key={props.threadId}>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </section>
            

        </div>
    )
}
export default Card;