var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var lnameElement = document.getElementById('lname');
    var emailElement = document.getElementById('email');
    var passwordElement = document.getElementById('password');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var skillsElement = document.getElementById('skills');
    var experienceElement = document.getElementById('experience');
    var profilePicInput = document.getElementById('profilePic');
    var profilePicPreview = document.getElementById('profilePicPreview');
    var usernameElement = document.getElementById("username");
    if (profilePictureInput && passwordElement && nameElement && lnameElement && emailElement && phoneElement && addressElement && educationElement && skillsElement && experienceElement && usernameElement) {
        var name_1 = nameElement.value;
        var lname = lnameElement.value;
        var email = emailElement.value;
        var password = passwordElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\s+/g, ' '), "_cv.html");
        //profilePicture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeOutput = "\n\n  \n  <h2><strong>Welcome</strong></h2>\n  ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n  <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\" >").concat(name_1, "</span></p>\n  <p><strong>LastName:</strong><span id=\"edit-lname\" class=\"editable\" > ").concat(lname, "</span></p>\n  <p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\" > ").concat(email, "</span></p>\n  <p><strong>Password:</strong> <span id=\"edit-password\" class=\"editable\" >").concat(password, "</span></p>\n  <p><strong>Phone:</strong><span id=\"edit-phone\" class=\"editable\" > ").concat(phone, "</span></p>\n  <p><strong>ADDRESS:</strong> <span id=\"edit-address\" class=\"editable\" >").concat(address, "</span></p>\n  \n  <h3>Education</h3>\n  <p id=\"edit-education\" class=\"editable\" >").concat(education, "</p>\n  \n  <h3>Skills</h3>\n  <p id=\"edit-skills\" class=\"editable\" >").concat(skills, "</p>\n\n  <h3>Experience</h3>\n  <p id=\"edit-experience\" class=\"editable\" >>").concat(experience, "</p>\n  ");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Your 2024  Resume';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.style.display = "block";
        }
    }
    else {
        console.error('one  or more  outputelements aremissing');
    }
});
