package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.testbase.TestBase;

public class HomePage extends TestBase{

	public HomePage() throws Throwable {
		PageFactory.initElements(driver, this);
	}

	
	// pagefactory -> OR
	@FindBy(xpath="//*[@id=\'nav-xshop\']/a[4]")
	WebElement Sell;
	
	@FindBy(xpath="//*[@id=\'nav-xshop\']/a[5]")
	WebElement customercare;
	
	@FindBy(xpath ="//*[@id=\"nav-link-accountList\"]/span[1]")
	WebElement name;
	
	
	//Actions 1 this method will verify the username is reflecting right after login
	public String verifyusername()
	{
		
		return name.getText();
		
	}
	
	//Action2 //this method will navigate to customercare page and return its class object
	
	public CustomerCarePage Clickoncustomerservice() throws Throwable
	{
		
		customercare.click();
		return new CustomerCarePage();
	}
}
