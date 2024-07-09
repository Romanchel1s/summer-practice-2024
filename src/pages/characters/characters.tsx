import { useNavigate } from 'react-router-dom';
import { SearchButton } from '../../components/search-button/search-button';
import { SearchInput } from '../../components/search-input/search-input';
import { charactersArray } from '../../entities/characters/charactersApi.mock';

import './characters.css';

export const Caharacters = () => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
      navigate(`/characters/${id}`);
  };

  return (
    <div className="characters">
      <h2 className="characters__title">
        Characters<span className="characters__count">(1369)</span>
      </h2>
      <div className="characters__field">
        <SearchInput placeholder="Search Characters by name" />
        <SearchButton />
      </div>
      <div className="characters__items">
        {charactersArray.map((c) => (
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