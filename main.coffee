
$('body').append(
  HAMLjr.templates.button
    run: ->
      Test(CoffeeScript.compile """
        describe "test", ->
          it "sholud be bad ass", ->
            assert true
            
            console.log "radical"
      """)
)
