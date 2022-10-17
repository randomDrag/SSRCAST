import React from "react";
import '../../css/section.two.css'

import graduateImg from '../images/Graduate.svg'
export class SectionTwo extends React.Component {

    render(): React.ReactNode {
        return (
            <section className="SectionTwo">
                <div className="SectionTwo-heading">
                    <h1>Our Achievements</h1>
                </div>
                <div className="SectionTwo-body">

                <span className="sectionTwo-circle"></span>
                <span className="sectionTwo-circle2"></span>
                <span className="sectionTwo-circle3">
                <img className="sectionTwo-circle-image" src={graduateImg} alt="" />
                </span>
                
                    <div  className="SectionTwo-data"  >
                    
                    <h4 >Success Admission</h4>
                    <h5>758</h5>
                  
                    </div>
            
                    <div className="SectionTwo-data" >
                    <h4>Happy Students</h4>
                    <h5>758</h5>

                    </div>
                    <div className="SectionTwo-data" >
                    <h4>Year Experience</h4>
                    <h5>758</h5>
                    </div>
                    <div className="SectionTwo-data" >
                    <h4>Course</h4>
                    <h5>758</h5>
                    </div>
                </div>

            </section>
        )
    }

}
