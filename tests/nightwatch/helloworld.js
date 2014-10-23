module.exports = {
  "Hello World" : function (client) {
    client
      .url("http://127.0.0.1:3000")
      .waitForElementVisible("body", 1000)
      .assert.title("Hello World")
      .end();
  }
};

// tests/google.js
module.exports = {
  "Demo test Google" : function (client) {
    client
      .url("http://www.google.com")
      .waitForElementVisible("body", 1000)
      .assert.title("Google")
      .assert.visible("input[type=text]")
      .setValue("input[type=text]", "nightwatch")
      .waitForElementVisible("button[name=btnG]", 1000)
      .click("button[name=btnG]")
      .pause(1000)
      .assert.containsText("#main", "The Night Watch")
      .end();
  }
};
