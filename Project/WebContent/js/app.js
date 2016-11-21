'use strict';
var letzChaat=angular.module("Collaboration",["ngRoute"]);
letzChaat.config(function($routeProvider) {
	$routeProvider
	.when("/",
	{
		templateUrl:"main.html",
		controller:'mainController'
	})
	.when("/main",
	{
		templateUrl:"main.html",
		controller:'mainController'
	})
	.when("/login",
	{
		templateUrl:"login.html",
		controller:'loginController'
	})
	.when("/register",
	{
		templateUrl:"register.html",
		controller:'registerController'
	})
	.when("/about",
	{
		templateUrl:"about.html",
		controller:'aboutController'
	})
	.when("/services",
	{
		templateUrl:"services.html",
		controller:'servicesController'
	}).when("/blog",
	{
		templateUrl:"blog.html",
		controller:'blogController'
	}).
	when("/logout",
			{
				templateUrl:"logout.html",
				controller:'logoutController'
			})
	.when("/userHome",
	{
		templateUrl:"userHome.html",
		controller:'userHomeController'
	})
	.when("/jobs",
	{
		templateUrl:"jobs.html",
		controller:'jobsController'
	})
	.when("/admin",
	{
		templateUrl:"admin.html",
		controller:'adminController'
	})
	.when("/adminBlog",
	{
		templateUrl:"adminBlog.html",
		controller:'adminBlogController'
	})
	
		.when("/adminForum",
	{
		templateUrl:"adminForum.html",
		controller:'adminForumController'
	})

	
	
	
	
	
	.when("/adminEvent",
	{
		templateUrl:"adminEvent.html",
		controller:'adminEventController'
	})
	
	.when("/adminJobs",
	{
		templateUrl:"adminJobs.html",
		controller:'adminJobsController'
	})
	.when("/forum",
	{
		templateUrl:"forum.html",
		controller:'forumController'
	})
	
	
	.when("/jobs",
	{
		templateUrl:"jobs.html",
		controller:'jobsController'
	})
	
	
	
	.when("/adminJobs",
	{
		templateUrl:"adminJobs.html",
		controller:'jobsController'
	})

	
	
	
	
	
	.when("/event",
	{
		templateUrl:"event.html",
		controller:'eventController'
	})
	
	
	
	
	
	
	
});
letzChaat.controller('mainController',function($scope)		
		{
			$scope.message="you are in main page";
			$scope.isBlog=true;	
		}
		);
letzChaat.controller('logoutController',function($scope,$rootScope)		
		{
			console.log("logout controller called");
			$rootScope.login=true;
			$rootScope.register=true;
			$rootScope.services=true;
			$rootScope.about=true;
			$rootScope.home=true;
			$rootScope.blog=false;
			$rootScope.forum=false;
			$rootScope.jobs=false;
			$rootScope.logout=false;
			$rootScope.chat=false;
			$rootScope.adminBlog=false;
			$rootScope.adminEvent=false;
			$rootScope.adminForum=false;
			$rootScope.adminJobs=false;
			$rootScope.users=false;
		}
		);
letzChaat.controller('loginController',['$scope','$http','$location','$rootScope',function($scope,$http,$location,$rootScope)		
		{
	
             console.log(" login controller");
			 $scope.login=function()
			 {
				  var loginData={
						  username:$scope.username,	
							password:$scope.password,  
				  }
 $http.post('http://localhost:8081/Collaboration/authenticate',loginData).then(function (response) {
	 console.log("result   data:"+response.data);
	 var r=response.data.toString();
	 console.log("response:"+r);
     
		if(r==1)
			{
			$rootScope.blog=true;
			$rootScope.forum=true;
			$rootScope.jobs=true;
			$rootScope.login=false;
			$rootScope.register=false;
			$rootScope.services=false;
			$rootScope.about=false;
			$rootScope.home=false;
			$rootScope.logout=true;
			$rootScope.chat=true;
			$rootScope.event=true;
			console.log('logout:'+$rootScope.logout);
			console.log("wat is this ya:"+response.data);
			$scope.message="Welcome user";
			$location.path('/userHome');
			}
		if(r==0)
			{
			$scope.username="";
			$scope.password="";
			$scope.message="username/password incorrect";
			$location.path('/login');
			}
		if(r==2)
		{
			$rootScope.login=false;
			$rootScope.register=false;
			$rootScope.services=false;
			$rootScope.about=false;
			$rootScope.home=false;
			$rootScope.adminBlog=true;
			$rootScope.adminEvent=true;
			$rootScope.adminForum=true;
			$rootScope.adminJobs=true;
			$rootScope.users=true;
			$rootScope.registeredUsers=true;
			$rootScope.logout=true;
			$scope.message="Welcome admin";
	$location.path('/admin');
		}
		
 });  
			 }
		}]
		);
