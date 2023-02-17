public class OperatorsAndNumbers {
    public static void main(String args[]) {
        // Write the following integers in binary notation. Do not use any Java
        // functions or online conversion applications to calculate the answer, as this
        // will hinder the learning process and your understanding of the concept.
        // However, you may check your answers using Java methods.

        // int numberToCheck = 33987;
        // String binaryString = Integer.toBinaryString(numberToCheck);
        // System.out.println(binaryString);
        // 1
        // int aOne = 0b1;
        // // 8
        // int aTwo = 0b1000;
        // // 33
        // int aThree = 0b100001;
        // // 78
        // int aFour = 0b1001110;
        // // 787
        // int aFive = 0b1100010011;
        // // 33,987
        // int aSix = 0b1000010011000011;
        //
        // System.out.println(aOne);
        // System.out.println(aTwo);
        // System.out.println(aThree);
        // System.out.println(aFour);
        // System.out.println(aFive);
        // System.out.println(aSix);

        // Convert the following binary numbers to decimal notation. Do not use any Java
        // functions or online conversion applications to calculate the answer, as this
        // will hinder the learning process and your understanding of the concept.
        // However, you may check your answers using Java methods.

        /*
         * String binaryToCheck = "0010110001100111";
         * int decimal = Integer.parseInt(binaryToCheck, 2);
         * System.out.println(decimal);
         */

        // // 0010
        // int bOne = 2;
        // // 1001
        // int bTwo = 9;
        // // 0011 0100
        // int bThree = 52;
        // // 0111 0010
        // int bFour = 114;
        // // 0010 0001 1111
        // int bFive = 543;
        // // 0010 1100 0110 0111
        // int bSix = 11367;
        //
        // System.out.println(bOne);
        // System.out.println(bTwo);
        // System.out.println(bThree);
        // System.out.println(bFour);
        // System.out.println(bFive);
        // System.out.println(bSix);

        // Write a program that declares an integer a variable x and assigns the value 2
        // to it and prints out the binary string version of the number (
        // Integer.toBinaryString(x) ). Now, use the left shift operator (<<) to shift
        // by 1 and assign the result to x. Before printing the results, write a comment
        // with the predicted decimal value and binary string. Now, print out x in
        // decimal form and in binary notation.
        // Do the preceding exercise with the following values:

        // int x = 88;
        // System.out.println(Integer.toBinaryString(x));
        // int xShift = x << 1;
        // // .2? it was 4.
        // System.out.println(xShift);

        // 9? = 18
        // 17 = 34
        // 88 = 176

        // multiplies by 2?

        // Write a program that declares a variable x and assigns 150 to it, and prints
        // out the binary string version of the number. Now use the right shift operator
        // (>>) to shift by 2 and assign the result to x. Write a comment indicating
        // what you anticipate the decimal and binary values to be. Now print the value
        // of x and the binary string.

        // int x = 32456;
        // System.out.println(Integer.toBinaryString(x));
        // int xShift = x << 2;
        // //600? it was 600.
        // System.out.println(xShift);

        // Do the preceding exercise with the following values:
        // 225 = 900
        // 1555 = 6220
        // 32456 = 129824

        // Write a program that declares three int variables x, y, and z. Assign 7 to x
        // and 17 to y. Write a comment that indicates what you predict will be the
        // result of the bitwise & operation on x and y. Now use the bitwise & operator
        // to derive the decimal and binary values and assign the result to z.

        // Now, with the preceding values, use the bitwise | operator to calculate the
        // “or” value between x and y. As before, write a comment that indicates what
        // you predict the values to be before printing them out.

        // int x = 7;
        // int y = 17;
        // /* int z = x & y; */
        // int z = x | y;
        //
        // System.out.println(Integer.toBinaryString(x));
        // System.out.println(Integer.toBinaryString(y));
        // System.out.println(Integer.toBinaryString(z));
        //
        // int number = 1;
        // number++;
        // System.out.println(number);

        // Write a program that demonstrates at least 3 ways to increment a variable by
        // 1 and does this multiple times. Assign a value to an integer variable, print
        // it, increment by 1, print it again, increment by 1, and then print it again.

        // int x = 5;
        // x++;
        // x += 1;
        // x = x + 1;
        // System.out.println(x);

        // Write a program that declares 2 integer variables, x, and y, and then assigns
        // 5 to x and 8 to y. Create another variable sum and assign the value of ++x
        // added to y, and print the result. Notice the value of the sum (should be 14).
        // Now change the increment operator to postfix (x++) and re-run the program.
        // Notice what the value of the sum is. The first configuration incremented x
        // and then calculated the sum, while the second configuration calculated the
        // sum and then incremented x.
        //
        // int x = 5;
        // int y = 8;
        // int sum = ++x + y; // Pre-increment operator
        // System.out.println(sum); // Output should be 14
        //
        // x = 5;
        // y = 8;
        // sum = x++ + y; // Post-increment operator
        // System.out.println(sum); // Output should be 13
    }
}
