class FMSStatusPage {
    static ShowPage(fms) {
        fms.clearDisplay();
        fms.setTemplate([
            ["STATUS"],
            ["NAV DATA[color]blue",""],
            ["WORLD",""],
            ["ACTIVE DATA BASE[color]yellow",""],
            ["07JUL06 06AUG06",""],
            ["SEC DATA BASE[color]blue",""],
            ["07AUG06 05SEP06",""],
            ["UTC[color]blue","DATE[color]blue"],
            ["12:05","27JUL06"],
            ["PROGRAM[color]blue",""],
            ["SCID 832-0883-000",""],
            ["------------------------[color]blue"],
            ["<INDEX","POS INIT>"]
        ])

        fms.onLeftInput[5] = () => {
            FMSIndexPage.ShowPage1(fms);
        }
        fms.onRightInput[5] = () => {
            FMSPOSInitPage.ShowPage(fms);
        }
    }
}