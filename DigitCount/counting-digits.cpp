#include <iostream>
using namespace std;

int counting(int);

int main() {
    int _number;

    cout << "Input an integer: ";
    cin >> _number;
    cout << counting(_number) << "\n";
    
    return 0;
}

int counting(int number) {
    int count = 0;
    for(; number > 0; number /= 10, count++);
    return count;
}