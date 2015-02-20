
var bio = {
	"name" : "Bob Coyne", 
	"role" : "Web Devloper",
	"contacts" : {
		"mobile": "815-735-8163",
		"email": "bob75@comcast.net",
		"github": "rc4326",
		"twitter": "@bobbycoyne",
		"location": "Chicago",
		"blog": "http://blogspot.runningrelated.com"
	},
	
	"Welcome Message": "Welcome to my profile!",
	"Skills": ["Excel", "Web Development", "Visual Basic", "Scripting"],
	"BioPic": "images/fry.jpg"
};
var education={
	"schools": [{
		"name": "Plainfield High School",
		"city": "Plainfield, IL, US",
		"degree": "None",
		"major": "None"
	},
	{
		"name": "Joliet Jr. College",
		"city": "Joliet, IL, US",
		"degree": "None",
		"major": "None"
	}],
	"onlineSchool": [{
		"name": "CodeAcademy",
		"site": "http://www.codeacademy.com",
		"degree": "None",
		"major": "None"
	},
	{
		"name": "Udacity",
		"site": "http://www.udacity.com",
		"degree": "Nanodegree Front End Webdevelopment",
		"major": "None"
	}]
};
var work = {
	"jobs": [{
		"employer": "McDonalds",
		"position": "Shift Manager",
		"dates": "June 1991 - May 1996",
		"years": "5",
		"city":  "Joliet",
		"description": "Worked as a morning, afternoon, and evening shift supervisor. Managing a crew of 15 employee's at Joliet's second busiest McDonalds."
		},
		{
		"employer": "AT&T",
		"position": "Chief of Staff",
		"dates": "November 1996 - Present",
		"years": "19",
		"city": "Joliet",
		"description": "Chief of Staff for the Western Midwest Infrasturcture Maintenance devision of AT&T Technology Operations. I assist in maintaining reports for Illinois, Wisconsin, and North West Indiana."
		}
	]};
var projects = {
	"projects": [{
		"title": "Budget",
		"dates": "2014",
		"description": "Budget management for the 2014 year"
		},
		{
		"title": "Performance Ranking",
		"dates": "2005 - 2014",
		"Description": "Month over month performance rankings for 54 employees"
		}
   ]};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedPict = HTMLbioPic.replace("%data%", bio.BioPic);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio["Welcome Message"]);
var formattedSkills = HTMLskills.replace("%data%", bio.Skills);

$("#header").prepend(formattedWelcome);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPict);



$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

if (bio.Skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	var formattedSkills = HTMLskills.replace("%data%", bio.Skills[0]);
	$("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.Skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.Skills[2]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.Skills[3]);
	$("#skills").append(formattedSkills);

}

for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var workemplyer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	
	var worktitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
	
	var empandtitle = workemplyer + worktitle;
	
	$(".work-entry:last").append(empandtitle);
}