letzChaat.controller('registerController',function($scope,$http)		
		{
			$scope.register=function()
			{
				console.log("username:"+$scope.username);
				var userData={
					userFullName:$scope.userFullName,
					username:$scope.username,
					userEmail:$scope.userEmail,
					userPhone:$scope.userPhone,
					password:$scope.password,
					role:$scope.role
				}
				 var res = $http.post('http://localhost:8081/Collaboration/addUser',userData);
			 		res.success(function(data, status, headers, config) {
			 			console.log("status:"+status);
			 			$scope.message="you are successfully registered!!!";
			 			
			 			$scope.userFullName="";
						$scope.username="";
						$scope.userEmail="";
						$scope.userPhone="";
						$scope.password="";
						$scope.role="";
			 			
			 		});
				
			}
		}
		);


letzChaat.controller("adminJobsController",function($scope,$http,$rootScope)
{
	 $rootScope.login=false;
		$rootScope.register=false;
		$rootScope.services=false;
		$rootScope.about=false;
		$rootScope.home=false;
		$rootScope.adminBlog=true;
		$rootScope.adminEvent=true;
		$rootScope.adminForum=true;
		$rootScope.users=true;
		$rootScope.registeredUsers=true;
		$rootScope.logout=true;
		$rootScope.adminJobs=true;
	  console.log("you are in adminjobs");
	  console.log("inside job controller");
	    $http.get("http://localhost:8081/Collaboration/viewAllJobs")
	    .then(function (response) {$scope.jobs = response.data;});
	   
});


letzChaat.controller("adminBlogController",function($scope,$http,$rootScope)	
		{	
	$rootScope.login=false;
	$rootScope.register=false;
	$rootScope.services=false;
	$rootScope.about=false;
	$rootScope.home=false;
	$rootScope.adminBlog=true;
	$rootScope.users=true;
	$rootScope.registeredUsers=true;
	$rootScope.logout=true;
	$rootScope.adminJobs=true;
	console.log("i am in adminblog controller");
	console.log("after this");
			 $http.get("http://localhost:8081/Collaboration/viewBlogs")
			    .then(function (response) {
			    	
			    	$scope.blogs = response.data;
			    	
			    	console.log("data:"+response.data);
			    });
			$scope.newBlog={};
			console.log("In Controller");
			$scope.addBlog=function(newBlog)
			{
				var dataObj = {
						blogId:$scope.blogId,
						title:$scope.title,
						usersID:$scope.usersID,
						dateOfCreation:$scope.dateOfCreation,
						content:$scope.content,
						category:$scope.category
		 		};
				console.log("title:"+dataObj);
				 var res = $http.post('http://localhost:8081/Collaboration/addBlog',dataObj);
				 $http.get("http://localhost:8081/Collaboration/viewBlogs")
			 	    .then(function (response) {$scope.blogs = response.data;});
			 		res.success(function(data, status, headers, config) {
			 			$scope.message = data;
			 			console.log("status:"+status);
			 		});
			 		 
			};
			$scope.editBlog=function(blog)
			{
				console.log("inside editblog");
				console.log("blog:"+blog);
				$scope.blogDataToEdit=blog;
			}
			$scope.saveEdit=function()
			{
				var dataObj = {
						
						blogId:$scope.blogDataToEdit.blogId,
						title:$scope.blogDataToEdit.title,
						usersID:$scope.blogDataToEdit.usersID,
						dateOfCreation:$scope.blogDataToEdit.dateOfCreation,
						content:$scope.blogDataToEdit.content,
						category:$scope.blogDataToEdit.category
		 				
		 		};
				$http.put('http://localhost:8081/Collaboration/updateBlog', dataObj);
				$http.get("http://localhost:8081/Collaboration/viewBlogs")
		 	    .then(function (response) {$scope.blogs = response.data;});
			}
			$scope.deleteBlog=function(blogDataToEdit)
			{
				console.log("delete blog called");
				blogId:$scope.blogDataToEdit.blogId;
				console.log("blogId:"+blogDataToEdit.blogId);
				$http['delete']('http://localhost:8081/Collaboration/deleteBlog/'+blogDataToEdit.blogId);
				 $http.get("http://localhost:8081/Collaboration/viewBlogs")
			 	    .then(function (response) {$scope.blogs = response.data;});
			}
			
		
$scope.approveBlog=function(i)
{
	var dataObj = {
			
			blogId:$scope.blogDataToEdit.blogId,
			title:$scope.blogDataToEdit.title,
			usersID:$scope.blogDataToEdit.usersID,
			dateOfCreation:$scope.blogDataToEdit.dateOfCreation,
			content:$scope.blogDataToEdit.content,
			category:$scope.blogDataToEdit.category
				
		};
	$http.put('http://localhost:8081/Collaboration/approveBlog/'+i, dataObj);
	$http.get("http://localhost:8081/Collaboration/viewBlogs")
	    .then(function (response) {$scope.blogs = response.data;});
}

}

);



