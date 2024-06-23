#include <stdio.h>

long reverse(long number) {
    long rnumber = 0;
    for(;number > 0; rnumber = rnumber * 10 + number % 10, number /= 10);
    return rnumber;
}

void main() {
    long number; 
    printf("Input a number: ");
    scanf("%ld", &number);

    printf("R: %ld\n", reverse(number));
}
