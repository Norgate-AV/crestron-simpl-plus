// var myText =   `

// #DEFINE_CONSTANT MAXIO 30
// #DEFINE_CONSTANT MAX_BUTTONS 20
// #DEFINE_CONSTANT MAX_LEVEL 30
// #DEFINE_CONSTANT MAX_CONFIG 20
// #DEFINE_CONSTANT NO_SOURCE 65535 // matches a const in the api, but constants are not exposed here in the tragic splus wasteland


// DIGITAL_INPUT
// _skip_,_skip_,
// title_btn, _skip_,
// _skip_,
// mode_none_btn, mode_pres_btn, mode_ac_btn, mode_vc_btn, mode_softvc_btn,
// _skip_, cancel_btn, power_btn, shutdown_btn,

// dest_then_src, _skip_, 
// pc_0, pc_1, pc_2, pc_3, pc_4, pc_5, pc_6, pc_7, 
// pc_8, pc_9, pc_clear, pc_bkspc, pc_enter, _skip_,

//  _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,_skip_,
// _skip_, _skip_, _skip_,_skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,

// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,
// _skip_, _skip_, _skip_,
// _skip_, _skip_, _skip_, _skip_,
  
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,
// button_btn[MAX_BUTTONS],
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,
// _skip_, _skip_, _skip_, _skip_,
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_,
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_,
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_,
// dest_settings_power_on_btn[MAXIO],
// _skip_,
// dest_settings_power_off_btn[MAXIO],
// _skip_,
// dest_settings_input_1_btn[MAXIO],
// _skip_,
// dest_settings_input_2_btn[MAXIO],
// _skip_,
// dest_settings_screen_up_btn[MAXIO], 
// _skip_,
// dest_settings_screen_down_btn[MAXIO], 
// _skip_,
// dest_settings_lift_up_btn[MAXIO],
// _skip_,
// dest_settings_lift_down_btn[MAXIO],  
// _skip_,
// SystemConfig_btn[MAX_CONFIG,MAX_CONFIG];


// ANALOG_INPUT
// _skip_, TP_ID, _skip_, audio_follows_select,
// _skip_, _skip_,
// input_select, output_select;

// STRING_INPUT
// _skip_, test[10], testing[10][15];

// DIGITAL_OUTPUT
// _skip_,_skip_,
// title_page, main_page,
// _skip_,
// mode_none_fb, mode_pres_fb, mode_ac_fb, mode_vc_fb, mode_softvc_fb,
// _skip_,
// mode_pres_vis, mode_ac_vis, mode_vc_vis, mode_softvc_vis,
// _skip_, mode_dest_fb,
// shutdown_enable,
// _skip_, _skip_, popup_message, popup_shutdown,
// popup_settings,	popup_routing, popup_general, popup_levels, popup_system_config, popup_warmcool, 
// popup_record, popup_lights, popup_shades, popup_passcode, popup_audio_follows, popup_function, _skip_, _skip_,
// roomVol_mute_fb,privMute_mute_fb, privMute_vis,
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,
// transport_none, transport_tuner, transport_bluray, transport_recorder, 
// transport_help, transport_camera, transport_cisco_cxx, transport_polycom,
// transport_cisco_sx_ce, transport_lifesize, transport_cisco_sx_tc, transport_apple_tv, 
// _skip_, _skip_, _skip_, transport_ac_tesira,
// _skip_, transport_generic, transport_custom, _skip_, _skip_, _skip_, _skip_, _skip_,
// _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,
// _skip_, source_vis[MAXIO],
// _skip_, dest_vis[MAXIO], _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 

// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 

// _skip_, source_settings_vis[MAXIO],

// _skip_, dest_settings_vis[MAXIO],
// _skip_, dest_settings_screen_vis[MAXIO],
// _skip_, dest_settings_lift_vis[MAXIO],
// _skip_, dest_settings_power_on_fb[MAXIO],
// _skip_, dest_settings_power_off_fb[MAXIO],
// _skip_, dest_settings_power_enable[MAXIO],
// _skip_, dest_settings_input_1_fb[MAXIO],
// _skip_, dest_settings_input_2_fb[MAXIO],
// _skip_, dest_audio_follows_vis[MAXIO,MAXIO];


