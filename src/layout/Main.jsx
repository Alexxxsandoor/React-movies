import React from "react";
import { MoviesList } from "../сomponents/MoviesList";
import { Preloader } from "../сomponents/Preloader";
import { Search } from "../сomponents/Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
	state = {
		movies: [],
		loading: true,
	}

	componentDidMount() {

		fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=pokemon`)
			.then(response => response.json())
			.then(data => this.setState({ movies: data.Search, loading: false }))
	}

	searchMovies = (str, type = 'all') => {

		this.setState({ loading: true });
		fetch(
			`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''
			}`
		)
			.then((response) => response.json())
			.then((data) => this.setState({ movies: data.Search, loading: false }));
	};

	render() {
		const { movies, loading } = this.state

		return <div className="content">

			<Search searchMovies={this.searchMovies} />
			{
				loading ? (
					<Preloader />
				) :
					(<MoviesList movies={movies} />)


			}

		</div>
	}
}

export { Main }

