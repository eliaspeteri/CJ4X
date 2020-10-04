const CJ4X_Util = {};

CJ4X_Util.createDeltaTimeCalculator = ( startTime = Date.now() ) => {
    let lastTime = startTime;

    return () => {
        const nowTime = Date.now();
        const deltaTime = nowTime - lastTime;
        lastTime = nowTime;

        return deltaTime;
    };
};