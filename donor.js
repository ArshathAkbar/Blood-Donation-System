const supabaseUrl = "https://sqxfbfrxsixnvmmpbohr.supabase.co"; 
const supabaseKey = "YeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxeGZiZnJ4c2l4bnZtbXBib2hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NDE5NTEsImV4cCI6MjA1NTUxNzk1MX0.igZnt33TD9GtTr9wO1stXzItKkzLCaU7N7roCqkINCU";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

function toggleSmokingField() {
    var smokeSelect = document.getElementById("smoke");
    var smokeFreqContainer = document.getElementById("smokeFreqContainer");
    smokeFreqContainer.classList.toggle("hidden", smokeSelect.value !== "Yes");
}

function toggleDrinkingField() {
    var drinkSelect = document.getElementById("drink");
    var drinkFreqContainer = document.getElementById("drinkFreqContainer");
    drinkFreqContainer.classList.toggle("hidden", drinkSelect.value !== "Yes");
}

document.getElementById("donor-form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent page refresh

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const bloodGroup = document.getElementById("blood-group").value;
    const location = document.getElementById("location").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const govtProof = document.getElementById("govtProof").value;
    const smoke = document.getElementById("smoke").value;
    const smokeFreq = document.getElementById("smokeFreq").value || "N/A";
    const drink = document.getElementById("drink").value;
    const drinkFreq = document.getElementById("drinkFreq").value || "N/A";
    const health = document.getElementById("health").value;

    // Insert data into Supabase
    const { data, error } = await supabase
        .from("donors")
        .insert([{ 
            name, email, phone, blood_group: bloodGroup, location, 
            gender, age, govt_proof: govtProof, 
            smoke, smoke_freq: smokeFreq, drink, drink_freq: drinkFreq, 
            health_issues: health 
        }]);

    if (error) {
        document.getElementById("donor-message").textContent = "❌ Error: " + error.message;
    } else {
        document.getElementById("donor-message").textContent = "✅ Donor Registered Successfully!";
        document.getElementById("donor-form").reset();
    }
});
