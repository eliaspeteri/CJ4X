class CJ4_FMC_MfdAdvPage {
    static ShowPage1(fmc) {
        let nearAptsCell = false, etaCell = true,hiNavCell = true,spdCell = false,loNavCell = false,altCell = true,interCell = false,aptsCell = false,termWpCell = false,missAprCell = false,windowCell = 0,sideCell = false;
        // let rows = [
        //     [""],
        //     [""],
        //     [""],
        //     [""],
        //     [""],
        //     [""],
        //     [""],
        //     [""],
        //     [""],
        //     [""],
        //     [""],
        //     [""]
        // ];
        fmc.clearDisplay();
        fmc.setTemplate([
            ["LEFT DISPLAY MENU[color]blue"],
            ["MAP DISPLAY[color]blue"],
            ["NEAREST APTS","ETA[color]green"],
            [""],
            ["HI NAVAIDS[color]green","SPEED"],
            [""],
            ["LO NAVAIDS","ALTITUDE"],
            [""],
            ["INTERS","APTS"],
            [""],
            ["TERM WPTS","MISS APPR"],
            ["WINDOW[color]blue","SIDE[color]blue"],
            ["OFF/" + "ON[color]green" + "/VNAV","L[color]green" + "/R>"]
        ]);
        fmc.onLeftInput[0] = () => {};
        fmc.onLeftInput[1] = () => {};
        fmc.onLeftInput[2] = () => {};
        fmc.onLeftInput[3] = () => {};
        fmc.onLeftInput[4] = () => {};
        fmc.onLeftInput[5] = () => {};

        fmc.onRightInput[0] = () => {};
        fmc.onRightInput[1] = () => {};
        fmc.onRightInput[2] = () => {};
        fmc.onRightInput[3] = () => {};
        fmc.onRightInput[4] = () => {};
        fmc.onRightInput[5] = () => {};

        fmc.onPrevPage = () => { CJ4_FMC_MfdAdvPage.ShowPage1(fmc); };
        fmc.onNextPage = () => { CJ4_FMC_MfdAdvPage.ShowPage2(fmc); };
    }
    static ShowPage2(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["LEFT DISPLAY MENU[color]blue","2[color]blue" + "/[color]blue" + "2[color]blue"],
            ["MAP DISPLAY[color]blue"],
            ["NDBS",""],
            [""],
            ["RNG: ALT SEL[color]green",""],
            [""],
            ["LRN POS",""],
            [""],
            ["ALTN FPLN",""],
            [""],
            ["","SIDE[color]blue"],
            ["","L[color]green" + "/R>"]
        ]);

        fmc.onPrevPage = () => { CJ4_FMC_MfdAdvPage.ShowPage1(fmc); };
        fmc.onNextPage = () => { CJ4_FMC_MfdAdvPage.ShowPage2(fmc); };
    }
}