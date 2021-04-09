var table = new Tabulator("#example-table", {
    height:"311px",
    movableRows:true,
    columns:[
        {rowHandle:true, formatter:"handle", headerSort:false, frozen:true, width:30, minWidth:30},
        {title:"Name", field:"name", width:150, editor:"input"},
        {title:"Progress", field:"progress", formatter:"progress", sorter:"number", editor:"input"},
        {title:"Gender", field:"gender"},
        {title:"Rating", field:"rating", formatter:"star", formatterParams:{stars:6}, hozAlign:"center", width:120, editor:"input"},
        {title:"Favourite Color", field:"col", editor:"input"},
        {title:"Date Of Birth", field:"dob", hozAlign:"center", sorter:"date", editor:"input"},
        {formatter:"buttonCross", width:40, align:"center", cellClick:function(e, cell){
            cell.getRow().delete();
        }},
    ],
    rowMoved:function(row){
        console.log("Row: " + row.getData().name + " has been moved");
    }
});

//Add row on "Add Row" button click
document.getElementById("add-row").addEventListener("click", function(){
    table.addRow({});
});

//Clear table on "Empty the table" button click
document.getElementById("clear").addEventListener("click", function(){
    table.clearData()
});
