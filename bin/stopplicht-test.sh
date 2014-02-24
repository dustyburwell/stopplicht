#!/usr/bin/env bash

stopplicht-running

$@

if [ $? -ne 0 ]
then
  stopplicht-red
else
  stopplicht-green
fi
