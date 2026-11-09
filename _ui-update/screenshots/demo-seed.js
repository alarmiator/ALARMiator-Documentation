/**
 * Demo-Daten für die Doku-Screenshots.
 *
 * Läuft NACH dem Test-Seed des Server-Repos und macht aus den Testdaten eine plausible
 * Installation ("FF Musterstadt"): Organisationen und Mitglieder umbenennen, Testlogins bis auf
 * einen je Mitglied entfernen, Adressen/Telefonnummern ergänzen. Login bleibt admin/admin123.
 *
 *   cd /home/dj/Documents/Projects/ALARMiator-Server
 *   node scripts/create-test-database.js
 *   node /home/dj/Documents/Projects/ALARMiator-Documentation/_ui-update/screenshots/demo-seed.js
 *   # danach Backend neu starten
 *
 * Achtung: Die E2E-Tests erwarten die Original-Testdaten – vor Testläufen neu seeden.
 */
const path = require('path');
const SERVER = process.env.ALARMIATOR_SERVER || '/home/dj/Documents/Projects/ALARMiator-Server';
const sqlite3 = require(path.join(SERVER, 'node_modules/sqlite3'));
const db = new sqlite3.Database(path.join(SERVER, 'store/coredatabase.db'));

const run = (sql, p = []) => new Promise((ok, ko) => db.run(sql, p, function (e) { e ? ko(e) : ok(this); }));
const all = (sql, p = []) => new Promise((ok, ko) => db.all(sql, p, (e, r) => (e ? ko(e) : ok(r))));

const ORGS = {
    'TF-Stadt': { name: 'Freiwillige Feuerwehr Musterstadt', shortName: 'FF Musterstadt' },
    'TF-Land': { name: 'Freiwillige Feuerwehr Musterdorf', shortName: 'FF Musterdorf' },
    TRD: { name: 'Rettungsdienst Musterkreis', shortName: 'RD Musterkreis' },
    'THW-OV': { name: 'THW Ortsverband Musterstadt', shortName: 'THW OV Musterstadt' },
    'E2E-Zug': { name: 'FF Musterstadt – Löschzug Nord', shortName: 'LZ Nord' },
};

/** Mitglieder (id aus dem Test-Seed) → neue Stammdaten. Felder ohne Angabe bleiben. */
const MEMBERS = {
    1: { salutation: 'Herr', firstname: 'Markus', lastname: 'Hartmann', email: 'markus.hartmann@ff-musterstadt.de', username: 'admin' },
    2: { salutation: 'Frau', firstname: 'Julia', lastname: 'Koch', email: 'julia.koch@ff-musterstadt.de', username: 'j.koch' },
    3: { username: 'm.mueller', email: 'max.mueller@ff-musterstadt.de' },
    4: { username: 'a.schmidt', email: 'anna.schmidt@ff-musterstadt.de' },
    5: { username: 't.weber', email: 'thomas.weber@ff-musterstadt.de' },
    6: { username: 'l.fischer', email: 'lisa.fischer@ff-musterstadt.de' },
    7: { email: 'karl.wagner@ff-musterstadt.de' },
    8: { salutation: 'Herr', firstname: 'Sebastian', lastname: 'Lang', email: 'sebastian.lang@ff-musterdorf.de', username: 's.lang' },
    9: { email: 'peter.hofmann@ff-musterdorf.de', username: 'p.hofmann' },
    10: { email: 'maria.bauer@ff-musterdorf.de', username: 'm.bauer' },
    11: { title: 'Dr.', firstname: 'Jan', email: 'jan.klein@rd-musterkreis.de', username: 'j.klein' },
    12: { email: 'sandra.wolf@rd-musterkreis.de', username: 's.wolf' },
    13: { email: 'michael.braun@rd-musterkreis.de', username: 'm.braun' },
    14: { email: 'stefan.koenig@thw-musterstadt.de', username: 's.koenig' },
    15: { email: 'nina.richter@thw-musterstadt.de', username: 'n.richter' },
    16: { email: 'erika.becker@ff-musterstadt.de', username: 'e.becker' },
    17: { salutation: 'Herr', firstname: 'Florian', lastname: 'Schulz', email: 'florian.schulz@ff-musterstadt.de' },
    18: { salutation: 'Frau', firstname: 'Laura', lastname: 'Neumann', email: 'laura.neumann@ff-musterstadt.de' },
    19: { salutation: 'Herr', firstname: 'Ludwig', lastname: 'Albrecht' },
    20: { salutation: 'Herr', firstname: 'Hans', lastname: 'Seidel' },
    21: { salutation: 'Herr', firstname: 'Tobias', lastname: 'Krüger', email: 'tobias.krueger@ff-musterstadt.de', username: 't.krueger' },
    22: { salutation: 'Herr', firstname: 'Jörg', lastname: 'Zimmermann', email: 'joerg.zimmermann@ff-musterdorf.de' },
    23: { salutation: 'Herr', firstname: 'Rainer', lastname: 'Vogel' },
};

