// GUI Animator FREE
// Version: 1.0.1
// Compatilble: Unity 4.7.1 or higher and Unity 5.3.4 or higher, more info in Readme.txt file.
//
// Author:								Gold Experience Team (http://www.ge-team.com)
//
// Unity Asset Store:					https://www.assetstore.unity3d.com/en/#!/content/58843
// GE Store:							http://www.ge-team.com/store/en/products/gui-animator-free/
// Full version on Unity Asset Store:	https://www.assetstore.unity3d.com/en/#!/content/28709
// Full version on GE Store:			http://www.ge-team.com/store/en/products/gui-animator-for-unity-ui/
//
// Please direct any bugs/comments/suggestions to geteamdev@gmail.com

// ######################################################################
// GA_FREE_Demo05 class
// - Animates all GUIAnimFREE elements in the scene.
// - Responds to user mouse click or tap on buttons.
//
// Note this class is attached with "-SceneController-" object in "GA FREE JS - Demo05 (960x600px)" scene.
// ######################################################################

class GA_FREE_JS_Demo05 extends MonoBehaviour {

	// ########################################
	// Variables
	// ########################################

    // Canvas
    var m_Canvas : Canvas;
	
   // GUIAnim objects of title text
    var m_Title1 : GUIAnimFREE;
    var m_Title2 : GUIAnimFREE;
	
   // GUIAnim objects of top and bottom bars
    var m_TopBar : GUIAnimFREE;
    var m_BottomBar : GUIAnimFREE;

   // GUIAnim objects of dialogs
    var m_Dialog1 : GUIAnimFREE;
    var m_Dialog2 : GUIAnimFREE;
    var m_Dialog3 : GUIAnimFREE;
    var m_Dialog4 : GUIAnimFREE;
	
	// ########################################
	// MonoBehaviour Functions
	// http://docs.unity3d.com/ScriptReference/MonoBehaviour.html
	// ########################################
	
	// Awake is called when the script instance is being loaded.
	// http://docs.unity3d.com/ScriptReference/MonoBehaviour.Awake.html
   function Awake () {
       if(enabled)
       {
           	// Set GUIAnimSystemFREE.Instance.m_AutoAnimation to false in Awake() will let you control all GUI Animator elements in the scene via scripts.
		GUIAnimSystemFREE.Instance.m_AutoAnimation = false;
       }
   }
	
