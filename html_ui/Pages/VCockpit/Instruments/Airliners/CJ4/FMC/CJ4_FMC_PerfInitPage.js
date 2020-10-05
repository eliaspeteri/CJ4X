class CJ4_FMC_PerfInitPage {
    static ShowPage1(fmc) {
        fmc.clearDisplay();
        let grWtCell = "□□□.□";
        let grossWeightValue = fmc.getWeight();
        if (isFinite(grossWeightValue)) {
            grWtCell = grossWeightValue.toFixed(1);
        }
        // if (isFinite(fmc.zeroFuelWeight)) {
        //     fmc.onLeftInput[0] = () => {
        //         let value = fmc.inOut;
        //         fmc.clearUserInput();
        //         fmc.setWeight(value, (result) => {
        //             if (result) {
        //                 CJ4_FMC_PerfInitPage.ShowPage1(fmc);
        //             }
        //         });
        //     };
        // }
        let crzAltCell = "□□□□□";
        if (fmc.cruiseFlightLevel) {
            crzAltCell = "FL" + fmc.cruiseFlightLevel;
        }
        fmc.onRightInput[0] = () => {
            let value = fmc.inOut;
            fmc.clearUserInput();
            if (fmc.setCruiseFlightLevelAndTemperature(value)) {
                CJ4_FMC_PerfInitPage.ShowPage1(fmc);
            }
        };
        let fuelCell = "---";
        if (fmc.blockFuel) {
            fuelCell = fmc.blockFuel.toFixed(1);
        }
        let zfwCell = "□□□.□";
        if (fmc.zeroFuelWeight) {
            zfwCell = fmc.zeroFuelWeight.toFixed(1);
        }
        // fmc.onLeftInput[2] = () => {
        //     let value = fmc.inOut;
        //     fmc.clearUserInput();
        //     fmc.setZeroFuelWeight(value, (result) => {
        //         if (result) {
        //             CJ4_FMC_PerfInitPage.ShowPage1(fmc);
        //         }
        //     });
        // };
        let reservesCell = "□□□.□";
        let reservesWeightValue = fmc.getRouteReservedWeight();
        if (isFinite(reservesWeightValue)) {
            reservesCell = reservesWeightValue.toFixed(1);
        }
        // fmc.onLeftInput[3] = () => {
        //     let value = fmc.inOut;
        //     fmc.clearUserInput();
        //     if (fmc.trySetRouteReservedFuel(value)) {
        //         CJ4_FMC_PerfInitPage.ShowPage1(fmc);
        //     }
        // };
        // let crzCGCell = "20.0%";
        // if (fmc.zeroFuelWeightMassCenter) {
        //     zfwCell = fmc.zeroFuelWeightMassCenter.toFixed(1) + "%";
        // }
        // fmc.onRightInput[3] = () => {
        //     let value = fmc.inOut;
        //     fmc.clearUserInput();
        //     fmc.setZeroFuelCG(value, (result) => {
        //         if (result) {
        //             CJ4_FMC_PerfInitPage.ShowPage1(fmc);
        //         }
        //     });
        // };
        // let costIndexCell = "□□□□";
        // if (fmc.costIndex) {
        //     costIndexCell = fmc.costIndex.toFixed(1);
        // }
        // fmc.onLeftInput[4] = () => {
        //     let value = fmc.inOut;
        //     fmc.clearUserInput();
        //     if (fmc.tryUpdateCostIndex(value)) {
        //         CJ4_FMC_PerfInitPage.ShowPage1(fmc);
        //     }
        // };
        // let stepSizeCell = "ICAO";
        fmc.setTemplate([
            // ["PERF INIT"],
            // ["GR WT", "CRZ ALT"],
            // [grWtCell, crzAltCell],
            // ["FUEL"],
            // [fuelCell],
            // ["ZFW"],
            // [zfwCell],
            // ["RESERVES", "CRZ CG"],
            // [reservesCell, crzCGCell],
            // ["COST INDEX", "STEP SIZE"],
            // [costIndexCell, stepSizeCell],
            // ["-------------------------"],
            // ["<INDEX", "<THRUST LIM"]
            ["ACT PERF INIT[color]blue",""],
            ["BOW[color]blue","CRZ ALT[color]blue"],
            ["",crzAltCell],
            ["PASS/WT[color]blue","ALTN CRZ ALT[color]blue"],
            ["4/170lb",""],
            ["CARGO[color]blue","= ZFW[color]blue"],
            [" 100 lb",zfwCell],
            ["SENSED FUEL[color]blue","= GWT[color]blue"],
            [fuelCell,grWtCell],
            ["",""],
            [""],
            ["",""],
            ["","VNAV SETUP>"]
        ]);
        // fmc.onLeftInput[5] = () => { CJ4_FMC_InitRefIndexPage.ShowPage1(fmc); };
        fmc.onRightInput[5] = () => { CJ4_FMC_VnavSetupPage.ShowPage1(fmc); };
        fmc.updateSideButtonActiveStatus();
    }
}
//# sourceMappingURL=CJ4_FMC_PerfInitPage.js.map