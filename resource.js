/// redirect-frontend.js
/// alias redirect.js
/**
 * @example
 * www.reddit.com##+js(redirect, https://old.reddit.com)
 * */
(function() {
    "use strict";
    const host = "{{1}}";
    window.location.replace(host + window.location.pathname);
})();
