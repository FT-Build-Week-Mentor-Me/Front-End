import React from "react";

const Comments = props => {



    return(

        <div className="Comments">

            <section key={props.id}>                
                <p>{props.comment_text}</p>
            </section>
            

        </div>
    )
}
export default Comments;