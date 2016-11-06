# raspberry-pi-labelmaker
Create a label for identifying your RPis

    cat /proc/cpuinfo | grep 'Revision' | awk '{print $3}' | sed 's/^1000//'

## Links
* [RPi HardwareHistory - eLinux.org](http://elinux.org/RPi_HardwareHistory#Board_Revision_History)
* [Extracting data from Wikipedia using curl, grep, cut and other shell commands | Loige](http://loige.co/extracting-data-from-wikipedia-using-curl-grep-cut-and-other-bash-commands/)
* [Scraping Data with XPath and Python - a clean way to extract web content3583 BYTES FREE, READY?](http://3583bytesready.net/2016/08/17/scraping-data-python-xpath/)


To find all PIs

    sudo nmap -sP 192.168.0.0/24 | awk '/^Nmap/{ip=$NF}/B8:27:EB/{print ip}'

    http://elinux.org/RPi_HardwareHistory#Board_Revision_History

To get MAC address 
    ifconfig  #TODO write script to automate this

    ifconfig eth0 | grep -Eo ..\(\:..\){5}  # Get eth0 MAC
    ifconfig wlan | grep -Eo ..\(\:..\){5}  # Get wlan MAC


Version      : Q1 2016 3 Model B  1.2
Memory       : 1024 MB
Manufacturer : (Mfg by ?)
Hardware   : BCM2709
Revision   : a22082
Serial     : 00000000e1b2412c
Ethernet MAC : b8:27:eb:b2:41:2c
Wifi MAC     : b8:27:eb:e7:14:79
DNS          : jefferson.bossard.lan


Version      : Q1 2016  3 Model B 1.2
Memory       : 1024 MB
Manufacturer : (Mfg by ?)
Hardware   : BCM2709
Revision   : a22082
Serial     : 0000000033b62a6a
Ethernet MAC : b8:27:eb:b6:2a:6a
Wifi MAC     : b8:27:eb:e3:7f:3f
DNS          : washington.bossard.lan
