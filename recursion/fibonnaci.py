# returns nth term 
def fibo(n):
    if(n == 0):
        return 0
    elif(n == 1):
        return 1
    else:
        return  fibo(n - 1) + fibo(n - 2)

# listing range of the series
for count in range(0, 15, 1):
    print(fibo(count), end=" ")