letzChaat.controller('aboutController',function($scope)		
		{
			$scope.message="you are in about page";
		}
		);
letzChaat.controller('servicesController',function($scope)		
		{
			$scope.message="you are in services page";
		}
		);

letzChaat.controller("blogController",function($scope,$http)	
		{	
			 $http.get("http://localhost:8081/Collaboration/viewBlogs")
			    .then(function (response) {$scope.blogs = response.data;});
			
			$scope.newBlog={};
			console.log("In Controller");
			$scope.addBlog=function(newBlog)
			{
				var dataObj = {
						
						usersID:$scope.usersID,
		 				dateOfCreation:$scope.dateOfCreation,
						blogId:$scope.blogId,
		    			title:$scope.title,
		    			content:$scope.content,
		 				category:$scope.category
		 		};
				console.log("title:"+dataObj);
				 var res = $http.post('http://localhost:8081/Collaboration/addBlog',dataObj);
				 $http.get("http://localhost:8081/Collaboration/viewBlogs")
			 	    .then(function (response) {$scope.blogs = response.data;});
			 		res.success(function(data, status, headers, config) {
			 			$scope.message = data;
			 			console.log("status:"+status);
			 		});
			 		 
			};
			$scope.editBlog=function(blog)
			{
				console.log("inside editblog");
				console.log("blog:"+blog);
				$scope.blogDataToEdit=blog;
			}
			$scope.saveEdit=function()
			{
				var dataObj = {
		    			title:$scope.blogDataToEdit.title,
		    			content:$scope.blogDataToEdit.content,
		 				category:$scope.blogDataToEdit.category,
		 				blogId:$scope.blogDataToEdit.blogId,
		 				usersID:$scope.blogDataToEdit.usersID,
		 				dateOfCreation:$scope.blogToEdit.dateOfCreation
		 		};
				$http.put('http://localhost:8081/Collaboration/updateBlog', dataObj);
				$http.get("http://localhost:8081/Collaboration/viewBlogs")
		 	    .then(function (response) {$scope.blogs = response.data;});
			}
			$scope.deleteBlog=function(blogDataToEdit)
			{
				console.log("delete blog called");
				blogId:$scope.blogDataToEdit.blogId;
				console.log("blogId:"+blogDataToEdit.blogId);
				/*$http.delete('http://localhost:8081/Collaboration/deleteBlog/'+blogDataToEdit.blogId);*/
				 $http.get("http://localhost:8081/Collaboration/viewBlogs")
			 	    .then(function (response) {$scope.blogs = response.data;});
			}
			
		}

		);

/*letzChaat.controller('forumController',function($scope)		
		{
			$scope.message="you are in forum page";
		}
		);
*/
letzChaat.controller('userHomeController',function($scope)		
		{
			$scope.message="you are in userhome page";
		}
		);

letzChaat.controller('adminController',function($scope)		
		{
			$scope.message="you are in admin controller";
		}
		);


letzChaat.controller('jobsController',function($scope,$http)		
		{
	console.log("inside job controller");
    $http.get("http://localhost:8081/Collaboration/viewAllJobs")
    .then(function (response) {$scope.jobs = response.data;});
    
    $scope.applyJob=function()
    {
    	 console.log("applyJob function called");
    	 var jobData={
           jobId:$scope.jobId,
    	 registrationNumber:$scope.registrationNumber,
    	 studentId:$scope.studentId,
    	 certificateNumber:$scope.certificateNumber	
    	 };
    	 var res = $http.post('http://localhost:8081/Collaboration/registerJob',jobData);
    }
		}
       
		);






