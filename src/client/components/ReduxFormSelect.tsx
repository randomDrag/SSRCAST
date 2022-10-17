import React from "react";
import '../../css/section.fifth.css';
import {InjectedFormProps , ConfigProps} from 'redux-form'

interface Iprops {
    PlaceHolder : string;
    label : string;
            input : any
}

export class reduxFormSelect extends React.Component<InjectedFormProps<{},Iprops> & Iprops> {

    render(): React.ReactNode {


        const {error, anyTouched , label , PlaceHolder} = this.props;
    
        const isErrorVisible = () => {
          return anyTouched && error 
              ? <label>{error}</label> 
              : null}

        return (
            <div className="outBox_button">
            <label>{label}</label>
            <div className="CustomSelect">
                <select className="CustomSelectSelector" {...this.props}/>
            </div>
            </div>
            
        )
    }
}