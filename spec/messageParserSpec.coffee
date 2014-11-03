require 'jasmine-given'

describe "message parser", ->
  Given -> @subject = require "../lib/messageParser"

  describe "stop command", ->
    When -> @output = @subject "stop"
    Then -> @output.command is "stop"
    And -> @output.color is undefined
    And -> @output.title is undefined

  describe "lonely state command", ->
    When -> @output = @subject "1"
    Then -> @output.command is "change"
    And -> @output.color is "red"
    And -> @output.title is undefined

  describe "state command with message", ->
    When -> @output = @subject "1 2 tests failed"
    Then -> @output.command is "change"
    And -> @output.color is "red"
    And -> @output.title is "2 tests failed"

  describe "state command with message title and body", ->
    When -> @output = @subject "1 2 tests failed ^ failure description"
    Then -> @output.command is "change"
    And -> @output.color is "red"
    And -> @output.title is "2 tests failed"
    And -> @output.body is "failure description"

  describe "state command with message title and multiple lines", ->
    When -> @output = @subject "1 2 tests failed ^ failure 1 ^ failure 2"
    Then -> @output.command is "change"
    And -> @output.color is "red"
    And -> @output.title is "2 tests failed"
    And -> @output.body is "failure 1\nfailure 2"
