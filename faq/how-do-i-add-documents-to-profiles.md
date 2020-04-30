# How do I add documents to profiles?

Kumu doesn't have any built-in support for uploading documents (e.g. PDFs or .docx files) to profiles. However, there are a few good ways to work around this.

The simplest solution is to upload your document to any online platform, (Google Drive, One Drive, Dropbox, Scribd, etc.), get a link to the document, and add that link to a Kumu profile. Readers will be able to click that link to open the document in a new tab.

If you'd rather allow readers to read the document directly inside Kumu, there are two features that can help: **widgets** and **lightbox**.


## Embed a document using widgets

If you upload your document to [Scribd](https://www.scribd.com/), you can use our Scribd widget to embed the document directly into any profile.

![scribd widget](/images/widgets-scribd.png)

For more info on how to use the Scribd widget, [visit the widgets docs](/guides/widgets.html#embed-documents).


## Embed a document using lightbox

Many document hosting platforms allow you to create a share/embed link that you can use to embed the document in other platforms. In Kumu, all you need to do is retrieve that share/embed link, then add `?lightbox` or `?lightbox=full` to the end of the URL.

```
https://www.scribd.com/embeds/416217686/content?lightbox=full
```

![scribd lightbox](/images/lightbox-scribd.png)

For more info on the ligthbox feature, [see the full guide](/guides/lightbox.html).




<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-add-documents-to-profiles.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>