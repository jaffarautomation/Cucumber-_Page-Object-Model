package com.qa.StepDefinition;

import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.testbase.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import net.bytebuddy.utility.privilege.GetSystemPropertyAction;

import org.sonatype.plexus.components.sec.dispatcher.model.Config;
import org.testng.Assert;

public class HomePage_StepDefinitionFile extends TestBase{

	
	LoginPage loginpagereference =new LoginPage();
	HomePage homepagereference;
	
	public HomePage_StepDefinitionFile() throws Throwable {
		super();
		
	}

	@Given("^User open the browser$")
	public void user_open_the_browser()  {
		
		
		TestBase.initialization();
	    
	}

	

	@Then("^user validate login page title$")
	public void user_validate_login_page_title() throws Throwable {
		
		loginpagereference =new LoginPage();
	   String titleofloginpage =  loginpagereference.validatetitle();
	   Assert.assertTrue(titleofloginpage.contains("Online Shopping site"), "Page title validation failed");
	  
	}

	@Then("^User enter username and password$")
	public void user_click_on_login_button() throws Throwable {
	    
		homepagereference =loginpagereference.login(prop.getProperty("username"), prop.getProperty("password"));
		
	}

	@Then("^User validate username on home page$")
	public void user_validate_username_on_home_page() throws Throwable {
		
		String usernameonhomepage =homepagereference.verifyusername();
		Assert.assertTrue(usernameonhomepage.contains("Hello, Deepika"), "Username validation is incorrect");
	    
	}
}
