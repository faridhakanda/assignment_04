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





// const container = document.getElementById('alljobs');
const container = document.getElementById('container');
// console.log("Length is: ", container.length);
container.addEventListener('click', function(event) {
    const deleteBtn = event.target.closest('.delete-btn');
    if (deleteBtn) {
        const cardToDelete = deleteBtn.closest('.card');
        // const interviewCard = deleteBtn.closest('.interview');
        // const rejectedCard = deleteBtn.closest('.rejected');
        if (cardToDelete) {
            cardToDelete.remove();
            calculationCard();
            console.log("click in delete button!");
        }
    }
});

    
