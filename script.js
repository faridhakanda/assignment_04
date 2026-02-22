console.log("Assignment-04 project is setup successfully!");



function showOnly(id) {
    const interview = document.getElementById("interview");
    const rejected = document.getElementById("rejected");
    const available = document.getElementById("jobs");
    
    available.classList.add("hidden");
    interview.classList.add("hidden");
    rejected.classList.add("hidden");

    
    const selectedId = document.getElementById(id);
    selectedId.classList.remove("hidden");
    //console.log("clicked")
}


