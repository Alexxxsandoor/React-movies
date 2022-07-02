import React from "react";

class Search extends React.Component {
	state = {
		search: '',
		type: '',
	}

	handleKey = (event) => {
		if (event.key === 'Enter') {
			if (this.state.search.length > 2) {
				this.props.searchMovies(this.state.search, this.state.type)
			}

		}
	}

	hendleInput = (event) => {
		this.setState({ type: event.target.value })
	}


	render() {
		return (
			<div className="row">
				<div className="row">
					<div className="input-field col s12">
						<input
							className="validate"
							placeholder="search"
							type="search"
							value={this.state.search}
							onChange={(e) => this.setState({ search: e.target.value })}
							onKeyDown={this.handleKey}
						/>
						<button class="waves-effect search-btn purple accent-4 btn" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
						<div action="#" className="row" >

							<p className="col s4">
								<label>
									<input class="with-gap" name="group" value="all" type="radio" onChange={this.hendleInput} />
									<span>All</span>
								</label>
							</p>

							<p className="col s4">
								<label>
									<input class="with-gap" value="movie" name="group" type="radio" onChange={this.hendleInput} />
									<span>Movies</span>
								</label>
							</p>
							<p className="col s4">
								<label>
									<input class="with-gap" value="series" name="group" type="radio" onChange={this.hendleInput} />
									<span>Series</span>
								</label>
							</p>




						</div>
					</div>
				</div>

			</div>
		)

	}
}

export { Search }