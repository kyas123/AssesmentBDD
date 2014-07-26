describe('triangle',function(){
  it('if all sides are equal, return equilateral',function(){
  triangle(1,1,1).should.equal("equilateral");
 });
  it('if excatly 2 sides are equal, return isosceles',function(){
    triangle(2,2,4).should.equal("isosceles");
  });
  it('if no sides are equal, return scalene triangle',function(){
    triangle(2,4,6).should.equal("scalene");
  });
  it('if no sides are equal, return not a triangle',function(){
   	triangle(1,5,9).should.equal("not a triangle");
   });
});