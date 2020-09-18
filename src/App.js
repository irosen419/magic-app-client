import React from 'react';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        Accept: "application/json",
        Authorization: "bearer rgjZax3N9Gat3Rgbs7DliLkFn0lUPNFfFQjggMh6PcYZjXKLvrsMB6mml2yvWhh7idD6jzWz1EmiTtOmu5JTcwzbSm2jd_beBkZHQGCMV0SIGUa7N5z3dBaXZ64tcUYfhafPZw7YyNZopa0T8eBB4LHcevS-eTZnA9k7uB1DK1HwwVozHbLZb6WKt-E1DeMv7p8bFOoGYJ6ziVo-Pdy6d2gAXe0naaDKYMxA3kjGPOU0B6b2PkPyeQvXkuLJi41GMmJiuIzdkQ9V5lkY7UXjW5-5Lz43NvABAUha_FV5dcD4gNiA9UYaqlWsTqxuz4U4ZzJ6dg"
      }
    }
    fetch('https://api.tcgplayer.com/pricing/product/83461,101491,130325,138608', options)
      .then(resp => resp.json())
      .then(console.log)
  }
  render() {
    return (
      <h1> MTG</h1 >
    );
  }
}

export default App;
