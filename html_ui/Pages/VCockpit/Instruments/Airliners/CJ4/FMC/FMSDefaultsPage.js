class FMSDefaultsPage {
    static ShowPage1(fms) {
        let bow = 10800, avg_pass_wt = 170, taxi_fuel = 50, res_fuel = 200, max_map_symb = 40;
        fms.clearDisplay();
        fms.setTemplate([
            ["DEFAULTS[color]blue","1[color]blue","3[color]blue"],
            ["BOW[color]blue",""],
            [bow,""],
            ["AVG PASS WT[color]blue",""],
            [avg_pass_wt,""],
            ["TAXI FUEL[color]blue",""],
            [taxi_fuel,""],
            ["RESERVE FUEL[color]blue",""],
            [res_fuel,""],
            ["",""],
            ["",""],
            ["MAX MAP SYMB",""],
            [max_map_symb,""]
        ])
    }
    static ShowPage2(fms) {
        let clb_spd = 222, crz_spd = 222, dct_spd = 268, dct_angle = 3.0, spd_limit = 250, trans_alt = 18000;
        fms.clearDisplay();
        fms.setTemplate([
            ["DEFAULTS[color]blue","2[color]blue","3[color]blue"],
            ["CLIMB SPEED[color]blue",""],
            [clb_spd,""],
            ["CRUISE SPEED[color]blue",""],
            [crz_spd,""],
            ["DESCENT SPEED[color]blue",""],
            [dct_spd,""],
            ["DESCENT ANGLE[color]blue",""],
            [dct_angle,""],
            ["SPD/ALT LIMIT",""],
            [spd_limit,""],
            ["FL/TRANS ALT",""],
            [trans_alt,""]
        ])
    }
    static ShowPage3(fms) {

        fms.clearDisplay();
        fms.setTemplate([
            ["DEFAULTS[color]blue","1[color]blue","3[color]blue"],
            ["REDUCED HALF BANK[color]blue",""],
            ["",""],
            ["FPLN WINDS/TEMP PWR UP[color]blue",""],
            ["",""],
            ["TEMP COMP[color]blue",""],
            ["",""],
            ["DSPL TEMP © FINAL VPA[color]blue",""],
            ["",""],
            ["",""],
            ["",""],
            ["",""],
            ["",""]
        ])
    }
}