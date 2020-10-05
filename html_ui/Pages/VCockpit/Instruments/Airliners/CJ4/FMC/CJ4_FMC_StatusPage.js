class CJ4_FMC_StatusPage {
    static ShowPage1(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
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

        fmc.onLeftInput[5] = () => {
            CJ4_FMC_IndexPage.ShowPage1(fmc);
        }
        fmc.onRightInput[5] = () => {
            CJ4_FMC_PosInitPage.ShowPage1(fmc);
        }
    }
}