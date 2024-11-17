print ("Loadingscreen Made by Sylent")

local Ran = false

AddEventHandler("playerSpawned", function ()
	if not Ran then
		ShutdownLoadingScreenNui()
		Ran = true
	end
end)