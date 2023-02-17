import java.util.Scanner;

public class Loops {
    public static void main(String args[]) {

        // // Write a program that uses nested for loops to print a multiplication table
        // for (int i = 1; i <= 12; i++) {
        // for (int j = 1; j <= 12; j++) {
        // System.out.print(i * j + "\t");
        // }
        // System.out.println();
        // }
        //
        // // Write a program that prompts the user to enter two positive integers, and
        // // find their greatest common divisor
        //
        // Scanner scanner = new Scanner(System.in);
        //
        // System.out.print("Enter the first positive integer: ");
        // int num1 = scanner.nextInt();
        //
        // System.out.print("Enter the second positive integer: ");
        // int num2 = scanner.nextInt();
        // // function outside of main
        // int gcd = findGCD(num1, num2);
        //
        // System.out.println("The greatest common divisor of " + num1 + " and " + num2
        // + " is " + gcd);
        //
        // scanner.close();

        double tuition = 10000.0;
        double targetTuition = 20000.0;
        int years = 0;

        while (tuition < targetTuition) {
            tuition = tuition * 1.07;
            years++;
        }

        System.out.println("It will take " + years + " years for the tuition to double.");
    }

    // private static int findGCD(int num1, int num2) {
    // if (num2 == 0) {
    // return num1;
    // }
    // return findGCD(num2, num1 % num2);
    // }

}