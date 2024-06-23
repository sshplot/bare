def armsList(start, end):
    ArmsList=[]
    while(start <= end):
        sum = 0
        temp = start
        while(temp > 0):
            digit = temp % 10        
            sum += digit ** 3
            temp = temp //  10
        if(sum == start):
            ArmsList.append(start)    
        start += 1
    return ArmsList

print(armsList(100, 1000))
