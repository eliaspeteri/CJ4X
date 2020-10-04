class CJ4X_Core {
    constructor() {
        this.modules = [];
    }
    
    init(startTime) {
        this.ACPowerStateChange = false;
        this.getDeltaTime = CJ4X_Util.createDeltaTimeCalculator(startTime);
        this.modules.forEach(module => {
            if (typeof module.init === "function") {
                module.init();
            }
        });
        this.isInit = true;
    }

    update() {
        if (!this.isInit) {
            return;
        }

        this.updateACPowerStateChange();

        const deltaTime = this.getDeltaTime();
        this.modules.forEach(module => {
            module.update(deltaTime, this);
        });
    }

    updateACPowerStateChange() {
        const engineOn = SimPlane.getEngineActive(0) || SimPlane.getEngineActive(1);
        const externalPowerOn = SimVar.GetSimVarValue("EXTERNAL POWER AVAILABLE:1", "Bool") === 1 && SimVar.GetSimVarValue("EXTERNAL POWER ON", "Bool") === 1;
        const apuOn = SimVar.GetSimVarValue("L:APU GEN ONLINE", "Bool");
        const isACPowerAvailable = engineOn || apuOn || externalPowerOn;
        this.ACPowerStateChange = (isACPowerAvailable != this.ACPowerLastState);
    }
}