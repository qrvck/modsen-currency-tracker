import React, { useEffect } from 'react';

import { getCurrentRates } from '@/api/currentRates';

function MainPage() {
  // const [loadCurrentRates, setCurrentRates] = useState([]);

  useEffect(() => {
    const loadCurrentRates = async () => {
      const res = await getCurrentRates();
      console.log(res.data);
    };

    loadCurrentRates();
  }, []);

  return <p>MainPage</p>;
}

export { MainPage };
