[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11039368&assignment_repo_type=AssignmentRepo)
# Lesson 9
The computer company client would like you to make a web page that displays some of the offerings they have for individual users and businesses alike using a table to display the data. They'd also like you to create a form that can be submitted to them from potential clientele. This page will serve as a place where users can request an appointment straight from the website, providing information on what services they'd like to inquire about from the company. 

## Project Prep
1. If you haven't done so already, clone the repo to your computer within your course folder.
2. Open the repo within VS Code. You can open this `readme.md` file within VS Code to view the project directions there. 

   > **TIP:** Right click on the file and choose the `Open Preview` option.
3. If there are files and folders present other than this `readme.md` file, take some time to familiarize yourself with the files within the repo so you know where they are located. This will help you when asked to use them within the project directions.

   > **TIP:** Before beginning any work on the project, read through all the steps to understand what you will be doing.
4. You will create a table below, use the correct number of columns and rows to display the following details. Reviewing this information first will help you determine the structure of the table. 
   1. There are seven services offered to both Home & Business users that includes:
      - Offered at a $40 fixed price:
         - Data recovery & transfer
         - Software installation
      - Offered at $60 per hour + hardware costs:
         - Computer repair
         - PC setup and connection
      - Offered at $60 per hour:
         - Computer diagnosis
         - Wireless/Wired network setup
      - Memory (RAM) upgrade which is offered at a $90 fixed price
   2. There are three services offered to Business users:
      - 24/7 Support Hotline whose pricing starts at $300 per month
      - Web development whose pricing starts at $400
      - Monthly software maintenance whose pricing starts at $40 per hour

<br>

***
**IMPORTANT: Be sure to Save and Sync your work to GitHub regularly, applying appropriate Commit comments as you go.**
***


<<<<<<< HEAD
## Create the Schedule Page
=======
## Create the Schedule an Appointment Page
>>>>>>> 8a99c07a60d1577a3c3c2d9707f0c1916bca0500

1. Save a copy of the template.html file to your Lesson 9 folder as: **schedule.html**
2. Update the metadata with the following:
    1. Change the title to: **Schedule an Appointment**
    2. Define the author using your first and last name.
    3. Add a minimum of 5 keywords appropriate for the page content.
    4. Add an appropriate description.
1. Apply the **active** class to the "Schedule an appointment" link.
2. Within the main section, remove the paragraph of placeholder text.
3. Within the main section, create two second level headings. The first heading should display: **Pricing List** and the second heading should display: **Project Request Form**
4. Below the Pricing List heading, create a table utilizing the table data provided to you in the project prep.
   1. In the first row, create header cells for the appropriate cells to display: **Services** and **Price**
      > **NOTE:** You should have an empty cell or table heading to the left of the Services cell.
   2. In the first column, create header cells for the appropriate cells to display: **Home & Business** and **Business**.
   3. Create rows and table cells per row for each necessary entry within the table. When the information is same between adjacent rows, make sure the cell correctly spans the row.
5. Below the "Project Request Form" heading, create a paragraph that displays the following information: 
      ><code>Computer Systems Inc. can email or call you today to schedule an appointment or project request. Submit the following form and we will get back to you promptly.</code>
6. Create a form with the following information:
   1. Apply an attribute to the form that will allow you to test the data when the form is submitted. **TIP:** Review Lesson 8, Introduction to Forms and the *Postback script* that has been provided to you.
   2. Use the appropriate text input field to allow users to submit the following details: **First and Last Name**, **Email**, and **Phone**.
      - Use a binding method that will provide the most flexibility to style the elements using unique id attributes.
      > **TIP:** You will style your form later in the lesson to make each element display as block elements, therefore you should not add any line breaks to the form unless stated.
   3. Add a paragraph that displays: 
      ><code>How would you prefer we get back to you?</code>
   4. Create checkable options to allow for one or more choices of contact. Display the following options: **Phone** or **Email**.
      - Use a binding method to make the input child elements of the label. 
   5. Add a paragraph that displays:
      ><code>Are you requesting for your home or business?</code>
   6. Create an input field that will allow the user to select one of the following options: **Individual/Home** or **Business**
      - Use a binding method to make the input child elements of the label.
   7. Create a field that will allow the user to type in multiple lines of text. 
      - Use a binding method that will provide the most flexibility to style the elements using unique id attributes.
      - The label should display: **Additional Comments**
   8. Add a line break to display the following below on it's own line.
   9. Create a reset and submit button at the bottom of the form. Display the following text for the appropriate button: **Reset form** and **Submit Form**