letzChaat.controller("adminEventController",function($scope,$http,$rootScope)	
		{	
	$rootScope.login=false;
	$rootScope.register=false;
	$rootScope.services=false;
	$rootScope.about=false;
	$rootScope.home=false;
	$rootScope.adminEvent=true;
	$rootScope.users=true;
	$rootScope.registeredUsers=true;
	$rootScope.logout=true;
	$rootScope.adminJobs=true;
	console.log("i am in adminevent controller");
	console.log("after this");
			 $http.get("http://localhost:8081/Collaboration/viewEvents")
			    .then(function (response) {
			    	
			    	$scope.events = response.data;
			    	
			    	console.log("data:"+response.data);
			    });
			$scope.newEvent={};
			console.log("In Controller");
			$scope.addEvent=function(newEvent)
			{
				var dataObj = {
						eventId:$scope.eventId,
						title:$scope.title,
						description:$scope.	description,

						usersID:$scope.usersID,
						eventDate:$scope.eventDate,
						venue:$scope.venue,
							};
				console.log("title:"+dataObj);
				 var res = $http.post('http://localhost:8081/Collaboration/addEvent',dataObj);
				 $http.get("http://localhost:8081/Collaboration/viewEvents")
			 	    .then(function (response) {$scope.events = response.data;});
			 		res.success(function(data, status, headers, config) {
			 			$scope.message = data;
			 			console.log("status:"+status);
			 		});
			 		 
			};
			$scope.editEvent=function(event)
			{
				console.log("inside editevent");
				console.log("event:"+event);
				$scope.eventDataToEdit=event;
			}
			$scope.saveEdit=function()
			{
				var dataObj = {
						
						eventId:$scope.eventDataToEdit.eventId,
						title:$scope.eventDataToEdit.title,
						description:$scope.eventDataToEdit.description,
						usersID:$scope.eventDataToEdit.usersID,
						eventDate:$scope.eventDataToEdit.eventDate,
						venue:$scope.eventDataToEdit.venue,
						
		 		};
				$http.put('http://localhost:8081/Collaboration/updateEvent', dataObj);
				$http.get("http://localhost:8081/Collaboration/viewEvents")
		 	    .then(function (response) {$scope.events = response.data;});
			}
			$scope.deleteEvent=function(eventDataToEdit)
			{
				console.log("delete event called");
				eventId:$scope.eventDataToEdit.eventId;
				console.log("eventId:"+eventDataToEdit.eventId);
				$http['delete']('http://localhost:8081/Collaboration/deleteEvent/'+eventDataToEdit.eventId);
				/*$http.DELETE('http://localhost:8081/Collaboration/deleteEvent/'+eventDataToEdit.eventId);*/
				 $http.get("http://localhost:8081/Collaboration/viewEvents")
			 	    .then(function (response) {$scope.events = response.data;});
			}
			
		}

		);

































letzChaat.controller("eventController",function($scope,$http)	
		{	
			 $http.get("http://localhost:8081/Collaboration/viewEvents")
			    .then(function (response) {$scope.events = response.data;});
			
			$scope.newEvent={};
			console.log("In Controller");
			$scope.addEvent=function(newEvent)
			{
				var dataObj = {
						
						eventId:$scope.eventId,
		 				title:$scope.title,
						description:$scope.description,
		    			usersID:$scope.usersID,
		    			eventDate:$scope.eventDate,
		 				venue:$scope.venue
		 		};
				console.log("title:"+dataObj);
				 var res = $http.post('http://localhost:8081/Collaboration/addEvent',dataObj);
				 $http.get("http://localhost:8081/Collaboration/viewEvents")
			 	    .then(function (response) {$scope.events = response.data;});
			 		res.success(function(data, status, headers, config) {
			 			$scope.message = data;
			 			console.log("status:"+status);
			 		});
			 		 
			};
			$scope.editEvent=function(event)
			{
				console.log("inside editevent");
				console.log("event:"+event);
				$scope.eventDataToEdit=event;
			}
			$scope.saveEdit=function()
			{
				var dataObj = {
		    			eventId:$scope.eventDataToEdit.eventId,
		    			title:$scope.eventDataToEdit.title,
		 				description:$scope.eventDataToEdit.description,
		 				usersID:$scope.eventDataToEdit.usersID,
		 				eventDate:$scope.eventDataToEdit.eventDate,
		 				venue:$scope.eventToEdit.venue
		 		};
				$http.put('http://localhost:8081/Collaboration/updateEvent', dataObj);
				$http.get("http://localhost:8081/Collaboration/viewEvents")
		 	    .then(function (response) {$scope.events = response.data;});
			}
			$scope.deleteEvent=function(eventDataToEdit)
			{
				console.log("delete event called");
				eventId:$scope.eventDataToEdit.eventId;
				console.log("eventId:"+eventDataToEdit.eventId);
				/*$http.DELETE('http://localhost:8081/Collaboration/deleteEvent/'+eventDataToEdit.eventId);*/
				 $http.get("http://localhost:8081/Collaboration/viewEvents")
			 	    .then(function (response) {$scope.events = response.data;});
			}
			
		}

		);


















































