# A Simple Pokedex

## 👉 [This application is live!](https://jonathan-warkentine.github.io/Pokedex/)

---
## Features
This app incorporates multiple technologies, including two APIs (Soundcloud.com and Pokeapi.co). The exhaustive list includes HTML, CSS, JavaScript, JQuery, JQuery UI.

### Autocomplete
The search bar sports an autocomplete feature powered by JQuery UI. The list of pokemon is populated on page load via a fetch call to Pokeapi.co. Once the call completes, the resulting exhaustive list of Pokemon is saved to local storage to avoid unnecessary future API calls.

### Fully Arrangeable Cards
The Pokemon cards are fully arrangeable: they can be rearranged via dragging and dropping, and can be deleted individually.

### Persistent Changes
Cards populated, their arrangements, as well as the list of recent searches, all save to local storage such that the page can be closed or refreshed at any time and the page will be reconstructed exactly as the user left it.

---
###