import React, { useState, useEffect } from "react";

// Components 
import QuestionList from './QuestionsList';
import QuestionsForm from './QuestionsForm'

const MentorPage = () => {


    return (
        <div>
            {/* <QuestionsForm/> */}
            <QuestionList />
        </div>
    )
}

export default MentorPage;