# My PDF won't export. What can I do?

So you've filled out the PDF form, you've hit the "Download PDF" button, and you can see the green popup saying "Downloading PDF". But then... nothing happens! Here are some troubleshooting tips for when your PDF won't download:

### Your images are too large

If you're using images in your map and the image files are too large, then the PDF builder can't render them and will throw an error. Please go through your images and make sure to resize each image to max 600px wide. Then try again.

### Your images are not coming from a secure URL

If you're importing images through a hosted link, make sure that the URL starts with "https" instead of just "http". You can usually update this through your image hosting provider.

### You're using background items that can't be exported

Our PDF builder doesn't know how to handle different "layers" in your map. So when you're stacking elements on top of each other to use some sort of "grouping", this won't be reflected well in the PDF. In that case we recommend to [export to PNG](../guides/export.md).

Also note that geo maps cannot be exported to PDF nor PNG, as the background won't render.

### Have you tried a different browser?

It doesn't happen often, but sometimes our browsers or certain settings can interfere with the PDF builder. We recommend to try your export in a different browser before contacting us!

### Some other points to note

* [Underlays](../guides/underlays.md) won't export to PDF
* You can't export [geo maps](../guides/templates/geo.md) to PDF or PNG
* Unfortunately, Chinese and Hebrew characters do not render well in PDFs at the moment. We hope to be able to offer this in the future!

If you've gone through all of the above points and you still can't find the reason as to why your PDF isn't downloading, don't hesitate to reach out to us at support@kumu.io. We're happy to help!
