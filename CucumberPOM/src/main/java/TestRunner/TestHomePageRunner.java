package TestRunner;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\ADMIN\\eclipse-workspace1\\CucumberPOM\\src\\main\\java\\com\\qa\\feature\\amazon.feature",
		glue={"com\\qa\\StepDefinition"}, //the path of the step definition files
		plugin= {"pretty","html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
        dryRun =false,
        monochrome=true,
        strict = true
        
        )
public class TestHomePageRunner {

}
