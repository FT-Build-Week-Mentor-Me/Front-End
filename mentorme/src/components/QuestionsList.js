import React from "react";
import Card from "./Card";


const QuestionsList = props => {



    return(

        <div className="questionList">
            <section>
                {props.map(question => {
                    return(
                        <Card/>
                    )
                })}
            </section>

        </div>
    )
}