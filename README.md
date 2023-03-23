# The Problem
I was recently asked by a friend if I knew of a way to receive files from multiple people with a few constraints:

1. The uploader(s) shouldn't be able to see the contents of the folder
2. The uploader(s) shouldn't have to login or create an account with any service
3. The uploader(s) should be able to upload multiple files at once
4. The uploader(s) should be able to upload to the same folder multiple times by using their name and email as identifiers
5. The uploads should be categorized into folders by name and email
6. This should be done for free

"File requests" is the common term for this feature, so I started searching the internet for a service that offers free file requests that also satisfies these constraints. I couldn't find any services that were able to do this, but I did find mentions of Google Apps Script being able to provide a way to interact with a Google Drive account. Google Drive offers 15gb of storage absolutely free, and their storage tiers are reasonably priced. I found some code online that was able to achieve this somewhat, but it was littered with links to non-free services, and was intentionally limited to single file uploads of 2MB or less, rendering it pretty much useless. 

Google Apps Script is just JavaScript, so I read the docs, found [this helpful gist](https://gist.github.com/tanaikech/88fcae255abb4aac5bec81ad5ca213ef), and was able to come up with a multi-file solution that works good enough for my friend's use-case. I tried to keep the UI as simple ass possible so you can customize it to your liking. 

# Example

https://user-images.githubusercontent.com/53279060/227257682-b6f5dd62-ce68-4fe2-9fff-13a72c614efc.mp4

# Limitations

+ The upload limits are not very clear. I've uploaded up to 200MB between 100 pictures successfully from my phone in two back-to-back submission but YMMV. In my experience it capped out at 200MB+ in one submission so I set the code to limit submissions that are above 100MB just to be safe. Either way, 100MB transfer is pretty good for absolutely free. You can change the limit and test it yourself but I plan on finding the true limits soon.
+ A small amount of browsers / platforms seem to have problems with the deployed web-app, like Brave browser on my phone. More testing is needed to see what's actually going on in these cases, and this may be avoidable by [embedding the page within an iframe](https://developers.google.com/apps-script/reference/html/x-frame-options-mode) but I haven't tried it yet.
+ I haven't yet tested it with multiple submissions from various devices within a short time frame, only multiple submissions back-to-back between my phone and laptop. Again, I will work on finding the true limit soon.
