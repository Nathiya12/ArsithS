 var date=new Date();
    var tdate=date.getDate();
    if(tdate<10)
    	{
    	tdate='0'+ tdate;
    	}
    var month=date.getMonth()+1;
    if(month<10)
    	{
    	month='0'+ month;
    	}
    var year=date.getUTCFullYear();
    var mdate=year+"-"+month+"-"+tdate;
    document.getElementById("mindate").setAttribute('min',mdate);
    var today = new Date();
    var lastdate = new Date(today.getTime() + (48 * 60 * 60 * 1000));
    
    var ldate=lastdate.getDate();
    if(ldate<10)
    	{
    	ldate='0'+ ldate;
    	}
    var lmonth=lastdate.getMonth()+1;
    if(lmonth<10)
    	{
    	lmonth='0'+ lmonth;
    	}
    var lyear=lastdate.getUTCFullYear();
    var maxdate=lyear+"-"+lmonth+"-"+ldate;
    
    
    
   document.getElementById("mindate").setAttribute('max',maxdate); 

   let stations =["Chennai Egmore (MS)","Mambalam (MBM)","Tambaram (TBM)","Chengalpattu (CGL)",
   "Villuparam Junction (VM)","Vridhachalam Junction (VRI)","Ariyalur (ALU)",
	 "Tiruchchirapali (TPJ)","Dindigul Junction (DG)","Sholavandan (SDN)","Madurai (MDU)"];
	
	 
	 
   function validateForm() {
  let x = document.forms["myForm"]["from"].value;
    let y= document.forms["myForm"]["to"].value;
	let z=stations.indexOf(x);
	let t=stations.indexOf(y);
    console.log(z);
	console.log(t);

  if (z == t )
   {
    /*alert("Boarding and destination stations must be different");*/
    document.getElementById("alert").innerHTML="*Boarding and destination stations must be different";
    return false;
  }
  else if (z>t)
  {
    document.getElementById("alert").innerHTML="*invalid station are selected";
	return false;

  }
  else
  {
    return true;
  }
  
}
   