# Stopplicht

Stopplicht is a menu bar indicator for osx. There are four states available: red, green, yellow, and grey. These states make it great for showing test run status during TDD, but it could be used for anything.

## Get it

Stopplicht requires Node.js. To install stopplicht, run `npm install -g stopplicht`.

## Run it

Once stopplicht has been installed, it can be started by running `stopplicht` in the terminal. Stopplicht will start as a background process and is, as of yet, non-interactive. To quit stopplicht, run `stopplicht-stop`.

## Use it

Stopplicht runs a tcp server on port `17357` and listens for short messages to change it's state. For example, to change the indicator to red using netcat:

```
> echo 1 | nc localhost 17357
```

The available messages are `0` (grey), `1` (red), `2` (green), `3` (yellow), and `stop` to kill the server. Short cut commands are provided so that integration with other scripts should be easier. Those commands are `stopplicht-idle`, `stopplicht-red`, `stopplicht-green`, `stopplicht-running`, and `stopplicht-stop`, respectively.

