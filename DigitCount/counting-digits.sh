printf "%s" "Input an integer: "
read number

count=0

while [ $number -gt 0 ]; do
    number=$((number / 10))
    count=$((count + 1))
done

printf "# %s\n" $count