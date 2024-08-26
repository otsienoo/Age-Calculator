function getDOB() {
    const dob = new Date(document.getElementById("inputDob").value);
    const currentDate = new Date(document.getElementById("cdate").value || new Date());

    if (!dob || isNaN(dob.getTime())) {
        document.getElementById("currentage").textContent = "Please enter a valid date of birth.";
        return;
    }

    const age = calculateAge(dob, currentDate);
    document.getElementById("currentage").textContent = `Your age is ${age} years.`;
}

function calculateAge(dob, currentDate) {
    let age = currentDate.getFullYear() - dob.getFullYear();
    const m = currentDate.getMonth() - dob.getMonth();
    
    if (m < 0 || (m === 0 && currentDate.getDate() < dob.getDate())) {
        age--;
    }
    
    return age;
}
