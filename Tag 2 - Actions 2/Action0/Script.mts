RunAction "GuiTest3 - kompletter Test", oneIteration
RunAction "Action2 [GUITest2]", oneIteration
RunAction "Copy of optionaler Testschritt", oneIteration
RunAction "exklusive Action für Test3 x", oneIteration, Parameter("Copy of optionaler Testschritt", "Param1")
RunAction "Logout [GUITest2]", oneIteration, Parameter("Copy of optionaler Testschritt", "Param1")
RunAction "nächster Testschritt", oneIteration, "1"
RunAction "nächster Testschritt", oneIteration, "2"
