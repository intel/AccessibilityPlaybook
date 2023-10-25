---
layout: templates/basic-page.njk
title: Accessibility Tools - Open Source Accessibility Playbook
---

<p>Intro text</p>

<h2>Working with GitHub repositories</h2>

<dl>
	<dt><a href="https://github.com/github/markdownlint-github">Markdown Linter</a></dt>
	<dd>The Markdown Linter provides their recommended <a href="https://github.com/DavidAnson/markdownlint">markdownlint</a> configurations, and additional rules for use on GitHub open source and internal projects</dd>
	<dt><a href="https://github.com/marketplace/actions/accessibility-alt-text-bot">Accessibility alt-text bot</dt>
	<dd>This GitHub action reminds users to add alternative text to their images.</dd>
</dl>

<h2>Code testing</h2>

<div aria-labelledby="code-testing-caption" class="scrollable" role="group" tabindex="0">
	<table class="table">
		<caption id="code-testing-caption">Code testing</caption>
		<tr>
			<th>Application name</th>
			<th>Application type</th>
			<th>Platform</th>
			<th>Notes</th>
		</tr>
		<tr>
			<td>
				<a href="https://developer.apple.com/library/mac/documentation/Accessibility/Conceptual/AccessibilityMacOSX/OSXAXTestingApps.html">Accessibility Inspector</a>
			</td>
			<td>Desktop</td>
			<td>macOS</td>
			<td>Useful tool to look at the underlying accessibility of pretty much anything running on macOS, whether it's a web or desktop application. It does require that all of Xcode be downloaded, which is sizable.</td>
		</tr>
		<tr>
			<td>
				<a href="https://www.deque.com/axe/browser-extensions/">aXe</a>
			</td>
			<td>Extension for Chromium and Firefox</td>
			<td>Windows and macOS</td>
			<td>The aXe extension provides accessibility reporting within the browser’s Dev Tools.</td>
		</tr>
		<tr>
			<td><a href="https://chrispederick.com/work/web-developer/">Web Developer</a></td>
			<td>Extension for Chromium and Firefox</td>
			<td>Windows and macOS</td>
			<td>This long-standing browser extension isn’t specifically for testing web accessibility but it does contain useful tools. For example, it can replace images with their <code class="language-markup">alt</code> text, outline form fields without labels, and display a document's hierarchy of heading elements.</td>
		</tr>
	</table>
</div>

<h2>Screen readers</h2>

<div aria-labelledby="screen-readers-caption" class="scrollable" role="group" tabindex="0">
	<table className="table a11y-tools">
		<caption id="screen-readers-caption">Screen readers</caption>
		<tr>
			<th>Application name</th>
			<th>Application type</th>
			<th>Platform</th>
			<th>Notes</th>
		</tr>
		<tr>
			<td>
				<a href="http://www.nvaccess.org/">
					<abbr title="NonVisual Desktop Access">NVDA</abbr>
				</a>
			</td>
			<td>Desktop</td>
			<td>Windows</td>
			<td>
				NVDA (NonVisual Desktop Access) is an open-source, highly capable screen reader. It's an excellent choice for testing on Windows systems. If you download NVDA, please consider donating some money to support its continued development. 
			</td>
		</tr>
		<tr>
			<td>
				<a href="https://support.microsoft.com/en-us/help/17173/windows-10-hear-text-read-aloud">
					Narrator
				</a>
			</td>
			<td>Desktop</td>
			<td>Windows</td>
			<td>Narrator is the screen reader that ships as part of Windows. It isn't as fully featured as NVDA.
			</td>
		</tr>
		<tr>
			<td>
				<a href="https://support.google.com/accessibility/android/answer/6007100?hl=en">
					TalkBack
				</a>
			</td>
			<td>Touchscreen devices</td>
			<td>Android</td>
			<td>TalkBack ships as part Android.</td>
		</tr>
		<tr>
			<td>
				<a href="https://www.apple.com/accessibility/osx/voiceover/">
					VoiceOver
				</a>
			</td>
			<td>Desktop</td>
			<td>macOS, iOS, iPadOS, watchOS</td>
			<td>
				VoiceOver is Apple's screen reader and is shipped as part of multiple operating systems
			</td>
		</tr>
	</table>
</div>
