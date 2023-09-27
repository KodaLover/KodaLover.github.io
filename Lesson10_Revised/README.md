[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11040930&assignment_repo_type=AssignmentRepo)
# Lesson 10 Project
The computer company client is pleased with the layouts you've created for them so far. This week, the company would like you to focus on creating visual elements for viewers using HTML and CSS to display "cards" side-by-side with more in-depth descriptions about the services they provide. Since the client's users and employees will access the web site on different personal devices, they'd like you to use what you learned about responsive web design to make sure the layout of the page looks good for mobile, tablet, and larger devices.

## Project Prep
1. If you haven't done so already, clone the repo to your computer within your course folder.
2. Open the repo within VS Code. You can open this `readme.md` file within VS Code to view the project directions there. 

   > **TIP:** Right click on the file and choose the `Open Preview` option.
3. If there are files and folders present other than this `readme.md` file, take some time to familiarize yourself with the files within the repo so you know where they are located. This will help you when asked to use them within the project directions.

   > **TIP:** Before beginning any work on the project, read through all the steps to understand what you will be doing.

<br>

***
**IMPORTANT: Be sure to Save and Sync your work to GitHub regularly, applying appropriate Commit comments as you go.**
***


## Adjust the Template

> **ASSIGNMENT TIP**<br>As you work on the styling for this assignment and future assignments, you should load the web page within your browser instead of using the preview window in VS Code. Then use the built in developer tools to simulate the different viewports that each CSS file will target. As you make adjustments to your CSS, see how it looks in the different viewports. Review the **Responsive Web Design** page in Lesson 9 for information on how to use the browser tools if needed. 

1. If necessary, open the Template from your Lesson 9 folder.
2. Add the necessary viewport metadata so the viewport width is equal to the device width and that the initial scale is set to 1.
3. Modify the existing link to the external Default stylesheet to include a media query that detects when the device is larger than 900px.
    > **TIP:** When you first load the page and look at the different viewport sizes the styles should disappear entirely except for a viewport larger than 900px since there are no mobile or tablet styles.
4. Create an link for the external Mobile stylesheet to:
    1. Apply a media query to load the mobile style CSS for any device that is smaller than 450px.
5. Create an link for the external Tablet stylesheet to:
    1. Apply a media query to load the tablet style CSS for any device that is smaller than 900px.
    > **TIP:** You must think through how to properly apply the tablet CSS file. If the media query is not designed correctly, it will override the mobile version and the mobile file will never be used.

## Create the Services Page
1. Save a copy of the Template to your Lesson 9 folder as: **services.html**
2. Open the Services page from your Lesson 9 folder, if necessary.
3. Update the HTML comment to add your section number and the lesson number.
4. Update the metadata with the following: 
    1. Change the title to: **Our Services**
    2. Define the author using your first and last name.
    3. Add a minimum of 5 keywords appropriate for the page content.
    4. Add an appropriate description.
5. Apply the **active** class to the "Services" link.
6. Within the Main section, create an HTML layout structure for a "card" you'll define visually with CSS later on. Utilize the appropriate HTML elements complete the following:
    1. Display a 100px by 100px image.
    2. Using an appropriate heading, display the name of the service.
    3. Add a brief description of the service.
7. Group the image, service name, and description in a generic container.
8. Insert the following as information for a total of three cards:
<table>
    <tr>
        <th>Image File</th>
        <th>Service Name</th>
        <th>Service description</th>
    </tr>
    <tr>
        <td>computer.png</td>
        <td>Computer Diagnostic & Repair</td>
        <td>We can evaluate your PCs to provide: physical cleaning, malware and antivirus solutions, hard drive replacement, and data recovery.</td>
    </tr>
    <tr>
        <td>presentation.png</td>
        <td>Business Consultation</td>
        <td>We will work with you to find custom solutions for your office set-up design including network, servers, phones and internet solutions.</td>
    </tr>
    <tr>
        <td>cloud-data.png</td>
        <td>Secure Cloud Backup</td>
        <td>We take care of cloud backup solutions for our customers, including free support, and built-in spam and virus scan filters.</td>
    </tr>
