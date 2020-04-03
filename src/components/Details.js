import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { getVideos, getDetails } from "../actions/actions";


class Details extends Component {
    state = {}

    componentDidMount() {
        const { movieId, tvId, movie } = this.props.match.params
        const id = movieId || tvId
        const tab = movie ? "movie" : "tv"
        this.props.getDetails(tab, id)
    }
    // componentWillUnmount() {
    //     this.props.clearVideo()
    // }


    render() {
        console.log(this.props)
        
        let { video } = this.props
        console.log(video)
        let title = video.title || video.name
        let release = video.release_date || video.first_air_date
        let runtime = video.runtime || video.episode_run_time
        return (
            <div><header className='mb-5'>
                <nav>
                    <Link to="/movies" >
                        <button className='btn btn-outline-secondary mx-3 ' >Movies</button>
                    </Link>
                    <Link to="/tvshows" >
                        <button className='btn btn-outline-secondary' >TV Shows</button>
                    </Link>
                </nav>
            </header>
                <div className="mx-3" >
                    <div className="row">
                    

                        <div className="col-md-4 ">
                            <img className="shadow-lg p-2 mb-5 bg-white rounded" width="85%" src={`http://image.tmdb.org/t/p/original/${video.poster_path}`} alt="" height="400" width="400" />
                        </div>
                        

                        {video &&
                        
                            <div className="col-md-6  card shadow-lg p-2 mb-5 bg-white rounded ">
                                
                                <h2> {title + `(${release.slice(0, 4)})`} </h2>
                                <h6 className="text-light">{`(${runtime} mins)`}</h6>
                                <h6 className="text-muted">{video.tagline}</h6>

                                <h5>Overview</h5>
                                <p>{video.overview}</p>
                                <h6>Rating : {video.vote_average}</h6>

                            </div>

                        }
                    </div>
                </div>
            </div>
        );
    }
}


let mapState = (state) => { return { video: state.reducer.video } }

let mapProps = (dispatch) => {
    return bindActionCreators({ getVideos, getDetails }, dispatch)
}
export default connect(mapState, mapProps)(Details);