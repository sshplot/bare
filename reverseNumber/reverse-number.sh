
revNumber() {
  # printf "%s" "Input an integer: "
  # read number
  # number=$((number))

  number=$1

  rev=0
  while [ $number -gt 0 ]
  do  
    rev=$((rev * 10 + number % 10))
    number=$((number / 10))
  done

  echo $rev
}

revNumber 45 8 56 454 55

#exit code 
if [ $? -eq 0 ]; then
  echo "Successful..."
fi
# 
#   return statement can be specified with exit status (0-255)
#   so, instead return use echo to capture output (using $() or $?)
# 