	// Start is called on the frame when a script is enabled just before any of the Update methods is called the first time.
	// http://docs.unity3d.com/ScriptReference/MonoBehaviour.Start.html
        function Start () {
            // MoveIn m_TopBar and m_BottomBar
            m_TopBar.MoveIn(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
            m_BottomBar.MoveIn(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
		
            // MoveIn m_Title1 and m_Title2
            StartCoroutine(MoveInTitleGameObjects());
		
            // Disable all scene switch buttons	
		// http://docs.unity3d.com/Manual/script-GraphicRaycaster.html
            GUIAnimSystemFREE.Instance.SetGraphicRaycasterEnable(m_Canvas, false);
        }
	
	// Update is called every frame, if the MonoBehaviour is enabled.
	// http://docs.unity3d.com/ScriptReference/MonoBehaviour.Update.html
        function Update () {
		
        }
	
	// ########################################
	// MoveIn/MoveOut functions
	// ########################################
	
        // MoveIn m_Title1 and m_Title2
        function MoveInTitleGameObjects () : IEnumerator {
            yield  WaitForSeconds(1.0f);
		
            // MoveIn m_Title1 and m_Title2
            m_Title1.MoveIn(GUIAnimSystemFREE.eGUIMove.Self);
            m_Title2.MoveIn(GUIAnimSystemFREE.eGUIMove.Self);
		
            // MoveIn m_Dialog
            StartCoroutine(MoveInPrimaryButtons());
        }
	
            // MoveIn m_Dialog
            function MoveInPrimaryButtons () : IEnumerator {
                yield  WaitForSeconds(1.0f);
		
                // MoveIn dialogs
                m_Dialog1.MoveIn(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);	
                m_Dialog2.MoveIn(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);	
                m_Dialog3.MoveIn(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);	
                m_Dialog4.MoveIn(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
		
                // Enable all scene switch buttons
                StartCoroutine(EnableAllDemoButtons());
            }
	
                function HideAllGUIs () {
                    // MoveOut dialogs
                    m_Dialog1.MoveOut(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
                    m_Dialog2.MoveOut(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
                    m_Dialog3.MoveOut(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
                    m_Dialog4.MoveOut(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
		
                    // MoveOut m_Title1 and m_Title2
                    StartCoroutine(HideTitleTextMeshes());
                }
	
                // MoveOut m_Title1 and m_Title2
                function HideTitleTextMeshes () : IEnumerator {
                    yield  WaitForSeconds(1.0f);
		
                    // MoveOut m_Title1 and m_Title2
                    m_Title1.MoveOut(GUIAnimSystemFREE.eGUIMove.Self);
                    m_Title2.MoveOut(GUIAnimSystemFREE.eGUIMove.Self);
		
                    // MoveOut m_TopBar and m_BottomBar
                    m_TopBar.MoveOut(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
                    m_BottomBar.MoveOut(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
                }
	
                    // ######################################################################
                    // Enable/Disable button functions
                    // ######################################################################
	
                    // Enable/Disable all scene switch Coroutine	
                    function EnableAllDemoButtons () : IEnumerator {
                        yield  WaitForSeconds(1.0f);
		
                        // Enable all scene switch buttons
		// http://docs.unity3d.com/Manual/script-GraphicRaycaster.html
                        GUIAnimSystemFREE.Instance.SetGraphicRaycasterEnable(m_Canvas, true);
                    }
	
                        // Disable all buttons for a few seconds
                        function DisableButtonForSeconds ( GO : GameObject ,   DisableTime : float  ) : IEnumerator {
                            // Disable all buttons
                            GUIAnimSystemFREE.Instance.EnableButton(GO.transform, false);
		
                            yield  WaitForSeconds(DisableTime);
		
                            // Enable all buttons
                            GUIAnimSystemFREE.Instance.EnableButton(GO.transform, true);
                        }
	
	// ########################################
	// UI Responder functions
	// ########################################
	
                            function OnButton_Dialog1 () {			
                                // MoveOut m_Dialog1
                                m_Dialog1.MoveOut(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
		
                                // Disable m_Dialog1 for a few seconds
                                StartCoroutine(DisableButtonForSeconds(m_Dialog1.gameObject, 2.5f));
		
                                // MoveIn m_Dialog1
                                StartCoroutine(Dialog1_MoveIn());
                            }
	
                            function OnButton_Dialog2 () {
                                // MoveOut m_Dialog2
                                m_Dialog2.MoveOut(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
		
                                // Disable m_Dialog2 for a few seconds
                                StartCoroutine(DisableButtonForSeconds(m_Dialog2.gameObject, 2.5f));
		
                                // MoveIn m_Dialog2
                                StartCoroutine(Dialog2_MoveIn());
                            }
	
                            function OnButton_Dialog3 () {
                                // MoveOut m_Dialog3
                                m_Dialog3.MoveOut(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
		
                                // Disable m_Dialog3 for a few seconds
                                StartCoroutine(DisableButtonForSeconds(m_Dialog3.gameObject, 2.5f));
		
                                // MoveIn m_Dialog3
                                StartCoroutine(Dialog3_MoveIn());
                            }
	
                            function OnButton_Dialog4 () {
                                // MoveOut m_Dialog4
                                m_Dialog4.MoveOut(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
		
                                // Disable m_Dialog4 for a few seconds
                                StartCoroutine(DisableButtonForSeconds(m_Dialog4.gameObject, 2.5f));
		
                                // MoveIn m_Dialog4
                                StartCoroutine(Dialog4_MoveIn());
                            }
	
                            function OnButton_MoveOutAllDialogs () {		
                                // Disable m_Dialog1, m_Dialog2, m_Dialog3, m_Dialog4 for a few seconds
                                StartCoroutine(DisableButtonForSeconds(m_Dialog1.gameObject, 2.5f));
                                StartCoroutine(DisableButtonForSeconds(m_Dialog2.gameObject, 2.5f));
                                StartCoroutine(DisableButtonForSeconds(m_Dialog3.gameObject, 2.5f));
                                StartCoroutine(DisableButtonForSeconds(m_Dialog4.gameObject, 2.5f));

                                // MoveOut dialogs
                                m_Dialog1.MoveOut(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
                                m_Dialog2.MoveOut(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
                                m_Dialog3.MoveOut(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
                                m_Dialog4.MoveOut(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
		
                                // Move dialogs back to screen with Coroutines
                                StartCoroutine(Dialog1_MoveIn());
                                StartCoroutine(Dialog2_MoveIn());
                                StartCoroutine(Dialog3_MoveIn());
                                StartCoroutine(Dialog4_MoveIn());
                            }
	
	// ########################################
	// Move dialog functions
	// ########################################
	
                            // MoveIn m_Dialog1
                            function Dialog1_MoveIn () : IEnumerator {
                                yield  WaitForSeconds(1.5f);
		
                                // Reset children of m_Dialog1
                                m_Dialog1.ResetAllChildren();
		
                                // Moves m_Dialog1 back to screen to screen
                                m_Dialog1.MoveIn(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
                            }
	
                                // MoveIn m_Dialog2
                                function Dialog2_MoveIn () : IEnumerator {
                                    yield  WaitForSeconds(1.5f);
		
                                    // Reset children of m_Dialog2
                                    m_Dialog2.ResetAllChildren();
		
                                    // Moves m_Dialog2 back to screen to screen
                                    m_Dialog2.MoveIn(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
                                }
	
                                    // MoveIn m_Dialog3
                                    function Dialog3_MoveIn () : IEnumerator {
                                        yield  WaitForSeconds(1.5f);
		
                                        // Reset children of m_Dialog3
                                        m_Dialog3.ResetAllChildren();
		
                                        // Moves m_Dialog3 back to screen to screen
                                        m_Dialog3.MoveIn(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
                                    }
	
                                        // MoveIn m_Dialog4
                                        function Dialog4_MoveIn () : IEnumerator {
                                            yield  WaitForSeconds(1.5f);
		
                                            // Reset children of m_Dialog4
                                            m_Dialog4.ResetAllChildren();
		
                                            // Moves m_Dialog4 back to screen to screen
                                            m_Dialog4.MoveIn(GUIAnimSystemFREE.eGUIMove.SelfAndChildren);
                                        }
                                        }
