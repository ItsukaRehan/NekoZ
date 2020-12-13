# /bin/sh
while true
do
java -Xmx2324M -Xms1G -jar paper.jar nogui
echo Restarting in 1 seconds, CTRL + C To Terminate.
sleep 1
done