# Dokumentáció

## Verseny Nyílvántartás

### 1. Követelményanalízis

1.1. Célkitűzés, projektindító dokumentáció

A program legfőbb célja átláthatóan, és érthetően megjeleníteni egy versenynek a főbb információit egy webes vastagkliens, azaz egyoldali alkalmazás felhasználásával. Az adatok védelme érdekében legyen lehetőség regisztrációra, majd bejelentkezésre. Bejelentkezett felhasználó felvihet új adatokat, valamint módosíthatja a már meglévőeket. 

###### Funkcionális követelmények:

* Regisztráció
* Bejelentkezés
* Csak bejelentkezett felhasználók által elérhető funkciók
..* Új versenyző felvétele a listába
..* Meglévő versenyző szerkesztése
..* Meglévő versenyző törlése
..* Új meccs felvétele a listába
..*	Meglévő meccs szerkesztése
..* Meglévő meccs törlése

###### Nem funkcionális követelmények:

* **Használhatóság:** Könnyű áttekinthetőség, ésszerű elrendezés, könnyen kezelhetőség
* **Megbízhatóság:** Jelszóval védett funkciók, és a jelszavak védelme a háttérben. Hibásan bevitt adatok esetén a program jól láthatóan jelezzen a felhasználónak, és emelje ki a hibás beviteli mezőket. A jól bevitt adatok maradjanak az űrlapban.
* **Karbantarthatóság:** Könnyen lehessen bővíteni, a különböző típusú fájlok külön csoportosítva, ésszerűen legyenek felbontva a könnyebb fejleszthetőség miatt.

1.2. Szakterületi fogalomjegyzék

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

**Egy példa az oldal használatára:**

**Meglévő versenyző szerkesztése:**




