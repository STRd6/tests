Export `TestRunner` object.

    @TestRunner = 

Run tests in a sandboxed window

      launch: (testCode, options={}) ->
        config = Object.reverseMerge {}, options,
          width: 800
          height: 600
      
        html = """
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
            <script>#{testCode}<\/script>
            <script>
              mocha.checkLeaks();
              mocha.globals(['jQuery']);
              mocha.run();
            <\/script>
          </body>
          </html>
        """
  
        sandbox = Sandbox
          width: config.width
          height: config.height
        
        sandbox.document.open()
        sandbox.document.write(html)
        sandbox.document.close()
        