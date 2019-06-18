package com.regnant.json;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;

public class DBCRUDOperations {
	
	Connection con= DBConnection.getDBConnection();
	int row_count = 0;
	public int add(String json) {
			
		Gson jsonobj = new Gson();
		UserBean u = jsonobj.fromJson(json, UserBean.class);
		
		try {
			String insert = "insert sample.user_tbl values(?,?,?)";	
			PreparedStatement pstmt = con.prepareStatement(insert);
			pstmt.setInt(1, u.getId());
			pstmt.setString(2, u.getName());
			pstmt.setString(3,u.getMail());
			row_count = pstmt.executeUpdate();			
		} catch (SQLException e) {
			System.out.println("Exception in Add User");
			e.printStackTrace();
		}	
		
		return row_count;
		
	}
	
	public List<UserBean> getUser(){
		
		List<UserBean> ulist = new ArrayList<UserBean>();
		String select = "select * from sample.user_tbl";
		try {
			PreparedStatement pstmt = con.prepareStatement(select);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()) {
				UserBean u = new UserBean();
				u.setNo(rs.getInt(1));
				u.setName(rs.getString(2));
				u.setMail(rs.getString(3));
				ulist.add(u);
			}
		} catch (SQLException e) {
			System.out.println("Exception in getUser");
			e.printStackTrace();
		}
			
		return ulist;
		
	}
	
	public int updateUser(String json) {
		
		Gson jsonobj = new Gson();
		UserBean u = jsonobj.fromJson(json, UserBean.class);
		
		try {
			String update = "update sample.user_tbl set name = ?, mail = ? where id = ?";	
			PreparedStatement pstmt = con.prepareStatement(update);
			pstmt.setInt(3, u.getId());
			pstmt.setString(1, u.getName());
			pstmt.setString(2,u.getMail());
			row_count = pstmt.executeUpdate();			
		} catch (SQLException e) {
			System.out.println("Exception in update User");
			e.printStackTrace();
		}	
		
		return row_count;
		
		
	}
public int delUser(String json) {
		
		Gson jsonobj = new Gson();
		UserBean u = jsonobj.fromJson(json, UserBean.class);
		
		try {
			String delete = "delete from sample.user_tbl where (id = ?)";	
			PreparedStatement pstmt = con.prepareStatement(delete);
			pstmt.setInt(1, u.getId());
			row_count = pstmt.executeUpdate();			
		} catch (SQLException e) {
			System.out.println("Exception in Delete User");
			e.printStackTrace();
		}	
		
		return row_count;
		
		
	}
}
