import React, {createElement} from "react";
import {URL} from 'url'


interface Iprops {
    src: URL | string;
    placeHolder: string;
    className?: string
}

interface Istate {

    ErrorImage: boolean;
    isDefault: boolean;

}

export class FastImageLoader extends React.Component < Iprops,
Istate > {


    constructor(props : Iprops) {
        super(props);

        this.state = {
            ErrorImage: false,
            isDefault: true
        }
    }


    private Image_handler = (): string => {

        if (this.state.isDefault === true) {

            return this.props.placeHolder;
        } else {

            if (this.state.ErrorImage === true) {
                return this.props.placeHolder;


            } else {
                console.log('from utl')
                return `${
                    this.props.src
                }`
            }
        }

    }

    private onload = (): void => {
        this.setState({isDefault: false})
    }

    private RealImageLoader = (): React.ReactElement => {
        return (
            <img className={
                    this.props.className ? undefined : this.props.className
                }

                onLoad={
                    this.onload.bind(this)
                }

                src={
                    this.Image_handler()
                }
                onError={
                    () => this.setState({ErrorImage: true})
            }></img>
        )
    }

    render(): React.ReactNode {

        const {isDefault} = this.state

        return (

            <>

            <img className={
                    this.props.className ? this.props.className : ''
                }

                onLoad={
                    this.onload.bind(this)
                }

                src={
                    this.Image_handler()
                }
                onError={
                    () => this.setState({ErrorImage: true})}
            ></img>
            
            </>


        )
    }


}
