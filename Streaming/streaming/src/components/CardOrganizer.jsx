import React, { useState, useEffect } from 'react'
import FilmCard from './FilmCard'

export default function CardOrganizer() {

  const [filmList, setFilmList] = useState([]);
  const [tmpFilmeList, setTmp] = useState([
    {
        "id": 1,
        "title": "Galactic Voyage",
        "description": "A thrilling space adventure following a crew of explorers on a journey through uncharted galaxies.",
        "genre": "Sci-Fi",
        "thumbnail": "https://i0.wp.com/astropt.org/blog/wp-content/uploads/2014/06/poster-blend-godzilla-2014-movie-wallpaper-1920x1080-widewallpapershd.jpg",
        "duration": 120,
        "soundtrack": "Galaxies Beyond",
        "release_date": "2024-07-15",
        "created_at": "2024-10-25T20:23:36.735Z",
        "updated_at": "2024-10-25T20:23:36.735Z"
    },
    {
        "id": 2,
        "title": "Mystery at Midnight",
        "description": "In a quiet town, a detective uncovers a web of secrets after a mysterious disappearance.",
        "genre": "Mystery",
        "thumbnail": "https://i0.wp.com/astropt.org/blog/wp-content/uploads/2014/06/poster-blend-godzilla-2014-movie-wallpaper-1920x1080-widewallpapershd.jpg",
        "duration": 98,
        "soundtrack": "The Darkened Path",
        "release_date": "2023-11-03",
        "created_at": "2024-10-25T20:23:36.867Z",
        "updated_at": "2024-10-25T20:23:36.867Z"
    },
    {
        "id": 3,
        "title": "The Last Sorcerer",
        "description": "A young mage embarks on a quest to find the last sorcerer in the world and unlock ancient magic.",
        "genre": "Fantasy",
        "thumbnail": "https://i0.wp.com/astropt.org/blog/wp-content/uploads/2014/06/poster-blend-godzilla-2014-movie-wallpaper-1920x1080-widewallpapershd.jpg",
        "duration": 135,
        "soundtrack": "Echoes of Magic",
        "release_date": "2022-09-21",
        "created_at": "2024-10-25T20:23:36.966Z",
        "updated_at": "2024-10-25T20:23:36.966Z"
    },
    {
        "id": 4,
        "title": "Ocean's Whisper",
        "description": "A heartfelt drama about a marine biologist who discovers a rare dolphin species and fights to protect it.",
        "genre": "Drama",
        "thumbnail": "https://i0.wp.com/astropt.org/blog/wp-content/uploads/2014/06/poster-blend-godzilla-2014-movie-wallpaper-1920x1080-widewallpapershd.jpg",
        "duration": 112,
        "soundtrack": "Songs of the Sea",
        "release_date": "2021-06-10",
        "created_at": "2024-10-25T20:23:37.051Z",
        "updated_at": "2024-10-25T20:23:37.051Z"
    },
    {
        "id": 5,
        "title": "Speed Limit Zero",
        "description": "A high-octane action movie following a skilled driver who gets entangled in an international chase.",
        "genre": "Action",
        "thumbnail": "https://i0.wp.com/astropt.org/blog/wp-content/uploads/2014/06/poster-blend-godzilla-2014-movie-wallpaper-1920x1080-widewallpapershd.jpg",
        "duration": 105,
        "soundtrack": "Fast Lane",
        "release_date": "2023-03-14",
        "created_at": "2024-10-25T20:23:37.156Z",
        "updated_at": "2024-10-25T20:23:37.156Z"
    },
    {
        "id": 6,
        "title": "Through the Looking Glass",
        "description": "A young girl discovers a hidden world in her family's attic mirror and faces magical challenges.",
        "genre": "Adventure",
        "thumbnail": "https://i0.wp.com/astropt.org/blog/wp-content/uploads/2014/06/poster-blend-godzilla-2014-movie-wallpaper-1920x1080-widewallpapershd.jpg",
        "duration": 118,
        "soundtrack": "Reflections",
        "release_date": "2023-12-22",
        "created_at": "2024-10-25T20:23:37.349Z",
        "updated_at": "2024-10-25T20:23:37.349Z"
    },
    {
        "id": 7,
        "title": "Artificial Dreams",
        "description": "In a dystopian future, an android begins to question its purpose and explores forbidden emotions.",
        "genre": "Sci-Fi",
        "thumbnail": "https://i0.wp.com/astropt.org/blog/wp-content/uploads/2014/06/poster-blend-godzilla-2014-movie-wallpaper-1920x1080-widewallpapershd.jpg",
        "duration": 130,
        "soundtrack": "Machine Heartbeat",
        "release_date": "2025-05-09",
        "created_at": "2024-10-25T20:23:37.438Z",
        "updated_at": "2024-10-25T20:23:37.438Z"
    },
    {
        "id": 8,
        "title": "Ghosts of Yesterday",
        "description": "A horror film about a group of friends who uncover haunted relics with ties to their dark pasts.",
        "genre": "Horror",
        "thumbnail": "https://i0.wp.com/astropt.org/blog/wp-content/uploads/2014/06/poster-blend-godzilla-2014-movie-wallpaper-1920x1080-widewallpapershd.jpg",
        "duration": 100,
        "soundtrack": "Whispers from the Past",
        "release_date": "2024-10-31",
        "created_at": "2024-10-25T20:23:37.524Z",
        "updated_at": "2024-10-25T20:23:37.524Z"
    },
    {
        "id": 9,
        "title": "The Forgotten Melody",
        "description": "A romance about two musicians who rediscover an old song and their feelings for each other.",
        "genre": "Romance",
        "thumbnail": "https://i0.wp.com/astropt.org/blog/wp-content/uploads/2014/06/poster-blend-godzilla-2014-movie-wallpaper-1920x1080-widewallpapershd.jpg",
        "duration": 95,
        "soundtrack": "Lost Harmonies",
        "release_date": "2022-02-14",
        "created_at": "2024-10-25T20:23:37.609Z",
        "updated_at": "2024-10-25T20:23:37.609Z"
    },
    {
        "id": 10,
        "title": "Eternal Winter",
        "description": "An animated film following a polar bear family surviving in a harsh and magical winterland.",
        "genre": "Animation",
        "thumbnail": "https://i0.wp.com/astropt.org/blog/wp-content/uploads/2014/06/poster-blend-godzilla-2014-movie-wallpaper-1920x1080-widewallpapershd.jpg",
        "duration": 85,
        "soundtrack": "Winter's Embrace",
        "release_date": "2021-12-01",
        "created_at": "2024-10-25T20:23:37.701Z",
        "updated_at": "2024-10-25T20:23:37.701Z"
    }
])


  // useEffect(() => {
  //   fetch()
  //     .then(response => response.json())
  // }, []);

  return (
    <div className="row row-cols-4">
      {tmpFilmeList.map((film, indice) =>{

        return (
          <div className="col" key={ indice }>
            <FilmCard image={ film.thumbnail } titulo={ film.title } text={ film.description }/>
          </div>
        )

      })}
    </div>
  )
}
