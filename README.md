# **🩸 Blood Donor Registration System - README**  

## **📌 Project Overview**  
This project is a **Blood Donor Registration System** that allows users to register as blood donors by providing their details, including name, email, phone number, blood group, location, gender, ID proof (Aadhaar/DL/PAN), age, smoking and drinking habits, and any other health issues. The collected data is securely stored in **Supabase**, a backend-as-a-service (BaaS) platform providing authentication and database management.  

The system ensures **efficient donor management** for hospitals, blood banks, and NGOs by creating a centralized database of willing donors, making it easy to search and contact them during emergencies.

---

## **🚀 Features**
✅ **Donor Registration Form** - Users can enter their details via a simple form.  
✅ **Supabase Integration** - The donor information is securely stored in a PostgreSQL database.  
✅ **Data Validation** - Ensures correct inputs for age, blood group, and contact details.  
✅ **Real-time Updates** - The system can fetch and display donor data dynamically.  
✅ **Role-Based Access (Future Enhancement)** - Admins can manage and verify donor records.  
✅ **Mobile Responsive Design** - Works on both desktop and mobile devices.  

---

## **🛠 Tech Stack**
| Component          | Technology Used |
|--------------------|----------------|
| **Frontend**      | HTML, CSS, JavaScript |
| **Backend**       | Supabase (PostgreSQL) |
| **Hosting**       | Netlify / Vercel (Optional) |
| **Authentication**| Supabase Auth (Optional) |

---

## **📂 Project Structure**
```
📦 Blood-Donor-Registration
├── 📁 assets               # Static files (CSS, images, etc.)
│   ├── styles.css         # Styling for the donor form
├── 📁 scripts              # JavaScript files
│   ├── donor.js           # Handles form submission and Supabase interaction
├── 📁 database             # SQL queries and database schema (for reference)
│   ├── schema.sql         # Database schema for Supabase
├── index.html             # Main page with donor registration form
├── README.md              # Project documentation
```

---

## **⚙️ How to Set Up Locally**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/blood-donor-registration.git
cd blood-donor-registration
```

### **2️⃣ Set Up Supabase**
1. **Create a Supabase Account** at [https://supabase.com](https://supabase.com).  
2. **Create a New Project** and note your **Project URL** and **API Key**.  
3. **Create a `donors` table** in Supabase with the following schema:
   ```sql
   CREATE TABLE donors (
       id SERIAL PRIMARY KEY,
       name TEXT NOT NULL,
       email TEXT UNIQUE NOT NULL,
       phone TEXT NOT NULL,
       blood_group TEXT NOT NULL,
       location TEXT NOT NULL,
       gender TEXT NOT NULL,
       id_proof TEXT NOT NULL,
       age INTEGER NOT NULL,
       smoke BOOLEAN NOT NULL,
       drinking BOOLEAN NOT NULL,
       health_issues TEXT
   );
   ```
4. **Enable Supabase API** and get the URL & API Key.

### **3️⃣ Configure API Keys in `donor.js`**
Open `donor.js` and update:
```javascript
const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_API_KEY";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);
```

### **4️⃣ Run the Project**
Simply open `index.html` in a browser.

---

## **💻 Code Walkthrough**
### **Frontend (register.html)**
- The form captures user inputs like name, email, phone, blood group, etc.
- Uses JavaScript to validate form data before submission.

### **JavaScript (donor.js)**
- Listens for form submission.
- Sends the collected data to Supabase using its API.
- Displays success or error messages based on the response.

```javascript
document.getElementById("donor-form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent page refresh

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const bloodGroup = document.getElementById("blood-group").value;
    const location = document.getElementById("location").value;
    const gender = document.getElementById("gender").value;
    const idProof = document.getElementById("id-proof").value;
    const age = parseInt(document.getElementById("age").value);
    const smoke = document.getElementById("smoke").checked;
    const drinking = document.getElementById("drinking").checked;
    const healthIssues = document.getElementById("health-issues").value;

    // Insert data into Supabase
    const { data, error } = await supabase
        .from("donors")
        .insert([{ name, email, phone, blood_group: bloodGroup, location, gender, id_proof: idProof, age, smoke, drinking, health_issues: healthIssues }]);

    if (error) {
        document.getElementById("donor-message").textContent = "❌ Error: " + error.message;
    } else {
        document.getElementById("donor-message").textContent = "✅ Donor Registered Successfully!";
        document.getElementById("donor-form").reset(); // Clear form
    }
});
```

---

## **🔐 Security Considerations**
- **Sanitize Inputs** - Prevent SQL injection and XSS attacks.
- **Use Role-based Access** - Admins can verify or delete donor records.
- **Secure API Keys** - Never expose `supabaseKey` in frontend; use environment variables.

---

## **📌 Future Enhancements**
🔹 **Donor Search System** - Allow hospitals to search for donors by blood group & location.  
🔹 **Email & SMS Notifications** - Notify donors when blood is needed.  
🔹 **Admin Dashboard** - Manage donor records & verify details.  
🔹 **Machine Learning Analysis** - Predict donor availability based on past donations.  

---

## **🙌 Contributing**
1. **Fork the Repository**
2. **Create a New Branch**
   ```bash
   git checkout -b feature-new
   ```
3. **Make Your Changes and Commit**
   ```bash
   git commit -m "Added new feature"
   ```
4. **Push to GitHub and Submit a Pull Request**
   ```bash
   git push origin feature-new
   ```


🚀 **Happy Coding!** 🎉
