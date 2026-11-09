/**
 * Erzeugt die Doku-Screenshots der neuen Angular-UI (Darkmode, 1440 px breit).
 *
 * Voraussetzung (siehe ../context/environment.md): Test-Seed + demo-seed.js eingespielt,
 * Backend auf :5000 und `ng serve` auf :4200 laufen.
 *
 *   node shoot.cjs                 # alle Shots
 *   node shoot.cjs stammdaten      # nur ein Bereich
 *   node shoot.cjs mitglieder-liste benutzer-liste   # einzelne Dateien
 *
 * Ausgabe: static/img/ui/<bereich>/<datei>.png im Doku-Repo.
 * Shots legen nichts an: Formulare werden nur ausgefüllt, nie gespeichert.
 */
const path = require('path');
const SERVER = process.env.ALARMIATOR_SERVER || '/home/dj/Documents/Projects/ALARMiator-Server';
const { chromium } = require(path.join(SERVER, 'e2e/node_modules/playwright'));

const BASE_URL = process.env.BASE_URL || 'http://localhost:4200';
const OUT = path.resolve(__dirname, '../../static/img/ui');
const WIDTH = 1440;
const HEIGHT = 900;

// ---- Helfer ------------------------------------------------------------------

/** Navigation im Angular-Router (page.goto würde die Anmeldung verlieren). */
async function go(page, url) {
    await page.evaluate((u) => { history.pushState(null, '', u); dispatchEvent(new PopStateEvent('popstate')); }, url);
    await page.waitForLoadState('networkidle');
    await page.locator('[data-testid="list-loading"]').waitFor({ state: 'detached', timeout: 20000 }).catch(() => {});
}

const addField = (page, label) => page.locator('.add-wrapper .form-field', {
    has: page.locator('label.field-label', { hasText: new RegExp(`^\\s*${label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`) }),
});
async function fill(page, label, value) {
    await addField(page, label).locator('input.field-input, textarea').first().fill(value);
}
async function select(page, label, optionLabel) {
    await addField(page, label).locator('select').selectOption({ label: optionLabel });
}
async function check(page, label, optionText) {
    await addField(page, label).locator('.multi-select-option', { hasText: optionText }).locator('input[type="checkbox"]').check();
}
async function toggle(page, label) {
    await addField(page, label).locator('input[type="checkbox"]').first().check();
}
async function step(page, title) {
    await page.locator('.add-wrapper .add-steps .add-step', { hasText: title }).first().click();
    await page.locator('.add-wrapper .page-title', { hasText: title }).waitFor();
}
/** Pflichtfelder von "Neues Mitglied anlegen", damit Sprünge über die Schrittleiste keinen Fehler zeigen. */
async function fillPerson(page) {
    await fill(page, 'Vorname', 'Felix');
    await fill(page, 'Nachname', 'Brandt');
    await select(page, 'Organisation', 'Freiwillige Feuerwehr Musterstadt');
    await addField(page, 'Geboren am').locator('input').first().fill('1992-06-21');
    await page.locator('.add-wrapper .page-title').click();   // Fokus aus dem Datumsfeld
}
async function openRow(page, text) {
    await page.locator('.table-row', { hasText: text }).first().click();
    await page.locator('.details-wrapper, .details-header').first().waitFor();
    await page.waitForLoadState('networkidle');
}

// ---- Shots -------------------------------------------------------------------
// area: Unterordner, file: Dateiname ohne .png, url: Route, prepare: Zustand herstellen,
// height: Viewport-Höhe (für lange Formulare), element: nur dieses Element aufnehmen.

