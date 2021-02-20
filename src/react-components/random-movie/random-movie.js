import React from "react";
import { Row, Col, Card } from "antd";
import { getRandomReview, getReview } from "../../models/review";
import { getRandomMovie, getMovie } from "../../models/movie";
import Movie from "./movie";
import Review from "../review/review";
import "./style.css";





class RandomMovie extends React.Component {
    state = { 
        randomReviews: getRandomReview(),
        randomMovie: getRandomMovie()
     }
    render() { 
        return ( 
            <Card title="Random Movie">
                 <Movie movie={ this.state.randomMovie } 
                 description={this.sliceDescription} />
                 <Review review={this.state.randomReviews}/>
            </Card>
         );
    }
}
 
export default RandomMovie;