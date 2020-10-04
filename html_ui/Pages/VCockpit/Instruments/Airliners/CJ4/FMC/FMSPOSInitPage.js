class FMSPOSInitPage {
    static ShowPage1(fms) {
        let fms_pos = "□□□°□□.□□□□□°□□.□□";
        let airport_pos = "□□□°□□.□□□□□°□□.□□";

        fms.clearDisplay();
        fms.setTemplate([
            ["POS INIT[color]blue","1[color]blue","2[color]blue"],
            ["FMS POS[color]blue",""],
            [fms_pos,""],
            ["AIRPORT",""],
            [airport_pos,""],
            ["PILOT/REF WPT",""],
            ["-----",""],
            ["",""],
            ["",""],
            ["",""],
            ["SET POS"]
            ["","□□□°□□.□□□□□°□□.□□"],
            ["<INDEX","FPLN>"]
        ])
        fms.onLeftInput[5] = () => {
            FMSIndexPage.ShowPage1(fms);
        }
        fms.onRightInput[5] = () => {
            FMSFPLNPage.ShowPage(fms);
        }
        fms.onNextPage = () => {
            this.ShowPage2(fms)
        }
        fms.onPrevPage = () => {
            this.ShowPage2(fms)
        }
    }
    static ShowPage2(fms) {
        let gps1_pos = "□□□°□□.□□□□□°□□.□□";
        let gps2_pos = "□□□°□□.□□□□□°□□.□□";

        fms.clearDisplay();
        fms.setTemplate([
            ["POS INIT[color]blue","1[color]blue","2[color]blue"],
            ["FMS POS[color]blue","GS[color]blue"],
            [fms_pos,""],
            ["GPS1 POS[color]blue",""],
            [gps1_pos,""],
            ["GPS2 POS[color]blue",""],
            [gps2_pos,""],
            ["",""],
            ["",""],
            ["UPDATE FROM","NAVAID[color]blue"],
            ["<NAVAID"]
            ["------------------------[color]blue"],
            ["<INDEX","FPLN>"]
        ])
        fms.onLeftInput[5] = () => {
            FMSIndexPage.ShowPage1(fms);
        }
        fms.onRightInput[5] = () => {
            FMSFplnPage.ShowPage(fms);
        }
        fms.onNextPage = () => {
            this.ShowPage1(fms)
        }
        fms.onPrevPage = () => {
            this.ShowPage1(fms)
        }
    }
}