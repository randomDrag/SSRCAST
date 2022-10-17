import {AnyAction, Store, ThunkDispatch} from "@reduxjs/toolkit";
import React, { RefObject, useRef } from "react";
import {connect} from "react-redux";
import {Link, Navigate} from "react-router-dom";
import {StoreState} from "../reducers";
import {fetchTodo, Todo} from "../actions";

import {SectionOne} from '../Page/FirstSection';
import {SectionTwo} from '../Page/SecondSection'
import { ThirdSection } from "./ThirdSection";
import { FourthSection } from "./FourSection";
import {Fifth_section} from '../Page/FifthSection'
import Footer from "../components/Footer";



import { gsap  , Power4} from 'gsap'

import {ScrollToPlugin} from 'gsap/dist/ScrollToPlugin'
import { Iprops } from "../components/ReduxFormInput";


gsap.registerPlugin(ScrollToPlugin)

interface PropsData {
    fetchTodo: Function;
    todo: Todo[]

}

interface Istate {

    heading : string;
    paragraph : string;
}

export class Home extends React.Component < PropsData  , Istate> {

    private abc : React.RefObject<HTMLDivElement>;

    
    private bc = gsap.timeline()


constructor(props : PropsData){
    super(props)

       this.abc = React.createRef()

    this.state = {
        heading : 'We are the Best Education consultants',
        paragraph : `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text`
    }
}

    componentDidMount() {
        this.props.fetchTodo()

     
    }

    render(): React.ReactNode {

        return (
            <div  ref={this.abc} >
                <SectionOne  heading={this.state.heading} paragraph={this.state. paragraph}/> 
                <SectionTwo/>
                <ThirdSection id="services"/>
                <FourthSection id="reviews"/>
                <Fifth_section  />
                <Footer/>
                
             </div>
        )
    }


}

const mapStateToProps = (state : StoreState) => {
    return {todo: state.todo}
}

export const DataType = (Store : Store) => {

    return(Store.dispatch as ThunkDispatch < StoreState, unknown, AnyAction >)(fetchTodo())
}

export const HomeClass = connect(mapStateToProps, {fetchTodo})(Home);
