class Citation_FMS_Main extends FMCMainDisplay {

    connectedCallback() {
        super.connectedCallback();
        RegisterViewListener("JS_LISTENER_KEYEVENT",() => {
            console.log("JS_LISTENER_KEYEEVENT registered.");
            RegisterViewListener("JS_LISTENER_FACILITY",() => {
                console.log("JS_LISTENER_FACILITY registered.");
                this._registered = true;
            });
        });
    }

    Init() {
        super.Init();
        this.CJ4XCore = new CJ4X_Core();
        this.CJ4XCore.init(this._lastTime);

        this.defaultInputErrorMessage = "NOT ALLOWED";
        this.onMsg = () => { FMSMsgPage.ShowPage(this); };
        this.onDir = () => { FMSDirectToPage.ShowPage(this); };
        this.onIdx = () => { FMSIndexPage.ShowPage(this); };
        this.onTun = () => { FMSRadioTuningPage.ShowPage(this); };
        this.onFpln = () => { FMSACTFPLNPage.ShowPage(this); };
        this.onLegs = () => { FMSLegsPage.ShowPage(this); };
        this.onDepArr = () => { FMSDepArrPage.ShowPage(this); };
        this.onPerf = () => { FMSPerfPage.ShowPage(this); };
        this.onMFDMenu = () => { FMSMFDMenuPage.ShowPage(this); };
        this.onMFDAdv = () => { FMSMFDAdvPage.ShowPage(this); };
        this.onMFDData = () => { FMSMFDDataPage.ShowPage(this); };
    }

    onInputAircraftSpecific(input) {
        if (input ==="MSG") {
            if (this.onMsg) {
                this.onMsg();
            }
            return true;
        }
        else if(input === "DIR") {
            if (this.onDir) {
                this.onDir();
            }
            return true;
        }
        else if(input === "IDX") {
            if (this.onIdx) {
                this.onIdx();
            }
            return true;
        }
        else if(input === "TUN") {
            if (this.onTun) {
                this.onTun();
            }
            return true;
        }
        else if(input === "FPLN") {
            if (this.onFpln) {
                this.onFpln();
            }
            return true;
        }
        else if(input === "LEGS") {
            if (this.onLegs) {
                this.onLegs();
            }
            return true;
        }
        else if(input === "DEPARR") {
            if (this.onDepArr) {
                this.onDepArr();
            }
            return true;
        }
        else if(input === "PERF") {
            if (this.onPerf) {
                this.onPerf();
            }
            return true;
        }
        else if(input === "MFDMENU") {
            if (this.onMFDMenu) {
                this.onMFDMenu();
            }
            return true;
        }
        else if(input === "MFDADV") {
            if (this.onMFDAdv) {
                this.onMFDAdv();
            }
            return true;
        }
        else if(input === "MFDDATA") {
            if (this.onMFDData) {
                this.onMFDData();
            }
            return true;
        }
        else if(input === "PREV") {
            if (this.onPrev) {
                this.onPrev();
            }
            return true;
        }
        else if(input === "NEXT") {
            if (this.onNext) {
                this.onNext();
            }
            return true;
        }
        return false;
    }

    clearDisplay() {
        super.clearDisplay();
        this.onPrev = undefined;
        this.onNext = undefined;
    }
}
registerInstrument("cj4-fms-declarations",Citation_FMS_Main);