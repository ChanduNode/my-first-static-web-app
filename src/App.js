import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`https://crudfunctionapp.azurewebsites.net/api/listTodos`)).json();
      console.log("data",text);
      setData(text);
    })();
  });

  return (
    <h1>data from functions :  </h1>
    <div>  {data}</div>
  );
}

export default App;
