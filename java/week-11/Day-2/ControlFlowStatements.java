import java.util.Scanner;

public class ControlFlowStatements {
    public static void main(String args[]) {
        // Write a program that declares 1 integer variable x, and then assigns 7 to it.
        // Write an if statement to print out “Less than 10” if x is less than 10.
        // Change x to equal 15, and notice the result (console should not display
        // anything).

        // Write a program that declares 1 integer variable x, and then assigns 7 to it.
        // Write an if-else statement that prints out “Less than 10” if x is less than
        // 10, and “Greater than 10” if x is greater than 10. Change x to 15 and notice
        // the result.

        // int x = 15;
        //
        // if (x < 10) {
        // System.out.println("Less than 10");
        // } else if (x > 10 && x < 20) {
        // System.out.println("Greater than or equal to 20");
        // }

        // int x = 15;

        // if (x > 10 && x < 20) {
        // System.out.println("in range");
        // } else {
        // System.out.println("out of range");
        // }

        // Use the Scanner class to accept a number score from the user to determine the
        // letter grade. Print out “Score out of range” if the score is less than 0 or
        // greater than 100.

        // Scanner scanner = new Scanner(System.in);
        // int grade = scanner.nextInt();
        //
        // if (grade >= 90 && grade <= 100) {
        // System.out.println("A");
        // } else if (grade >= 80 && grade <= 89) {
        // System.out.println("B");
        // } else if (grade >= 70 && grade <= 79) {
        // System.out.println("C");
        // } else if (grade >= 60 && grade <= 69) {
        // System.out.println("D");
        // } else if (grade >= 0 && grade <= 59) {
        // System.out.println("F");
        // } else {
        // System.out.println("INVALID GRADE");
        // }
        //
        // scanner.close();

        // Write a program that accepts an integer between 1 and 7 from the user. Use a
        // switch statement to print out the corresponding weekday. Print “Out of range”
        // if the number is less than 1 or greater than 7. Do not forget to include
        // “break” statements in each of your cases.

        // Scanner scanner = new Scanner(System.in);
        // System.out.print("Enter a number between 1 and 7: ");
        // int day = scanner.nextInt();
        //
        // switch (day) {
        // case 1:
        // System.out.println("Monday");
        // break;
        // case 2:
        // System.out.println("Tuesday");
        // break;
        // case 3:
        // System.out.println("Wednesday");
        // break;
        // case 4:
        // System.out.println("Thursday");
        // break;
        // case 5:
        // System.out.println("Friday");
        // break;
        // case 6:
        // System.out.println("Saturday");
        // break;
        // case 7:
        // System.out.println("Sunday");
        // break;
        // default:
        // System.out.println("Out of range");
        // break;
        // }
        //
        // scanner.close();

        // Create a program that lets the users input their filing status and income.
        // Display how much tax the user would have to pay according to status and
        // income.

        // There are four filing statuses: Single, Married Filing Jointly, Married
        // Filing Separately, and Head of Household.
        double taxesOwed = 0;
        Scanner scanner = new Scanner(System.in);
        System.out.println("What is your filing status? answer using a number.");
        System.out.println("1. Single");
        System.out.println("2. Married Filing Jointly");
        System.out.println("3. Married Filing Separately");
        System.out.println("4. Head of Household");

        int status = scanner.nextInt();

        switch (status) {
            case 1:
                System.out.println("You selected Single");
                System.out.println("What is your income?");
                double Singleincome = scanner.nextInt();
                if (Singleincome >= 0 && Singleincome <= 8350) {
                    taxesOwed = Singleincome * 0.10;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (Singleincome >= 8351 && Singleincome <= 33950) {
                    taxesOwed = Singleincome * 0.15;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (Singleincome >= 33951 && Singleincome <= 82250) {
                    taxesOwed = Singleincome * 0.25;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (Singleincome >= 82251 && Singleincome <= 171550) {
                    taxesOwed = Singleincome * 0.28;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (Singleincome >= 171550 && Singleincome <= 372950) {
                    taxesOwed = Singleincome * 0.33;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (Singleincome >= 372950) {
                    taxesOwed = Singleincome * 0.35;
                    System.out.println("taxes Owed " + taxesOwed);
                } else {
                    System.out.println("INVALID INPUT");
                }
                break;
            case 2:
                System.out.println("You selected Married Filing Jointly");
                System.out.println("What is your income?");
                double JointlyIncome = scanner.nextInt();
                if (JointlyIncome >= 0 && JointlyIncome <= 16700) {
                    taxesOwed = JointlyIncome * 0.10;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (JointlyIncome >= 16701 && JointlyIncome <= 67900) {
                    taxesOwed = JointlyIncome * 0.15;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (JointlyIncome >= 67901 && JointlyIncome <= 137050) {
                    taxesOwed = JointlyIncome * 0.25;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (JointlyIncome >= 137051 && JointlyIncome <= 208850) {
                    taxesOwed = JointlyIncome * 0.28;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (JointlyIncome >= 208851 && JointlyIncome <= 372950) {
                    taxesOwed = JointlyIncome * 0.33;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (JointlyIncome >= 372950) {
                    taxesOwed = JointlyIncome * 0.35;
                    System.out.println("taxes Owed " + taxesOwed);
                } else {
                    System.out.println("INVALID INPUT");
                }
                break;
            case 3:
                System.out.println("You selected Married Filing Separately");
                System.out.println("What is your income?");
                double SeparatelyIncome = scanner.nextInt();
                if (SeparatelyIncome >= 0 && SeparatelyIncome <= 8350) {
                    taxesOwed = SeparatelyIncome * 0.10;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (SeparatelyIncome >= 8351 && SeparatelyIncome <= 33950) {
                    taxesOwed = SeparatelyIncome * 0.15;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (SeparatelyIncome >= 33951 && SeparatelyIncome <= 68525) {
                    taxesOwed = SeparatelyIncome * 0.25;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (SeparatelyIncome >= 68526 && SeparatelyIncome <= 104425) {
                    taxesOwed = SeparatelyIncome * 0.28;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (SeparatelyIncome >= 104426 && SeparatelyIncome <= 186475) {
                    taxesOwed = SeparatelyIncome * 0.33;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (SeparatelyIncome >= 186476) {
                    taxesOwed = SeparatelyIncome * 0.35;
                    System.out.println("taxes Owed " + taxesOwed);
                } else {
                    System.out.println("INVALID INPUT");
                }
                break;
            case 4:
                System.out.println("You selected Head of Household");
                System.out.println("What is your income?");
                double hohIncome = scanner.nextInt();
                if (hohIncome >= 0 && hohIncome <= 11950) {
                    taxesOwed = hohIncome * 0.10;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (hohIncome >= 11951 && hohIncome <= 45500) {
                    taxesOwed = hohIncome * 0.15;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (hohIncome >= 45501 && hohIncome <= 117450) {
                    taxesOwed = hohIncome * 0.25;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (hohIncome >= 117450 && hohIncome <= 190200) {
                    taxesOwed = hohIncome * 0.28;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (hohIncome >= 190201 && hohIncome <= 372950) {
                    taxesOwed = hohIncome * 0.33;
                    System.out.println("taxes Owed " + taxesOwed);
                } else if (hohIncome >= 372950) {
                    taxesOwed = hohIncome * 0.35;
                    System.out.println("taxes Owed " + taxesOwed);
                } else {
                    System.out.println("INVALID INPUT");
                }
                scanner.close();
        }

    }

}
