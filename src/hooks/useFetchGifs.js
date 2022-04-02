import {
  useEffect,
  useState
} from "react"
import {
  getGifs
} from "../Helpers/getGifs";

export function useFetchGifs(category) {





  const [state, setstate] = useState({

    data: [],
    loading: true

  });



  useEffect(() => {
    getGifs(category)
      .then(obj => {

        setstate({

          data: obj,
          loading: false

        });



      })
  }, [category]);


  return state;

}