
function deleteConfirm(id){
    const confirmation = confirm("Are sure you want to delete?");
    if(confirmation){
        fetch("/delete/"+id,{
            method:'POST',
        }).then((res)=>{
            if(res.ok){
                // alert("Deleted Successfully");
                // window.location.replace(window.location.href);
                location.reload();
            }
        })
    }

}