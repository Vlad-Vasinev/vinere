
// import {LazyLoad} from './lazyload.min.js'
// import {vanillaLazy} from './lazyload.min.js'
// import LazyLoad from "vanilla-lazyload";
// import vanillaLazy from "vanilla-lazyload";

var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});

lazyImgInit()

function lazyImgInit() {
  function setLazyBg() {
    document.querySelectorAll('[js-lazy]').forEach((el) => {
      el.classList.add('had-loaded')
    })
  }
  setLazyBg()
}

window.globalLazyUpdate = function () {
  console.log('vanilla started 222')
  if (window.globalLazy.hasOwnProperty()) {
    window.globalLazy.destroy()
  }
  setLazyBg()
  window.globalLazy = new vanillaLazy(
    {
      unobserve_entered: true,
      class_loaded: 'is-loaded',
      callback_loaded: (el) => {
        //el.parentElement.classList.add('is-loaded')
        setTimeout(() => el.parentElement.style.backgroundImage = '', 1500)
      }
    },
  );
}