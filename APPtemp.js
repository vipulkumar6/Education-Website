import React from 'react';

const APPtemp = (props) => {
  return <>
    <div className="factarea">
      {/* <h1 className='head'>Some facts about our company</h1> */}
      {/* <h1>Some facts about our company</h1> */}
      <div className="factcontent">
      <div className="factimages">
          <div className="image">
            <img src="./Images/fact student.svg" alt="sttudent image" />
          </div>
        </div>
        <div className="facttext">

          <div className="text1">
            <div>
              <h1>97%</h1>
              <p>Success Ratio</p>
            </div>
            <div>
              <h1>8346+</h1>
              <p>Courses</p>
            </div>
            <div>
              <h1>1245+</h1>
              <p>Educators</p>
            </div>
          </div>
          <div className="text2">
            <div>
              <h1>323724+</h1>
              <p>Learners</p>
            </div>
            <div>
              <h1>245+</h1>
              <p>Collabrations</p>
            </div>
            <div>
              <h1>97%</h1>
              <p>Success Ratio</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>;
};



export default APPtemp;
