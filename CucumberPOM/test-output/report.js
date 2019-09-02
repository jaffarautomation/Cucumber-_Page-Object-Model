$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ADMIN/eclipse-workspace1/CucumberPOM/src/main/java/com/qa/feature/amazon.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon application Test",
  "description": "",
  "id": "amazon-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Amazon Home page Test",
  "description": "",
  "id": "amazon-application-test;validate-amazon-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user validate login page title",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User enter username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User validate username on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage_StepDefinitionFile.user_open_the_browser()"
});
formatter.result({
  "duration": 18732208700,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_StepDefinitionFile.user_validate_login_page_title()"
});
formatter.result({
  "duration": 18427800,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_StepDefinitionFile.user_click_on_login_button()"
});
formatter.result({
  "duration": 67172646300,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_StepDefinitionFile.user_validate_username_on_home_page()"
});
formatter.result({
  "duration": 152023200,
  "status": "passed"
});
});