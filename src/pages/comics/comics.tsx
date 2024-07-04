import { ListItem } from '../../components/items/items';
import { SearchButton } from '../../components/search-button/search-button';
import { SearchInput } from '../../components/search-input/search-input';
import { comicsArray } from '../../entities/comics/comicsApi.mock';
import './comics.css';
export const Comics = () => {
  return (
    <div className="comics">
      <h2 className="comics__title">
        Comics<span className="comics__count">(13000)</span>
      </h2>
      <div className="comics__field">
        <SearchInput placeholder="Search comics by name" />
        <SearchButton />
      </div>
      <div className="comics__items">
        {comicsArray.map((c) => (
          <ListItem
            id={c.id}
            Image={c.Image}
            entity="comics"
            title={c.title}
            description={c.description}
          />
        ))}
      </div>
    </div>
  );
};