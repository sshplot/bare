def cFreq(numbers, n):
    countMap = dict()
 
    for i in range(n):
        if numbers[i] in countMap.keys():
            countMap[numbers[i]] += 1
        else:
            countMap[numbers[i]] = 1
 
    for x in countMap:
        print(x, " ", countMap[x])

numbers = [2, 3, 6, 7, 3, 2, 1, 7, 6, 3, 4, 8, 4, 2, 8, 7, 6, 1, 8, 2]
cFreq(numbers, len(numbers))
