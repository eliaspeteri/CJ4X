class FMSMCDUMenuPage {
        static ShowPage(fms) {
        fms.clearDisplay();
        fms.setTemplate([
            ["MCDU MENU[color]blue"],
            ["",""],
            ["","FMS RESET>"],
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
        fms.onRightInput[0] = () => {
            FMSResetControlPage.ShowPage(fms);
        }
        fms.onRightInput[5] = () => {
            FMSLogOffPage.ShowPage(fms);
        }
    }
}