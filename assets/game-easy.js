// panels

const elephant = $("#elephant");
const chicken = $("#chicken");
const monster = $("monster");
const bee = $("bee");

const sequence = [bee, chicken, monster, elephant];

const flash = easyimg => {
    return (new Promise((resolve, reject) => { 
    $("easyimg").addClass("active");
    setTimeout(() => {
        $("easyimg").removeClass("active")
    }, 500)
    });
)};