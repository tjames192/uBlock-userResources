/// redirect-frontend.js
/// alias rf.js
/**
 * @example
 * www.reddit.com##+js(rf, https://old.reddit.com)
 * */
(function() {
    "use strict";
    const host = "{{1}}";
    window.location.replace(host + window.location.pathname);
})();