letzChaat.controller("forumController",function($scope,$http,$rootScope)	
		{	
	
	console.log("i am in forumController");
	console.log("after this");
			 $http.get("http://localhost:8081/Collaboration/viewForums")
			    .then(function (response) {
			    	
			    	$scope.forums = response.data;
			    	
			    	console.log("data:"+response.data);
			    });
			$scope.newForum={};
			console.log("In Controller");
			$scope.addForum=function(newForum)
			{
				var dataObj = {
						forumId:$scope.forumId,
						name:$scope.name,
						topic:$scope.topic,
						description:$scope.content,
						userID:$scope.usersID,
						dateOfCreation:$scope.dateOfCreation,
						/*content:$scope.content,
						category:$scope.category*/
		 		};
				console.log("title:"+dataObj);
				 var res = $http.post('http://localhost:8081/Collaboration/addForum',dataObj);
				 $http.get("http://localhost:8081/Collaboration/viewForums")
			 	    .then(function (response) {$scope.forums = response.data;});
			 		res.success(function(data, status, headers, config) {
			 			$scope.message = data;
			 			console.log("status:"+status);
			 		});
			 		 
			};
			$scope.editForum=function(forum)
			{
				console.log("inside editforum");
				console.log("forum:"+forum);
				$scope.forumDataToEdit=forum;
			}
			$scope.saveEdit=function()
			{
				var dataObj = {
						
						forumId:$scope.forumDataToEdit.forumId,
						name:$scope.forumDataToEdit.name,
						topic:$scope.forumDataToEdit.topic,
						description:$scope.forumDataToEdit.content,
						userID:$scope.forumDataToEdit.usersID,
						dateOfCreation:$scope.forumDataToEdit.dateOfCreation,
						
		 				
		 		};
				$http.put('http://localhost:8081/Collaboration/updateForum', dataObj);
				$http.get("http://localhost:8081/Collaboration/viewForums")
		 	    .then(function (response) {$scope.forums = response.data;});
			}
			$scope.deleteForum=function(forumDataToEdit)
			{
				console.log("delete user forum called");
				forumId:$scope.forumDataToEdit.forumId;
				console.log("forumId:"+forumDataToEdit.forumId);
				$http['delete']('http://localhost:8081/Collaboration/deleteForum/'+forumDataToEdit.forumId);
				 $http.get("http://localhost:8081/Collaboration/viewForums")
			 	    .then(function (response) {$scope.forums = response.data;});
			}
			
		

		
});












