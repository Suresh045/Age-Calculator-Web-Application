document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-button");
    const birthdateInput = document.getElementById("birthdate");
    const ageSpan = document.getElementById("age");

    calculateButton.addEventListener("click", calculateAge);

    function calculateAge() {
        const birthdate = new Date(birthdateInput.value);
        const today = new Date();
        let age = today.getFullYear() - birthdate.getFullYear();

        if (
            today.getMonth() < birthdate.getMonth() ||
            (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())
        ) {
            age--;
        }

        ageSpan.textContent = age + " years old";
    }
});
