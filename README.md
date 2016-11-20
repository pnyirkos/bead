# Dokumentáció

## Verseny Nyílvántartás

### 1. Követelményanalízis

**1.1. Célkitűzés, projektindító dokumentáció**

A program legfőbb célja átláthatóan, és érthetően megjeleníteni egy versenynek a főbb információit egy webes vastagkliens, azaz egyoldali alkalmazás felhasználásával. Az adatok védelme érdekében legyen lehetőség regisztrációra, majd bejelentkezésre. Bejelentkezett felhasználó felvihet új adatokat, valamint módosíthatja a már meglévőeket. 

###### Funkcionális követelmények:

* Regisztráció
* Bejelentkezés
* Csak bejelentkezett felhasználók által elérhető funkciók
  * Új versenyző felvétele a listába
  * Meglévő versenyző szerkesztése
  * Meglévő versenyző törlése
  * Új meccs felvétele a listába
  *	Meglévő meccs szerkesztése
  * Meglévő meccs törlése

###### Nem funkcionális követelmények:

* **Használhatóság:** Könnyű áttekinthetőség, ésszerű elrendezés, könnyen kezelhetőség
* **Megbízhatóság:** Jelszóval védett funkciók, és a jelszavak védelme a háttérben. Hibásan bevitt adatok esetén a program jól láthatóan jelezzen a felhasználónak, és emelje ki a hibás beviteli mezőket. A jól bevitt adatok maradjanak az űrlapban.
* **Karbantarthatóság:** Könnyen lehessen bővíteni, a különböző típusú fájlok külön csoportosítva, ésszerűen legyenek felbontva a könnyebb fejleszthetőség miatt.

**1.2. Szakterületi fogalomjegyzék**

* **Versenyző:** A versenyen elinduló személy, aki párharcok során összeméri a tudását a többi versenyzővel.
* **Bíró:** A párharcok közben a szabályok betartását felügyelő személy.
* **Meccs:** Párharc két versenyző között, melyet egy bíró felügyel, illetve egyértelmű győztest hoz ki két versenyző közül
* **Győztes:** Egy előnyös helyzet az egyik versenyző számára, melyet a versenyző egy meccs során az ellenfele legyőzésével ér el.

1.3. Használatieset-modell, funkcionális követelmények

**Vendég:** Csak a publikus oldalakat éri el

* Főoldal/Versenyzők nyílvántartása
* Meccsek listája, adatai, eredménye
* Bejelentkezés
* Regisztráció

**Bejelentkezett felhasználó:** A publikus oldalak elérésén felül egyéb funkciókhoz is hozzáfér.

* Új versenyző felvétele a listába
* Meglévő versenyző szerkesztése
* Meglévő versenyző törlése
* Új meccs felvétele a listába
* Meglévő meccs szerkesztése
* Meglévő meccs törlése

Egy példa az oldal használatára:

**Meglévő versenyző szerkesztése:**

1. A felhasználó az oldalra érkezve megnézheti a versenyzők listáját, a meccsek eredményét, illetve bejelentkezhet regisztrálhat.
2. A főoldalon kiválasztva a módosítani kívánt versenyzőt, rákattintva megjelennek az adatai.
3. Amennyiben a felhasználó be van jelentkezve, az adatok alatt megjelennek a Módosítás és Törlés gombok.
4. A "Versenyző Módosítása" oldalon tudja módosítani az adatokat.
5. A "Versenyző Mentése" gombbal tudja menteni a változtatásokat, a vissza gombbal viszont visszatér az adatokhoz változtatás nélkül. 

![Peldadiagram](./img/pelda.jpg/ "Peldadiagram")


### 2. Tervezés

**2.1. Architektúra Terv**

###### Komponensdiagram:

KÉP 3

###### Oldaltérkép:

* Publikus: Főoldal/Versenyzők listája
  * Bejelentkezett: Új versenyző felvitele
  * Publikus: Versenyző adatai
    * Bejelentkezett: Verenyző módosítása
    * Bejelentkezett: Versenyző törlése
* Publikus: Bejelentkezés
* Publikus: Regisztráció
* Publikus: Meccsek listája
  * Bejelentkezett: Új meccs felvitele
  * Publikus: Meccs adatai
    * Bejelentkezett: Meccs módosítása
    * Bejelentkezett: Meccs törlése

###### Végpontok:

* GET/: Főoldal/Versenyzők listája
* GET/login: Bejelentkező oldal
* POST/login: Bejelentkező adatok felküldése
* GET/logout: Kijelentkező oldal
* GET/register: Regisztrációs oldal
* POST/register: Regisztrációs adatok felküldése
* GET/competitor/id: Versenyző adatok
* GET/competitorCreate: Új versenyző felvitele
* POST/competitorCreate: Új versenyző adatainak felküldése
* GET/competitor/id/edit: Versenyző módosítása
* POST/competitor/id/edit: Versenyző új adatainak felküldése
* POST/competitor/id/delete: Versenyző törlése
* GET/matchAll: Meccsek listája
* GET/match/id: Meccs adatainak megtekintése
* GET/matchCreate: Új meccs felvitele
* POST/matchCreate: Új meccs adatainak felküldése
* GET/match/id/edit: Meccs adatainak módosítása
* POST/match/id/edit: Meccs új datainak felküldése
* POST/match/id/delete: Meccs törlése








