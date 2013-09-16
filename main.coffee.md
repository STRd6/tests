
    module.exports = 

Generate an html template that runs the given script tag strings as tests.
      
      html: (testScripts) -> """
        <html>
        <head>
          <meta charset="utf-8">
          <title>Mocha Tests</title>
          <link rel="stylesheet" href="http://strd6.github.io/tests/mocha.css" />
        </head>
        <body>
          <div id="mocha"></div>
          <script src="http://strd6.github.io/tests/assert.js"><\/script>
          <script src="http://strd6.github.io/tests/mocha.js"><\/script>
          <script>mocha.setup('bdd')<\/script>
          #{testScripts}
          <script>
            mocha.checkLeaks();
            mocha.globals(['jQuery']);
            mocha.run();
          <\/script>
        </body>
        </html>
      """
