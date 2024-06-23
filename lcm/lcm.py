def getLCM(num1, num2):
    small = num1 if num1 < num2 else num2    
    m = 2
    lcm = 1
    
    while(m <= small // 2):
        if(num1 % m == 0 and num2 % m == 0):
            lcm *= m
            num1 = num1 // m
            num2 = num2 // m
        else:
            m += 1
    return  lcm * num1 * num2

print(getLCM(18, 36))



