# Realtime Flagsmith Example

This project demonstrates how you can use Flagsmith's realtime SSE feature.


<img src="./recording.gif"/>

## Install
```
npm i
```

## How it works

**/components/FlagsmithBlock.js**
- Initialises its own instance of flagsmith and identifies as a unique user.
- The Flagsmith instance is initialised with ``{realtime:true}``
- The SDK instance will receive new feature evaluations when they are adjusted in the dashboard. 
