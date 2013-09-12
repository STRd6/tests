
$('body').append(
  HAMLjr.templates.button
    run: ->
      Test(CoffeeScript.compile """
        describe "test", ->
          assert true
      """)
)
