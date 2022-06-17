
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("Search AdvantageOnlineShopping").Check CheckPoint("Initialzustand leeres Suchfeld") @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("Search AdvantageOnlineShopping").Output CheckPoint("Search AdvantageOnlineShopping.com") @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Sync
Browser("Advantage Shopping").OpenNewTab @@ hightlight id_;_263308_;_script infofile_;_ZIP::ssf29.xml_;_
Browser("Browser").Navigate "https://www.google.com/search?client=firefox-b-d&q=handbuch+siemens+kaffeemaschine" @@ hightlight id_;_263308_;_script infofile_;_ZIP::ssf30.xml_;_
Browser("Browser").Page("handbuch siemens kaffeemaschin").Link("Siemens Kaffeemaschine").Click @@ script infofile_;_ZIP::ssf31.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine").WebButton("ZUSTIMMEN").Click @@ script infofile_;_ZIP::ssf32.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine").Link("Siemens EQ.9 Bedienungsanleitu").Click @@ script infofile_;_ZIP::ssf33.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine_2").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf34.xml_;_
Browser("Browser").Page("Find Manuals to Read &").WebButton("Weiter").Click @@ script infofile_;_ZIP::ssf35.xml_;_
Browser("Browser").Page("Find Manuals to Read &").WebElement("xKlicken sie auf Installation").Click @@ script infofile_;_ZIP::ssf36.xml_;_
Browser("Browser").Page("Find Manuals to Read &").WebElement("closeHelp").Click @@ script infofile_;_ZIP::ssf37.xml_;_
Browser("Browser").Page("Find Manuals to Read &").WebElement("Handbücher zum Lesen und").Click @@ script infofile_;_ZIP::ssf38.xml_;_
Browser("Browser").Page("Find Manuals to Read &").Sync
Browser("Browser").Back @@ hightlight id_;_263308_;_script infofile_;_ZIP::ssf39.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine_2").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf40.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine_2").WebElement("WebElement_2").Click @@ script infofile_;_ZIP::ssf41.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine_2").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf42.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine_2").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf43.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine_2").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf44.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine_2").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf45.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine_2").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf46.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine_2").Frame("ad_iframe").WebButton("Anzeige schließen").Click @@ script infofile_;_ZIP::ssf47.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine_2").Frame("aswift_2").WebElement("ad_position_box").Click @@ script infofile_;_ZIP::ssf48.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine_2").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf49.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine_2").Frame("ad_iframe").WebButton("Anzeige schließen").Click @@ script infofile_;_ZIP::ssf50.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine_2").WebRange("WebRange").Set "32" @@ script infofile_;_ZIP::ssf51.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine_2").WebElement("bedienungsanleitung_hz_manual_").Click @@ script infofile_;_ZIP::ssf52.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine_2").Output CheckPoint("Bedienungsanleitung Siemens EQ.9 (Deutsch - 124 Seiten)") @@ script infofile_;_ZIP::ssf53.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine_2").Sync
Browser("Browser").Back @@ hightlight id_;_263308_;_script infofile_;_ZIP::ssf54.xml_;_
Browser("Browser").Page("Siemens Kaffeemaschine_2").Sync
Browser("Browser").Close @@ hightlight id_;_263308_;_script infofile_;_ZIP::ssf55.xml_;_
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


