@echo off

echo Start
cd C:\Users\teo-1\AppData\Local\Android\Sdk\platform-tools
adb shell input swipe 535 1840 535 840 100
adb shell input swipe 535 1840 535 1440 100
adb shell input tap 670 1510
adb shell input tap 660 1892
ping -n 5 127.0.0.1 >nul
adb shell screencap /sdcard/screen.png
adb pull /sdcard/screen.png C:\Users\teo-1\Desktop\MISO4208-Proyecto\backend\utils\mod_images\myexpenses_img1.png

adb shell input tap 70 150
ping -n 2 127.0.0.1 >nul
adb shell screencap /sdcard/screen.png
adb pull /sdcard/screen.png C:\Users\teo-1\Desktop\MISO4208-Proyecto\backend\utils\mod_images\myexpenses_img2.png

adb shell input tap 962 2103
ping -n 1 127.0.0.1 >nul
adb shell input tap 962 2103
ping -n 1 127.0.0.1 >nul
adb shell input keyevent 4
ping -n 1 127.0.0.1 >nul
adb shell screencap /sdcard/screen.png
adb pull /sdcard/screen.png C:\Users\teo-1\Desktop\MISO4208-Proyecto\backend\utils\mod_images\myexpenses_img3.png

adb shell input tap 70 150
adb shell input tap 890 140
ping -n 2 127.0.0.1 >nul
adb shell screencap /sdcard/screen.png
adb pull /sdcard/screen.png C:\Users\teo-1\Desktop\MISO4208-Proyecto\backend\utils\mod_images\myexpenses_img4.png

echo End

exit