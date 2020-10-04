class FMSFplnPage {
    static ShowPage1(fms) {
        fms.clearDisplay();
        let orign = "□□□□";
        let dist = "----";
        let dest = "□□□□";
        let route = "---------";
        let altn = "----";
        let orig_rwy = "";

        fms.setTemplate([
            ["ACT FPLN[color]blue","1[color]blue","3[color]blue"],
            ["ORIGN[color]blue","DIST[color]blue","DEST[color]blue"],
            [orign,dist,dest],
            ["ROUTE[color]blue","ALTN[color]blue"],
            [route,altn],
            ["","ORIG RWY[color]blue"],
            ["",""],
            ["VIA[color]blue","TO[color]blue"],
            ["-----","-----"],
            ["------------------------[color]blue"],
            ["<COPY ACTIVE",""],
            ["",""],
            ["<SEC FPLN","PERF INIT>"]
        ])
        fms.onLeftInput[0] = () => {
            let value = fms.inOut;
        }
        fms.onLeftInput[5] = () => {
            FMSIndexPage.ShowPage1(fms);
        }
        fms.onRightInput[5] = () => {
            FMSPOSInitPage.ShowPage(fms);
        }
    }
}