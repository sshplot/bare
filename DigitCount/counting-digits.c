#include <stdio.h>

int counting(int);

int main() {
    int _number;

    printf("Input an integer: ");
    scanf("%d", &_number);
    printf("# %d\n",counting(_number));
    
    return 0;
}

int counting(int number) {
    int count = 0;
    for(; number > 0; number /= 10, count++);
    return count;
}
