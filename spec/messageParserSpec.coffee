require 'jasmine-given'

describe "message parser", ->
  Given -> @subject = require "../lib/messageParser"

  describe "stop command", ->
    When -> @output = @subject "stop"
    Then -> @output.command is "stop"
    And -> @output.color is undefined
    And -> @output.message is undefined

  describe "lonely state command", ->
    When -> @output = @subject "1"
    Then -> @output.command is "change"
    And -> @output.color is "red"
    And -> @output.message is undefined

  describe "state command with message", ->
    When -> @output = @subject "1 hello world"
    Then -> @output.command is "change"
    And -> @output.color is "red"
    And -> @output.message is "hello world"

