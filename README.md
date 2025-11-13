# SM2 Finder

App provides image hints for Space Marine 2 collectables. Optimized for desktop and mobile usage.

## Online usage

This app is running with Github Pages at [https://dzybaty.github.io/sm2-finder/](https://dzybaty.github.io/sm2-finder/)

## Controls

1. Select operation from menu
2. Click rigth/left side of image to navigate through collectable locations
   1. on desktop you can use arrow keys for navigation in addition to button navigation
   2. on mobile you can use swipe gestures for navigation in addition to button navigation
   3. **_Experimental_**: You can toggle _Enable media session_ checkbox in the menu and use keyboard _Previous_ and _Next_ media buttons. Ideal for multi-monitor setup as it is cancelling need to minimize the game.
      Note, this feature is using MediaSession API, which can be unavailable in some browsers. It can also interfere with another active media sessions like Youtube, Spotify, etc.

## Running locally

1. Clone ropository with `git@github.com:Dzybaty/sm2-finder.git`
2. Install dependencies with `npm install`
3. To run the project:
   1. for development `npm run dev`
   2. to see production preview `npm run preview`
