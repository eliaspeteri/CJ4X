class CJ4_FMC_FuelMgmtPage {
    static ShowPage1(fmc) {
            fmc.clearDisplay();
            let fuelCell = "---";
            if (fmc.blockFuel) {
                fuelCell = fmc.blockFuel.toFixed(1);
            fmc.setTemplate([
                ["","1/3[color]blue","FUEL MGMT[color]blue"],
                ["FUEL[color]blue","TIME TO RESV[color]blue"],
                [fuelCell],
                ["FUEL FLOW[color]blue","RNG TO RESV[color]blue"],
                [""],
                ["RESERVES[color]blue","SP RNG[color]blue"],
                [""],
                ["GND SPD[color]blue",""],
                [""],
                [""],
                [""],
                ["measured/" + "MANUAL[color]green",""],
                ["","PERF MENU>"]
            ]);
        }
        fmc.onRightInput[5] = () => { CJ4_FMC_PerfMenuPage.ShowPage1(fmc); };
    }
}