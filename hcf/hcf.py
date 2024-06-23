def findHCF(num1, num2):
    min = num1 if(num1 < num2) else num2
    max = num1 if(num1 > num2) else num2
        
    while(min <= max):
        if(max % min == 0):
            return min
        else:
            temp = min
            min = max % temp
            max = temp
        
print(findHCF(18, 27))
