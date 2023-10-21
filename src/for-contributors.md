---
layout: templates/basic-page.njk
title: For Contributors
---

<dfn>Contributors</dfn> are people who contribute to OSS (Open Source Software) projects.

## Empowering contributors with disabilities to contribute to your project

There are several ways you can show contributors with disabilities, both current and potential, that they are welcome.

## Include a welcoming statement in your contributing file

Creating a [contributing file](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors) for your repository is a great way to let people know how they can contribute to your project. There are several common places to put a <code>contributing</code> file (the project root, in a folder like <code>docs</code> or <code>.github</code>). We prefer putting it in the project root as it's easier for people to find.

In your <code>contributing</code> file, you should clearly state that contributors with disabilities are welcome. You should also invite them to contact the project team if they need an accommodation to be able to contribute. For example: XXXXXXXXXX

Consider adapting the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct for open source communities. This document clearly lays out expectations for anyone contributing to your project.

## Ensure the project documentation is accessible

It's essential that your project's documentation is accessible. This includes:

* Using semantically-correct headings to mark up chunks of content.
* Ensuring each image has a suitable <code>alt</code> attribute. You can use [Github's alt text bot](https://github.com/marketplace/actions/accessibility-alt-text-bot) to help with this.
* Not relying on complex images to describe the application; that information should also be described in well-marked-up <abbr title="HyperText Markup Language">HTML</abbr> in the main body of your content.
* Not using screen grabs of tables.
* If you use videos, ensure they have captions. If your videos are of the kind that has some music playing in the background as someone silently demonstrates how to do something, that information needs to be available, in well-marked-up HTML, on the same page as the video.
* If you provide users with a template to complete when reporting an issue, ensure that is well marked up.

Consider adding an <code>accessibility.md</code> file to the root of your repo. This is where you can list specifics about the accessibility of your project.

## Add an accessibility.md file

An <code>accessibility.md</code> file should include the following information:

1. If you are aiming towards an accessibility standard, for example: WCAG 2.2 Levels A and AA, what that standard is.
2. How to report accessibility bugs. For example:
    * do you want Github issues to mention accessibility in the issue title?
    * alternate ways to contact a person on the project
3. How you prioritize accessibility bugs
4. Ways for people to see what accessibility issues are open and closed. For example: do you have a label for accessibility issues?
5. How you test for accessibility. For example:
    * which screen readers do you test with?
    * do you test with Windows high-contrast mode?
    * do you test for keyboard accessibility?