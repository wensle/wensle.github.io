// ajax https://picsum.photos/v2/list
// Stop content in site

$(document).ready(function() {
    $.get("https://picsum.photos/v2/list?page=2", function(data) {
            $div_lijst = $("<div>", { "id": "lijst_img" })
            $(".list-group").append($div_lijst)
            data.forEach(function(item, index) {
                var $div_li = $("<div>", { "class": "mb-5" });
                var url = item.download_url.split('/')
                url = url.slice(0, url.length - 2).join('/')
                url = url + "/3000/800";
                var $img = $("<img>", { "src": url, "class": "img-fluid" })
                $div_li.append($img)
                var $table = $("<table>", { "id": `table-${index}`, "class": "table" })
                $table.toggle()
                for (const prop in item) {
                    $tr = make_tr(prop, item)
                    $table.append($tr)
                }
                var $btn = $("<button>", {
                    "class": "btn btn-light btn-op-img",
                    "id": `btn-${index}`,
                    "type": "button"
                })
                $btn.append("Gegevens")
                $div_li.append($btn)
                $div_li.append($table);
                $(".list-group #lijst_img").append($div_li)
            });

        }, "json")
        .done(function() {
            $(".btn").on("click", function(event) {
                var buttonId = $(event.target).attr("id");
                var buttonIndex = buttonId.split("-")[1];
                console.log($("table")[buttonIndex])
                $("table").eq(buttonIndex).toggle("slow")
            });
        });


});



function make_tr(prop, item) {
    var $th = $("<th>");
    $th.append(`Image ${prop}`);
    var $tr = $("<tr>");
    $tr.append($th)
    var $td = $("<td>")
    var $span = $("<span>", { "class": prop });
    $span.append(`${item[prop]}`);
    $td.append($span)
    $tr.append($td)
    return $tr
}