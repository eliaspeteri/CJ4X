class CJ4_FMC_IndexPage {
    static ShowPage1(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["INDEX[color]blue", "1[color]blue", "2[color]blue"],
            [""],
            ["<STATUS","GPS1 POS>"],
            [""],
            ["<MCDU MENU","FREQUENCY>"],
            [""],
            ["<DATALINK","FIX>"],
            [""],
            ["<POS INIT","HOLD>"],
            ["FMS 1[color]blue",""],
            ["<VOR CTL","PROG>"],
            ["FMS 1[color]blue",""],
            ["<GPS CTL","SEC FPLN>"]
        ]);

        fmc.onLeftInput[0] = () => { CJ4_FMC_StatusPage.ShowPage1(fmc); };
        fmc.onLeftInput[1] = () => { CJ4_FMC_MCDUMenuPage.ShowPage1(fmc); };
        fmc.onLeftInput[2] = () => { CJ4_FMC_DatalinkPage.ShowPage1(fmc); };
        fmc.onLeftInput[3] = () => { CJ4_FMC_PosInitPage.ShowPage1(fmc); };
        fmc.onLeftInput[4] = () => { CJ4_FMC_VORCtlPage.ShowPage1(fmc); };
        fmc.onLeftInput[5] = () => { CJ4_FMC_GPSCtlPage.ShowPage1(fmc); };
        fmc.onRightInput[0] = () => { CJ4_FMC_GPS1PosPage.ShowPage1(fmc); };
        fmc.onRightInput[1] = () => { CJ4_FMC_FrequencyPage.ShowPage1(fmc); };
        fmc.onRightInput[2] = () => { CJ4_FMC_FixPage.ShowPage1(fmc); };
        fmc.onRightInput[3] = () => { CJ4_FMC_HoldPage.ShowPage1(fmc); };
        fmc.onRightInput[4] = () => { CJ4_FMC_ProgressPage.ShowPage1(fmc); };
        fmc.onRightInput[5] = () => { CJ4_FMC_SecFplnPage.ShowPage1(fmc); };

        fmc.onPrevPage = () => {
            CJ4_FMC_IndexPage.ShowPage1(fmc);
        };
        fmc.onNextPage = () => {
            CJ4_FMC_IndexPage.ShowPage2(fmc);
        };
    }
    static ShowPage2(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["INDEX[color]blue", "2[color]blue", "2[color]blue"],
            [""],
            ["<FMS CTL","ROUTE MENU>"],
            [""],
            ["","DATA BASE>"],
            [""],
            ["","DB DISK OPS>"],
            [""],
            ["","DEFAULTS>"],
            ["",""],
            ["","ARR DATA>"],
            ["",""],
            ["","TEMP COMP>"]
        ]);

        fmc.onLeftInput[0] = () => { CJ4_FMCCtlPage.ShowPage(fmc); };
        fmc.onRightInput[0] = () => { CJ4_FMCRouteMenuPage.ShowPage(fmc); };
        fmc.onRightInput[1] = () => { CJ4_FMCDataBasePage.ShowPage(fmc); };
        fmc.onRightInput[2] = () => { CJ4_FMCDBDiskOpsPage.ShowPage(fmc); };
        fmc.onRightInput[3] = () => { CJ4_FMCDefaultsPage.ShowPage(fmc); };
        fmc.onRightInput[4] = () => { CJ4_FMCArrDataPage.ShowPage(fmc); };
        fmc.onRightInput[5] = () => { CJ4_FMCTempCompPage.ShowPage(fmc); };

        fmc.onPrevPage = () => {
            CJ4_FMC_IndexPage.ShowPage1(fmc);
        };
        fmc.onNextPage = () => {
            CJ4_FMC_IndexPage.ShowPage2(fmc);
        };
    }
}