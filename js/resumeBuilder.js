
var bio ={
    "name": "Bob Coyne",
    "role": "Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "bob@company.net",
        "github": "rc4326",
        "twitter": "@bobbycoyne",
        "location": "Chicago,IL",
        "blog": "http://blogspot.runningrelated.com"
    },
    "Welcome Message": "Welcome to my profile!",
    "Skills": [
        "Excel",
        "Web Development",
        "Visual Basic",
        "Scripting"
    ],
    "BioPic": "images/fry.jpg"
}
var education={
    "schools": [
        {
            "name": "Plainfield High School",
            "location": "Plainfield, IL, US",
            "degree": "None",
            "major": "None"
        },
        {
            "name": "Joliet Jr. College",
            "location": "Joliet, IL, US",
            "degree": "None",
            "major": "None"
        }
    ],
    "onlineSchool": [
        {
            "name": "CodeAcademy",
            "site": "http://www.codeacademy.com",
            "degree": "None",
            "major": "None"
        },
        {
            "name": "Udacity",
            "site": "http://www.udacity.com",
            "degree": "Nanodegree Front End Web development",
            "major": "None"
        }
    ]
}
var work = {
    "jobs": [
        {
            "employer": "McDonalds",
            "position": "Shift Manager",
            "dates": "June 1991 - May 1996",
            "years": "5",
            "location": "Joliet,IL",
            "description": "Worked as a morning, afternoon, and evening shift supervisor. Managing a crew of 15 employee's at Joliet's busiest McDonalds."
        },
        {
            "employer": "AT&T",
            "position": "Chief of Staff",
            "dates": "November 1996 - Present",
            "years": "19",
            "location": "Joliet,IL",
            "description": "Chief of Staff for the Western Midwest Infrastructure Maintenance division of AT&T Technology Operations. I assist in maintaining reports for Illinois, Wisconsin, and North West Indiana."
        }
    ]
}
var projects = {
    "projects": [
        {
            "title": "Budget",
            "dates": "2014",
            "description": "Budget management for the 2014 year"
        },
        {
            "title": "Performance Ranking",
            "dates": "2005 - 2014",
            "description": "Month over month performance rankings for 54 employees"
        }
    ]
}

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

$("#header").append(formattedWelcome);
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
	$("#skills").prepend(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.Skills[1]);
	$("#skills").prepend(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.Skills[2]);
	$("#skills").prepend(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.Skills[3]);
	$("#skills").prepend(formattedSkills);

}
var displaywork = function() {
for( var job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var workemplyer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var worktitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
	var empandtitle = workemplyer + worktitle;
	$(".work-entry:last").append(empandtitle);
	
	var workdates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(workdates);
	
	var worklocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(worklocation);
	
	var workdescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(workdescription);
	}

}
displaywork();

$(document).click(function(loc) {
 var x = loc.pageX;
 var y = loc.pageY;

 logClicks(x,y);

});

function inName(name) { 
	name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	
		return name[0] +" "+name[1];
};	
	
	$("#main").append(internationalizeButton);

	projects.display = function() {
		
		for( var project in projects.projects) {
				$("#projects").append(HTMLprojectStart);
				
				var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				$(".project-entry:last").append(formattedTitle);
				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry:last").append(formattedDates);
				var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				$(".project-entry:last").append(formattedDescription);	
		}
	}
projects.display();

$("#mapDiv").append(googleMap);
	
