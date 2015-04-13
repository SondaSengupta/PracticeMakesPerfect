(function() {
  "use strict";
  describe('Does Mocha/Chai Work?', function(){

    describe('Create an function that reverses a string', function(){
      it('Reverse Hello', function(){
        assert.equal(ReverseAString("Hello"), "olleH");

      })
    });
    describe('Create an function that reverses a string', function(){
      it('Reverse LIVE.', function(){
        assert.equal(ReverseAString("LIVE"), "EVIL");

      })
    });



  });

}());
