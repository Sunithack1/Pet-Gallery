import React, { useCallback, useContext, useMemo, useState } from 'react';

import { Header } from './Header';
import { Menu } from './Menu';
import PetDetail from './PetDetail';
import { ConfigContext } from './App';
import { GlobalContext } from './GlobalState';
import petStrings from '../public/strings/pets'

const Pets = ({}) => {
  const [dogsGallery, setDogsGallery] = useState(true);
  const [catsGallery, setCatsGallery] = useState(true);
  const context = useContext(ConfigContext);

  const {
    isLoading,
    petList,
    togglePetFavorite,
    hasErrored,
    error,
  } = useContext(GlobalContext);

  const handleChangeDogsGallery = () => {
    setDogsGallery(!dogsGallery);
  };
  const handleChangeCatsGallery = () => {
    setCatsGallery(!catsGallery);
  };
  const heartFavoriteHandler = useCallback((e, petRec) => {
    e.preventDefault();
    togglePetFavorite(petRec);
  }, []);

  const newPetList = useMemo(
    () =>
      petList
        .filter(
          ({ dog, cat }) =>
            (dogsGallery && dog) || (catsGallery && cat),
        )
        .sort(function (a, b) {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
          return 0;
        }),
    [dogsGallery, catsGallery, petList],
  );

  const petListFiltered = isLoading ? [] : newPetList;

  if (hasErrored === true) return <div>Error: {error.message}</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
          {context.showPetsGallery === false ? null : (
            <div className="hide">
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeDogsGallery}
                    checked={dogsGallery}
                  />
                  {petStrings.dogs}
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeCatsGallery}
                    checked={catsGallery}
                  />
                  {petStrings.cats}
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="card-deck">
            {petListFiltered.map((petRec) => {
              return (
                <PetDetail
                  key={petRec.id}
                  petRec={petRec}
                  onHeartFavoriteHandler={heartFavoriteHandler}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pets;
