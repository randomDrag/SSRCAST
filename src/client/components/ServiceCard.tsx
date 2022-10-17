import React from "react";

import '../../css/service.card.css'
import {IconContext} from 'react-icons'
import {IoIosArrowDropdown} from "react-icons/io"
import {FastImageLoader} from '../components/FastImageLoader';
import GradutionIcon from '../images/GradutionIcon.svg'

interface Iprops {

    Name : string ;
    ImageUrl : string ;
    placeholder : string;
    ug_button : React.MouseEventHandler;
    pg_button : React.MouseEventHandler;

}

interface Istate {}

export class ServiceCard extends React.Component < Iprops,
Istate > {

    render(): React.ReactNode {
        return (
            <div className="service-card">


                <div className="service-card-circle">
                    <FastImageLoader className='Service-card-image' src={this.props.ImageUrl}

                        placeHolder={this.props.placeholder}/>


                </div>


                <div className="service-card-container">
                    <h5>{this.props.Name}</h5>
                   
                    <div className="service_card_click">
                        <div onClick={this.props.ug_button} className="service_card_div">
                            <IconContext.Provider value={
                                {
                                    color: "white",
                                    className: "global-class-name",
                                    style : {
                                        fontSize : '30px',
                                        margin : '0 5px'
                                    }
                                }
                                
                            }>
                                <div>
                                <IoIosArrowDropdown/>
                                </div>
                            </IconContext.Provider>
                           
                            <h3>Under Graduation</h3>
                        </div>
                        
                        <span className="line-service-card"></span>
                        
                        
                        <div onClick={this.props.pg_button} className="service_card_div">
                            
                        <IconContext.Provider value={
                                {
                                    color: "white",
                                    className: "global-class-name",
                                    style : {
                                        fontSize : '30px',
                                        margin : '0 5px'
                                    }
                                }
                                
                            }>
                                <div>
                                <IoIosArrowDropdown/>
                                </div>
                            </IconContext.Provider>



                            <h3>Post Graduation</h3>
                        </div>
                    </div>
                </div>

            </div>
        )
    }


}
