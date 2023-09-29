import {Dimensions} from 'react-native';
import {useEffect, useState} from 'react';

export default useOrientation = () => {
  const [screenIfo, setScreenInfo] = useState(Dimensions.get('screen'));

  useEffect(() => {
    const onChange = result => {
      setScreenInfo(result.screen);
    };

    dimensionsHandler = Dimensions.addEventListener('change', onChange);

    return () => dimensionsHandler.remove();
  });

  return {
    ...screenIfo,
   isPortrait: screenIfo.height > screenIfo.width,
  }






};
