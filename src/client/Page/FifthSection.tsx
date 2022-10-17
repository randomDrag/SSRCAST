
import React from "react";

import {Field , reduxForm , InjectedFormProps,ConfigProps} from 'redux-form'
import wave from '../images/wave.svg'
import '../../css/section.fifth.css'
import { ReduxFormInput } from "../components/ReduxFormInput";
import {reduxFormSelect} from '../components/ReduxFormSelect'

import {connect} from 'react-redux'
import { FastImageLoader } from "../components/FastImageLoader";


 class FifthSection extends React.Component<InjectedFormProps> {

    render(): React.ReactNode {
        
        return (
           <section className="FifthSection" id="contact_us" >
            <FastImageLoader className="FifthSectionImage" src={''} placeHolder={wave}/>
            <div className="fifth_section_form">


                <div className="form_box">
                    
                    <h1>Get in Touch</h1>

              <Field name="Name" placeholder="Example : Nisha" type='text' label='Enter Your Name*'  component={ReduxFormInput}/>


              <Field props={{
                type : 'text'
              }} name="Number" placeholder="Example : 9986566789"    label='Enter Your Mobile No*'  component={ReduxFormInput}/>

              <Field name="GraduationType" label='Looking For ?*' component={reduxFormSelect}>
            <option value="UG">UNDER GRADUATION</option>
            <option value="PG">POST GRADUATION</option>
            <option value="Graduation">GRADUATION</option>
          </Field>

          <Field name="Course" label='Select Course*' component={reduxFormSelect}>
            <option value="engineering">ENGINEERING</option>
            <option value="medical">MEDICAL</option>
            <option value="Graduation">GRADUATION</option>
          </Field>


                <button className="submit_button_fifth">Submit</button>

                </div>

            </div>
           </section>
        )
    }


}

export const Fifth_section = reduxForm({ form: 'Students' })(
    
    connect(null,{})(
        FifthSection
    )
    
    )

