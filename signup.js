document.addEventListener("DOMContentLoaded", function () 
{
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");

    
    const alphaRegex = /^[a-zA-Z\s]*$/;

    
    function validateInput(inputField, errorField, fieldName) {
        const value = inputField.value.trim();
        if (!alphaRegex.test(value))
        {
            errorField.textContent = `${fieldName} can only contain alphabetical characters.`;
            errorField.style.color = "red";
        } 
        else 
        {
            errorField.textContent = ""; 
        }
    }

   
    firstName.addEventListener("input", function () {
        validateInput(firstName, firstNameError, "First Name");
    });

    lastName.addEventListener("input", function () {
        validateInput(lastName, lastNameError, "Last Name");
    });
});




// Disable future dates in the date picker
document.addEventListener('DOMContentLoaded', function () {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    document.getElementById('dob').setAttribute('max', today);
});

document.getElementById('dob').addEventListener('change', function () {
    const dob = new Date(this.value);
    const today = new Date();
    const dobError = document.getElementById('dobError');
    const ageError = document.getElementById('ageError');
    const ageField = document.getElementById('age');

    dobError.textContent = '';
    ageError.textContent = '';
    ageField.value = '';

    if (isNaN(dob)) {
        dobError.textContent = 'Please select a valid date.';
        return;
    }

    const age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();

    // Adjust age if the birthday has not occurred yet this year
    const isBirthdayLaterThisYear = monthDifference < 0 || (monthDifference === 0 && dayDifference < 0);
    const calculatedAge = isBirthdayLaterThisYear ? age - 1 : age;

    if (calculatedAge < 18) {
        ageError.textContent = 'Age must be 18 or older.';
    } else {
        ageField.value = calculatedAge;
    }
});






 document.addEventListener("DOMContentLoaded", function () {
            const phoneInput = document.getElementById("phone");
            const phoneError = document.getElementById("phoneError");

            
            phoneInput.addEventListener("input", function () {
                const value = phoneInput.value;
                
                
                phoneInput.value = value.replace(/[^0-9]/g, '');

                
                if (phoneInput.value.length > 10) {
                    phoneError.textContent = "Phone number cannot exceed 10 digits.";
                } else if (phoneInput.value.length < 10 && phoneInput.value.length > 0) {
                    phoneError.textContent = "Phone number must be exactly 10 digits.";
                } else {
                    phoneError.textContent = ""; 
                }
            });

            
            const form = document.getElementById("phoneForm");
            form.addEventListener("submit", function (event) {
                if (phoneInput.value.length !== 10) {
                    event.preventDefault();
                    phoneError.textContent = "Phone number must be exactly 10 digits.";
                }
            });
        });




        document.addEventListener("DOMContentLoaded", function () {
            const emailInput = document.getElementById("email");
            const emailError = document.getElementById("emailError");
        
            
            const emailRegex = /^[^\s@]+@gmail\.com$/;
        
            
            emailInput.addEventListener("input", function () {
                const value = emailInput.value.trim();
        
                if (!emailRegex.test(value)) {
                    emailError.textContent = "Please enter a valid email address.";
                    emailError.style.color = "red";
                } else {
                    emailError.textContent = ""; 
                }
            });
        
           
            const form = document.querySelector("form");
            form.addEventListener("submit", function (event) {
                if (!emailRegex.test(emailInput.value.trim())) {
                    event.preventDefault(); 
                    emailError.textContent = "Please enter a valid email address.";
                }
            });
        });


        const stateCityMap = {
            kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode"],
            tamilnadu: ["Chennai", "Coimbatore", "Madurai"],
            karnataka: ["Bengaluru", "Mysuru", "Mangaluru"]
        };

        
        const stateDropdown = document.getElementById("state");
        const cityDropdown = document.getElementById("city");

        
        stateDropdown.addEventListener("change", function () {
            const selectedState = stateDropdown.value;

           
            cityDropdown.innerHTML = '<option value="" disabled selected>Select a City</option>';

            
            if (stateCityMap[selectedState]) {
                stateCityMap[selectedState].forEach(city => {
                    const option = document.createElement("option");
                    option.value = city.toLowerCase();
                    option.textContent = city;
                    cityDropdown.appendChild(option);
                });
            }
        });



        document.addEventListener("DOMContentLoaded", function () 
        {
            const passwordInput = document.getElementById("password");
            const confirmPasswordInput = document.getElementById("confirmPassword");
            const passwordError = document.getElementById("passwordError");
            const confirmPasswordError = document.getElementById("confirmPasswordError");
        
            
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        
           
            passwordInput.addEventListener("input", function () {
                const password = passwordInput.value;
        
                if (!passwordRegex.test(password)) {
                    passwordError.textContent =
                        "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.";
                    passwordError.style.color = "red";
                } else {
                    passwordError.textContent = "Strong password!";
                    passwordError.style.color = "green";
                }
            });
        
            
            confirmPasswordInput.addEventListener("input", function () {
                const password = passwordInput.value;
                const confirmPassword = confirmPasswordInput.value;
        
                if (password !== confirmPassword) {
                    confirmPasswordError.textContent = "Passwords do not match.";
                    confirmPasswordError.style.color = "red";
                } else {
                    confirmPasswordError.textContent = "Passwords match!";
                    confirmPasswordError.style.color = "green";
                }
            });
        
           
            const form = document.querySelector("form");
            form.addEventListener("submit", function (event) {
                const password = passwordInput.value;
                const confirmPassword = confirmPasswordInput.value;
        
                if (!passwordRegex.test(password)) {
                    event.preventDefault();
                    passwordError.textContent =
                        "Password must meet strength requirements.";
                    passwordError.style.color = "red";
                }
        
                if (password !== confirmPassword) {
                    event.preventDefault();
                    confirmPasswordError.textContent = "Passwords do not match.";
                    confirmPasswordError.style.color = "red";
                }
            });
        });
        
        
