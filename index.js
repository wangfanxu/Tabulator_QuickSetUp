// var table = new Tabulator("#example-table", {
//     height:"311px",
//     movableRows:true,
//     // columns:[
//     //     {rowHandle:true, formatter:"handle", headerSort:false, frozen:true, width:30, minWidth:30},
//     //     {title:"Name", field:"name", width:150, editor:"input"},
//     //     {title:"Progress", field:"progress", formatter:"progress", sorter:"number", editor:"input"},
//     //     {title:"Gender", field:"gender"},
//     //     {title:"Rating", field:"rating", formatter:"star", formatterParams:{stars:6}, hozAlign:"center", width:120, editor:"input"},
//     //     {title:"Favourite Color", field:"col", editor:"input"},
//     //     {title:"Date Of Birth", field:"dob", hozAlign:"center", sorter:"date", editor:"input"},
//     //     {formatter:"buttonCross", width:40, align:"center", cellClick:function(e, cell){
//     //         cell.getRow().delete();
//     //     }},
//     // ],
//     columns:[
//         {title:"Name", field:"name"},
//         {title:"Age", field:"age"},
//         {title:"Gender", field:"gender"},
//         {title:"Height", field:"height"},
//         {title:"Favourite Color", field:"col"},
//         {title:"Date Of Birth", field:"dob"},
//         {title:"Cheese Preference", field:"cheese"},
//     ],
//     // rowMoved:function(row){
//     //     console.log("Row: " + row.getData().name + " has been moved");
//     // }
// });

//Build Tabulator
var table = new Tabulator("#example-table", {
    height:311,
    layout:"fitColumns",
    placeholder:"Awaiting Data, Please Load File",
    columns:[
    {rowHandle:true, formatter:"handle", headerSort:false, frozen:true, width:30, minWidth:30},
    {title:"name", field:"name", editor:"input"},
    {title:"location", field:"location", editor:"input"},
    {title:"Gender", field:"gender", editor:"input"},
    {title:"Height", field:"rating",formatter:"star"},
    {title:"color", field:"col",editor:"input"},
            {formatter:"buttonCross", width:40, align:"center", cellClick:function(e, cell){
            cell.getRow().delete();
        }},
    ]
});

//trigger AJAX load on "Load Data via AJAX" button click
document.getElementById("file-load-trigger").addEventListener("click", function(){
    table.setDataFromLocalFile();
});
//Add row on "Add Row" button click
document.getElementById("add-row").addEventListener("click", function(){
    table.addRow({});
});