const SHOTS = [
    // Stammdaten → Mitglieder
    { area: 'stammdaten', file: 'mitglieder-liste', url: '/basedata/basedata' },
    {
        area: 'stammdaten', file: 'mitglied-anlegen-personaldaten', url: '/basedata/basedata/add', height: 1250,
        prepare: fillPerson,
    },
    {
        area: 'stammdaten', file: 'mitglied-anlegen-zuordnungen', url: '/basedata/basedata/add', height: 1100,
        prepare: async (page) => {
            await fillPerson(page);
            await step(page, 'Zuordnungen');
            await check(page, 'Gruppen', 'Zug 1');
            await check(page, 'Gruppen', 'Atemschutztrupp');
            await check(page, 'Rollen', 'Gerätewart');
            await check(page, 'Qualifikationen', 'Maschinist');
            await page.locator('.add-wrapper .multi-select-options, .add-wrapper .multi-select-list').evaluateAll(els => els.forEach(e => { e.scrollTop = 0; }));
        },
    },
    {
        area: 'stammdaten', file: 'mitglied-anlegen-login', url: '/basedata/basedata/add',
        prepare: async (page) => {
            await fillPerson(page);
            await step(page, 'Login');
            await fill(page, 'Benutzername', 'f.brandt');
            await addField(page, 'Passwort').locator('button', { hasText: 'Generieren' }).click();
        },
    },
    {
        area: 'stammdaten', file: 'mitglied-details', url: '/basedata/basedata', height: 1100,
        prepare: async (page) => openRow(page, 'Hofmann'),
    },

    // Stammdaten → Benutzer
    { area: 'stammdaten', file: 'benutzer-liste', url: '/basedata/users' },
    {
        area: 'stammdaten', file: 'benutzer-aktionen', url: '/basedata/users',
        element: (page) => page.locator('.table-row', { hasText: 'a.schmidt' }).first(),
    },
    {
        area: 'stammdaten', file: 'benutzer-anlegen-benutzer', url: '/basedata/users/add',
        prepare: async (page) => {
            await select(page, 'Mitglied', 'Hoffmann, Jonas (Freiwillige Feuerwehr Musterstadt)');
            await fill(page, 'Benutzername', 'j.hoffmann');
        },
    },
    {
        area: 'stammdaten', file: 'benutzer-anlegen-passwort', url: '/basedata/users/add',
        prepare: async (page) => {
            await select(page, 'Mitglied', 'Hoffmann, Jonas (Freiwillige Feuerwehr Musterstadt)');
            await fill(page, 'Benutzername', 'j.hoffmann');
            await step(page, 'Passwort');
            await addField(page, 'Startpasswort').locator('button', { hasText: 'Generieren' }).click();
            await toggle(page, 'Zugangsdaten per E-Mail');
        },
    },
    {
        area: 'stammdaten', file: 'benutzer-anlegen-berechtigungen', url: '/basedata/users/add', height: 1300,
        prepare: async (page) => {
            await select(page, 'Mitglied', 'Hoffmann, Jonas (Freiwillige Feuerwehr Musterstadt)');
            await fill(page, 'Benutzername', 'j.hoffmann');
            await step(page, 'Passwort');
            await addField(page, 'Startpasswort').locator('button', { hasText: 'Generieren' }).click();
            await step(page, 'Berechtigungen');
        },
    },

    // Stammdaten → Organisationen, Standorte, Gruppen, Rollen, Qualifikationen
    {
        area: 'stammdaten', file: 'organisation-anlegen', url: '/basedata/organizations/add', height: 1200,
        prepare: async (page) => {
            await fill(page, 'Name', 'Freiwillige Feuerwehr Musterhausen');
            await fill(page, 'Kürzel', 'FF Musterhausen');
        },
    },
    {
        area: 'stammdaten', file: 'standort-anlegen', url: '/basedata/locations/add', height: 1200,
        prepare: async (page) => {
            await fill(page, 'Name', 'Feuerwehrhaus Musterhausen');
            await select(page, 'Organisation', 'Freiwillige Feuerwehr Musterstadt (FF Musterstadt)');
        },
    },
    {
        area: 'stammdaten', file: 'gruppe-anlegen', url: '/basedata/groups/add', height: 1000,
        prepare: async (page) => {
            await fill(page, 'Gruppenname', 'Atemschutzgeräteträger');
            await fill(page, 'Kürzel', 'AGT');
            await select(page, 'Organisation', 'Freiwillige Feuerwehr Musterstadt');
        },
    },
    {
        area: 'stammdaten', file: 'rolle-anlegen', url: '/basedata/roles/add', height: 700,
        prepare: async (page) => fill(page, 'Rollenname', 'Maschinist'),
    },
    {
        area: 'stammdaten', file: 'qualifikation-anlegen', url: '/basedata/qualifications/add', height: 1000,
        prepare: async (page) => {
            await fill(page, 'Name', 'Atemschutzgeräteträger');
            await fill(page, 'Kürzel', 'AGT');
        },
    },
    {
        area: 'stammdaten', file: 'mitglied-anlegen-notfallkontakt', url: '/basedata/basedata/add', height: 1000,
        prepare: async (page) => {
            await fillPerson(page);
            await step(page, 'Notfallkontakt');
            await fill(page, 'Name der Kontaktperson', 'Maxine Musterfrau');
            await select(page, 'Beziehung zum Mitglied', 'Ehepartner/Lebensgefährte');
        },
    },

    // Admin
    {
        area: 'admin', file: 'server-allgemein', url: '/admin/server-config',
        prepare: async (page) => page.locator('.config-card').filter({ has: page.locator('h4', { hasText: 'Allgemeine Einstellungen' }) }).locator('input').first().fill('FF Musterstadt Alarmierung'),
        element: (page) => page.locator('.config-card').filter({ has: page.locator('h4', { hasText: 'Allgemeine Einstellungen' }) }),
    },
    {
        area: 'admin', file: 'server-wan', url: '/admin/server-config',
        prepare: async (page) => page.locator('.config-card').filter({ has: page.locator('h4', { hasText: 'Erreichbarkeit aus dem Internet' }) }).locator('input').first().fill('alarm.ff-musterstadt.de'),
        element: (page) => page.locator('.config-card').filter({ has: page.locator('h4', { hasText: 'Erreichbarkeit aus dem Internet' }) }),
    },
    {
        area: 'admin', file: 'server-ils', url: '/admin/server-config',
        prepare: async (page) => page.locator('.config-card').filter({ has: page.locator('h4', { hasText: 'ILS-Einstellungen' }) }).locator('input').first().fill('|'),
        element: (page) => page.locator('.config-card').filter({ has: page.locator('h4', { hasText: 'ILS-Einstellungen' }) }),
    },
    {
        area: 'admin', file: 'server-limits', url: '/admin/server-config',
        prepare: async (page) => {
            const c = page.locator('.config-card').filter({ has: page.locator('h4', { hasText: 'Alarmierungs-Limits' }) }).locator('input');
            await c.nth(1).fill('120'); await c.nth(2).fill('1440');
        },
        element: (page) => page.locator('.config-card').filter({ has: page.locator('h4', { hasText: 'Alarmierungs-Limits' }) }),
    },
    {
        area: 'admin', file: 'server-benachrichtigung', url: '/admin/server-config',
        element: (page) => page.locator('.config-card').filter({ has: page.locator('h4', { hasText: 'Benachrichtigungs-Einstellungen' }) }),
    },
    { area: 'admin', file: 'einstellungen', url: '/admin/settings', height: 600 },
    { area: 'admin', file: 'rechte-vorlagen-liste', url: '/admin/permission-groups' },
    {
        area: 'admin', file: 'rechte-vorlage-anlegen', url: '/admin/permission-groups/add', height: 1000,
        prepare: async (page) => {
            await fill(page, 'Name', 'Mitgliederverwaltung');
            await step(page, 'Berechtigungen');
            await select(page, 'Stammdaten', 'Lesen, Schreiben & Löschen');
        },
    },
    { area: 'admin', file: 'system', url: '/admin/system', height: 800 },
    { area: 'admin', file: 'backup-dateien', url: '/admin/backup-files', height: 600 },
    { area: 'admin', file: 'startseite', url: '/landing', height: 1150 },
    { area: 'admin', file: 'email-warteschlange', url: '/admin/email-queue', height: 650 },
    { area: 'admin', file: 'email-vorlagen', url: '/admin/email-templates', height: 800 },
    {
        area: 'admin', file: 'email-vorlage-bearbeiten', url: '/admin/email-templates', height: 1200,
        prepare: async (page) => openRow(page, 'Passwort zurücksetzen'),
    },
    { area: 'admin', file: 'plugins', url: '/admin/plugins', height: 750 },
    { area: 'admin', file: 'logviewer', url: '/admin/logviewer', height: 650 },
    { area: 'admin', file: 'aufgabenverwaltung', url: '/admin/aufgabenverwaltung', height: 700 },
    { area: 'admin', file: 'broadcast', url: '/admin/broadcast', height: 1000 },
    { area: 'admin', file: 'spaceport-clients', url: '/admin/spaceport-clients', height: 600 },
    { area: 'admin', file: 'push-tokens', url: '/alarm/fcm-tokens', height: 750 },

    // Alarmierung
    {
        area: 'alarmierung', file: 'schleife-anlegen', url: '/alarm/alarm-codes/add', height: 600,
        prepare: async (page) => { await fill(page, 'Code', '12345'); await fill(page, 'Bezeichnung', 'FF Musterstadt - Vollalarm'); },
    },
    { area: 'alarmierung', file: 'profile-liste', url: '/alarm/alarm-rules', height: 650 },
    {
        area: 'alarmierung', file: 'profil-anlegen', url: '/alarm/alarm-rules/add', height: 850,
        prepare: async (page) => {
            await fill(page, 'Titel', 'Vollalarm Musterstadt');
            await select(page, 'Organisation', 'Freiwillige Feuerwehr Musterstadt');
            await select(page, 'Alarmierungstyp', 'Kritische Alarmierung');
            await select(page, 'Status', 'Aktiv');
        },
    },
    {
        area: 'alarmierung', file: 'profil-gruppen', url: '/alarm/alarm-rules/add', height: 900,
        prepare: async (page) => step(page, 'Gruppen'),
    },
    { area: 'alarmierung', file: 'alarminformationen', url: '/alarm/alert-info', height: 800 },
    { area: 'alarmierung', file: 'alarmwege', url: '/alarm/matrix', height: 800 },
    { area: 'alarmierung', file: 'endgeraete', url: '/alarm/alert-devices', height: 700 },
    { area: 'alarmierung', file: 'probealarme-liste', url: '/alarm/test-alarms', height: 500 },
    {
        area: 'alarmierung', file: 'probealarm-anlegen', url: '/alarm/test-alarms/add', height: 700,
        prepare: async (page) => { await fill(page, 'Name', 'Übung Samstag'); await select(page, 'Status', 'Aktiv'); },
    },
    {
        area: 'alarmierung', file: 'probealarm-daten', url: '/alarm/test-alarms/add', height: 1000,
        prepare: async (page) => step(page, 'Alarmierungsdaten'),
    },
    { area: 'alarmierung', file: 'api-token-liste', url: '/admin/access-tokens', height: 600 },
    {
        area: 'alarmierung', file: 'api-token-anlegen', url: '/admin/access-tokens/add', height: 600,
        prepare: async (page) => { await fill(page, 'Beschreibung', 'BosMon'); await select(page, 'Typ', 'API Access'); },
    },
    {
        area: 'alarmierung', file: 'einsatz-neu', url: '/operations/add', height: 900,
        prepare: async (page) => fill(page, 'Stichwort', 'B3 Wohnungsbrand'),
    },
    {
        area: 'alarmierung', file: 'einsatz-neu-ort', url: '/operations/add', height: 1100,
        prepare: async (page) => { await fill(page, 'Stichwort', 'B3 Wohnungsbrand'); await step(page, 'Einsatzort'); },
    },
    {
        area: 'alarmierung', file: 'einsatz-neu-alarmierung', url: '/operations/add', height: 1100,
        prepare: async (page) => { await fill(page, 'Stichwort', 'B3 Wohnungsbrand'); await step(page, 'Alarmierung'); },
    },

    // Inventar
    { area: 'inventar', file: 'geraete-liste', url: '/inventory/assets', height: 750 },
    {
        area: 'inventar', file: 'geraet-anlegen', url: '/inventory/assets/add', height: 800,
        prepare: async (page) => {
            await select(page, 'Organisation', 'Freiwillige Feuerwehr Musterstadt');
            await fill(page, 'Bezeichnung', 'Max Mustermann APRT');
            await select(page, 'Status', 'Einsatzbereit');
        },
    },
    {
        area: 'inventar', file: 'geraet-alarmierung', url: '/inventory/assets/add', height: 800,
        prepare: async (page) => {
            await select(page, 'Organisation', 'Freiwillige Feuerwehr Musterstadt');
            await fill(page, 'Bezeichnung', 'Max Mustermann APRT');
            await addField(page, 'Inventargruppe').locator('select').selectOption({ index: 1 });
            await select(page, 'Status', 'Einsatzbereit');
            await step(page, 'Alarmierung');
            await fill(page, 'ISSI für Statusausleitung', '1234567').catch(() => {});
            await select(page, 'Endgeräte-Typ', 'APRT (Digitalfunkmelder)');
        },
    },
    {
        area: 'inventar', file: 'inventargruppe-anlegen', url: '/inventory/asset-groups/add', height: 800,
        prepare: async (page) => {
            await select(page, 'Organisation', 'Freiwillige Feuerwehr Musterstadt');
            await fill(page, 'Name', 'APRT Digitalfunkmelder');
            await step(page, 'Zuständigkeit & Alarmierung');
            await toggle(page, 'Enthält alarmierbare Einsatzmittel');
        },
    },

    // Termine
    {
        area: 'termine', file: 'kategorie-anlegen', url: '/calendar/categories/add', height: 650,
        prepare: async (page) => { await fill(page, 'Titel', 'Übungsabend'); await step(page, 'Farben'); },
    },
    {
        area: 'termine', file: 'termin-anlegen', url: '/calendar/events/add', height: 1050,
        prepare: async (page) => {
            await fill(page, 'Titel', 'Übungsabend Atemschutz');
            await fill(page, 'Beginn (Datum)', '2026-12-01'); await fill(page, 'Beginn (Uhrzeit)', '19:30');
            await fill(page, 'Ende (Datum)', '2026-12-01'); await fill(page, 'Ende (Uhrzeit)', '21:30');
            await fill(page, 'Ort', 'Feuerwehrhaus Musterstadt');
        },
    },

    // Wallboards
    { area: 'wallboards', file: 'profile-liste', url: '/wallboards', height: 650 },
    {
        area: 'wallboards', file: 'profil-anlegen', url: '/wallboards/add', height: 800,
        prepare: async (page) => {
            await fill(page, 'Name des Profils', 'Wallboard Fahrzeughalle');
            await select(page, 'Organisation', 'Freiwillige Feuerwehr Musterstadt');
            await select(page, 'Typ', 'Wallboard');
        },
    },
    { area: 'wallboards', file: 'profil-anzeige', url: '/wallboards/add', height: 650, prepare: async (page) => step(page, 'Anzeige') },
    { area: 'wallboards', file: 'profil-zuordnungen', url: '/wallboards/add', height: 950, prepare: async (page) => step(page, 'Zuordnungen') },

    // Spaceport
    {
        area: 'spaceport', file: 'api-token', url: '/admin/access-tokens/add', height: 600,
        prepare: async (page) => { await fill(page, 'Beschreibung', 'Spaceport Hauptwache'); await select(page, 'Typ', 'Spaceport Client'); },
    },
    {
        area: 'spaceport', file: 'client-anlegen', url: '/admin/spaceport-clients/add', height: 950,
        prepare: async (page) => {
            await fill(page, 'Einsatzzweck', 'Spaceport Hauptwache');
            await select(page, 'Organisation', 'Freiwillige Feuerwehr Musterstadt');
            await addField(page, 'Standort').locator('select').selectOption({ index: 1 });
        },
    },
    { area: 'spaceport', file: 'clients-liste', url: '/admin/spaceport-clients', height: 500 },
    { area: 'spaceport', file: 'druckauftraege', url: '/admin/spaceport-jobs', height: 650 },
];

