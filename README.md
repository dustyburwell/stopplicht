# Stopplicht

Stopplicht is a menu bar indicator for osx. There are four states available: red, green, yellow, and grey. These states make it great for showing test run status during TDD, but it could be used for anything.

![screenshot](http://dusty.burwells.us/stopplicht/images/screenshot.png)

## Get it

Stopplicht requires Node.js. To install stopplicht, run `npm install -g stopplicht`.

## Run it

Once stopplicht has been installed, it can be started by running `stopplicht` in the terminal. Stopplicht will start as a background process and is, as of yet, non-interactive. To quit stopplicht, run `stopplicht-stop`.

## Use it

Stopplicht runs a tcp server on port `17357` and listens for short messages to change it's state. For example, to change the indicator to red using netcat:

```
> echo 1 | nc localhost 17357
```

The available messages are `0` (grey), `1` (red), `2` (green), `3` (yellow), and `stop` to kill the server. Short cut commands are provided so that integration with other scripts should be easier. Those commands are `stopplicht-grey`, `stopplicht-red`, `stopplicht-green`, `stopplicht-yellow`, and `stopplicht-stop`, respectively.

Additionally, you can use the `stopplicht-exec` command followed by your favorite command to turn the indicator yellow while the command runs and then red or green to indicate failure or success respectively. Failure is indicated by a non-zero exit code. For example:

```
> stopplicht-exec npm test
```

You can also throw in a file system watcher like [wach](https://github.com/quackingduck/wach) for added excitement:

```
> wach stopplicht-exec npm test
```
