
import React,{Component} from 'react';
import { connect } from "react-redux"
import { getVideos,getMoreVideos } from "../actions/actions";
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom'






class Home extends Component {
    
    state = {
        tab: ""
    }
    componentDidMount() {
        console.log(this.props.reducer)
        let video = window.location.pathname === "/movies" ? 'movie' : 'tv'
        this.setState({ tab: video }, () => {
            let check1, check2;
            if (this.props.reducer.videos[0]) {
                let video = this.props.reducer.videos[0]
                check1 = window.location.pathname === "/movies" && video.title
                check2 = window.location.pathname === "/tvshows" && video.name
            }
            if (!(check1 || check2))
                this.props.getVideos(video, 1)
        })
    }

    componentDidUpdate(prevProps) {
        if (window.location.pathname[1] !== this.state.tab[0]) {
            let video = window.location.pathname === "/movies" ? 'movie' : 'tv'
            this.setState({ tab: video }, () => this.props.getVideos(video, 1))
        }
    }

    load = () => {
        this.props.getMoreVideos(this.state.tab, this.props.reducer.page + 1)
    }

    render() {
        console.log(this.props.reducer.videos)
        return (<div>
    
            <header>
                <nav>
                    <Link to="/movies" >
                        <button className={"mx-3 " + (this.state.tab === 'movie' ? 'btn btn-outline-light' : 'btn btn-outline-secondary')} >Movies</button>
                    </Link>
                    <Link to="/tvshows" >
                        <button className={this.state.tab === 'movie' ? 'btn btn-outline-secondary' : 'btn btn-outline-light'} >TV Shows</button>
                    </Link>
                </nav>
            </header>
            <main>
                <h2 className="my-3 ">
                    Popular {this.state.tab === 'movie' ? "Movies" : "TV Shows"}
                </h2>

    <div className="container">

                <div className="row">
                     {this.props.reducer.videos.map((video, index) => {
                        
                        let videoName = video.title || video.name
                        return (
                            < div key={index} className="col">
                                <Link id={video.id}
                                    to={`${window.location.pathname}/${videoName.replace(/\s/g, "-").toLowerCase()}/${video.id}`}>

                                    <img className="poster shadow-lg p-2 mb-5 bg-white rounded" src={`http://image.tmdb.org/t/p/w342/${video.poster_path}`} alt="" height="300" width="300" />
                                    <p className=" title text-black ">
                                        {videoName}
                                    </p>
                                    <br/>
                                </Link>

                            </div>)
                    }
                    )}

                
                
    
            </div>
            <div className="row">
                <div className="col mb-2">
                    <button className='w-20 btn btn-outline-warning' onClick={this.load} >Load more</button>
                </div>
            </div>
        </div>
            </main >
    
        </div >);
    
    }
}


let mapState = (state) => state
let mapProps = (dispatch) => {
    return bindActionCreators({ getVideos,getMoreVideos}, dispatch)
}

export default connect(mapState, mapProps)(Home);