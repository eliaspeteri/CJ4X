class CJ4_FMC_FltLogPage {
    static ShowPage1(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["FLIGHT LOG[color]blue"],
            ["T/O[color]blue","LDG[color]blue","EN ROUTE[color]blue"],
            ["",""],
            ["FUEL USED[color]blue","AVG TAS/GS[color]blue"],
            ["",""],
            ["AIR DIST[color]blue","GND DIST[color]blue"],
            ["",""],
            [""],
            [""],
            [""],
            [""],
            ["------------------------- [color]blue"],
            ["","PERF MENU>"]
        ]);

        fmc.onRightInput[5] = () => { CJ4_FMC_PerfMenuPage.ShowPage1(fmc); };
    }
}