---
layout: templates/basic-page.njk
title: Accessibility Tools
---

<p>Intro text</p>

<h2>Code testing</h2>

<table class="table">
	<caption>Code testing</caption>
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
		<td>Useful tool to look at the underlying accessibility of pretty much anything running on macOS, whether it's a web or desktop application. It does require that all of Xcode be downloaded, which is a large application.</td>
	</tr>
	<tr>
		<td>
			<a href="https://www.deque.com/axe/browser-extensions/">aXe</a>
		</td>
		<td>Extension for Chrome, Firefox, Edge</td>
		<td>Windows and macOS</td>
		<td>The aXe extension provides accessibility reporting within the browser’s Dev Tools.</td>
	</tr>
	<tr>
		<td><a href="https://chrispederick.com/work/web-developer/">Web Developer</a></td>
		<td>Extension for Chrome, Firefox, and Opera</td>
		<td>Windows and macOS</td>
		<td>This long-standing browser extension isn’t specifically for testing web accessibility but it does contain useful tools. For example, it can replace images with their <code class="language-markup">alt</code> text, outline form fields without labels, and display a document's hierarchy of heading elements.</td>
	</tr>
</table>

<h2>Screen readers</h2>

<table className="table a11y-tools">
	<caption>Screen readers</caption>
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
