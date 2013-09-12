(function (ENV) {
(function() {
  this.Test = function(testCode) {
    var config, html, sandbox;
    config = {
      width: 800,
      height: 600
    };
    html = "<html>\n<head>\n  <meta charset=\"utf-8\">\n  <title>Mocha Tests</title>\n  <link rel=\"stylesheet\" href=\"http://strd6.github.io/tests/mocha.css\" />\n</head>\n<body>\n  <div id=\"mocha\"></div>\n  <script src=\"//code.jquery.com/jquery-1.10.1.min.js\"><\/script>\n  <script src=\"http://strd6.github.io/tests/assert.js\"><\/script>\n  <script src=\"http://strd6.github.io/tests/mocha.js\"><\/script>\n  <script>mocha.setup('bdd')<\/script>\n  <script>" + testCode + "<\/script>\n  <script>\n    mocha.checkLeaks();\n    mocha.globals(['jQuery']);\n    mocha.run();\n  <\/script>\n</body>\n</html>";
    sandbox = Sandbox({
      width: config.width,
      height: config.height
    });
    sandbox.document.open();
    sandbox.document.write(html);
    return sandbox.document.close();
  };

}).call(this);
;(function() {
  var _base;

  this.HAMLjr || (this.HAMLjr = {});

  (_base = this.HAMLjr).templates || (_base.templates = {});

  this.HAMLjr.templates["button"] = function(data) {
    return (function() {
      var __attribute, __each, __element, __filter, __on, __pop, __push, __render, __text, __with, _ref;
      _ref = HAMLjr.Runtime(this), __push = _ref.__push, __pop = _ref.__pop, __attribute = _ref.__attribute, __filter = _ref.__filter, __text = _ref.__text, __on = _ref.__on, __each = _ref.__each, __with = _ref.__with, __render = _ref.__render;
      __push(document.createDocumentFragment());
      __element = document.createElement("button");
      __push(__element);
      __element = document.createTextNode('');
      __text(__element, "Test\n");
      __push(__element);
      __pop();
      __on('click', this.run);
      __pop();
      return __pop();
    }).call(data);
  };

}).call(this);
;(function() {
  $('body').append(HAMLjr.templates.button({
    run: function() {
      return Test(CoffeeScript.compile("describe \"test\", ->\n  it \"sholud be bad ass\", ->\n    assert true\n    \n    console.log \"radical\""));
    }
  }));

}).call(this);
}({
  "source": {
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "tests\n=====\n\nProvide tests to online editor\n",
      "type": "blob"
    },
    "source/test.coffee.md": {
      "path": "source/test.coffee.md",
      "mode": "100644",
      "content": "Run tests in a sandboxed window\n\n    @Test = (testCode) ->\n      config =\n        width: 800\n        height: 600\n    \n      html = \"\"\"\n        <html>\n        <head>\n          <meta charset=\"utf-8\">\n          <title>Mocha Tests</title>\n          <link rel=\"stylesheet\" href=\"http://strd6.github.io/tests/mocha.css\" />\n        </head>\n        <body>\n          <div id=\"mocha\"></div>\n          <script src=\"//code.jquery.com/jquery-1.10.1.min.js\"><\\/script>\n          <script src=\"http://strd6.github.io/tests/assert.js\"><\\/script>\n          <script src=\"http://strd6.github.io/tests/mocha.js\"><\\/script>\n          <script>mocha.setup('bdd')<\\/script>\n          <script>#{testCode}<\\/script>\n          <script>\n            mocha.checkLeaks();\n            mocha.globals(['jQuery']);\n            mocha.run();\n          <\\/script>\n        </body>\n        </html>\n      \"\"\"\n\n      sandbox = Sandbox\n        width: config.width\n        height: config.height\n      \n      sandbox.document.open()\n      sandbox.document.write(html)\n      sandbox.document.close()\n      ",
      "type": "blob"
    },
    "TODO": {
      "path": "TODO",
      "mode": "100644",
      "content": "Investigate Leak Checking\n",
      "type": "blob"
    },
    "main.coffee": {
      "path": "main.coffee",
      "mode": "100644",
      "content": "\n$('body').append(\n  HAMLjr.templates.button\n    run: ->\n      Test(CoffeeScript.compile \"\"\"\n        describe \"test\", ->\n          it \"sholud be bad ass\", ->\n            assert true\n            \n            console.log \"radical\"\n      \"\"\")\n)\n",
      "type": "blob"
    },
    "button.haml": {
      "path": "button.haml",
      "mode": "100644",
      "content": "%button Test\n  - on 'click', @run\n",
      "type": "blob"
    }
  },
  "distribution": {
    "build.js": {
      "path": "build.js",
      "content": "(function() {\n  this.Test = function(testCode) {\n    var config, html, sandbox;\n    config = {\n      width: 800,\n      height: 600\n    };\n    html = \"<html>\\n<head>\\n  <meta charset=\\\"utf-8\\\">\\n  <title>Mocha Tests</title>\\n  <link rel=\\\"stylesheet\\\" href=\\\"http://strd6.github.io/tests/mocha.css\\\" />\\n</head>\\n<body>\\n  <div id=\\\"mocha\\\"></div>\\n  <script src=\\\"//code.jquery.com/jquery-1.10.1.min.js\\\"><\\/script>\\n  <script src=\\\"http://strd6.github.io/tests/assert.js\\\"><\\/script>\\n  <script src=\\\"http://strd6.github.io/tests/mocha.js\\\"><\\/script>\\n  <script>mocha.setup('bdd')<\\/script>\\n  <script>\" + testCode + \"<\\/script>\\n  <script>\\n    mocha.checkLeaks();\\n    mocha.globals(['jQuery']);\\n    mocha.run();\\n  <\\/script>\\n</body>\\n</html>\";\n    sandbox = Sandbox({\n      width: config.width,\n      height: config.height\n    });\n    sandbox.document.open();\n    sandbox.document.write(html);\n    return sandbox.document.close();\n  };\n\n}).call(this);\n;(function() {\n  var _base;\n\n  this.HAMLjr || (this.HAMLjr = {});\n\n  (_base = this.HAMLjr).templates || (_base.templates = {});\n\n  this.HAMLjr.templates[\"button\"] = function(data) {\n    return (function() {\n      var __attribute, __each, __element, __filter, __on, __pop, __push, __render, __text, __with, _ref;\n      _ref = HAMLjr.Runtime(this), __push = _ref.__push, __pop = _ref.__pop, __attribute = _ref.__attribute, __filter = _ref.__filter, __text = _ref.__text, __on = _ref.__on, __each = _ref.__each, __with = _ref.__with, __render = _ref.__render;\n      __push(document.createDocumentFragment());\n      __element = document.createElement(\"button\");\n      __push(__element);\n      __element = document.createTextNode('');\n      __text(__element, \"Test\\n\");\n      __push(__element);\n      __pop();\n      __on('click', this.run);\n      __pop();\n      return __pop();\n    }).call(data);\n  };\n\n}).call(this);\n;(function() {\n  $('body').append(HAMLjr.templates.button({\n    run: function() {\n      return Test(CoffeeScript.compile(\"describe \\\"test\\\", ->\\n  it \\\"sholud be bad ass\\\", ->\\n    assert true\\n    \\n    console.log \\\"radical\\\"\"));\n    }\n  }));\n\n}).call(this);",
      "type": "blob"
    }
  },
  "repository": {
    "full_name": "STRd6/tests",
    "branch": "master"
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  }
}));