import React, { ReactElement } from "react";
import '../../css/menu.css'
import {Link} from 'react-router-dom'
import { IconContext } from "react-icons";
import {IoLogoWhatsapp } from 'react-icons/io5';
import {AiOutlineClose ,AiOutlineMenu} from 'react-icons/ai'
import gsap,{Power3} from "gsap";
import {ScrollToPlugin} from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(gsap);
type ToggleClass = "container_toggleON" | "container_toggleOFF" ;

interface Iprops {}

interface Istate {

    isMenuOn :boolean,
    MenuBar : ReactElement,
    menuDisplayCLass : ToggleClass
}


export class MenuBar extends React.Component<Iprops , Istate> {

    constructor(props : Iprops){
        super(props)

        this.state = {
            isMenuOn : false,
            MenuBar : <AiOutlineMenu/>,
            menuDisplayCLass : 'container_toggleOFF'
        }
    }


    private menu_toggle = () => {

        if(this.state.isMenuOn === false ){

            this.setState({MenuBar : <AiOutlineClose/> , isMenuOn : true , menuDisplayCLass : 'container_toggleON' as const})

        }else {
            this.setState({MenuBar : <AiOutlineMenu/> , isMenuOn : false , menuDisplayCLass : 'container_toggleOFF' as const})
        }

    }



    private Contact_us = ():void => {

        gsap.to(window, {duration : 3 ,
        scrollTo : "#contact_us",
        ease : Power3.easeInOut
        })

    }

    private Services = ():void => {

        gsap.to(window,{
            duration : 3 ,
            scrollTo : "#services",
            ease : Power3.easeInOut
        })

    }

    render(): React.ReactNode {


      
        return (
            <div className="menu-container">
                <div className="Logo-menu">
                    <h2> LOGO</h2>
                    <button onClick={this.menu_toggle}  className="menu_button">
                    <IconContext.Provider value={
                                {
                                    color: "black",
                                    className: "global-class-name",
                                    style : {
                                        fontSize : '30px',
                                        margin : '0 5px'
                                    }
                                }
                                
                            }>
                                <div>
                                {this.state.MenuBar}
                                </div>
                            </IconContext.Provider>

                    </button>
                </div>
                <nav className={this.state.menuDisplayCLass}>
                    <ul className="ul-menu" >
                        <li>Home</li>
                        <li onClick={this.Services} >Services</li>
                        <li>About us</li>
                        <li  onClick={this.Contact_us}>Contact us</li>

                    </ul>
                </nav>
                <div className="Menu-whatsApp">

                <IconContext.Provider value={
                                {
                                    color: "green",
                                    className: "global-class-name",
                                    style : {
                                        fontSize : '30px',
                                        margin : '0 5px'
                                    }
                                }
                                
                            }>
                                <div>
                                <IoLogoWhatsapp></IoLogoWhatsapp>
                                </div>
                            </IconContext.Provider>

               
                </div>
            </div>
        )
    }


}
