class CJ4_FMC_MsgPage {
    static ShowPage1(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["MESSAGES[color]blue"],
            ["-----NEW MESSAGES-------"],
            [""],
            [""],
            [""],
            ["-----OLD MESSAGES-------"],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""],
            [""]
        ])
    }
}