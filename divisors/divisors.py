def getDivisors(start, end):
    AllDivisors = []    
    while(start <= end):
        divisors=[]
        m = 1
        while(m <= start):
            if(start % m == 0):
                divisors.append(m)
            m += 1
        AllDivisors.append(divisors)
        start += 1  
    return AllDivisors

def styledPrint(dlists, start):
    for li in dlists:
        print(f"{start} - {li}")
        start += 1

startingPoint = int(input("Starting range: "))
endingPoint = int(input("ending range: "))
        
styledPrint(getDivisors(startingPoint, endingPoint), startingPoint)
