package com.niit.shoppingcart.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.niit.shoppingcart.model.UserRole;
import com.niit.shoppingcart.model.Users;
import com.niit.shoppingcart.model.UsersDetail;

@Repository
@Transactional
public class UserDetailDAOImpl implements UserDetailDAO{

    @Autowired
    private SessionFactory sessionFactory;

    public void addUser(UsersDetail usersDetail) {
        Session session = sessionFactory.openSession();

      

        session.saveOrUpdate(usersDetail);
       

        Users newUser = new Users();
        newUser.setUsername(usersDetail.getUsername());
        newUser.setPassword(usersDetail.getPassword());
        newUser.setEnabled(true);
        newUser.setUserId(usersDetail.getUserId());

        UserRole newUserRole = new UserRole();
        newUserRole.setUsername(usersDetail.getUsername());
        newUserRole.setRole("ROLE_USER");
        session.saveOrUpdate(newUser);
        session.saveOrUpdate(newUserRole);
        session.saveOrUpdate(usersDetail);
        

        session.flush();
    }

    public UsersDetail getUserById (int userId) {
        Session session = sessionFactory.getCurrentSession();
        return (UsersDetail) session.get(UsersDetail.class, userId);
    }

    public List<UsersDetail> getAllUsers() {
        Session session = sessionFactory.getCurrentSession();
        Query query = session.createQuery("from UsersDetail");
        List<UsersDetail> usersDetail = query.list();

        return usersDetail;
    }

    public UsersDetail getUserByUsername (String username) {
        Session session = sessionFactory.getCurrentSession();
        Query query = session.createQuery("from UsersDetail where username = ?");
        query.setString(0, username);

        return (UsersDetail) query.uniqueResult();
    }

	
}
