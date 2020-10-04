class FMSIndexPage {
    static ShowPage1(fms) {
        fms.clearDisplay();
        fms.setTemplate([
            ["INDEX[color]blue","1[color]blue","2[color]blue"],
            ["",""],
            ["<STATUS","GPS1 POS>"],
            ["",""],
            ["<MCDU MENU","FREQUENCY>"],
            ["",""],
            ["<DATALINK","FIX>"],
            ["",""],
            ["<POS INIT","HOLD>"],
            ["FMS 1",""],
            ["<VOR CTL","PROG>"]
            ["FMS 1",""],
            ["<GPS CTL","SEC FPLN>"]
        ])

        fms.onLeftInput[0] = () => {
            FMSStatusPage.ShowPage(fms);
        }
        fms.onLeftInput[1] = () => {
            FMSMCDUMenuPage.ShowPage(fms);
        }
        fms.onLeftInput[2] = () => {
            FMSDatalinkPage.ShowPage(fms);
        }
        fms.onLeftInput[3] = () => {
            FMSPOSInitPage.ShowPage(fms);
        }
        fms.onLeftInput[4] = () => {
            FMSVORCTLPage.ShowPage(fms);
        }
        fms.onLeftInput[5] = () => {
            FMSGPSCTLPage.ShowPage(fms);
        }
        fms.onRightInput[0] = () => {
            FMSGPS1POSPage.ShowPage(fms);
        }
        fms.onRightInput[1] = () => {
            FMSFrequencyPage.ShowPage(fms);
        }
        fms.onRightInput[2] = () => {
            FMSFixPage.ShowPage(fms);
        }
        fms.onRightInput[3] = () => {
            FMSHoldPage.ShowPage(fms);
        }
        fms.onRightInput[4] = () => {
            FMSProgPage.ShowPage(fms);
        }
        fms.onRightInput[5] = () => {
            FMSSecFplnPage.ShowPage(fms);
        }
        fms.onNextPage = () => {
            this.ShowPage2(fms)
        }
        fms.onPrevPage = () => {
            this.ShowPage2(fms)
        }
    }
    static ShowPage2(fms) {
        fms.clearDisplay()
        fms.setTemplate([
          ["INDEX[color]blue","2[color]blue","2[color]blue"],
          ["",""],
          ["<FMS CTL","ROUTE MENU>"],
          ["",""],
          ["","DATA BASE>"],
          ["",""],
          ["","DB DISK OPS>"],
          ["",""],
          ["","DEFAULTS>"],
          ["",""],
          ["","ARR DATA>"]
          ["",""],
          ["","TEMP COMP>"]
        ])
        fms.onLeftInput[0] = () => {
            FMSCTLPage.ShowPage(fms);
        }
        fms.onRightInput[0] = () => {
            FMSRouteMenuPage.ShowPage(fms);
        }
        fms.onRightInput[1] = () => {
            FMSDataBasePage.ShowPage(fms);
        }
        fms.onRightInput[2] = () => {
            FMSDBDiskOpsPage.ShowPage(fms);
        }
        fms.onRightInput[3] = () => {
            FMSDefaultsPage.ShowPage(fms);
        }
        fms.onRightInput[4] = () => {
            FMSArrDataPage.ShowPage(fms);
        }
        fms.onRightInput[5] = () => {
            FMSTempCompPage.ShowPage(fms);
        }
        fms.onNextPage = () => {
            this.ShowPage1(fms)
        }
        fms.onPrevPage = () => {
            this.ShowPage1(fms)
        }
    }
}