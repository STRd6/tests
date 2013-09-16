(function() {
  module.exports = {
    html: function(testScripts) {
      return "<html>\n<head>\n  <meta charset=\"utf-8\">\n  <title>Mocha Tests</title>\n  <link rel=\"stylesheet\" href=\"http://strd6.github.io/tests/mocha.css\" />\n</head>\n<body>\n  <div id=\"mocha\"></div>\n  <script src=\"http://strd6.github.io/tests/assert.js\"><\/script>\n  <script src=\"http://strd6.github.io/tests/mocha.js\"><\/script>\n  <script>mocha.setup('bdd')<\/script>\n  " + testScripts + "\n  <script>\n    mocha.checkLeaks();\n    mocha.globals(['jQuery']);\n    mocha.run();\n  <\/script>\n</body>\n</html>";
    }
  };

}).call(this);
