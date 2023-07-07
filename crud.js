var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var Formdata=readforData();
    if(selectedRow===null){
        insertData(Formdata);
    }
    else{
       onUpdate(Formdata);
    }
    resetForm();
  

}
//get the data
function readforData(){
    var Formdata ={};
    Formdata["Productcode"]=document.getElementById("Productcode").value;
    Formdata["Productname"]=document.getElementById("Productname").value;
    Formdata["qty"]=document.getElementById("qty").value;
    Formdata["ProductPrice"]=document.getElementById("ProductPrice").value;
    return Formdata;

}
//insert the data
function insertData(data){
    var table=document.getElementById("storelist").getElementsByTagName("tbody")[0];
    var newRow =table.insertRow(table.length);
    var cell1=newRow.insertCell(0);
        cell1.innerHTML=data.Productcode;
    var cell2=newRow.insertCell(1);
        cell2.innerHTML=data.Productname;
    var cell3=newRow.insertCell(2);
        cell3.innerHTML=data.qty;
    var cell4=newRow.insertCell(3);
        cell4.innerHTML=data.ProductPrice;
    var cell5=newRow.insertCell(4);
        cell5.innerHTML=`<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;

        
}
// edit the data
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("Productcode").value=selectedRow.cells[0].innerHTML;
    document.getElementById("Productname").value=selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value=selectedRow.cells[2].innerHTML;
    document.getElementById("Productprice").value=selectedRow.cells[3].innerHTML;
    
}
function onUpdate(Formdata){
    selectedRow.cells[0].innerHTML=Formdata.Productcode;
    selectedRow.cells[1].innerHTML=Formdata.Productname;
    selectedRow.cells[2].innerHTML=Formdata.qty;
    selectedRow.cells[3].innerHTML=Formdata.ProductPrice;


}
function onDelete(td){
    if(confirm("do you want to delete data?")){
        row= td.parentElement.parentElement;
        document.getElementById("storelist").deleteRow(row.rowIndex);

    }
    resetForm();
}
function resetForm(){
    document.getElementById("Productcode").value="";
    document.getElementById("Productname").value="";
    document.getElementById("qty").value="";
    document.getElementById("Productprice").value="";
 
}