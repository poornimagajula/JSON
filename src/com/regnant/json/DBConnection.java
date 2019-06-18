package com.regnant.json;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
	
	public static Connection getDBConnection() {
		Connection con = null;
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/sample","root","Admin@123");
				
		} catch (ClassNotFoundException e) {
			System.out.println("Driver Class not found");
			e.printStackTrace();
		} catch (SQLException e) {
			System.out.println("Connection failed check the database");
			e.printStackTrace();
		}
		
		return con;
		
	}

}
