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
            ["FMS11[color]blue",""],
            ["<VOR CTL","PROG>"],
            ["FMS 1[color]blue",""],
            ["<GPS CTL","SEC FPLN>"]
        ]);

        fmc.onLeftInput[0] = () => { CJ4_FMCStatusPage.ShowPage(fmc); };
        fmc.onLeftInput[1] = () => { CJ4_FMCMCDUMenuPage.ShowPage(fmc); };
        fmc.onLeftInput[2] = () => { CJ4_FMCDatalinkPage.ShowPage(fmc); };
        fmc.onLeftInput[3] = () => { CJ4_FMCPosInitPage.ShowPage(fmc); };
        fmc.onLeftInput[4] = () => { CJ4_FMCVORCtlPage.ShowPage(fmc); };
        fmc.onLeftInput[5] = () => { CJ4_FMCGPSCtlPage.ShowPage(fmc); };
        fmc.onRightInput[0] = () => { CJ4_FMCGPS1PosPage.ShowPage(fmc); };
        fmc.onRightInput[1] = () => { CJ4_FMCFrequencyPage.ShowPage(fmc); };
        fmc.onRightInput[2] = () => { CJ4_FMCFixPage.ShowPage(fmc); };
        fmc.onRightInput[3] = () => { CJ4_FMCHoldPage.ShowPage(fmc); };
        fmc.onRightInput[4] = () => { CJ4_FMCProgPage.ShowPage(fmc); };
        fmc.onRightInput[5] = () => { CJ4_FMCSecFplnPage.ShowPage(fmc); };

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