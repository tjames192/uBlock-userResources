# uBlock-userResources
uBlock-userResources scriptlet injection
allows running custom script on webpage or all webpages

1. Goto uBlock settings, under Advanced section, check on and then click icon next to 'I am an advanced user'
2. on the Advanced settings tab, scroll down to userResourcesLocation option, which should be 'unset' by default.
3. navigate to 'My Filters' in your uBlock Origin settings
4. < hostname or wildcard >##+js(...) indicates scriptlet injection

## example
```
www.reddit.com##+js(rf, https://old.reddit.com)
```

# ref
https://www.xaloez.com/blog/UblockOriginScriptlets/index.html
