import { useEffect, useState } from "react"

const API_KEY = "1e156552d529db60501768a39fe65183"
const BASE_URL = "https://api.themoviedb.org/3"

const Favorites = () => {
    const [favoriteIds, setFavoriteIds] = useState([])
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Pega IDs salvos no localStorage
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("favorites")) || []
        setFavoriteIds(saved)
    }, [])

    // Busca detalhes dos filmes favoritos
    useEffect(() => {
        if (favoriteIds.length === 0) {
            setMovies([])
            setLoading(false)
            return
        }

        const fetchFavorites = async () => {
            setLoading(true)
            setError(null)

            try {
                const promises = favoriteIds.map(id =>
                    fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`).then(res => res.json())
                )
                const results = await Promise.all(promises)
                setMovies(results)
            } catch (err) {
                console.error(err)
                setError("Erro ao buscar filmes favoritos.")
            } finally {
                setLoading(false)
            }
        }

        fetchFavorites()
    }, [favoriteIds])

    return (
        <main id="favorites-page">
            <h2>Meus Filmes Favoritos</h2>

            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {movies.length === 0 && !loading && <p>Nenhum filme favoritado ainda.</p>}

            <ul id="movies-list">
                {movies.map(movie => (
                    <li key={movie.id} id="movie-card">
                        <img
                            id="movie-poster"
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div id="movie-header">
                            <h3 id="movie-title">{movie.title}</h3>
                            ({movie.release_date || "N/A"})
                        </div>
                        <p>{movie.overview}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Favorites
