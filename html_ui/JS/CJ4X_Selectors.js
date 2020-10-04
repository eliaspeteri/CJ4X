class CJ4X_Selectors {
    static VMAX() {
        const crossSpeed = SimVar.GetGameVarValue("AIRCRAFT CROSSOVER SPEED", "Knots");
        const cruiseMach = SimVar.GetGameVarValue("AIRCRAFT CRUISE MACH","mach");
        const crossSpeedFactor = SimVar.getCrossOverSpeedFactor(crossSpeed, cruiseMach);
        const maxSpeed = SimPlane.getMaxSpeed(this.aircraft) * crossSpeedFactor;
        return maxSpeed;
    }
}