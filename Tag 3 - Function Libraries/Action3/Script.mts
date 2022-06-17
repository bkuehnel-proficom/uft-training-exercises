Browser("MyBrowser").Page("Read contents of CSV file").WebElement("Codebeispiel").Click

ExitTest

WriteToReport "starting the browser..."

SystemUtil.Run "firefox.exe"
Browser("creationtime:=0").Navigate "www.advantageonlineshopping.com"

WriteToReport Browser("MyBrowser").GetROProperty("title")
Browser("creationtime:=0").Sync
WriteToReport Browser("creationtime:=0").GetROProperty("title")

WriteToReport "opening user menu / personal account"
Browser("MyBrowser").Page("Advantage Shopping").Link("UserMenu").Highlight
Browser("MyBrowser").Page("Advantage Shopping").Link("UserMenu").Click

a = 1
If a >= 2 Then
	Browser("MyBrowser").Close
ElseIf a < 0 Then
	MsgBox "Error!"
	ExitTestIteration
Else
	MsgBox "bleibt offen..."
End If

If Browser("MyBrowser").DialogExists() Then
	'...
End If

For myCounter = 1 To 10 Step 1
	Print myCounter
Next

bStopWaiting = False
i = 0
Do
	i = i + 1
	If i >=10 Or Browser("MyBrowser").Page("Advantage Online Shopping").Exist Then
		bStopWaiting = True
	End If
	Wait 1
Loop Until bStopWaiting = True

ExitTestiteration

