<h1 align="center">react-trailer | <a href="https://github.com/Naimikan/react-trailer/wiki">Wiki</a></h1>

<h5 align="center">Video player for React.</h5>

<h2 align="center">Installation</h2>

NPM
```shell
npm i react-trailer --save
```

<h2 align="center">Get Started</h2>

Import the components needed to build your video player:
```javascript
import {
  VideoPlayer,
  Viewer,
  Controls,
  PlayButton,
  FullscreenButton,
  ProgressControl,
  DurationControl,
} from 'react-trailer';
```

<h2 align="center">Usage</h2>

```jsx

<VideoPlayer>
  <Viewer>
    <Viewer.Source src="http://dl5.webmfiles.org/big-buck-bunny_trailer.webm" type="video/webm" />
  </Viewer>
  <Controls>
    <ProgressControl />
    <PlayButton>
      {({ isPlaying }) => (isPlaying ? 'Pause' : 'Play')}
    </PlayButton>
    <FullscreenButton>
      {({ isFullscreen }) => (isFullscreen ? 'Close' : 'Fullscreen')}
    </FullscreenButton>
    <DurationControl />
  </Controls>
</VideoPlayer>
```

<h2 align="center">Developing</h2>

Install dependencies, build the source files and preview

```shell
git clone https://github.com/Naimikan/react-trailer.git
npm install
npm run build && npm start
```
