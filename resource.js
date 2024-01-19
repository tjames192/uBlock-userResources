/*
example scriptlets for ublock
https://raw.githubusercontent.com/gorhill/uBlock/784ebb09050cb6617bd857f7c6a4311ac9649ce9/assets/resources/scriptlets.js
*/
/// redirect.js
/// alias rd.js
/**
 * @example
 * www.reddit.com##+js(rd, https://old.reddit.com)
 * */
(function() {
    "use strict";
    const host = "{{1}}";
    window.location.replace(host + window.location.pathname);
})();
