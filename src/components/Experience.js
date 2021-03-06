import React from 'react';
import { Link } from 'react-router-dom';

const Experience = () => (
    <div id="experience-table-with-header">
      <div id="table-title-experience">
      <h5>Experience</h5>
      </div>
      <table id="experience-table">
        <thead>
          <tr>
            <th class="mobile-hide">Timeframe</th>
            <th>Organisation</th>
            <th>Job title</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="mobile-hide">Aug 2019 - Mar 2020</td><td>Ticket Tailor</td><td>Full Stack Developer</td>
              <td id="experience-summary">
               <ul>
               <li>PHP / JavaScript full stack role at a SaaS start-up ticketing platform supporting £200m in ticket sales and selling > 5m tickets a year</li>
               <li>Built new features as part of a team, pairing and individually - including multi-user login, an API and PDF, CSV and print doorlist feature</li>
               <li>Released software through a continuous integration pipeline - code review, writing and running unit tests, deployments, acceptance tests</li>
              <li>Migrated dozens of pages from legacy framework to a micro framework</li>
              <li>Researched and wrote documentation for V1 of a public API and for Hugo new marketing website, and built out pages with new branding</li>
              <li>Fixing bugs and acting on rotation, providing developer support for customer escalations</li>
               </ul>
             </td>
            </tr>
            <tr><td class="mobile-hide">Mar 2019 - Present</td><td>Software Engineering</td><td>Full Stack Web Developer</td>
              <td id="experience-summary">
               <ul>
                 <li>Completed challenge to make 30 vanilla JavaScript projects over 30 days <a href="https://github.com/RuthENewman/30vanillaJSprojects">GitHub</a></li>
                 <li>Projects with: React, Laravel, Ruby on Rails, including using Jest, PHPUnit and Rspec unit testing; Node.JS</li>
               </ul>
             </td>
            </tr>
            <tr><td class="mobile-hide">Dec 2018 - Mar 2019</td><td>Flatiron School</td><td>Full Stack Web Developer in training</td>
              <td id="experience-summary">
               <ul>
                 <li>Projects can be found <Link to="/projects">here</Link> </li>
               </ul>
             </td>
            </tr>
             <tr><td class="mobile-hide">Apr 2018 - Oct 2018</td><td>Internews Europe</td><td>Development Officer</td>
               <td id="experience-summary">
                <ul>
                  <li>Organisation-wide lead for UK government and humanitarian opportunities </li>
                  <li>Research and strategy development</li>
                </ul>
              </td>
             </tr>
             <tr><td class="mobile-hide">Nov 2015 - Jan 2018</td><td>British Red Cross</td>
               <td>Programme Officer (Nepal)</td>
               <td id="experience-summary">
                 <ul>
                  <li>UK Lead/Project Manager for all Nepal programmes with frequent travel to Nepal</li>
                  <li>Project, financial and risk management of earthquake recovery and preparedness programmes with total funding > £16m</li>
                  <li>Managed research project with data from more than 5,000 surveys and interviews on emergency preparedness in Nepal. Analysed data and wrote final reports for the UK and Nepalese governments to utilise in policy and funding decisions</li>
                  <li>Public speaking to audiences of 20-100 about humanitarian aid</li>
                </ul>
            </td>
           </tr>
             <tr><td class="mobile-hide">Jun 2015 - Oct 2015</td><td>British Red Cross</td>
               <td>Surge Response Officer (Nepal)</td>
               <td id="experience-summary">
                <ul>
                  <li>London and Kathmandu-based</li>
                  <li>Briefed all staff departing for Nepal and approved all communications and fundraising </li>
                  <li>Planned and coordinated the review of the earthquake response of all 13 DEC agencies </li>
                  <li>Successfully funded programmes that I wrote and designed (ca. £8m)</li>
                </ul>
               </td>
             </tr>
             <tr>
               <td class="mobile-hide">Mar 2015 - May 2015</td>
               <td>British Red Cross</td>
               <td>Interim Country Support Officer (Nepal)</td>
               <td id="experience-summary">
                  <ul>
                    <li>Kathmandu, Nepal</li>
                    <li>Communications and coordination in the initial earthquake response</li>
                    <li>Proposal writing and budgeting, including for the emergency response (the latter > £4m)</li>
                    <li>Recruited, trained up and managed new staff</li>
                  </ul>
                </td>
             </tr>
             <tr>
               <td class="mobile-hide">Dec 2014 - Feb 2015</td>
               <td>British Red Cross</td>
               <td>Acting Programme Support Manager (Bangladesh)</td>
               <td id="experience-summary">
                <ul>
                    <li>Designed two new projects and scaled up an existing project (total budget > £3m)</li>
                    <li>Trained up staff in project management, reporting, research</li>
                </ul>
                </td>
             </tr>
             <tr>
               <td class="mobile-hide">Nov 2013 - Dec 2014</td>
               <td>British Red Cross</td>
               <td>Programme Support Officer</td>
               <td id="experience-summary">
                <ul>
                    <li>London-based with travel to South Asia</li>
                    <li> Management of projects across Nepal, Bangladesh, Afghanistan, Pakistan and Myanmar</li>
                    <li>Coordination of events in the UK, Bangladesh and Nepal (with 20 - 50 participants)</li>
                </ul>
                </td>
             </tr>
             <tr>
               <td class="mobile-hide">Nov 2012 - Nov 2013</td>
               <td>British Red Cross</td>
               <td>Partnership Development Team Coordinator</td>
               <td id="experience-summary">
                <ul>
                    <li>London-based with travel</li>
                    <li>Desk research and analysis</li>
                    <li>Planning and coordination for events in the UK and Malaysia (15-50 participants)</li>
                </ul>
                </td>
             </tr>
             <tr>
               <td class="mobile-hide">Sept 2012 - Nov 2012</td>
               <td>FACE</td>
               <td>Community Manager</td>
               <td id="experience-summary">
                <ul>
                    <li>Online community management for market research across the Americas, Asia, Europe, Africa and the Middle East</li>
                </ul>
                </td>
             </tr>
             <tr>
               <td class="mobile-hide">Oct 2011 - Aug 2012</td>
               <td>WJR</td>
               <td>International Programmes Assistant</td>
               <td id="experience-summary">
                <ul>
                    <li>London-based with travel to East Africa (Rwanda) and the Former Soviet Union (Moldova)</li>
                    <li>Field mission in Rwanda: Trained colleagues in research, report writing and communications</li>
                    <li>Field mission in Moldova: stakeholder management, developed communication materials </li>
                    <li>Led grant administration for annual grant allocations and year-round financial transfers</li>
                </ul>
                </td>
             </tr>
         </tbody>
      </table>
    </div>
  );


export default Experience;
