class CJ4_FMC_MCDUMenuPage {
        static ShowPage(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["MCDU MENU[color]blue"],
            ["",""],
            ["","fmc RESET>"],
            ["",""],
            ["",""],
            ["",""],
            ["",""],
            ["",""],
            ["",""],
            ["",""],
            ["",""],
            ["",""],
            ["","LOGOFF>"]
        ])
        fmc.onRightInput[0] = () => {
            fmcResetControlPage.ShowPage(fmc);
        }
        fmc.onRightInput[5] = () => {
            fmcLogOffPage.ShowPage(fmc);
        }
    }
}