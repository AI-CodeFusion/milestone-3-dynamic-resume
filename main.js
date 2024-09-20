function generateResume() {
    // Input fields se values lena
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Display fields ko DOM mein set karna
    var userName = document.getElementById("userName");
    var userEmail = document.getElementById("userEmail");
    var userPhoneNo = document.getElementById("userPhoneNo");
    var userEducation = document.getElementById("usereducation");
    var userSkills = document.getElementById("userSkills");
    var userExperience = document.getElementById("userExperience");
    // Set the values in the resume section
    userName.textContent = name;
    userEmail.textContent = email;
    userPhoneNo.textContent = phone;
    userEducation.textContent = education;
    userSkills.textContent = skills;
    userExperience.textContent = experience;
}
// Form validation aur further enhancements bhi add kiye ja sakte hain if needed.
