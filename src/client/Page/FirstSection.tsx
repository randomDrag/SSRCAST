import React from "react";
import {MenuBar} from "../components/Menu";

import triangle from '../images/triangle.svg'
import peopleImg from '../images/_FirstPageImg.svg'
import '../../css/section.one.css';

import {ScrollToPlugin} from 'gsap/dist/ScrollToPlugin'


import gsap  , {Power3}from 'gsap';

interface props {

    heading: string;
    paragraph: string;


}

interface state {}

export class SectionOne extends React.Component < props,
state > {



    private GetInTouchHandler = ():void => {

gsap.to(window, {
    scrollTo : '#contact_us',
    duration : 2,
    ease : Power3.easeInOut
    
})

    }


    render(): React.ReactNode {
        return (
            <section className="section-one">
                <MenuBar/>

                <div className="section_one_container">
                    <div className="text_container">
                        <h1> {
                            this.props.heading
                        } </h1>
                        <p> {
                            this.props.paragraph
                        } </p>

                <div className="getInTouch"> 
                        <button onClick={this.GetInTouchHandler}>Get in Touch</button>

                        </div>
                         
                        
                    
                    </div>
                    <div className="image_container">
                        
                     
                        <img className="image_people" src={peopleImg}  />
                        <img className="image_triangle" src={triangle} alt=""  />
                    </div>
                   
                </div>
            </section>
        );
    }

}
