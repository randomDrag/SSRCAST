import React from "react";
import '../../css/section.fifth.css';
import {InjectedFormProps , Field} from 'redux-form'


export interface Iprops {
    label : string;
    PlaceHolder : string;
    input : any
}

export class ReduxFormInput extends React.Component<InjectedFormProps<{},Iprops> & Iprops > {


    
    render(): React.ReactNode {


        const {error, anyTouched , label , PlaceHolder} = this.props;
    
        const isErrorVisible = () => {
          return anyTouched && error 
              ? <label>{error}</label> 
              : null}

        return (
            <div className="outBox_button">
            <label>{label}</label>
            <div className="CustomInput">
                <input {...this.props}/>
            </div>
            </div>
            
        )
    }

}