// ANALOG_OUTPUT
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, _skip_,
// _skip_, _skip_, _skip_, _skip_, _skip_, _skip_, audio_follows_dest, 
// _skip_, warm_cool_progress,
// _skip_,
// _skip_, roomVol_fb,
// _skip_, input_select_fb, output_select_fb, System_Config_count,
// Source_count, Dest_count, Button_count, Level_count;

// STRING_OUTPUT
// logo_path, popup_message_string,
// _skip_, warm_cool_message_string,
// _skip_, source_name,
// _skip_, source_help,
// source_phone_number, 
// _skip_, pc_text, 
// _skip_,
// source_names[MAXIO], _skip_, dest_names[MAXIO], _skip_, dest_settings_names[MAXIO], _skip_, 
// source_icons[MAXIO], _skip_, dest_icons[MAXIO], _skip_,
// dest_audio_follows_names[MAXIO], _skip_, dest_audio_follows_icons[MAXIO], _skip_,
// button_names[MAX_BUTTONS], _skip_, button_icons[MAX_BUTTONS],
// _skip_,
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 

// _skip_,
// SystemConfig_names[MAX_CONFIG],_skip_,
// SystemConfig_images[MAX_CONFIG];

// ANALOG_OUTPUT
// _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 

// _skip_,
// dest_settings_lamp_hours[MAXIO,MAXIO];


// integer_parameter 
// font_size, test;
// string_parameter font_color[32];
// `

// myText= `
// STRING_OUTPUT
// logo_path, popup_message_string,
// _skip_, warm_cool_message_string,
// _skip_, source_name,
// _skip_, source_help,
// source_phone_number, 
// _skip_, pc_text, 
// _skip_,
// source_names[MAXIO], _skip_, dest_names[MAXIO], _skip_, dest_settings_names[MAXIO], _skip_, 
// source_icons[MAXIO], _skip_, dest_icons[MAXIO], _skip_,
// dest_audio_follows_names[MAXIO], _skip_, dest_audio_follows_icons[MAXIO], _skip_,
// button_names[MAX_BUTTONS], _skip_, button_icons[MAX_BUTTONS],
// _skip_,
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_, _skip_, _skip_, _skip_, _skip_, 
// _skip_,
// SystemConfig_names[MAX_CONFIG],_skip_,
// SystemConfig_images[MAX_CONFIG];
// `

