class Kartya {
    constructor(htmlDomElem, adat) {
        this.elem = htmlDomElem;
        this.adat = adat;
        console.log("this.adat" +this.adat);
        console.log("this.elem" + this.elem);
        this.cimElem = this.elem.children(".title");
        this.leirasElem = this.elem.children(".description");
        this.dateElem = this.elem.children(".date");
        this.nameElem = this.elem.children(".name");
        this.statusElem = this.elem.children(".status");
        this.taskTorles = this.elem.children(".torles").children("button");
        this.taskModosit = this.elem.children(".modositas").children("button");

        this.setAdat(this.adat);

        this.taskTorles.on("click", () => {
            this.torlesTrigger();
            console.log("Törlök");
        });
        this.taskModosit.on("click", () => {
            this.modositTrigger();
        });
    }

    setAdat(ertek) {
        this.cimElem.html(ertek.title);
        this.leirasElem.html(ertek.description);
        this.dateElem.html(ertek.end_date);
        this.nameElem.html(ertek.user_id);
        this.statusElem.html(ertek.status);
    }
}



