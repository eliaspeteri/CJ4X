class CJ4_FMC_PerfMenuPage {
    static ShowPage1(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["PERF MENU[color]blue"],
            [""],
            ["<PERF INIT", "FUEL MGMT>"],
            [""],
            ["<VNAV SETUP","FLT LOG>"],
            [""],
            [""],
            [""],
            [""],
            [""],
            ["ENABLE[color]green" + "/disable",""],
            [""],
            ["<RESUME 250 kt",""]
        ]);
        fmc.onLeftInput[0] = () => { CJ4_FMC_PerfInitPage.ShowPage1(fmc); }

        fmc.onLeftInput[1] = () => { CJ4_FMC_VnavSetupPage.ShowPage1(fmc); }
        
        fmc.onRightInput[0] = () => { CJ4_FMC_FuelMgmtPage.ShowPage1(fmc); }

        fmc.onRightInput[1] = () => { CJ4_FMC_FltLogPage.ShowPage1(fmc); }
    }
}//# sourceMappingURL=CJ4_FMC_PerfMenuPage.js.map