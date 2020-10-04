class FMSProgressPage {
    static ShowPage1(fms) {
        fms.clearDisplay();
        let last_wp = "";
        let last_dist = "";
        let last_fuel = "";
        let to_wp = "";
        let to_dist = "";
        let to_ete = "";
        let to_fuel = "";
        let next_wp = "";
        let next_dist = "";
        let next_ete = "";
        let next_fuel = "";
        let dest_wp = "";
        let dest_dist = "";
        let dest_ete = "";
        let dest_fuel = "";
        let altn_wp = "";
        let altn_dist = "";
        let altn_ete = "";
        let altn_fuel = "";
        fms.setTemplate([
            ["PROGRESS[color]blue", "1[color]blue", "2[color]blue"],
            ["LAST[color]blue", "DIST[color]blue", "ETE[color]blue", "FUEL-LB[color]blue"],
            [last_wp, last_dist, "", last_fuel],
            ["TO[color]blue","","",""],
            [to_wp + "[color]green", to_dist + "[color]green", to_ete + "[color]green", to_fuel + "[color]green"],
            ["NEXT[color]blue", "", "", ""],
            [next_wp, next_dist, next_ete, next_fuel],
            ["DEST[color]blue","","",""],
            [dest_wp,dest_dist,dest_ete,dest_fuel],
            ["ALTN[color]blue","","",""],
            [altn_wp,altn_dist,altn_ete,altn_fuel]
            ["NAVIGATION[color]blue",""],
            ["DME/DME GPS1[color]green",""]
        ])
    }
}