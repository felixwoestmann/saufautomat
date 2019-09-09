# Saufautomat

Diese kleine Software habe ich für eine Hochzeit geschrieben.
Auf der Feier wurde ein kleiner Automat mit einem USB Buzzer und einem Display aufgestellt. Wird der Buzzer gedrückt, so wird ein Video mit einem Trinkspruch abgespielt.

## How To
Einfach des Repo laden und Videos im MP4 Format in den Ordner 'videos' ablegen. Die Video müssen von 1 an durchnummeriert sein.

Die höchste Nummer der Videos muss in die Variable HIGHESTVIDEONR in der Datei script.js eingetragen werden.
## Features
- Es wird vor jedem Video das thumbnail.jpg, welches sich im Ordner befindet angezeigt.
- Der Buzzer kann nur gedrückt werden, wenn das Thumbnail zu sehen ist, also nicht während ein Video abgespielt wird.
- Über die Variable RECENTVIDEOSIZE kann die Größe eines Logs definiert werden. Ist die Größe bspw 5, werden die letzten 5 abgespielten Videos nicht nochmal gespielt. 
