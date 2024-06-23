def facto(number):
    if(number == 0):
        return 1
    else:
        return number * facto(number - 1)

number = int(input("Input an integer(not < 0): "))
print(facto(number))
