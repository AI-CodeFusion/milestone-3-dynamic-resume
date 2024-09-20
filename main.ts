function generateResume(): void {
    // Input fields se values lena
    const name: string = (document.getElementById("name") as HTMLInputElement).value;
    const email: string = (document.getElementById("email") as HTMLInputElement).value;
    const phone: string = (document.getElementById("phone") as HTMLInputElement).value;
    const education: string = (document.getElementById("education") as HTMLInputElement).value;
    const experience: string = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills: string = (document.getElementById("skills") as HTMLInputElement).value;

    // Display fields ko DOM mein set karna
    const userName: HTMLElement = document.getElementById("userName")!;
    const userEmail: HTMLElement = document.getElementById("userEmail")!;
    const userPhoneNo: HTMLElement = document.getElementById("userPhoneNo")!;
    const userEducation: HTMLElement = document.getElementById("usereducation")!;
    const userSkills: HTMLElement = document.getElementById("userSkills")!;
    const userExperience: HTMLElement = document.getElementById("userExperience")!;

    // Set the values in the resume section
    userName.textContent = name;
    userEmail.textContent = email;
    userPhoneNo.textContent = phone;
    userEducation.textContent = education;
    userSkills.textContent = skills;
    userExperience.textContent = experience;
}

