function Movie(props) {
	const { Title: title,
		Year: year,
		imdbId: id,
		Type: type,
		Poster: poster,
	} = props;

	return (
		<div id={id} className="movie">
			<div className="col s12 m6">
				<div className="card">
					<div className="card-image">
						{
							poster === 'N/A'
								?
								<img src={`https://via.placeholder.com/300x450?text=${title}`} />

								:
								<img src={poster} />
						}
						<div className="card-panel">
							<span className="blue-text text-darken-2">{title}</span>
							<p>{year}</p>
							<span className="right">{type}</span>
						</div>

					</div>

				</div>
			</div>
		</div>
	)
}

export { Movie }