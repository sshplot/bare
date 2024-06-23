def rev(alist, lastIndex):
    if(lastIndex < 0):
        return 
    else:
        print(alist[lastIndex], end=", ")
        return rev(alist, lastIndex - 1)

rev([2,4,5,67,8], 4)
print("\n...")
