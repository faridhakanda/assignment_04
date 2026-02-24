console.log("Assignment-04 project is setup successfully!");




let interviewList = [];
let rejectedList = [];
let currentStatus = '';


let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

let allBtn = document.getElementById('all');
let interviewBtn = document.getElementById('interview');
let rejectBtn = document.getElementById('reject');





function calculationCard() {
    const jobsCard = document.querySelectorAll('#alljobs .card');
    // const interviewCard = document.querySelectorAll('#interviews .interview');
    // const rejectCard = document.querySelectorAll('#rejected .rejected');
    const interviewCard = document.querySelectorAll('#interviews .card');
    const rejectCard = document.querySelectorAll('#rejected .card');

    const jobs = jobsCard.length;
    const interview = interviewCard.length;
    const rejected = rejectCard.length;
    
    const total = document.getElementById('allJobCount');
    const availableJobs = document.getElementById('jobs');
    const interviews = document.getElementById('interviewJobCount');
    const rejects = document.getElementById('rejectedJobCount');
    
    
    
    total.innerText = jobs;
    availableJobs.innerText = jobs;
    interviews.innerText = interview;
    rejects.innerText = rejected;
    
    const noAllJobs = document.getElementById('notAvailableJob');
    if (jobs > 0) {
        noAllJobs.classList.add("hidden");
    } else {
        noAllJobs.classList.remove("hidden");
    }
    
    const noInterviewCard = document.getElementById('noInterviewCard');
    if (interview > 0) {
        noInterviewCard.classList.add("hidden");
    } else {
        noInterviewCard.classList.remove("hidden");
    }
    
    const noRejectedCard = document.getElementById('noRejectedCard');
    if (rejected > 0) {
        noRejectedCard.classList.add("hidden");
    } else {
        noRejectedCard.classList.remove("hidden");
    }
}

calculationCard();




let available = document.getElementById("alljobs");
let interview = document.getElementById("interviews");
let rejected = document.getElementById("rejected");
    
const activeAllJobButton = document.getElementById("allJobBtn");
const interviewJobButton = document.getElementById("interviewJobBtn");
const rejectedJobButton = document.getElementById("rejectedJobBtn");



function showOnly(id) {
    available.classList.add("hidden");
    interview.classList.add("hidden");
    rejected.classList.add("hidden");
    const selectedId = document.getElementById(id);
    selectedId.classList.remove("hidden");
    
    let availables = document.getElementById("allJobBtn");
    let interviews = document.getElementById("interviewJobBtn");
    let rejecteds = document.getElementById("rejectedJobBtn");
    selectedId.classList.remove("hidden");
    if (id == "alljobs") {
        availables.classList.add('bg-[#261CC1]', 'text-[#F8FAFC]');
        availables.classList.remove('bg-[#F8FAFC]', 'text-[#64748B]');
        interviews.classList.remove('bg-[#261CC1]', 'text-[#F8FAFC]');
        interviews.classList.add('bg-[#F8FAFC]', 'text-[#64748B]');
        rejecteds.classList.remove('bg-[#261CC1]', 'text-[#F8FAFC]');
        rejecteds.classList.add('bg-[#F8FAFC]', 'text-[#64748B]');
        
    } else if (id == "interviews") {
        availables.classList.remove('bg-[#261CC1]', 'text-[#F8FAFC]');
        availables.classList.add('bg-[#F8FAFC]', 'text-[#64748B]');
        interviews.classList.remove('bg-[#F8FAFC]', 'text-[#64748B]');
        interviews.classList.add('bg-[#261CC1]', 'text-[#F8FAFC]');
        rejecteds.classList.remove('bg-[#261CC1]', 'text-[#F8FAFC]');
        rejecteds.classList.add('bg-[#F8FAFC]', 'text-[#64748B]');
    } else if (id == "rejected") {
        availables.classList.remove('bg-[#261CC1]', 'text-[#F8FAFC]');
        availables.classList.add('bg-[#F8FAFC]', 'text-[#64748B]');
        interviews.classList.remove('bg-[#261CC1]', 'text-[#F8FAFC]');
        interviews.classList.add('bg-[#F8FAFC]', 'text-[#64748B]');
        rejecteds.classList.remove('bg-[#F8FAFC]', 'text-[#64748B]');
        rejecteds.classList.add('bg-[#261CC1]', 'text-[#F8FAFC]');
    }
}







// interview, rejected and delete button functionality code 
const container = document.getElementById('container');
container.addEventListener('click', function(event) {
    const deleteBtn = event.target.closest('#delete-btn');
    const interviewBtn = event.target.closest('#interviewBtn');
    const rejectedBtn = event.target.closest("#rejectedBtn");
    
    
    const interviewDiv = document.getElementById('interviews');
    const rejectedDiv = document.getElementById('rejected')
    if (deleteBtn) {
        const cardToDelete = deleteBtn.closest('.card');
        if (cardToDelete) {
            cardToDelete.remove();
            calculationCard();
            console.log("click in delete button!");
        }
    } else if (interviewBtn) {
        const interviewCard = event.target.closest('.card');
        if (interviewCard) {
            //const originalCard = interviewCard.cloneNode(true);
            const statusText = interviewCard.querySelector('.status');
            statusText.innerText = "INTERVIEWED";
            statusText.classList.add('text-[#10B981]', 'font-semibold');
            const originalCard = interviewCard.cloneNode(true);
            interviewDiv.append(originalCard);
            calculationCard();
            console.log("child is added in interview div!");
        }  
    } else if (rejectedBtn) {
        const rejectedCard = event.target.closest('.card');
        if (rejectedCard) {
            //const originalCard = rejectedCard.cloneNode(true);
            const statusText = rejectedCard.querySelector('.status');
            statusText.innerText = "REJECTED";
            statusText.classList.add('text-[#EF4444]', 'font-semibold');
            const originalCard = rejectedCard.cloneNode(true);
            rejectedDiv.append(originalCard);
            calculationCard();
            console.log("child is added in rejected div!");
        }  
    }
});

