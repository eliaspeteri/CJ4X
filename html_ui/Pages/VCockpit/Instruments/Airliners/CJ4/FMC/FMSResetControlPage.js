class FMSResetControlPage {
    static ShowPage(fms) {
        fms.clearDisplay();
        fms.setTemplate([
            ["RESET CONTROL[color]blue"],
            ["",""],
            ["",""],
            ["THIS WILL RESET YOUR ON-SIDE FMC (FMC 1)[color]yellow"],
            ["",""],
            ["SOME DATA MAY BE LOST[color]yellow"],
            ["",""],
            ["DO YOU WANT TO CONTINUE?[color]yellow"],
            ["",""],
            ["",""],
            ["",""],
            ["YES","NO"],
            ["<RESET","CANCEL>"]
        ])
    }
}