
jheatmap.components.CellSelector = function(drawer, heatmap, container) {

    var selectCell = $("<select>").change(function () {
        heatmap.cells.selectedValue = $(this)[0].value;
        drawer.loading(function () {
            drawer.paint();
        });
    });
    container.append($("<span>Cells</span>"));
    container.append(selectCell);
    container.append($("<br>"));

    for (o = 0; o < heatmap.cells.header.length; o++) {
        if (heatmap.cells.header[o] == undefined) {
            continue;
        }
        selectCell.append(new Option(heatmap.cells.header[o], o, o == heatmap.cells.selectedValue));
    }
    selectCell.val(heatmap.cells.selectedValue);

};