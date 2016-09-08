package com.niit.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.niit.shoppingcart.dao.UserDetailDAO;
import com.niit.shoppingcart.model.UsersDetail;

/*
 * This Controller is used to register user into the system
 */
@Controller
public class UserRegistrationController {

    @Autowired
    private UserDetailDAO userDetailDAO;
    
    /*
     * registerUserPost method is used to register user into  the system and to show registration related errors
     */
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String registerUserPost(@Valid @ModelAttribute("usersDetail") UsersDetail usersDetail, Model model,BindingResult result) {

        if(result.hasErrors()) {
        	return "register";
        }


        usersDetail.setEnabled(true);
       // usersDetail.setrole("role_adminb");

       userDetailDAO.addUser(usersDetail);

        return "INDEX";

    }

    @RequestMapping("/register")
	public String registerpage(Model model)
	{
    	UsersDetail usersDetail=new UsersDetail();
    	model.addAttribute("usersDetail", usersDetail);
		return "register";
	}
    
    
    
}