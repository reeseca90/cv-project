# CV application

Input your information > Add new skills, duties, or education with the respective 'Add' buttons > click 'Save Section' when complete > click 'Show Final View' to show your information in a formatted output.

Update 10/14:

I said I was unlikely to rework the Work History section, but then the next project was to refactor this app to use functional components with hooks instead of class components. Since I was already looking through it all, I changed the work history section to be functionally identical to the education section. The first version allows a user to enter multiple duties in a list format, but this version only takes one input for duties (but it's a textarea, so it can handle a paragraph input). 

Also, the App.js didn't get refactored to be a functional component. The child components logically make more sense being functional and passing their state variables back up to App.js, because the state in App.js will add whatever the child sends up to it. Making it so that the state in App.js was preserved for each update from a child component would take a lot more time than it is worth.

I did nothing new to the design. Surprised? You shouldn't be.
