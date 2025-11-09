import { useEffect, useState, useCallback, useMemo } from "react";

const API_KEY = "1e156552d529db60501768a39fe65183"
// -------------------------
//  Hook debounce
// -------------------------
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay)
        return () => clearTimeout(timer)
    }, [value, delay])

    return debouncedValue
}

// -------------------------
// Funções helper para favoritos
// -------------------------
const saveFavorite = (movieId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || []
    if (!favorites.includes(movieId)) {
        favorites.push(movieId)
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }
}

const removeFavorite = (movieId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || []
    const newFavorites = favorites.filter(id => id !== movieId)
    localStorage.setItem("favorites", JSON.stringify(newFavorites))
}

// -------------------------
//  COMPONENTE PRINCIPAL
// -------------------------
const MovieSearch = () => {
    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)
    const [selectedMovie, setSelectedMovie] = useState(null)

    const BASE_URL = "https://api.themoviedb.org/3"

    const increment = () => {
        setPage(prev => prev + 1)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const decrement = () => {
        setPage(prev => Math.max(prev - 1, 1))
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const debouncedQuery = useDebounce(query, 250)

    const fetchMovies = useCallback(async (searchTerm, page) => {
        setLoading(true)
        setError(null)

        const URL = searchTerm
            ? `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(
                searchTerm
            )}&page=${page}&include_adult=false`
            : `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&page=${page}&sort_by=popularity.desc`

        try {
            const response = await fetch(URL)
            const data = await response.json()
            setMovies(data.results || [])
        } catch (err) {
            console.error(err)
            setError("Ocorreu um erro ao buscar os filmes.")
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchMovies(debouncedQuery, page)
    }, [debouncedQuery, page, fetchMovies])

    return (
        <main id="moviesearch-box">
            <div id="search-container">
                <input
                    id="search-query"
                    type="text"
                    placeholder="Procure por filmes"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
            </div>

            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <ul id="movies-list">
                {movies.map(movie => (
                    <li key={movie.id} id="movie-card">
                        <img id="movie-poster" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title}
                            onClick={() => setSelectedMovie(movie.id)}
                        />
                        <div id="movie-header">
                            <h3 id="movie-title">{movie.title}</h3>
                            ({movie.release_date ? movie.release_date : "N/A"})
                        </div>
                        <p>{movie.overview}</p>
                    </li>
                ))}
            </ul>

            <div id="page-counter">
                <button onClick={decrement} className="page-button">
                    {"<"}
                </button>
                <h3>{page}</h3>
                <button onClick={increment} className="page-button">
                    {">"}
                </button>
            </div>

            {/* MODAL DETALHES */}
            {selectedMovie && (
                <MovieDetails movieId={selectedMovie} onClose={() => setSelectedMovie(null)} />
            )}
        </main>
    )
}

// -------------------------
//  COMPONENTE DETALHES
// -------------------------
const MovieDetails = ({ movieId, onClose }) => {
    const [details, setDetails] = useState(null)
    const [cast, setCast] = useState([])
    const [director, setDirector] = useState("")
    const [loading, setLoading] = useState(true)
    const [isFavorite, setIsFavorite] = useState(false)

    const BASE_URL = "https://api.themoviedb.org/3"

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const [detailsRes, creditsRes] = await Promise.all([
                    fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`),
                    fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=pt-BR`)
                ])

                const detailsData = await detailsRes.json()
                const creditsData = await creditsRes.json()

                setDetails(detailsData)
                setCast(creditsData.cast.slice(0, 5))
                setDirector(creditsData.crew.find(member => member.job === "Director") || null)
            } catch (err) {
                console.error("Erro ao buscar detalhes do filme:", err)
            } finally {
                setLoading(false)
            }
        }

        fetchDetails()

        const favorites = JSON.parse(localStorage.getItem("favorites")) || []
        setIsFavorite(favorites.includes(movieId))
    }, [movieId])

    const handleFavorite = () => {
        if (isFavorite) {
            removeFavorite(movieId)
            setIsFavorite(false)
        } else {
            saveFavorite(movieId)
            setIsFavorite(true)
        }
    }

    if (loading) return <div className="modal"><p>Carregando detalhes...</p></div>
    if (!details) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                {/* botão fechar */}
                <img alt="fechar" src="/icons/close.png" id="close-button" onClick={onClose} />
                {/* Botão favorito */}
                <img alt={isFavorite ? "favoritado" : "favoritar"} src={isFavorite ? "/icons/favorited.png" : "/icons/favorite.png"} id="favorite" onClick={handleFavorite} />

                <h2 id="modal-title">{details.title}</h2>
                <br />
                <p><strong>Data de lançamento: </strong>{details.release_date}</p>
                <br />
                <p><strong>Diretor: </strong>{director ? director.name : "N/A"}</p>
                <br />
                <h4>Elenco principal: </h4>
                <ul id="cast-list">
                    {cast.map(actor => (
                        <li key={actor.id}>{actor.name} como {actor.character}</li>
                    ))}
                </ul>
                <br />
                <p><strong>Sinopse: </strong>{details.overview}</p>
                <br />
                <p><strong>Avaliação: </strong>✯ {details.vote_average.toFixed(2)}</p>
            </div>
        </div>
    )
}

// -------------------------
//  COMPONENTE HOME
// -------------------------
export default function Home() {
    return (
        <main>
            <MovieSearch />
        </main>
    )
}