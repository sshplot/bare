def checkArmstrong(number):
    temp = number
    sum = 0
    
    while(number > 0):
        digit = number % 10
        sum += digit * digit * digit
        number = number // 10

    return sum == temp

print(checkArmstrong(153))