</table>

## Style the Services page
1. If necessary, open the `default_style.css` file.
2. Update the multi-lined comment to add your MEID as the Author, course and section number, and current lesson number.
3. Above the Footer Styles, add appropriate selectors, ids, or classes to style the whole group to look like a "card" using the following and the example below as a guideline.
    1. Display two cards side-by-side horizontally.
    2. Apply a white background color to the container.
    3. Push the cards away from each other by the same value on all sides.
    4. Add the following styles to the card images:
        - Float the image to the left of the container. 
        - Apply a bright background color of your choosing.
        - Increase the white space so the background color is clearly visible on all sides of the element.
        - Adjust the element to be no larger than 100px. **HINT:** 
        - Push the elements to the right of the card images by 5px.
    5. Remove the margin from the second-level heading and paragraphs.
    6. Increase the white space for the second-level heading and paragraphs for overall readability.
    7. Adjust the font size of the second-level heading and paragraphs so that the text fits within the container.

## Create a Responsive Design
1. Create two copies of the `default_style.css` file.
    1. Rename one file to `mobile_style.css` and the other file to `tablet_style.css`.
2. Within the default styles, add a comment to identify the breakpoint value of the default stylesheet in pixels.
3. Within the mobile styles and tablet styles, add a comment at the top explaining when the CSS file will be loaded by the browser.
4. Style the main division element so that it is the full width of the viewport for mobile devices and tablets.
5. Apply appropriate changes to the navigation bar so that each link is clearly visible for mobile devices and tablets.
6. Style each section of the page (e.g. header, footer, main, etc.) so that each section visually defined. While color is an option to visually define each section, utilize appropriate font information, color, box model, etc. to make the changes obvious.
    > **TIP:** You can use the **Color Selection Tool** to generate different color schemes for each view. Note that you normally would not apply different color schemes to the different views in real world scenarios, but for the assignment, you will be required to do so to create additional visual differences between the three views.
    1. If the design you are trying to accomplish isn't working the way you want, it is OK to modify the HTML file to add another division element to group content. Just know you will potentially have to account for this new element in selectors in the other style sheets. For example, if you wish the navigation menu to appear next to the heading and paragraph instead of under it, you may need to wrap the heading and paragraph in a division element to make them appear as inline blocks.
    2. Add comments at the beginning of each section to explain what changes you made to make the content look good and why you made the changes you made.
    
## Submit the Project
Once you have completed your project, you need to let your instructor know that it is ready to be graded. This is done by submitting the Repo URL to the assignment in RioLearn.

   > **TIP:** If you need a refresher on how to submit your work, view: [Submitting Assignments & Viewing Feedback](https://riosalado.coursearc.com/content/cis-public/using-git-github-and-vs-code/submitting-assignments-and-viewing-feedback).
1. Review your work and make any necessary updates. Save the file. You can either select **FILE>SAVE** or use the keyboard shortcut **CTRL+S**.
2. **Sync** the changes and apply a final **Commit** that says: `Completed final review and updates before submission.`
3. Verify that all files appear on GitHub.

   > **TIP:** You can view any of your repos by going to the GitHub organization for the course - [RSC-CIS133DA-IN-V12 Organization](https://github.com/rsc-cis133DA-in-v12). Once you are viewing the class organization, you should see all of the Repos that you have accepted assignment invitations for. It is recommended that you bookmark this page for future reference. Push (i.e., sync) the files on your computer with GitHub to ensure all files are uploaded to GitHub for your instructor to view.
4. Right-click the link to your repository and select **Copy Link Address**.
5. Go to the Assessing Your Learning page in your RioLearn lesson, and click the link to submit the assignment. Paste the link to your repo in the assignment submission box.
