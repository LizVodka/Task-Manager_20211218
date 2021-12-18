class SajatAjax {
    constructor() {};

    getAjax(apivegpont, tomb, myCallback){
        tomb.splice(0,tomb.length);
        $.ajax({
            url: apivegpont, 
            type:"GET",
            success: function(result){
            result.forEach(element => {
                tomb.push(element);
            });
            myCallback(tomb);
        }});
    };
}