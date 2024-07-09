import { useNavigate } from 'react-router-dom';
import { SearchButton } from '../../components/search-button/search-button';
import { SearchInput } from '../../components/search-input/search-input';
import { comicsArray } from '../../entities/comics/comicsApi.mock';
import './comics.css';
export const Comics = () => {
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/comics/${id}`);
};

  return (
    <div className="comics">
      <h2 className="comics__title">
        Comics<span className="comics__count">(13000)</span>
      </h2>
      <div className="comics__field">
        <SearchInput placeholder="Search comics by name" />
        <SearchButton />
      </div>
      <div className="characters__items">
        {comicsArray.map((c) => (
          <div onClick={() => handleClick(c.id)} className="list-item" key={c.id}>
            <div className="list-item__image-container">
              <img src={c.Image} alt={c.title} className="list-item__image" />
            </div>
            <h3 className="list-item__title">{c.title}</h3>
            <p className="list-item__description">{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};