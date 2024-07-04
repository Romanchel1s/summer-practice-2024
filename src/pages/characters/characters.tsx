import { ListItem } from '../../components/items/items';
import { SearchButton } from '../../components/search-button/search-button';
import { SearchInput } from '../../components/search-input/search-input';
import { charactersArray } from '../../entities/characters/charactersApi.mock';

import './characters.css';

export const Caharacters = () => {
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
          <ListItem
            id={c.id}
            Image={c.Image}
            title={c.title}
            entity="characters"
            description={c.description}
          />
        ))}
      </div>
    </div>
  );
};