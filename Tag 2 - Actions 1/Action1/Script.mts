Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("menuSearch").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("Search AdvantageOnlineShopping").Set DataTable("Search_AdvantageOnlineShopping_Text", dtGlobalSheet) @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("View All").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("$179.99").Check CheckPoint("$179.99") @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("Search AdvantageOnlineShopping").Set DataTable("Search_AdvantageOnlineShopping_Text1", dtGlobalSheet) @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set DataTable("username_Text", dtGlobalSheet) @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").SetSecure "62a9a5cfd245c6ad1ee55dc4296496a66fc98dc0f8de96e2d79b" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("signInResultMessage").Check CheckPoint("signInResultMessage") @@ script infofile_;_ZIP::ssf10.xml_;_
