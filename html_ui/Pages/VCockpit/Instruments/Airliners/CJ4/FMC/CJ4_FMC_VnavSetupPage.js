class CJ4_FMC_VnavSetupPage {
    static ShowPage1(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["ACT VNAV CLIMB[color]blue", "1/3[color]blue"],
            ["TGT SPEED[color]blue","TRANS ALT[color]blue"],
            ["140/.35","18000"],
            ["SPD/ALT LIMIT[color]blue"],
            ["250/10000",""],
            [""],
            ["---/-----",""],
            [""],
            [""],
            [""],
            [""],
            ["-------------------------[color]blue"],
            ["","PERF INIT>"]
        ]);
        fmc.onRightInput[5] = () => { CJ4_FMC_PerfInitPage.ShowPage1(fmc); }
    }
    static ShowPage2(fmc) {
        fmc.clearDisplay();
        let crzAltCell = "□□□□□";
        if (fmc.cruiseFlightLevel) {
            crzAltCell = fmc.cruiseFlightLevel + "FL";
        }
        fmc.setTemplate([
            ["ACT VNAV CRUISE[color]blue", "2/3[color]blue"],
            ["TGT SPEED[color]blue","CRZ ALT[color]blue"],
            ["220/.49",crzAltCell],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            ["-------------------------[color]blue"],
            ["","PERF INIT>"]
        ]);
        fmc.onRightInput[5] = () => { CJ4_FMC_PerfInitPage.ShowPage1(fmc); }
    }
    static ShowPage2(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["ACT VNAV DESCENT[color]blue", "3/3[color]blue"],
            ["TGT SPEED[color]blue","TRANS FL[color]blue"],
            [".42/190","FL180"],
            ["SPD/ALT LIMIT[color]blue",""],
            ["250/10000"],
            ["","VPR[color]blue"],
            ["---/-----","3.0°"],
            [""],
            [""],
            [""],
            [""],
            ["-------------------------[color]blue"],
            ["","PERF INIT>"]
        ]);
        fmc.onRightInput[5] = () => { CJ4_FMC_PerfInitPage.ShowPage1(fmc); }
    }
}