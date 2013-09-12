(function (ENV) {
(function() {
  this.TestRunner = {
    launch: function(testCode, options) {
      var config, html, sandbox;
      if (options == null) {
        options = {};
      }
      config = Object.reverseMerge({}, options, {
        width: 800,
        height: 600
      });
      html = "<html>\n<head>\n  <meta charset=\"utf-8\">\n  <title>Mocha Tests</title>\n  <link rel=\"stylesheet\" href=\"http://strd6.github.io/tests/mocha.css\" />\n</head>\n<body>\n  <div id=\"mocha\"></div>\n  <script src=\"http://strd6.github.io/tests/assert.js\"><\/script>\n  <script src=\"http://strd6.github.io/tests/mocha.js\"><\/script>\n  <script>mocha.setup('bdd')<\/script>\n  <script>" + testCode + "<\/script>\n  <script>\n    mocha.checkLeaks();\n    mocha.globals(['jQuery']);\n    mocha.run();\n  <\/script>\n</body>\n</html>";
      sandbox = Sandbox({
        width: config.width,
        height: config.height
      });
      sandbox.document.open();
      sandbox.document.write(html);
      return sandbox.document.close();
    }
  };

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
      "content": "Export `TestRunner` object.\n\n    @TestRunner = \n\nRun tests in a sandboxed window\n\n      launch: (testCode, options={}) ->\n        config = Object.reverseMerge {}, options,\n          width: 800\n          height: 600\n      \n        html = \"\"\"\n          <html>\n          <head>\n            <meta charset=\"utf-8\">\n            <title>Mocha Tests</title>\n            <link rel=\"stylesheet\" href=\"http://strd6.github.io/tests/mocha.css\" />\n          </head>\n          <body>\n            <div id=\"mocha\"></div>\n            <script src=\"http://strd6.github.io/tests/assert.js\"><\\/script>\n            <script src=\"http://strd6.github.io/tests/mocha.js\"><\\/script>\n            <script>mocha.setup('bdd')<\\/script>\n            <script>#{testCode}<\\/script>\n            <script>\n              mocha.checkLeaks();\n              mocha.globals(['jQuery']);\n              mocha.run();\n            <\\/script>\n          </body>\n          </html>\n        \"\"\"\n  \n        sandbox = Sandbox\n          width: config.width\n          height: config.height\n        \n        sandbox.document.open()\n        sandbox.document.write(html)\n        sandbox.document.close()\n        ",
      "type": "blob"
    },
    "TODO": {
      "path": "TODO",
      "mode": "100644",
      "content": "Investigate Leak Checking\n",
      "type": "blob"
    }
  },
  "distribution": {
    "build.js": {
      "path": "build.js",
      "content": "(function() {\n  this.TestRunner = {\n    launch: function(testCode, options) {\n      var config, html, sandbox;\n      if (options == null) {\n        options = {};\n      }\n      config = Object.reverseMerge({}, options, {\n        width: 800,\n        height: 600\n      });\n      html = \"<html>\\n<head>\\n  <meta charset=\\\"utf-8\\\">\\n  <title>Mocha Tests</title>\\n  <link rel=\\\"stylesheet\\\" href=\\\"http://strd6.github.io/tests/mocha.css\\\" />\\n</head>\\n<body>\\n  <div id=\\\"mocha\\\"></div>\\n  <script src=\\\"http://strd6.github.io/tests/assert.js\\\"><\\/script>\\n  <script src=\\\"http://strd6.github.io/tests/mocha.js\\\"><\\/script>\\n  <script>mocha.setup('bdd')<\\/script>\\n  <script>\" + testCode + \"<\\/script>\\n  <script>\\n    mocha.checkLeaks();\\n    mocha.globals(['jQuery']);\\n    mocha.run();\\n  <\\/script>\\n</body>\\n</html>\";\n      sandbox = Sandbox({\n        width: config.width,\n        height: config.height\n      });\n      sandbox.document.open();\n      sandbox.document.write(html);\n      return sandbox.document.close();\n    }\n  };\n\n}).call(this);",
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