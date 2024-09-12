document.getElementById('resumeForm')?.addEventListener('submit', function(event){
  event.preventDefault();

  const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
   
const nameElement = document.getElementById('name')as HTMLInputElement;
  const lnameElement = document.getElementById('lname')as HTMLInputElement;
  const emailElement = document.getElementById('email')as HTMLInputElement;
  const passwordElement = document.getElementById('password')as HTMLInputElement;
  const phoneElement = document.getElementById('phone')as HTMLInputElement;
  const addressElement = document.getElementById('address')as HTMLInputElement;
  const educationElement = document.getElementById('education')as HTMLInputElement;
  const skillsElement = document.getElementById('skills')as HTMLInputElement;
  const experienceElement = document.getElementById('experience')as HTMLInputElement;
  const profilePicInput = document.getElementById('profilePic') as HTMLInputElement;
const profilePicPreview = document.getElementById('profilePicPreview') as HTMLImageElement;


const usernameElement = document.getElementById(
  "username"
)as HTMLInputElement;

 if( profilePictureInput && passwordElement&&nameElement && lnameElement && emailElement&& phoneElement &&  addressElement &&educationElement && skillsElement && experienceElement && usernameElement )
{
  const  name = nameElement.value;
  const  lname = lnameElement.value;
  const  email = emailElement.value;
  const  password = passwordElement.value;
  const  phone = phoneElement.value;
  const  address= addressElement.value;
  const  education = educationElement.value;
  const  skills = skillsElement.value;
  const  experience = experienceElement.value;

  const username = usernameElement.value;
  const uniquePath = `resumes/${username.replace(/\s+/g, ' ')}_cv.html`


//profilePicture

const profilePictureFile = profilePictureInput.files?.[0]
const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';


  const resumeOutput= `

  
  <h2><strong>Welcome</strong></h2>
  ${profilePictureURL?`<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`: ""}
  <p><strong>Name:</strong> <span id="edit-name" class="editable" >${name}</span></p>
  <p><strong>LastName:</strong><span id="edit-lname" class="editable" > ${lname}</span></p>
  <p><strong>Email:</strong><span id="edit-email" class="editable" > ${email}</span></p>
  <p><strong>Password:</strong> <span id="edit-password" class="editable" >${password}</span></p>
  <p><strong>Phone:</strong><span id="edit-phone" class="editable" > ${phone}</span></p>
  <p><strong>ADDRESS:</strong> <span id="edit-address" class="editable" >${address}</span></p>
  
  <h3>Education</h3>
  <p id="edit-education" class="editable" >${education}</p>
  
  <h3>Skills</h3>
  <p id="edit-skills" class="editable" >${skills}</p>

  <h3>Experience</h3>
  <p id="edit-experience" class="editable" >>${experience}</p>
  `;


  const  downloadLink =  document.createElement('a')
downloadLink.href  = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
downloadLink.download = uniquePath;
downloadLink.textContent  = 'Download Your 2024  Resume';


const resumeOutputElement  = document.getElementById('resumeOutput')
if(resumeOutputElement){
  resumeOutputElement.innerHTML = resumeOutput;

resumeOutputElement.appendChild(downloadLink)

      resumeOutputElement.style.display  = "block";
}
}
else{
  console.error('one  or more  outputelements aremissing')
}


});
