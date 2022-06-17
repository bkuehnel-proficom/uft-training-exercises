
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("Search AdvantageOnlineShopping").Check CheckPoint("Initialzustand leeres Suchfeld") @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("Search AdvantageOnlineShopping").Output CheckPoint("Search AdvantageOnlineShopping.com") @@ script infofile_;_ZIP::ssf28.xml_;_
 @@ hightlight id_;_263308_;_script infofile_;_ZIP::ssf55.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Check CheckPoint("Advantage Shopping_2") @@ script infofile_;_ZIP::ssf56.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Check CheckPoint("Advantage Shopping_3") @@ script infofile_;_ZIP::ssf57.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("About AOS Versions Management_2").Check CheckPoint("About AOS Versions Management Console 2 ITEMS (0) Your shopping cart is empty HP H2310 IN-EAR HEADSET QTY: 1 Color: BLACK $13.99 HP H2310 IN-EAR HEADSET QTY: 1 Color: GRAY $13.99 TOTAL (2 Items) $27.98 CHECKOUT ($27.98) My account My orders Sign out CATEGORIES TOP RESULTS FOR: '' View All CONTACT US POPULAR ITEMS SPECIAL OFFER OUR PRODUCTS dvantage DEMO") @@ script infofile_;_ZIP::ssf58.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Check CheckPoint("Advantage Shopping_4") @@ script infofile_;_ZIP::ssf59.xml_;_

FileContent("demo.pdf").Check CheckPoint("demo.pdf")

Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Suchen-Button").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("Search AdvantageOnlineShopping").Set "headphones" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("View All").Click @@ script infofile_;_ZIP::ssf18.xml_;_
Wait 5
If Browser("Advantage Shopping").Page("Advantage Shopping").Link("View All").Exist(5) Then
	Reporter.ReportEvent micFail, "Klick auf ViewAll", "Pop-Up wurde nicht geschlossen!"
End If
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("searchResultLabel").Check CheckPoint("searchResultLabel") @@ script infofile_;_ZIP::ssf19.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("About AOS Versions Management").Click @@ script infofile_;_ZIP::ssf20.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Image("closeDark").Click @@ script infofile_;_ZIP::ssf21.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Check CheckPoint("Advantage Shopping") @@ script infofile_;_ZIP::ssf22.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Image("Image of Logitech USB Headset H390").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Preis in Artikeldetails").Check CheckPoint("$39.99 SOLD OUT") @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart").Click @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Anzahl Elemente im Warenkorb").Check CheckPoint("(1)") @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Gesamtpreis des Warenkorbs").Check CheckPoint("$39.99") @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("REMOVE").Click @@ script infofile_;_ZIP::ssf15.xml_;_


