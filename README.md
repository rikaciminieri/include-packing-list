## Before the code...

Most of the commits were made upon finishing up the project. I chose this route due to this article I read a while back -
(https://render.com/blog/git-organized-a-better-git-flow)
which challenges the common git flow of "commit-as-you-go".

This allows for a tidier git history that can be easily reviewable by others with logically grouped commits.
By using this approach, I was able to rewrite and refactor different parts of the code, while keeping the commit history fairly linear. 

#### Running Locally
First, install the dependencies:

```
npm install
```

Then, run the development server:

```
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

#### Extras

When thinking of a travel checklist, I couldn't imagine not being able to edit or  delete my items. What if I made a spelling mistake? What if I'd put 50 pairs of socks instead of 5?! Some people might also want to delete their items once they're packed to reduce the clutter on their list. Because of this, I chose to add these functionalities for fun! 

I also added simple validation without the use of a library because I didn't think it was necessary for the scope of this project. Empty items shouldn't be added to the packing list, and error messages help the user know why their item can't be submitted.  

