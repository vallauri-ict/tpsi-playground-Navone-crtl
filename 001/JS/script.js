 Buttons = ["Accordion", "Collapsible", "Disabled", "HeightStyle"];
$(document).ready(function(){
    $("<div id='accordion'></div>").appendTo(".main");
    addButtons(Buttons, "menu");
});

function  addButtons(buttons, position) {
    $.each(buttons, function (index, value) {
        $("<button class='" + position + "Buttons' onclick='" + value +"(this,\"accordion\")'>" + value + "</button>")
            .hide()
            .appendTo('.' + position)
            .fadeIn(3000)
    })
}

function Accordion(e, idAccordion) {
    $.get("./JSON/proverbi.json", function (data){createAccordion(data, idAccordion, e)}, "json")
}

function createAccordion(data, idAccordion, e) {
    let accordion = $("#" + idAccordion);
    if(accordion.accordion("instance")){
        accordion.accordion("destroy").children().remove()
    }
    else{
        $.each(data["dati"], function(index, element){
          $.each(element, function (subindex, subElement){
              $("<" + subindex + ">" + subElement + "</" + subindex + ">").appendTo(accordion)
          });
        });
        accordion.accordion();
        return accordion;
    }
}

function createTabs(data, parent, e) {
    let tabs = $('#' + parent)
    if(tabs.tabs("instance")) {
        tabs.tabs("destroy").children().remove();
        $("." + $(e).attr("class")).not("first").attr("disabled", true);
        $(e).css("background-color", "#f0f0f0");
    }
    else{r
        $("<ul></ul>").appendTo(tabs);
        $.each(data["Labels"], function (index, element){
            tabs.children("ul").append("<li><a href='#tabs-" + index + r
        })
    }
}