
//Bio Section begin
var bio ={
    "name": "Bob Coyne",
    "role": "Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "bob@company.net",
        "github": "rc4326",
        "twitter": '<a href="https://twitter.com/Bobbycoyne" class="twitter-follow-button" data-show-count="false">Follow @Bobbycoyne</a>',
        "blog": "runningrelated.blogspot.com",
		"BlogName": "Running Related",
		"location": "Chicago,IL"
    },
    "Welcome Message": "Welcome to my profile!",
    "Skills": [
        "MSExcel",
        "Web Development",
        "Programming: VB, C, Java, JS, Python, SQL",
        "Data Analysis: Hadoop, R"
    ],
    "BioPic": "images/me2.jpg"
}
//Places the Bio info into the Resume using a direct replace function
  bio.display = function() {

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedPict = HTMLbioPic.replace("%data%", bio.BioPic);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog).replace("%data%", bio.contacts.BlogName);
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

	//check to see if the skill array is empty, if not load it into the webpage
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

}
//Bio section end

//Work Section Begin
var work = {
    "jobs": [
        {
            "employer": "McDonalds",
            "position": "Shift Manager",
            "dates": "June 1991 - May 1996",
            "location": "Joliet,IL",
            "description": "Worked as a morning, afternoon, and evening shift supervisor. Managing a crew of 15 employee's at Joliet's busiest McDonalds. Responsiblities included efficent time maangement, balancing reciepts, tracking hours, handling customer complaints, protecting employee's, and protecting McDonalds real estate assests."
        },
        {
            "employer": "AT&T",
            "position": "Chief of Staff",
            "dates": "November 1996 - Present",
            "location": "Joliet,IL",
            "description": "Chief of Staff for the Western Midwest Infrastructure Maintenance division of AT&T Technology Operations. I assist in maintaining reports for Illinois, Wisconsin, and North West Indiana. Other tasks include compliance training and tracking, Safety results, performance improvement plans, and stragetic business process improvements."
        }
    ]
}
//Places work experiance into the resume using a function and a For In Loop
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
//Work Section End

//Projects begin
var projects = {
    "projects": [
        {
            "title": "Budget",
            "dates": "2014",
            "description": "Budget management for the 2014 year",
			"images" : ["images/budget.jpg", "images/budget2.jpg"]
        },
        {
            "title": "Performance Ranking",
            "dates": "2005 - 2014",
            "description": "Month over month performance rankings for 54 employees",
			"images" : ["images/results.jpg", "images/results2.jpg"]
        }
    ]
}	

//adds projects to the resume using encapsulation
	projects.display = function() {
		
		for( var project in projects.projects) {
				$("#projects").append(HTMLprojectStart);
				
				var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				$(".project-entry:last").append(formattedTitle);
				
				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry:last").append(formattedDates);
				
				var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				$(".project-entry:last").append(formattedDescription);	
				
				if(projects.projects[project].images.length > 0) {
						for(var image in projects.projects[project].images) {
							
							var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
							$(".project-entry:last").append(formattedImage);
						}
				}
		}
	}

//Projects end

//Education begin
var education={
    "schools": [
        {
            "name": "Purdue University",
            "location": "West Lafayette, IN",
            "degree": "B.E.E.",
            "majors": ["Mathmatics", "Phyisics"],
			"dates" : 1998,
			"url" : "http://www.purdue.edu"
        },
        {
            "name": "University of Michigan",
            "location": "Ann Arbor, MI ",
			"degree": "M.E.",
            "majors": ["Engineering", "Mathmatics"],
			"dates" : 2002,
			"url" : "http://www.umich.edu"
			
        }
    ],
    "onlineSchool": [
        {
			"title" : "Python",
            "school": "CodeAcademy",
			"dates" : "2013 - 2014",
            "url": "http://www.codeacademy.com"
        },
        {
            "title" : "Front End Web Devloper",
			"school": "Udacity",
			"dates" : 2015,
            "url": "http://www.udacity.com"
        }
    ]
}
	education.display = function() {
		
		for(var school in education.schools) {
		
			$("#education").append(HTMLschoolStart);
			
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var NameandDegree = formattedName + formattedDegree;
			$(".education-entry:last").append(NameandDegree);			
			
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);

			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			

			
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedMajor);
		}
		
				if(education.onlineSchool.length > 0) {
				$("#education").append(HTMLonlineClasses);
				
					for(var olschool in education.onlineSchool) {
					
					$("#education").append(HTMLschoolStart);
					
					var formTitle = HTMLonlineTitle.replace("%data%", education.onlineSchool[olschool].title);
					var formSchool = HTMLonlineSchool.replace("%data%", education.onlineSchool[olschool].school);
					var TitleandSchool = formTitle + formSchool;
					$(".education-entry:last").append(TitleandSchool);					
					
					var formDates = HTMLonlineDates.replace("%data%", education.onlineSchool[olschool].dates);
					$(".education-entry:last").append(formDates);
		
		var formURL = HTMLonlineURL.replace("%data%", education.onlineSchool[olschool].url).replace("#", education.onlineSchool[olschool].url);
					$(".education-entry:last").append(formURL);
					
					} 
				}
	}	
	
//display function calls
bio.display();
displaywork();
projects.display();
education.display();

//adding an interactive map to the resume to display past work and school locations
$("#mapDiv").append(googleMap);
	


//adds the internationalize button to the bottom of the page and changes the name to display Firstname LASTNAME
function inName(name) { 
	name = bio.name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	
		return name[0] +" "+name[1];
};	
	
	$("#main").append(internationalizeButton);

	//twitter button
	!function(d,s,id){
		var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
		if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);
		}
	}
	(document, 'script', 'twitter-wjs');