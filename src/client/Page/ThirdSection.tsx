import React from "react";
import { ServiceCard } from "../components/ServiceCard";
import  '../../css/section.three.css'
import GradutionIcon from '../images/GradutionIcon.svg'

interface Iprops {
    id : any
}

interface Istate {
    
}

export class ThirdSection extends React.Component< Iprops ,Istate> {

    render(): React.ReactNode {
        return (
            <section className="section-Third" id={this.props.id}>
                <div className="section-third-para">
                <h1>Our Services</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                </div>
                <div  className="section-third-card">
                    <ServiceCard Name="Engineering" ImageUrl="https://images.unsplash.com/photo-1665502252515-8380abd497fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" placeholder={GradutionIcon} ug_button={()=> {}} pg_button={()=>{}} />
                    <ServiceCard Name="Graduation" ImageUrl="https://images.unsplash.com/photo-1665502252515-8380abd497fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" placeholder={GradutionIcon} ug_button={()=> {}} pg_button={()=>{}} />
                    <ServiceCard Name="Medical" ImageUrl="https://images.unsplash.com/photo-1665502252515-8380abd497fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" placeholder={GradutionIcon} ug_button={()=> {}} pg_button={()=>{}} />
                   

                </div>
                <div className="section-draw">
                <span className="section-three-line"></span>
                <span className="section-three-line"></span>
                <span className="section-three-line"></span>
                </div>
               
            </section>
        )
    }



}