---
title: "Backup deines Servers erstellen"
slug: /backupdeinesserverserstellen
---

# Backup deines Servers erstellen

Navigiere zuerst zu **Admin → Backup-Dateien**.

![Backup-Dateien](/img/ui/admin/backup-dateien.png)

## Backup anfertigen

Um ein Backup zu erzeugen klickst du auf **+ Neu**. Danach kannst du ein Passwort für das Backup festlegen (optional).

Das Backup sollte nun in der Liste der Backups zu sehen sein. Im Namen des Backups ist am Ende in folgender Reihenfolge das Datum und die Zeit enthalten:

Jahr, Monat, Tag, Stunde, Minute, Sekunde also z.B "20220213225445" - 13.02.2022 um 22:54:45 Uhr

Mit **Datenbank herunterladen** kannst du außerdem die aktuelle Datenbank direkt herunterladen (nur für Superuser).

## Backups wiederherstellen

Backups stellst du unter **Admin → System** im Bereich **Backup wiederherstellen** wieder her: Wähle das Backup aus der Liste aus und klicke auf **Wiederherstellen**. Danach wird die Datenbank und die Bilder durch den Stand des Backups ersetzt und der Server startet neu. Dafür brauchst du das Recht "Löschen" in der Administration.

![Admin → System](/img/ui/admin/system.png)

:::caution Fehlt in der neuen Oberfläche
Das Hochladen eines Backups, das nicht mehr auf dem Server liegt, ist in der aktuellen neuen Oberfläche nicht möglich. Dafür kannst Du die alte Oberfläche unter `/oldui` nutzen (sofern der Reverse Proxy die Route dorthin weiterleitet).
:::
