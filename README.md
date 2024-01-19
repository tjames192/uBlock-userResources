# uBlock-userResources
uBlock-userResources scriptlet injection
allows running custom script on webpage or all webpages

1. Goto uBlock settings, under Advanced section, check on and then click icon next to 'I am an advanced user'
2. on the Advanced settings tab, scroll down to userResourcesLocation option, which should be 'unset' by default.
3. navigate to 'My Filters' in your uBlock Origin settings
4. < hostname or wildcard >##+js(...) indicates scriptlet injection

use https://www.jsdelivr.com/ to deliver js files vs direct from github due to mime issues.
example
```
userResourcesLocation https://cdn.jsdelivr.net/gh/tjames192/uBlock-userResources@master/resource.js
```

## example
```
www.reddit.com##+js(rf, https://old.reddit.com)
```

# reference
https://www.xaloez.com/blog/UblockOriginScriptlets/index.html
