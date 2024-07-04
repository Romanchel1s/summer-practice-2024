import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './comics-details.css';
import { comicsArray } from '../../entities/comics/comicsApi.mock';
import { characterMock } from '../../entities/characters/charactersApi.mock';

type details = {
  title: string;
  description: string;
  Image: string;
};
export const ComicsDetails = () => {
  const { id } = useParams();

  const [comics, setComics] = useState<details | undefined>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setComics(comicsArray[Number(id)]);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="comics-details">
      <div className="comics-details__wrapper">
        <img src={comics?.Image} alt="" className="comics-details__image" />
        <div className="character-details__content">
          <div className="comics-details__info">
            <h3 className="comics-details__title">{comics?.title}</h3>
            <p className="comics-details__description">{comics?.description}</p>
          </div>
          <div className="comics-details__comics">
            <h5>Comics</h5>
            {characterMock.map((comics) => (
              <a target="blank" href={comics.link}>
                {comics.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};