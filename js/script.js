document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");

    if (form) {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                try {
                    const response = await fetch('https://fe7xlb40th.execute-api.eu-west-1.amazonaws.com/development', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ name, email, message }),
                    });

                    const data = await response.json();
                    if (response.ok) {
                        alert(`Thank you, ${name}! Your interest has been registered.`);
                        form.reset();
                    } else {
                        alert(data.error);
                    }
                } catch (error) {
                    alert("Error sending data. Please try again later.");
                }
            } else {
                alert("Please fill out all fields.");
            }
        });
    }
});
