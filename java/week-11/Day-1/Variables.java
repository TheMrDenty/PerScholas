public class Variables {
    public static void main(String args[]) {
        // Write a program that declares 2 integer variables, assigns an integer to
        // each, and adds them together. Assign the sum to a variable.
        // Print out the result.
        int intOne = 1;
        int intTwo = 2;
        int intEquals = intOne + intTwo;
        System.out.println(intEquals);

        // Write a program that declares 2 double variables, assigns a number to each,
        // and adds them together. Assign the sum to a variable. Print out the result.
        double double1 = 1;
        double double2 = 2;
        double doubleEquals = double1 + double2;
        System.out.println(doubleEquals);

        // Write a program that declares an integer variable and a double variable,
        // assigns numbers to each, and adds them together. Assign the sum to a
        // variable. Print out the result. What variable type must the sum be?

        // Answer takes previously declared int and doubles
        double intAndDoubleEquals = intOne + double1;
        System.out.println(intAndDoubleEquals);
        // type needs to be double which can handle a longer number

        // Write a program that declares 2 integer variables, assigns an integer to
        // each, and divides the larger number by the smaller number. Assign the result
        // to a variable. Print out the result. Now change the larger number to a
        // decimal. What happens? What corrections are needed?

        int largeInt = 10;
        // cant do
        // int largeInt = .10;
        // can do
        // double largeInt = .10;
        int smallInt = 2;
        var dividedInts = largeInt / smallInt;
        System.out.println(dividedInts);

        // Write a program that declares 2 double variables, assigns a number to each,
        // and divides the larger by the smaller. Assign the result to a variable. Print
        // out the result. Now, cast the result to an integer. Print out the result
        // again.
        double largeDouble = 10;
        double smallDouble = 2;
        double dividedDoubles = largeDouble / smallDouble;
        System.out.println((int) dividedDoubles);

        // Write a program that declares two integer variables, x, and y, and assigns 5
        // to x and 6 to y. Declare a variable q and assign y/x to it and print q. Now,
        // cast y to a double and assign it to q. Print q again.

        int x = 5;
        int y = 6;
        var q = /* (double) */ y / x;
        System.out.println(q);

        // Write a program that declares a named constant and uses it in a calculation.
        // Print the result.

        final int constantInt = 5;
        int regInt = 2;
        int constAnswer = constantInt * regInt;
        System.out.println(constAnswer);

        // Write a program where you create 3 variables that represent products at a
        // cafe. The products could be beverages like coffee, cappuccino, espresso,
        // green tea, etc. Assign prices to each product. Create 2 more variables called
        // subtotal and totalSale and complete an “order” for 3 items of the first
        // product, 4 items of the second product, and 2 items of the third product. Add
        // them all together to calculate the subtotal. Create a constant called
        // SALES_TAX and add sales tax to the subtotal to obtain the totalSale amount.
        // Be sure to format the results to 2 decimal places.

        var coffee = 5;
        var tea = 4;
        var water = 1;
        final var SALES_TAX = 1.08;

        var subtotal = (coffee * 3) + (tea * 4) + (water * 2);
        var totalSale = subtotal * SALES_TAX;
        System.out.println(totalSale);
    }
}