myText = `
#DEFAULT_VOLATILE
#ENABLE_STACK_CHECKING
#ENABLE_TRACE

#DEFINE_CONSTANT MAX_CAMERA 5
#DEFINE_CONSTANT MAX_PRESETS 5
#DEFINE_CONSTANT MAX_CONTENT 30

//#INCLUDEPATH "C:\\Users\\gusti\\Dropbox\\AA Work\\Jobs\\mitrebox\\Unified\\\Unified 2\\Unified\\Unified\\bin\\Debug"
#USER_SIMPLSHARP_LIBRARY "Unified"
            
      
DIGITAL_INPUT
_skip_,_skip_, vc_camera_btn, vc_dial_btn, vc_share_btn, vc_contacts_btn,vc_recents_btn,vc_meetings_btn,
_skip_,
vc_1, vc_2, vc_3, vc_4, vc_5, vc_6, vc_7, vc_8, vc_9, vc_0, vc_period, vc_pound, vc_star, vc_clear, vc_bsp,
_skip_,
vc_dial, vc_hangup, vc_answer, vc_ignore,
_skip_,
camera_up, camera_down, camera_left, camera_right, camera_zoom_in, camera_zoom_out, 
stop_content,
_skip_,
selfview_toggle, selfview_fullscreen, selfview_position,
_skip_,
ir_up, ir_down, ir_left, ir_right, ir_OK, ir_home, ir_back, ir_menu,
_skip_,
camera_presets[MAX_PRESETS];


ANALOG_INPUT
_skip_, TP_ID,
camera_select, content_select;

STRING_INPUT
_skip_,
dialnum[255];

DIGITAL_OUTPUT
_skip_,_skip_, vc_camera_popup, vc_dial_popup, vc_share_popup, vc_contacts_popup, vc_recents_popup,  vc_meetings_popup,

_skip_, vc_ringing, _skip_, vc_call_connected;

ANALOG_OUTPUT
_skip_,_skip_,
camera_selected, Camera_count, content_selected, Content_count;

STRING_OUTPUT
_skip_,
dialnum_fb,
_skip_,
camera_name[MAX_CAMERA], camera_icon[MAX_CAMERA], 
_skip_,
content_name[MAX_CONTENT], content_icon[MAX_CONTENT],
testing[MAX_Con];

//integer_parameter ID;
integer_parameter font_size;


TPVideoConf tpvc;


string_function fontString(string s)
{
	//<font size="10">abcd</font>
	string newString[255];
	newString = "<font size=\"" + itoa(font_size) + "\">" + s + "</font>";
	return (newString);
}

/*

  
callback function HandleSourceNumChangeEvent()
{
	SourceTypes transport;
	input_select_fb = tpac.SelectedSourceNum + 1;
        
	if (tpac.Mode = Modes.Presentation) {   
		transport = tpac.SelectedSourceTransport;
		transport_none = (transport = SourceTypes.None);
		transport_tuner = (transport = SourceTypes.Tuner);
		transport_bluray = (transport = SourceTypes.Bluray);
		transport_recorder = (transport = SourceTypes.Recorder);
		transport_help = (transport = SourceTypes.HelpText);
		transport_camera = (transport = SourceTypes.Camera);
		transport_cisco_cxx = (transport = SourceTypes.VCCiscoCXX);
		transport_polycom = (transport = SourceTypes.VCPolycom);
		transport_cisco_sx_ce = (transport = SourceTypes.VCCiscoSXCE);
		transport_lifesize = (transport = SourceTypes.VCLifesize);
		transport_cisco_sx_tc = (transport = SourceTypes.VCCiscoSXTC);
		transport_ac_tesira = (transport = SourceTypes.ACBiampTesira);
	}
	else {
		transport_none = 0;
		transport_tuner = 0;
		transport_bluray = 0;
		transport_recorder = 0;
		transport_help = 0;
		transport_camera = 0;
		transport_cisco_cxx = 0;
		transport_polycom = 0;
		transport_cisco_sx_ce = 0;
		transport_lifesize = 0;
		transport_cisco_sx_tc = 0;
		transport_ac_tesira = 0;
	}

	source_name = tpac.SelectedSourceName;
	source_help = tpac.SelectedSourceHelp;
	source_phone_number = tpac.SelectedSourcePhoneNumber;
}
    */
         /*
callback function HandleTPVideoConfChange(TPVideoConfEventArgs args)
{
	
	//ac_number = args.Source.Number;		
	//ac_connected = args.Source.Connected;		
	//ac_ringing = args.Source.Ringing;		
}*/


//vc_camera_btn, vc_dial_btn, vc_share_btn, vc_contacts_btn;
//vc_camera_poup, vc_dial_popup, vc_share_popup, vc_contacts_popup;

callback function HandleTPVCPopupChange()
{
	vc_camera_popup = (tpvc.VCNav = TPVCPopups.Camera);
	vc_dial_popup = (tpvc.VCNav = TPVCPopups.Dial);
	vc_share_popup = (tpvc.VCNav = TPVCPopups.Share);
	vc_contacts_popup = (tpvc.VCNav = TPVCPopups.Contacts);
	vc_recents_popup = (tpvc.VCNav = TPVCPopups.Recents);
	vc_meetings_popup = (tpvc.VCNav = TPVCPopups.Meetings);

}

callback function HandleTPVCRoomChange(TPVCRoomEventArgs args)
{
	integer x;
	ErrorType errType;
	errType = ErrorType.VerboseConsoleOnly;
	Debug.WriteSimplPlus("Parsing vtc roomchanges", errType);

	Camera_count = args.CameraCount;
	Content_Count = args.ContentCount;

	if(Camera_count > MAX_CAMERA) Camera_count = MAX_CAMERA;
	if(Content_count > MAX_CONTENT) Content_count = MAX_CONTENT;

	for(x=1 to Camera_count)
	{				
		camera_name[x] = fontString(args.Cameras[x-1].Camera.Name);
		camera_icon[x] = args.Cameras[x-1].Camera.Icon;
	}

	for(x=1 to Content_count)
	{
		content_name[x] = fontString(args.Content[x-1].Source.Name);
		content_icon[x] = args.Content[x-1].Source.Icon;
	}
}

callback function HandleTPVideoConfChange(TPVideoConfEventArgs args)
{
	dialnum_fb = args.Source.Number;
	vc_ringing = args.Source.Ringing;
	vc_call_connected = args.Source.NumOfCallsActive;
}

callback function HandleTPVCCameraSelectedChange()
{
	camera_selected = tpvc.CameraSrcSelectNum+1;
}

callback function HandleTPVCContentSelectedChange()
{
	content_selected = tpvc.ContentSrcSelectNum+1;
}

change vc_camera_btn
{
	tpvc.VCNav = TPVCPopups.Camera;

}

change vc_dial_btn
{
   	tpvc.VCNav = TPVCPopups.Dial;
}

change vc_share_btn
{
	tpvc.VCNav = TPVCPopups.Share;
}

change vc_contacts_btn
{
	tpvc.VCNav = TPVCPopups.Contacts;
}

//vc_recents_btn,vc_meetings_btn,
  
change vc_recents_btn
{
	tpvc.VCNav = TPVCPopups.Recents;
}

change vc_meetings_btn
{
	tpvc.VCNav = TPVCPopups.Meetings;
}


change camera_select
{
	tpvc.CameraSrcSelectNum = camera_select-1;
}

change content_select
{
	tpvc.ContentSrcSelectNum = content_select-1;
}


change camera_up
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Up;
	tpvc.SetCameraTransportCommand(cmd, camera_up);
}
change camera_down
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Down;
	tpvc.SetCameraTransportCommand(cmd, camera_down);
}

change camera_left
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Left;
	tpvc.SetCameraTransportCommand(cmd, camera_left);
}


change camera_right
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Right;
	tpvc.SetCameraTransportCommand(cmd, camera_right);
}


change camera_zoom_in
{
	ETransportCommands cmd;
	cmd = ETransportCommands.ZoomIn;
	tpvc.SetCameraTransportCommand(cmd, camera_zoom_in);
}

change camera_zoom_out
{
	ETransportCommands cmd;
	cmd = ETransportCommands.ZoomOut;
	tpvc.SetCameraTransportCommand(cmd, camera_zoom_out);
}
change camera_presets
{
	integer i;
    ETransportCommands cmd;

	i = getlastmodifiedarrayindex();
	cmd = ETransportCommands.Preset;
	tpvc.SetCameraPresetTransportCommand(cmd, camera_presets[i], i);

}
       
change stop_content
{
	ETransportCommands cmd;
	cmd = ETransportCommands.StopContent;
	tpvc.SetTransportCommand(cmd, stop_content);
}

  
change vc_0
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Key_0;
	tpvc.SetTransportCommand(cmd, vc_0);
} 
change vc_1
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Key_1;
	tpvc.SetTransportCommand(cmd, vc_1);
} 
change vc_2
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Key_2;
	tpvc.SetTransportCommand(cmd, vc_2);
} 
change vc_3
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Key_3;
	tpvc.SetTransportCommand(cmd, vc_3);
} 
change vc_4
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Key_4;
	tpvc.SetTransportCommand(cmd, vc_4);
} 
change vc_5
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Key_5;
	tpvc.SetTransportCommand(cmd, vc_5);
} 
change vc_6
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Key_6;
	tpvc.SetTransportCommand(cmd, vc_6);
} 
change vc_7
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Key_7;
	tpvc.SetTransportCommand(cmd, vc_7);
} 
change vc_8
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Key_8;
	tpvc.SetTransportCommand(cmd, vc_8);
} 
change vc_9
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Key_9;
	tpvc.SetTransportCommand(cmd, vc_9);
} 
change vc_period
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Key_Period;
	tpvc.SetTransportCommand(cmd, vc_period);
} 
change vc_Pound
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Key_Pound;
	tpvc.SetTransportCommand(cmd, vc_Pound);
} 

change vc_Star
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Key_Star;
	tpvc.SetTransportCommand(cmd, vc_Star);
} 


change vc_bsp
{
	ETransportCommands cmd;
	cmd = ETransportCommands.BackSpace;
	tpvc.SetTransportCommand(cmd, vc_bsp);
} 
change vc_clear
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Clear;
	tpvc.SetTransportCommand(cmd, vc_clear);
} 

change vc_dial
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Dial;
	tpvc.SetTransportCommand(cmd, vc_dial);
} 
change vc_hangup
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Hangup;
	tpvc.SetTransportCommand(cmd, vc_hangup);
} 

// vc_answer, vc_ignore,
change vc_answer
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Answer;
	tpvc.SetTransportCommand(cmd, vc_answer);
} 
change vc_ignore
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Ignore;
	tpvc.SetTransportCommand(cmd, vc_ignore);
} 

      
//selfview_toggle, selfview_fullscreen, selfview_position,
change selfview_toggle
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Selfview;
	tpvc.SetTransportCommand(cmd, selfview_toggle);
}
change selfview_fullscreen
{
	ETransportCommands cmd;
	cmd = ETransportCommands.SelfviewFullscreen;
	tpvc.SetTransportCommand(cmd, selfview_fullscreen);
}

change selfview_position
{
	ETransportCommands cmd;
	cmd = ETransportCommands.SelfviewPosition;
	tpvc.SetTransportCommand(cmd, selfview_position);
}


  
change dialnum
{
	if (tpvc.VideoConfDev.Number != dialnum)
	{
		tpvc.VideoConfDev.Number = dialnum;
	}
}



change ir_up
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Up;
	tpvc.SetTransportCommand(cmd, ir_up);
}
change ir_down
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Down;
	tpvc.SetTransportCommand(cmd, ir_down);
}

change ir_left
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Left;
	tpvc.SetTransportCommand(cmd, ir_left);
}

change ir_right
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Right;
	tpvc.SetTransportCommand(cmd, ir_right);
}

change ir_OK
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Select;
	tpvc.SetTransportCommand(cmd, ir_OK);
}

change ir_home
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Home;
	tpvc.SetTransportCommand(cmd, ir_home);
}

change ir_back
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Return;
	tpvc.SetTransportCommand(cmd, ir_back);
}

change ir_menu
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Menu;
	tpvc.SetTransportCommand(cmd, ir_menu);
}





/*
change ac_answer
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Answer;
	tpac.SetTransportCommand(cmd, ac_answer);
} 
change ac_ignore
{
	ETransportCommands cmd;
	cmd = ETransportCommands.Ignore;
	tpac.SetTransportCommand(cmd, ac_ignore);
} */


       
                   

/*******************************************************************************************
  Main()
  Uncomment and place one-time startup code here
  (This code will get called when the system starts up)
*******************************************************************************************/

Function Main()
{
	ErrorType errType;
    // TODO:  Add code here
    // Initialize declared global and local variables/arrays as needed.

    WaitForInitializationComplete();
	if(issignaldefined(TP_ID) && TP_ID > 0)
	{
		tpvc.ID = TP_ID;	
		RegisterDelegate(tpvc, VCPopupChangedHandle, HandleTPVCPopupChange);
		RegisterDelegate(tpvc, TPVideoConfChangedHandle, HandleTPVideoConfChange);
		RegisterDelegate(tpvc, TPVCRoomEventHandle, HandleTPVCRoomChange);
		RegisterDelegate(tpvc, TPVCCameraSelectedChangedHandle, HandleTPVCCameraSelectedChange);
	    RegisterDelegate(tpvc, TPVCContentSelectedChangedHandle, HandleTPVCContentSelectedChange);
	}
	
    else
	{
		errType = ErrorType.Error;
		Debug.WriteSimplPlus("The Touchpanel has no valid ID specified", errType);
	}

}



`