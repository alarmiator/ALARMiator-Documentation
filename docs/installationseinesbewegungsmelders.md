---
title: "Installations eines Bewegungsmelders"
slug: /installationseinesbewegungsmelders
---

# Installations eines Bewegungsmelders

Um das Wallboard nicht immer dauerhaft im Betrieb zu haben, gibt es die Möglichkeit einen Bewegungsmelder zu installieren. Der folgende Guide ist für die Installation auf einem Raspberry Pi ausgelegt. Hier werden alle Modelle unterstützt, je nach Modell musst du evtl. kleine Anpassungen vornehmen.



## Folgendes Material wird benötigt:



* Fernseher **muss** CEC unterstützen
* Raspberry Pi (sollte bereits vorhanden sein - Modell egal)
* Bewegungsmelder (hier einfach Raspberry Pi Bewegungsmelder suchen)
* Jumper Wires (am besten alle Varianten mit female-female; male-male; female-male; hierdurch ist eine Verlängerung möglich)



## Erweitertes Material:



* Case für den Bewegungsmelder (3D-Modell ist unten zum Download verfügbar und mittels 3D-Drucker produzierbar)
* 2 Schrauben inklusive Muttern für die Case des Bewegungsmelders
* Skript für die Erkennung (unten zum Download erhältlich)



## Hardwaresetup des Bewegungsmelders mit dem Raspberry Pi



Je nach Modell des Raspberry Pis sind die Pins, die benötigt werden evtl. an unterschiedlichen Orten. Rufe dazu einmal das Pin-Belegungsboard deines Raspberry Pis auf. Für die Verbindung zwischen Bewegungsmelder und Raspberry Pi werden 3 male-male Jumper Wires benötigt. Schaue bei deinem bestellten Bewegungsmelder die Pin Belegung an. Im Normalfall sollte am linken Pin die 5V, in der Mitte der Datenpin (GPIO 23) und rechts der GND-Pol anliegen.



Hier ist eine Abbildung der Pin Belegung eins Raspberry Pi 3B:


![](/img/GPIO_diagram-1024x576.jpeg)

Quelle. https://s3.amazonaws.com/youngwonks/Blogs/GPIO\_diagram.jpg




Hier ist ein Schematisches Bild wie der Bewegungsmelder und der Raspberry Pi verbunden werden. Bitte beachte den Bewegungsmelder korrekt herum zu halten.


![](/img/pir-364x500-1.webp)

Quelle: https://tutorials-raspberrypi.de/wp-content/uploads/pir-364x500.png?ezimgfmt=rs:364x500/rscb1/ng:webp/ngcb1




Die Kabel müssen also nun vom 5V, also beim Raspberry Pi 3B dem Pin 2 oder 4 mit dem linken Pin des Bewegungsmelders verbunden werden. Der mittlere Pin des Bewegungsmelders wird mit dem PIN GPIO 23, also hier dem Pin 16 verbunden). Der rechte Pin wird nun noch mit dem GND Pin, also hier Pin 6 verbunden.