letzChaat.controller("adminForumController",function($scope,$http,$rootScope)	
		{	
	$rootScope.login=false;
	$rootScope.register=false;
	$rootScope.services=false;
	$rootScope.about=false;
	$rootScope.home=false;
	$rootScope.adminForum=true;
	$rootScope.users=true;
	$rootScope.registeredUsers=true;
	$rootScope.logout=true;
	$rootScope.adminJobs=true;
	console.log("i am in adminforum controller");
	console.log("after this");
			 $http.get("http://localhost:8081/Collaboration/viewForums")
			    .then(function (response) {
			    	
			    	$scope.forums = response.data;
			    	
			    	console.log("data:"+response.data);
			    });
			$scope.newForum={};
			console.log("In Controller");
			$scope.addForum=function(newForum)
			{
				var dataObj = {
						forumId:$scope.forumId,
						title:$scope.title,
						description:$scope.content,

						usersID:$scope.usersID,
						forumDate:$scope.forumDate,
						venue:$scope.venue,
							};
				console.log("title:"+dataObj);
				 var res = $http.post('http://localhost:8081/Collaboration/addForum',dataObj);
				 $http.get("http://localhost:8081/Collaboration/viewForums")
			 	    .then(function (response) {$scope.forums = response.data;});
			 		res.success(function(data, status, headers, config) {
			 			$scope.message = data;
			 			console.log("status:"+status);
			 		});
			 		 
			};
			$scope.editForum=function(forum)
			{
				console.log("inside editforum");
				console.log("forum:"+forum);
				$scope.forumDataToEdit=forum;
			}
			$scope.saveEdit=function()
			{
				var dataObj = {
						
						forumId:$scope.forumDataToEdit.forumId,
						name:$scope.forumDataToEdit.name,
						topic:$scope.forumDataToEdit.topic,
						description:$scope.forumDataToEdit.content,
						userID:$scope.forumDataToEdit.usersID,
						dateOfCreation:$scope.forumDataToEdit.dateOfCreation,
						
		 		};
				$http.put('http://localhost:8081/Collaboration/updateForum', dataObj);
				$http.get("http://localhost:8081/Collaboration/viewForums")
		 	    .then(function (response) {$scope.forums = response.data;});
			}
			$scope.deleteForum=function(forumDataToEdit)
			{
				console.log("delete forum called");
				forumId:$scope.forumDataToEdit.forumId;
				console.log("forumId:"+forumDataToEdit.forumId);
				$http['delete']('http://localhost:8081/Collaboration/deleteForum/'+forumDataToEdit.forumId);
				/*$http.DELETE('http://localhost:8081/Collaboration/deleteForum/'+forumDataToEdit.forumId);*/
				 $http.get("http://localhost:8081/Collaboration/viewForums")
			 	    .then(function (response) {$scope.forums = response.data;});
			}
			
		}

		);

















/*
letzChaat.controller("adminForumController",function($scope,$http,$rootScope)	
		{	
	$rootScope.login=false;
	$rootScope.register=false;
	$rootScope.services=false;
	$rootScope.about=false;
	$rootScope.home=false;
	$rootScope.adminForum=true;
	$rootScope.users=true;
	$rootScope.registeredUsers=true;
	$rootScope.logout=true;
	$rootScope.adminJobs=true;
	console.log("i am in adminforum controller");
	console.log("after this");
			 $http.get("http://localhost:8081/Collaboration/viewForums")
			    .then(function (response) {
			    	
			    	$scope.forums = response.data;
			    	
			    	console.log("data:"+response.data);
			    });
			$scope.newForum={};
			console.log("In Controller");
			$scope.addForum=function(newForum)
			{
				var dataObj = {
						forumId:$scope.forumId,
						title:$scope.title,
						description:$scope.	description,

						usersID:$scope.usersID,
						forumDate:$scope.forumDate,
						venue:$scope.venue,
							};
				console.log("title:"+dataObj);
				 var res = $http.post('http://localhost:8081/Collaboration/addForum',dataObj);
				 $http.get("http://localhost:8081/Collaboration/viewForums")
			 	    .then(function (response) {$scope.forums = response.data;});
			 		res.success(function(data, status, headers, config) {
			 			$scope.message = data;
			 			console.log("status:"+status);
			 		});
			 		 
			};
			$scope.editForum=function(forum)
			{
				console.log("inside editforum");
				console.log("forum:"+forum);
				$scope.forumDataToEdit=forum;
			}
			$scope.saveEdit=function()
			{
				var dataObj = {
						
						forumId:$scope.forumDataToEdit.forumId,
						name:$scope.forumDataToEdit.name,
						topic:$scope.forumDataToEdit.topic,
						description:$scope.forumDataToEdit.description,
						userID:$scope.forumDataToEdit.userID,
						dateOfCreation:$scope.forumDataToEdit.dateOfCreation,
						
		 		};
				$http.put('http://localhost:8081/Collaboration/updateForum', dataObj);
				$http.get("http://localhost:8081/Collaboration/viewForums")
		 	    .then(function (response) {$scope.forums = response.data;});
			}
			$scope.deleteForum=function(forumDataToEdit)
			{
				console.log("delete forum called");
				forumId:$scope.forumDataToEdit.forumId;
				console.log("forumId:"+forumDataToEdit.forumId);
				$http['delete']('http://localhost:8081/Collaboration/deleteForum/'+forumDataToEdit.forumId);
				$http.DELETE('http://localhost:8081/Collaboration/deleteForum/'+forumDataToEdit.forumId);
				 $http.get("http://localhost:8081/Collaboration/viewForums")
			 	    .then(function (response) {$scope.forums = response.data;});
			}
			
		}

		);*/















































































