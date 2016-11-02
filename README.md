# raspberry-pi-labelmaker
Create a label for identifying your RPis

    cat /proc/cpuinfo | grep 'Revision' | awk '{print $3}' | sed 's/^1000//'
