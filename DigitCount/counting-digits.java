import java.util.Scanner;

class CountingDigit {
    public static void main(String[] args) {
        try(Scanner sc = new Scanner(System.in)){
            System.out.print("Input an integer: ");
            System.out.println(count(sc.nextInt()));
        }
    }

    public static int count(long number) {
        int count = 0;
        for(; number > 0; number /= 10, count++);
        return count;
    }
}