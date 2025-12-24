
    // subtact today date from date presented and return results in years months and days

    const dateOfBirth = document.getElementById("dob")
    const form = document.querySelector("form")
    const displayResults = document.getElementById("results")

    form.addEventListener('submit', function(e){
        e.preventDefault()
        const dob = new Date(dateOfBirth?.value)
        const today = new Date()

        //prevent use of future data
        if (dob > today){
            displayResults.value = "Date Of Birth Cannot Be In The Future"
            return;
        }



        let years = today.getFullYear() - dob.getFullYear()       
        let months = today.getMonth() - dob.getMonth()
        let days = today.getDate() - dob.getDate()
    

        

        // Adjust days
        if (days < 0) {
            months--;
            // to get the last day of the previous month
            const previousMonth = new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            );
            // add the days of previous month u got to the negetive days to get the actual difference
            days += previousMonth.getDate();
        }

        // Adjust months
        if (months < 0) {
            years--;

            // add the borrowed year(12 months) to the negetive months u got 
            months += 12;
        }

        
displayResults.value = `You are ${years} years, ${months} months and ${days} days old.`;


    
})