const STREETS = ['Hauptstraße', 'Bahnhofstraße', 'Gartenweg', 'Schulstraße', 'Lindenallee', 'Am Feuerwehrhaus', 'Kirchplatz', 'Wiesenweg'];
const CITY_BY_ORG = {
    'FF Musterstadt': ['12345', 'Musterstadt'], 'LZ Nord': ['12345', 'Musterstadt'], 'FF Musterdorf': ['12346', 'Musterdorf'],
    'RD Musterkreis': ['12340', 'Kreisstadt'], 'THW OV Musterstadt': ['12345', 'Musterstadt'],
};

/** Zusätzliche Mitglieder der FF Musterstadt, damit die Liste nach einer echten Wehr aussieht. */
const EXTRA = [
    ['Herr', 'Daniel', 'Schäfer'], ['Frau', 'Katharina', 'Meyer'], ['Herr', 'Jonas', 'Hoffmann'], ['Herr', 'Lukas', 'Schwarz'],
    ['Frau', 'Sophie', 'Zimmer'], ['Herr', 'Benedikt', 'Huber'], ['Herr', 'Matthias', 'Wolff'], ['Frau', 'Christina', 'Graf'],
];

(async () => {
    for (const [oldShort, o] of Object.entries(ORGS)) {
        await run('UPDATE organizations SET name = ?, shortName = ? WHERE shortName = ?', [o.name, o.shortName, oldShort]);
    }

    // Ein Login je Mitglied: admin behalten, sonst den ersten Login des Mitglieds; Rest löschen
    const users = await all('SELECT id, username, basedataid FROM users ORDER BY id');
    const keep = new Map();
    for (const u of users) if (u.username === 'admin' || !keep.has(u.basedataid)) keep.set(u.basedataid, u.id);
    const keepIds = new Set(keep.values());
    for (const u of users) {
        if (keepIds.has(u.id)) continue;
        await run('DELETE FROM user_org_permissions WHERE userId = ?', [u.id]);
        await run('DELETE FROM xt_users_users_groups WHERE userId = ?', [u.id]);
        await run('DELETE FROM users WHERE id = ?', [u.id]);
    }

    const orgOf = Object.fromEntries((await all('SELECT b.id, o.shortName FROM basedata b JOIN organizations o ON o.id = b.organizationid')).map(r => [r.id, r.shortName]));
    let i = 0;
    for (const [id, m] of Object.entries(MEMBERS)) {
        const { username, ...fields } = m;
        const [zip, city] = CITY_BY_ORG[orgOf[id]] || ['12345', 'Musterstadt'];
        // Adresse/Telefon nur ergänzen, wo noch nichts steht (Peter Hofmann ist im Test-Seed vollständig)
        await run(`UPDATE basedata SET street = COALESCE(street, ?), zip = COALESCE(zip, ?), city = COALESCE(city, ?),
            state = COALESCE(state, 'Bayern'), country = COALESCE(country, 'Deutschland'),
            cellphone = COALESCE(cellphone, ?), birthday = COALESCE(birthday, ?), date_entry = COALESCE(date_entry, ?) WHERE id = ?`,
            [`${STREETS[i % STREETS.length]} ${3 + (i * 7) % 40}`, zip, city, `0151 ${String(2000000 + i * 137731).slice(0, 7)}`,
                `${1970 + (i * 3) % 32}-${String(1 + i % 12).padStart(2, '0')}-${String(3 + (i * 5) % 25).padStart(2, '0')}`,
                `${2000 + i % 24}-01-01`, id]);
        const keys = Object.keys(fields);
        if (keys.length) await run(`UPDATE basedata SET ${keys.map(k => `${k} = ?`).join(', ')} WHERE id = ?`, [...keys.map(k => fields[k]), id]);
        if (username) await run('UPDATE users SET username = ? WHERE id = ?', [username, keep.get(Number(id))]);
        i++;
    }

    // Peter Hofmann (Test-Seed: "Landheim") an seine Wehr anpassen
    await run("UPDATE basedata SET zip = '12346', city = 'Musterdorf' WHERE id = 9");

    // Testgruppen umbenennen
    const GROUPS = {
        'e2e Startseite Stadt': ['Jugendfeuerwehr', 'JF'], 'e2e Startseite Land': ['Atemschutz', 'AS'],
        'e2e Startseite Rettung': ['Leitstelle', 'ILS'], 'e2e Startseite intern': ['Maschinisten', 'MA'],
        'Zebrafink-Staffel': ['Probealarm', 'PA'],
    };
    for (const [old, [name, short]] of Object.entries(GROUPS)) {
        await run('UPDATE `groups` SET groupname = ?, shortName = ? WHERE groupname = ?', [name, short, old]);
    }

    // Systemmeldungen gelesen (kein Zähler an der Glocke)
    await run('UPDATE systemmessages SET readstate = 1');

    const ffId =(await all("SELECT id FROM organizations WHERE shortName = 'FF Musterstadt'"))[0].id;
    for (const [salutation, firstname, lastname] of EXTRA) {
        const exists = await all('SELECT id FROM basedata WHERE firstname = ? AND lastname = ?', [firstname, lastname]);
        if (exists.length) continue;
        await run(`INSERT INTO basedata (salutation, firstname, lastname, organizationid, email, street, zip, city, state, country, cellphone, birthday, date_entry, uuid)
            VALUES (?, ?, ?, ?, ?, ?, '12345', 'Musterstadt', 'Bayern', 'Deutschland', ?, ?, ?, lower(hex(randomblob(16))))`,
            [salutation, firstname, lastname, ffId, `${firstname}.${lastname}@ff-musterstadt.de`.toLowerCase().replace(/ä/g, 'ae'),
                `${STREETS[i % STREETS.length]} ${5 + i}`, `0160 ${String(3000000 + i * 91357).slice(0, 7)}`,
                `${1975 + i % 25}-${String(1 + i % 12).padStart(2, '0')}-1${i % 9}`, `${2005 + i % 18}-03-01`]);
        i++;
    }

    // Admin gehört zwei alarmierbaren Gruppen (Startseite "Meine Alarmierung")
    for (const g of [1, 3]) {
        if (!(await all('SELECT 1 FROM xt_basedata_groups WHERE basedataId = 1 AND groupId = ?', [g])).length) {
            await run('INSERT INTO xt_basedata_groups (basedataId, groupId, alarmMutedState) VALUES (1, ?, 0)', [g]);
        }
    }

    // "E2E"-Präfixe der Testdaten entfernen (Listen in Admin, Alarmierung, Kalender, ...)
    const CLEAN = ['alertdevices.name', 'calendarCategoriesStore.title', 'calendarStore.title', 'cron_tasks.name', 'fcmtokenStore.fcmToken',
        'honorsStore.title', 'operationsStore.subject', 'operationsStore.keywordName', 'operationsTemplates.title', 'operationsTemplates.subject',
        'performancetestsStore.title', 'respiratoryStore.doctorName', 'trainingsStore.title', 'trainings_schedule.title', 'wallboardsStore.name', 'cron_tasks.data'];
    for (const tc of CLEAN) {
        const [t, c] = tc.split('.');
        await run(`UPDATE ${t} SET ${c} = trim(replace(replace(replace(${c}, 'E2E ', ''), 'e2e-', ''), 'e2e ', '')) WHERE ${c} LIKE '%e2e%'`);
    }
    for (const [o, n] of [['Zebrafink-Vorlage Stadt', 'Vorlage Hilfeleistung'], ['Zebrafink-Vorlage Land', 'Vorlage Verkehrsunfall'], ['Vorlage TF-Land', 'Vorlage Musterdorf']]) {
        await run('UPDATE operationsTemplates SET title = ? WHERE title = ?', [n, o]);
    }
    for (const [o, n] of [['Zebrafink-Wallboard', 'Wallboard Fahrzeughalle'], ['Pinguin-Wallboard', 'Wallboard Umkleide'], ['Zebrafink-App', 'App Musterdorf'], ['Wache Land', 'Wallboard Musterdorf'], ['Wallboard Stadt', 'Wallboard Musterstadt'], ['App Land inaktiv', 'App Musterdorf (inaktiv)']]) {
        await run('UPDATE wallboardsStore SET name = ? WHERE name = ?', [n, o]);
    }
    // Adressen der E-Mail-Warteschlange
    await run(`UPDATE emailQueue SET recipients = replace(replace(replace(recipients, 'tf-stadt.de', 'ff-musterstadt.de'), 'tf-land.de', 'ff-musterdorf.de'), 'thw.de', 'thw-musterstadt.de'), html = replace(html, 'DLK 23/12', 'DLK 23/12')`);

    console.log('Demo-Daten eingespielt.');
    db.close();
})().catch(e => { console.error(e); process.exit(1); });
