import React from 'react';
import { FastImageLoader } from './FastImageLoader';
import '../../css/review.card.css'
import men from '../images/men.svg'
import female from '../images/female.svg'

export type Gender = "male"|"female";


interface Iprops {

    Name : string;
    rating : number;
    total_rating?: number;
    paragraph : string;
    gender : Gender 

}

interface Istate {

}


export class ReviewCard extends React.Component<Iprops , Istate> {

constructor(props : Iprops ){
    super(props);



}




  private  RatingRender = (rating : number , totalStar?: number) : React.ReactElement => {

        let unfilled_rating = totalStar;

            if(totalStar === undefined|| null) {
                
                totalStar = 5
            }

         if (rating <= totalStar){

           unfilled_rating = totalStar - rating

         }

        return (
            <>
            <div>
            {[...Array(rating)].map(() => {
                   return  <span className="reviewCard_star">&#9733;</span>  
                })}

            {[...Array(unfilled_rating)].map(() => {
                   return  <span className="reviewCard_staroff">&#9733;</span>  
                })}
               
            </div>
            </>
        )

    }


    private GenderHandler = (gender : Gender):string => {

        if(gender === 'male'){

            return men;

        }else if(gender === 'female'){

            return female;
        }

        return '';

    }

    render(): React.ReactNode {
        return (
            <div className='Review_card'>
            <div>
                <FastImageLoader className='reviewCard_img' src={''} placeHolder={this.GenderHandler(this.props.gender)}></FastImageLoader>
            </div>
            <div className='review_body' >

                <h3>{this.props.Name}</h3>

                <div>
              {this.RatingRender(this.props.rating,this.props.total_rating)}
                {/* <span className="reviewCard_star">&#9733;</span>      */}
                </div>

                <p>{this.props.paragraph}</p>


            </div>


            </div>
        )
    }


}