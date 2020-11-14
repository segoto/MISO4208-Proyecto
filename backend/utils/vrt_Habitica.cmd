@echo off

echo Start
set folder=C:\Users\teo-1\Desktop\MISO4208-Proyecto\backend\utils\mod_images
cd C:\Users\teo-1\AppData\Local\Android\Sdk\platform-tools
adb shell input swipe 535 1840 535 840 100
adb shell input swipe 535 1840 535 1440 100
adb shell input tap 670 1510
adb shell input tap 173 1527
ping -n 3 127.0.0.1 >nul
adb shell screencap /sdcard/screen.png
adb pull /sdcard/screen.png %folder%\habitica_img1.png

adb shell input tap 108 152
ping -n 2 127.0.0.1 >nul
adb shell screencap /sdcard/screen.png
adb pull /sdcard/screen.png %folder%\habitica_img2.png

adb shell input keyevent 4
ping -n 1 127.0.0.1 >nul
adb shell input tap 1000 160
ping -n 2 127.0.0.1 >nul
adb shell screencap /sdcard/screen.png
adb pull /sdcard/screen.png %folder%\habitica_img3.png

adb shell input keyevent 4
ping -n 1 127.0.0.1 >nul
adb shell input tap 536 2033
ping -n 2 127.0.0.1 >nul
adb shell input keyevent 4
adb shell screencap /sdcard/screen.png
adb pull /sdcard/screen.png %folder%\habitica_img4.png

adb shell input keyevent 4
ping -n 1 127.0.0.1 >nul
adb shell input tap 871 2123
ping -n 2 127.0.0.1 >nul
adb shell screencap /sdcard/screen.png
adb pull /sdcard/screen.png %folder%\habitica_img5.png

echo End

exit