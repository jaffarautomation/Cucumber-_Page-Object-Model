package com.qa.utils;

import java.io.File;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.io.FileHandler;

import com.qa.testbase.TestBase;

public class UtilTest extends TestBase {

	
	


	public static final long PAGE_LOAD_TIMEOUT = 10;
	public static final long IMPLICIT_WAIT = 10;
		



	public UtilTest() throws Throwable {
		super();
		// TODO Auto-generated constructor stub
	}



	
	
	

	public static void takesreen() throws Throwable
	{
		
		//type casting file
		   TakesScreenshot  ss = (TakesScreenshot)driver;
		   
		  
		   
		   //In below code Screenshot  is in form of file and storing in o reference
		File o = ss.getScreenshotAs(OutputType.FILE);
		

	    //in below code we are copying that o reference to your desired location.
	   FileHandler.copy(o, new File("./Screenshot/SS.png"));
	}

}