### Example Project
**NOTE:** The table borders have been made visible in this example, your project may not appear the same exact way.
![Screenshot of example Schedule page](https://raw.githubusercontent.com/rsc-cis133DA-in-v12/CourseResources/main/L9-example1.png)

## Style the Schedule Page
1. If necessary, open the external stylesheet.
2. Update the multi-lined comment to add your MEID as the Author, course and section number, and current lesson number.
>**NOTE:** For the remaining steps in the lesson, determine if you can apply the styles by targeting existing HTML selectors or if you must utilize a class or id selector.
3. Above the Footer Styles, create a comment that displays: **Table Styles**.
4. Style the table to:
   1. Collapse the border.
   2. Adjust the width to be 100% of the container.
5. Style all table headers and table cells to:
   1. Add a thin solid dark border of your desired color method on all sides of the elements.
   2. Add a white background color of your desired color method.
   3. Apply 5px of padding on all sides.
6. Style the table header to apply additional styling:
   1. Add a dark background color of your desired color method.
   2. Change the text color to white using your desired color method.
   3. Apply 10px of padding on all sides.
7. Style the first cell to have no borders or background color.
8. Style the top table headers to adjust the bottom border width to be medium instead of thin.
9. Style the left table headers to adjust the right border width to be medium instead of thin.
10. Below the table styles, create a comment that displays: **Form Styles**.
11. Style the form to:
   1. Apply a thin solid dark border on all sides of the element.
   2. Apply 20px of padding to all sides.
12. Style all field labels to:
   1. Display as block elements.
   2. Adjust the font weight to bold.
   3. Apply 5px of padding to all sides.
13. Style the Full Name, Email, and Phone text input fields to"
   1. Change the width so it spans 100% of the layout.
   2. Apply an appropriate box-sizing method so that any borders, margins, or padding are subtracted from the width.
14. Style the textarea to:
   1. Change the width so it spans 100% of the layout.
   2. Change the height to 200px.
   3. Apply an appropriate box-sizing method so that any borders, margins, or padding are subtracted from the box model.
   4. Add a bottom margin of 10px.
15. Style the form buttons to:
   1. Add a top and bottom margin of 10px and left and right margin of 5px.
   2. Apply 5px of padding to the top and bottom sides of the element and 10px of padding to the left and right sides
16. Create a selector to apply a hover effect to the form buttons according to the following:
   1. Add a dark background color of your desired color method.
   2. Adjust the text color to your desired color method.


### Example Project
![Screenshot of example Schedule with CSS](https://raw.githubusercontent.com/rsc-cis133DA-in-v12/CourseResources/main/L9-example2.png)

## Submit the Project
Once you have completed your project, you need to let your instructor know that it is ready to be graded. This is done by submitting the Repo URL to the assignment in RioLearn.

   > **TIP:** If you need a refresher on how to submit your work, view: [Submitting Assignments & Viewing Feedback](https://riosalado.coursearc.com/content/cis-public/using-git-github-and-vs-code/submitting-assignments-and-viewing-feedback).
1. Review your work and make any necessary updates. Save the file. You can either select **FILE>SAVE** or use the keyboard shortcut **CTRL+S**.
2. **Sync** the changes and apply a final **Commit** that says: `Completed final review and updates before submission.`
3. Verify that all files appear on GitHub.

   > **TIP:** You can view any of your repos by going to the GitHub organization for the course - [RSC-CIS133DA-IN-V12 Organization](https://github.com/rsc-cis133DA-in-v12). Once you are viewing the class organization, you should see all of the Repos that you have accepted assignment invitations for. It is recommended that you bookmark this page for future reference. Push (i.e., sync) the files on your computer with GitHub to ensure all files are uploaded to GitHub for your instructor to view.
4. Right-click the link to your repository and select **Copy Link Address**.
5. Go to the Assessing Your Learning page in your RioLearn lesson, and click the link to submit the assignment. Paste the link to your repo in the assignment submission box.
