import './App.css';
import { dummy } from './movieDummy';
import Movie from './component/Movie';

function App() {
  return (
    <div>
      <div className="title-container">
        <div className="title">Movies</div>
        <div className="subtitle">현재 상영중인 영화들</div>
      </div>  
      <div className='app-container'>
        {
          dummy.results.map((item) => {
            return (
              <Movie
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;