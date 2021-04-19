import React, {
  useState,
  useEffect,
} from 'react';
import { csv} from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/PadoSensei/9144b94c3a336cf66f1a7d41e3849cc6/raw/ec8e5a396d87c4c5fc750927f340eeda88d1d8c8/BjjHeros.csv'

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);
  return data
}