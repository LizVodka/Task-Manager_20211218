$(function() {
    const tasks = [];
    const apivegpont = "http://localhost:3000/task";
    const sajatAjax = new SajatAjax();
    sajatAjax.getAjax(apivegpont, tasks, megjelenit);

    $("#szuresNevMezore").on("keyup", function () {
        let szuro = $("#szuresNevMezore").val();
        console.log("szűrő:" + szuro);
        let szurtvegpont = apivegpont + "?title_like=" + szuro;
        console.log("szűrt:" + szurtvegpont);
        sajatAjax.getAjax(szurtvegpont, tasks, megjelenit);
      });

    $("#szuresStatusMezore").on("keyup", function () {
        let szuro = $("#szuresStatusMezore").val();
        console.log("szűrő:" + szuro);
        let szurtvegpont = apivegpont + "?status_like=" + szuro;
        console.log("szűrt:" + szurtvegpont);
        sajatAjax.getAjax(szurtvegpont, tasks, megjelenit);
      });

      $("#szuresRendezese").on("change", function () {
        let rendez = $("#szuresRendezese").val();
        let szurtvegpont = "";
        console.log("rendez: " + rendez);
        switch (rendez) {
          case "novekvo":
            szurtvegpont = apivegpont + "?_sort=end_date&_order=asc";
            break;
          case "csokkeno":
            szurtvegpont = apivegpont + "?_sort=end_date&_order=desc";
            break;
          default: 
            szurtvegpont = apivegpont;
            break;
    
        }
        sajatAjax.getAjax(szurtvegpont, tasks, megjelenit);
      });

    function megjelenit() {
        const kartya = $("#kartyak");
        const sablonElem = $("#szures .sablon"); //ez a mintaelem, amit másolgatunk
        sablonElem.show();
        kartya.empty();
        console.log("taskok:" + tasks);
        tasks.forEach(function (tombelem) {
          let ujElem = sablonElem.clone().appendTo(kartya);
          let ujKartya = new Kartya(ujElem, tombelem);
        });
        sablonElem.hide();
      }
})