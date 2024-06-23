def isPalindromeText(text, index):
    if(index > len(text) // 2):
        return True
    return isPalindromeText(text, index + 1) and text[index] == text[len(text) - index - 1]

print(isPalindromeText("popa", 0))
    