import React from "react";
import '../../css/section.four.css';

import {Gender, ReviewCard} from '../components/ReviewCard'

import Slider, {Settings} from 'react-slick'


interface Iprops {
    id : string
}

interface Istate {

    Swiper: any,
    SwiperSlide: any


}


const data = [
        {
            Name: "Sumit Kumar",
            Rating: 3,
            gender: 'male',
            paragraph: "What is a paragraph and example A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs."

        }, {
            Name: "sachin",
            Rating: 4,
            gender: 'male',
            paragraph: "What is a paragraph and example A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs."

        }, {
            Name: "manisha",
            Rating: 2,
            gender: 'female',
            paragraph: "What is a paragraph and example A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs."

        }, {
            Name: "kachin Kumar",
            Rating: 1,
            gender: 'male',
            paragraph: "What is a paragraph and example A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs."

        },{
            Name: "Mamta",
            Rating: 1,
            gender: 'female',
            paragraph: "What is a paragraph and example A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs."

        }
    ]


const settings: Settings = {

        dots: true,
        swipe: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        className: "slider_style",
        adaptiveHeight: true,

        responsive: [
            {
                breakpoint: 1195,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 833,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

export class FourthSection extends React.Component < Iprops,
Istate > {

    constructor(props : Iprops) {
        super(props);


    }

    render(): React.ReactNode {


        return (
            <section className="Section-four" id={this.props.id}>

                <div className="Section_four_cont">
                    <h1>What our clients says about us.</h1>
                </div>
                <div className="section_four_slider">

                    <div className="Slider_container">


                        <Slider {...settings}>


                            {
                            data ?. map((v , index) : React.ReactElement => {

                                return (
                                    <div style={
                                        {padding: '30px'}
                                    }>
                                        <ReviewCard key={index} Name={v.Name} paragraph={v.paragraph} rating={v.Rating} gender={v.gender as Gender} />
                                    </div>
                                )
                            })
                        } </Slider>

                    </div>


                </div>
            </section>
        )
    }

}
