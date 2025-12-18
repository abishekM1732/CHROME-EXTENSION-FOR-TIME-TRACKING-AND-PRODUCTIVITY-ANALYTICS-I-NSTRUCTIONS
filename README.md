# CHROME-EXTENSION-FOR-TIME-TRACKING-AND-PRODUCTIVITY-ANALYTICS-I-NSTRUCTIONS

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: ABISHEK M

*INTERN ID*: CT06DR1496

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 6 WEEKS

*MENTOR*: NEELA SANTHOS

*DESCRIPTION*:<br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This project is developed as part of CODTECH Internship Task 4 and focuses on building a Chrome extension that tracks time spent on websites and provides productivity analytics. The primary goal of this project is to help users understand how they spend time online by categorizing websites into productive, non-productive, and uncategorized groups, and by generating a weekly productivity report based on actual browsing behavior.

The Chrome extension continuously monitors the active browser tab and records the time spent on valid websites while intelligently ignoring internal browser pages such as new tabs, extensions, and system URLs. The collected data is sent to a backend server where it is stored securely and processed for analytics. This ensures accurate tracking of real websites instead of browser tabs or system pages.

The backend is built using Node.js and Express.js, with MongoDB used for persistent data storage. It handles time-tracking data, performs categorization logic, and generates analytical summaries such as total time spent per website and weekly usage reports. The backend exposes REST APIs that are consumed by a dashboard interface.

A web-based dashboard is provided to visualize productivity insights in a clear and structured manner. The dashboard displays a table showing productive, non-productive, and uncategorized websites visited by the user, along with a weekly time report (last 7 days) that lists the time spent on each website in minutes. This helps users easily identify browsing patterns and improve time management.

The project runs completely on localhost, does not require cloud deployment, and fulfills all requirements specified for the internship task. It demonstrates integration of a Chrome extension with a backend system and a frontend dashboard to deliver meaningful productivity analytics.

*STEPS TO RUN THE PROJECT*:
<ol>
  <li>git clone <your-github-repo-url> and cd task-4</li>
    <li>cd backend and npm install</li>
    <li>node server.js and verify the server running at http://localhost:5000</li>
    <li>Open Google Chrome Go to:
chrome://extensions</li>
<li>Enable Developer mode</li>
<li>Click Load unpacked</li>
<li>Select the extension folder from the project</li>
<li>Browse different websites and the extension will automatically track time spend and the data will the stored in mongodb</li>
    <li>Navigate to "task4/dashboard/index.html"</li>
    <li> Click Load site and Load Weekly Report to view to analysis</li>
</ol>

*TECH STACK*:

*Chrome Extension*:
<ul> <li>JavaScript (Chrome Extension APIs – Manifest V3)</li> <li>HTML & CSS (Extension popup)</li> </ul>

*Frontend Dashboard*:
<ul> <li>HTML5</li> <li>CSS3 (table-based analytics UI)</li> <li>Vanilla JavaScript (API integration)</li> </ul>

*Backend*:
<ul> <li>Node.js</li> <li>Express.js</li> <li>MongoDB (Mongoose)</li> </ul>

*Other Tools*:
<ul> <li>NPM (Node Package Manager)</li> <li>Git & GitHub for version control</li> <li>.gitignore used to exclude node_modules</li> </ul>

*ScreenShots*:

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/cb3f271d-fe9c-4e5b-b938-dfe90e94ad40" />
