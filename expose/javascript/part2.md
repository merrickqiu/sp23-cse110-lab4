1. It will print '3'. The scope of the i variable exists outside of the for loop because of the var declaration. The final value of i is 3 so that is what line 12 prints.
2. It will print '150'. The scope of discountedPrice exists outside of for loop because of the var declaration. The value of discountedPrice in the last loop is 150, so this is the final value of discountedPrice and it is what line 13 prints.
3. It will print '150'. The scope of final price is the whole function. It will print the same value as line 13, except now it will be rounded to the nearest cent, which is still 150.
4. This function will return '[50, 100, 150]'. The code calculates the final discounted price for each value in prices and pushes it into discounted.
5. This will result in an error. The let declaration makes it so that i is only in the scope of the for loop.
6. This will result in an error. The let declaration makes it so that discountedPrice is only in the scope of the for loop.
7. It will print '150'. Since the let declaration is outside the scope of the for loop, it is valid when the print statement is called.
8. This function will return '[50, 100, 150]'. The code calculates the final discounted price for each value in prices and pushes it into discounted. No line of code requires variables that are out of scope so there is no error.
9. This will result in an error. The let declaration makes it so that i is only in the scope of the for loop.
10. It will print '3'. The constant length is declared in the function scope and never changed.
11. This function will return '[50, 100, 150]'. The code calculates the final discounted price for each value in prices and pushes it into discounted. There is no error at line 7 because discountedPrice goes out of scope for every loop.
12. Here are the lines
    1. student.name
    2. student['Grad Year']
    3. student.greeting()
    4. student['Favorite Teacher'].name
    5. student.courseLoad[0]
13. Here are the results
    1. '3' + 2 => '32' since 2 gets converted to a string
    2. '3' - 2 => 1 since '3' gets converted to an integer
    3. 3 + null => 3 since null gets converted to 0
    4. true + 3 => 4 since true gets converted to 1
    5. false + null => 0 since false and null both get converted to 0
    6. '3' + undefined => '3undefined' since undefined gets converted to a string
    7. '3' - undefined => NaN since 3 gets converted to an integer, and any arithmetic operator with undefined results in NaN
14. Here are the results
    1. '2' > 1 => true since 1 gets converted to a string and '2' has a higher lexigraphical order
    2. '2' < '12' => false since '2' has a higher lexigraphical order than '12'
    3. 2 == '2' => true since type coercion can occur to make 2 and '2' equal
    4. 2 === '2' => false since 2 is not strictly equal to '2'
    5. true == 2 => false since true is converted to 1
    6. true === Boolean(2) => true since Boolean(2) is true
15. == is a loose equlity operator that allows type conversions while === is strict and does not allow type converstions
16. See part2-question16.js
17. modifyArray() will return [2,4,6]. modifyArray applies doSomething to each element in array and pushes it into newArr and returns it. This will double all the elements in [1,2,3].
18. See part2-question18.js
