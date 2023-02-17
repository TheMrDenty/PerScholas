import java.util.Scanner;

public class Arrays {
    public static void main(String args[]) {
        // Write a program that creates an array of integers with a length of 3. Assign
        // the values 1, 2, and 3 to the indexes. Print out each array element.

        // int[] array = new int[3];
        // array[0] = 1;
        // array[1] = 2;
        // array[2] = 3;
        //
        // for (int i = 0; i < array.length; i++) {
        // System.out.println("Element at index " + i + " is " + array[i]);
        // }

        // Write a program that returns the middle element in an array. Give the
        // following values to the integer array: {13, 5, 7, 68, 2} and produce the
        // following output: 7

        // int[] array = { 13, 5, 7, 68, 2 };
        //
        // int middleIndex = array.length / 2;
        // int middleElement = array[middleIndex];
        //
        // System.out.println("The middle element is " + middleElement);

        // Write a program that creates an array of String type and initializes it with
        // the strings “red”, “green”, “blue” and “yellow”. Print out the array length.
        // Make a copy using the clone( ) method. Use the Arrays.toString( ) method on
        // the new array to verify that the original array was copied.

        // String[] array = { "red", "green", "blue", "yellow" };
        // System.out.println("Original array length: " + array.length);
        // String[] arrayCopy = array.clone();
        // System.out.println("Original array length: " + arrayCopy.length);
        // for (int i = 0; i < array.length; i++) {
        // System.out.println("Copied array with stored value: " + array[i]);
        // }

        // Write a program that creates an integer array with 5 elements (i.e.,
        // numbers). The numbers can be any integers. Print out the value at the first
        // index and the last index using length - 1 as the index. Now try printing the
        // value at index = length ( e.g., myArray[myArray.length ] ). Notice the type
        // of exception which is produced. Now try to assign a value to the array index
        // 5. You should get the same type of exception.

        // int[] intArray = { 1, 2, 3, 4, 5, 6 };
        // System.out.println(intArray[0]);
        // System.out.println(intArray.length - 1);
        // System.out.println(intArray[intArray.length]);

        // Write a program where you create an integer array with a length of 5. Loop
        // through the array and assign the value of the loop control variable (e.g., i)
        // to the corresponding index in the array.

        // int[] intArray = { 1, 2, 3, 4, 5 };
        // for (int i = 0; i < intArray.length; i++) {
        // System.out.println(intArray[i]);
        // }

        // Write a program where you create an integer array of 5 numbers. Loop through
        // the array and assign the value of the loop control variable multiplied by 2
        // to the corresponding index in the array.

        // int[] array = new int[5];
        //
        // for (int i = 0; i < array.length; i++) {
        // array[i] = i * 2;
        // }
        //
        // for (int i = 0; i < array.length; i++) {
        // System.out.println("Element at index " + i + " is " + array[i]);
        // }

        // Write a program where you create an array of 5 elements. Loop through the
        // array and print the value of each element, except for the middle (index 2)
        // element.

        // int[] array = { 1, 2, 3, 4, 5 };
        //
        // for (int i = 0; i < array.length; i++) {
        // if (i != 2) {
        // System.out.println("Element at index " + i + " is " + array[i]);
        // }
        // }

        // Write a program that creates a String array of 5 elements and swaps the first
        // element with the middle element without creating a new array

        // String[] array = { "red", "green", "blue", "yellow", "orange" };
        //
        // // Print the original array
        // System.out.println("Original array:");
        // for (String element : array) {
        // System.out.print(element + " ");
        // }
        // System.out.println();
        //
        // // Swap the first element with the middle element
        // int middleIndex = array.length / 2;
        // String temp = array[0];
        // array[0] = array[middleIndex];
        // array[middleIndex] = temp;
        //
        // // Print the updated array
        // System.out.println("Updated array:");
        // for (String element : array) {
        // System.out.print(element + " ");
        // }
        // System.out.println();

        // Create an array that includes an integer, 3 strings, and 1 double. Print the
        // array.

        // // Create an array with an integer, three strings, and a double
        // Object[] arr = { 1, "apple", "banana", "cherry", 3.14 };
        //
        // // Print the array
        // for (int i = 0; i < arr.length; i++) {
        // System.out.println("arr[" + i + "] = " + arr[i]);
        // }

        // Write some Java code that asks the user how many favorite things they have.
        // Based on their answer, you should create a String array of the correct size.
        // Then ask the user to enter the things and store them in the array you
        // created. Finally, print out the contents of the array.

        Scanner scanner = new Scanner(System.in);
        // Ask the user how many favorite things they have
        System.out.print("How many favorite things do you have?");
        int favThingsAmount = scanner.nextInt();
        // Create a String array of the correct size
        String[] favThingsArray = new String[favThingsAmount];
        System.out.println(favThingsArray.length);
        // without this the for loop skips the first user input. why? no clue.
        favThingsArray[0] = scanner.nextLine();
        // Ask the user to enter their favorite things and store them in the array
        for (int i = 0; i < favThingsAmount; i++) {
            System.out.print("What is your favorite thing #" + (i + 1) + '?' + '\n');
            favThingsArray[i] = scanner.nextLine();

        }

        // Print out the contents of the array
        System.out.println("Your favorite things are:");
        for (int i = 0; i < favThingsAmount; i++) {
            System.out.println("- " + favThingsArray[i]);
        }

        scanner.close();
    }
}
