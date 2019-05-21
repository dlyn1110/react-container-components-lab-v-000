import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

   constructor(){
     super()

     this.state = {
       searchTerm: '',
       reviews: []
     }
   }

   handleSearchMovieInput = event => this.setState({ searchTerm: event.target.value });

   handleSubmit = event => {
     event.preventDefault();

     fetch(SEARCH_URL.concat(this.state.searchTerm))
     .then(res => res.json())
     .then(res => this.setState({ reviews: res.results }))
   }
