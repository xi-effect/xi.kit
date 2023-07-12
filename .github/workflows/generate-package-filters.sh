#!/bin/bash

# main command
packages=$(ls -d packages/*/ 2>/dev/null | sort) || exit

# clear the file with a commend
echo "# autogenerated packages data" > $filename

for package in $packages
do
  # command output parsing
  dirname=${package%/*}
  dirname=${dirname#*/}
  key=${dirname//\//-}

  # yaml formatting
  printf "$key:\n  - ${package}package.json\n" >> $filename
done

echo "saved filters to $filename"