// ---- Ablauf ------------------------------------------------------------------

(async () => {
    const filter = process.argv.slice(2);
    const shots = SHOTS.filter(s => !filter.length || filter.includes(s.area) || filter.includes(s.file));
    if (!shots.length) { console.error('Keine Shots für', filter); process.exit(1); }

    const browser = await chromium.launch({ args: ['--lang=de-DE'], env: { ...process.env, LANG: 'de_DE.UTF-8', LANGUAGE: 'de' } })  // LANG: deutsches Datumsformat;
    const ctx = await browser.newContext({ viewport: { width: WIDTH, height: HEIGHT }, baseURL: BASE_URL, locale: 'de-DE', timezoneId: 'Europe/Berlin' });
    await ctx.addInitScript(() => localStorage.setItem('alarmiator.theme', 'dark'));
    const page = await ctx.newPage();

    await page.goto('/login');
    await page.fill('input[name="username"]', process.env.DOC_USER || 'admin');
    await page.fill('input[name="password"]', process.env.DOC_PASSWORD || 'admin123');
    await page.click('button.loginButton');
    await page.locator('h2', { hasText: 'Willkommen' }).waitFor({ timeout: 60000 });

    let failed = 0;
    for (const s of shots) {
        const file = path.join(OUT, s.area, `${s.file}.png`);
        try {
            await page.setViewportSize({ width: WIDTH, height: s.height || HEIGHT });
            await go(page, '/landing');                 // frischer Zustand je Shot (Formulare zurücksetzen)
            await go(page, s.url);
            if (s.prepare) await s.prepare(page);
            await page.mouse.move(0, 0);               // keine Hover-Effekte
            await page.waitForTimeout(400);            // Animationen auslaufen lassen
            if (s.element) await s.element(page).screenshot({ path: file, animations: 'disabled' });
            else await page.screenshot({ path: file, animations: 'disabled' });
            console.log('ok  ', path.relative(OUT, file));
        } catch (e) {
            failed++;
            console.error('FAIL', path.relative(OUT, file), e.message.split('\n')[0]);
        }
    }
    await browser.close();
    process.exit(failed ? 1 : 0);
})();
