'''
Counting digit(s) of a given integer
'''
def countingDigit(number):
    count = 0
    while(number > 0):
        number //= 10
        count += 1
        
    return count

print(countingDigit(int(input("Input an integer: "))))
