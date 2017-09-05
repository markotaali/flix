<img src="flix.png" width="44" height="44">

# FLIx: Netflix with simple IMDb ratings – Chrome Extension

FLIx is a *Google Chrome Extension* that adds a super simple 'Get IMDb rating' button on Netflix. Currently unpublished in Extensions.

Disclaimer: Use at your own risk. Please note that this is an experimental extension and I can't be held responsible for anything that happens to you or you browser while you're using it.

---

## Basic usage

Using the extension should be as simple as opening any Netflix page with movies and clicking on 'Get IMDb Rating'. Since 10th of May 2017 You need your own API key from OMDb.

### Getting OMDb API key

Your own API key can be obtained from <a href="http://www.omdbapi.com/apikey.aspx">OMDb's API page</a>. You can get your own key by donating $1 or more per month on <a href="https://www.patreon.com/omdb/">OMDb's Patreon page</a>.

Just enter your API key in FLIx extension's popup window under the icon and you're done. The key will be stored in your browser's local storage. Cautious about security? <a href="https://developer.chrome.com/extensions/storage">Read more about Chrome storage</a>.

---

## Updates

### 20170520

* 5000 millisecond refresh for the script to make sure that even the lazy loaded content gets their rating boxes.
* Functionality to add your own OMDb API key.

## In the future

* Support for multiple movies – more accurate results for movies with identical names, eg. Poltergeist (1982) and Poltergeist (2015).
* Actual error handling :D
* Bonus: prettier buttons