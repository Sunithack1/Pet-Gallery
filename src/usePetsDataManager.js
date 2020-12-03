import petsReducer from './petsReducer';
import { useEffect, useReducer } from 'react';
import axios from 'axios';

function usePetsDataManager() {
  const [
    { isLoading, petList, hasErrored, error },
    dispatch,
  ] = useReducer(petsReducer, {
    isLoading: true,
    petList: [],
    hasErrored: false,
    error: null,
  });

  function togglePetFavorite(petRec) {
    const updateData = async function () {
      axios.put(`http://localhost:4000/pets/${petRec.id}`, petRec);
      petRec.favorite === true
        ? dispatch({ type: 'unfavorite', id: petRec.id })
        : dispatch({ type: 'favorite', id: petRec.id });
    };
    updateData();
  }

  useEffect(() => {
    const fetchData = async function () {
      try {
        let result = await axios.get('http://localhost:4000/pets');
        dispatch({ type: 'setPetList', data: result.data });
      } catch (e) {
        dispatch({ type: 'errored', error: e });
      }
    };
    fetchData();

    return () => {
      console.log('cleanup');
    };
  }, []);

  return {
    isLoading,
    petList,
    togglePetFavorite,
    hasErrored,
    error,
  };
}
export default usePetsDataManager;
