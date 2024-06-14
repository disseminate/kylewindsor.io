import * as React from 'react';

const useVeinWishlists = () => {
  const [veinWishlists, setVeinWishlists] = React.useState(84000);
  React.useEffect(() => {
    let m = true;
    fetch('https://ramjetstudios.com/api/stats')
      .then((value) => value.json())
      .then((data) => {
        if (m) {
          setVeinWishlists(data.vein.wishlists);
        }
      })
      .catch(() => {
        // do nothing
      });

    return () => {
      m = false;
    };
  }, []);
  return veinWishlists;
};

export default useVeinWishlists;
