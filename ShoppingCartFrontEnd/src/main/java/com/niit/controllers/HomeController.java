package com.niit.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

	//if you want to navigate
	@RequestMapping("/")
	public String homepage()
	{
		return "INDEX";
	}
	
	/*@RequestMapping("/Registerpage")
	public String registerpagenew()
	{
		return "Registerpage";
	}*/
	
	
	/*@RequestMapping("/loginPage")
	public String loadLoginPage()
	{
		return "login";
	}*/
	/*@RequestMapping("/Registerpage")
	public String loadregisterPage()
	{
		return "RegisterPage";
	}*/
	
	
	/* @RequestMapping("/login")
	    public String login(@RequestParam(value="error", required = false) String error, @RequestParam(value="logout",
	            required = false) String logout, Model model) {
		System.out.println("invalid username");
	        if (error!=null) {
	            model.addAttribute("error", "Invalid username and password");
	       return "login";
	        }
	        model.addAttribute("msg", "User successfully logged in");
	       return "INDEX";//return to landing page
	        

	       
	    }*/
	/*@RequestMapping("/")
	public ModelAndView home()
	{
		ModelAndView mv = new ModelAndView("/Home");
		mv.addObject("message","thank you for visiting");
		return mv;
	}
	
	@RequestMapping("/Register")
	public ModelAndView register()
	{
		ModelAndView mv = new ModelAndView("Register");
		mv.addObject("user click register here", "true");
		return mv;
	}
	
	@RequestMapping("/Login")
	public ModelAndView login()
	{
	
		ModelAndView mv = new ModelAndView("Login");
		mv.addObject("user click login here", "true");
		return mv;
	}*/
}
