###################################
# ASSIGN VARS
BASEDIR=$(dirname $0)
ATOM="/Applications/Atom.app/Contents/Resources/app/atom.sh"
VSCODE="/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code"
FRONTENDDIR="$BASEDIR/client"

###################################
# LAUNCH ATOM
#cd ${BASEDIR}
# ${ATOM} .

###################################
# LAUNCH VSCODE
cd ${BASEDIR}
"${VSCODE}" .

###################################
# OPEN TERMINALS
# OPEN A TERMINAL FOR GENERAL WORK (E.G. GIT AND TOUCH)
osascript <<EOD
	tell application "Terminal"
		do script "cd \"$BASEDIR\""
	end tell
EOD

# START FRONTEND
osascript <<EOD
	tell application "Terminal"
		do script "cd \"$FRONTENDDIR\";npm start"
	end tell
EOD