letzChaat.controller('jobsController',function($scope,$http)		
		{
	console.log("inside job controller");
    $http.get("http://localhost:8081/Collaboration/viewAllJobs")
    .then(function (response) {$scope.jobs = response.data;});
    $http.get("http://localhost:8081/Collaboration/jobsApplied")
    .then(function (response) {$scope.jobsApplied = response.data;});
    
    $scope.newJob={};
	
	$scope.addJob=function(newJob)
	{	console.log("In jobController............");
		var dataObj = {
				
				company:$scope.company,
				aboutCompany:$scope.aboutCompany,				
				role:$scope.role,						
				skillsRequired:$scope.skillsRequired,
				eligibilityCriteria:$scope.eligibilityCriteria,
				ctc:$scope.ctc,						
				dateOfInterview:$scope.dateOfInterview,						
				addressOfTheCompany:$scope.addressOfTheCompany,	
				urlOfTheCompany:$scope.urlOfTheCompany
 		};
		console.log("title:"+dataObj);
		 var res = $http.post('http://localhost:8081/Collaboration/addJob',dataObj);
		 $http.get("http://localhost:8081/Collaboration/viewAllJobs")
	 	    .then(function (response) {$scope.jobs = response.data;});
	 		res.success(function(data, status, headers, config) {
	 			$scope.message = data;
	 			console.log("status:"+status);
	 		});
	 		 
	}
	$scope.editJob=function(resource)
	{
		console.log("inside editJob");
		//console.log("job:"+job);
		$scope.jobDataToEdit=resource;
	}
	$scope.saveEdit=function()
	{
		var dataObj = {
				
				jobId:$scope.jobDataToEdit.jobId,
				company:$scope.jobDataToEdit.company,
				aboutCompany:$scope.jobDataToEdit.aboutCompany,						
				role:$scope.jobDataToEdit.role,						
				skillsRequired:$scope.jobDataToEdit.skillsRequired,
				eligibilityCriteria:$scope.jobDataToEdit.eligibilityCriteria,
				ctc:$scope.jobDataToEdit.ctc,						
				dateOfInterview:$scope.jobDataToEdit.dateOfInterview,						
				addressOfTheCompany:$scope.jobDataToEdit.addressOfTheCompany,	
				urlOfTheCompany:$scope.jobDataToEdit.urlOfTheCompany
		
 		};
		$http.put('http://localhost:8081/Collaboration/updateJob', dataObj);
		$http.get("http://localhost:8081/Collaboration/viewAllJobs")
 	    .then(function (response) {$scope.jobs = response.data;});
	}
	$scope.deleteJob=function(jobDataToEdit)
	{
		console.log("delete user job called");
		jobId:$scope.jobDataToEdit.jobId;
		console.log("jobId:"+jobDataToEdit.jobId);
		$http['delete']('http://localhost:8081/Collaboration/deleteJob/'+jobDataToEdit.jobId);
		 $http.get("http://localhost:8081/Collaboration/viewAllJobs")
	 	    .then(function (response) {$scope.jobs = response.data;});
	}
    
    
    $scope.applyJob=function()
    {
    	 console.log("applyJob function called");
    	 var jobData={
           jobId:$scope.jobDataToEdit.jobId,
    	 registrationNumber:$scope.registrationNumber,
    	/* studentId:$scope.studentId,*/
    	 certificateNumber:$scope.certificateNumber	
    	 };
    	 	$http.post('http://localhost:8081/Collaboration/registerJob',jobData).then(function (response) {
		 console.log("result   data:"+response.data);
		 var r=response.data.toString();
		 console.log("response:"+r);
	     
			if(r==1)
				{
				 console.log("job applied successfully");
				/* $scope.apply="true";
				 jobId:$scope.jobId;*/
				 $scope.message="Successfully applied for the job with id "+$scope.jobId;
				}
  		});
    }
		});
   
































