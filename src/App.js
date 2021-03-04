/* eslint-disable import/no-unresolved */
import React from 'react';
import Button from './components/Button';

const App = () => {
  return (
    <div className="container">
      <main>
        <h1>Matheus Foganholo</h1>

        <img
          src="https://github.com/MatheusFoganholo.png"
          className="image"
          alt="Matheus Foganholo"
        />

        <Button
          href="https://matheus.app/"
          text="Website"
          color="#f47621"
          hover="#d35b0a"
          textColor="#f3f4fd"
          padding="0.9375rem"
          borderRadius="0.25rem"
          icon="site"
          iconBackground="#333"
          iconRadius="50%"
          iconPadding="2px"
        />
        <Button
          href="https://github.com/MatheusFoganholo"
          text="GitHub"
          color="#f3f4fd"
          hover="#9da6ee"
          textColor="#333333"
          padding="0.9375rem"
          borderRadius="0.25rem"
          marginTop="1rem"
          icon="github"
          iconRadius="50%"
        />
        <Button
          href="https://linkedin.com/in/MatheusFoganholo"
          text="LinkedIn"
          color="#0A66C2"
          hover="#08519b"
          textColor="#f3f4fd"
          padding="0.9375rem"
          borderRadius="0.25rem"
          marginTop="1rem"
          icon="linkedin"
          iconRadius="50%"
        />
        <Button
          href="https://instagram.com/MatheusFoganholo"
          text="Instagram"
          color="#E1306C"
          hover="#be1b52"
          textColor="#f3f4fd"
          padding="0.9375rem"
          borderRadius="0.25rem"
          marginTop="1rem"
          icon="instagram"
          iconRadius="50%"
        />
        <Button
          href="https://steamcommunity.com/profiles/76561198094141781"
          text="Steam"
          color="#f3f4fd"
          hover="#9da6ee"
          textColor="#333333"
          padding="0.9375rem"
          borderRadius="0.25rem"
          marginTop="1rem"
          icon="steam"
          iconRadius="50%"
        />
        <Button
          href="https://open.spotify.com/user/matheusfoganholo"
          text="Spotify"
          color="#1DB954"
          hover="#179343"
          textColor="#f3f4fd"
          padding="0.9375rem"
          borderRadius="0.25rem"
          marginTop="1rem"
          icon="spotify"
          iconRadius="50%"
        />
      </main>
    </div>
  );
};

export default App;
