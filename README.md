# Nuxt

<p><a href="https://marketplace.visualstudio.com/items?itemName=allanoricil.nuxt-vscode-extension" target="_blank" rel="noreferrer noopener"><img src="https://vsmarketplacebadge.apphb.com/version/allanoricil.nuxt-vscode-extension.svg?style=for-the-badge&colorA=252526&colorB=43A047&label=VERSION" alt="Version"></a>
<a href="https://marketplace.visualstudio.com/items?itemName=allanoricil.nuxt-vscode-extension" target="_blank" rel="noreferrer noopener"><img src="https://vsmarketplacebadge.apphb.com/downloads/allanoricil.nuxt-vscode-extension.svg?style=for-the-badge&colorA=252526&colorB=43A047&label=DOWNLOADS" alt="Downloads"></a>
<a href="https://marketplace.visualstudio.com/items?itemName=allanoricil.nuxt-vscode-extension" target="_blank" rel="noreferrer noopener"><img src="https://vsmarketplacebadge.apphb.com/rating-star/allanoricil.nuxt-vscode-extension.svg?style=for-the-badge&colorA=252526&colorB=43A047&label=RATING" alt="Ratings"></a></p>

This extension aims to simplify the workflow when working with Nuxt from within VS Code

<a href="https://www.buymeacoffee.com/allanoricil" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

## Features

- Start the dev server clicking on the button "Start Dev" available in the status bar

<img src="https://drive.google.com/uc?id=1yhkQn3ZvMSDn3ELaDdpgPTtsHyEY_-Fq"></img>

- Open the App clicking on the button "Open App" available in the status bar

<img src="https://drive.google.com/uc?id=1oD9cnv3nw5AcyJwQoscEAJsrzPj_dgeE"></img>

- Preview your Nuxt App inside VS Code. For now you can't change routes, unless you click somehwere in your app to navigate to the specific route you want to go. Basically it is displaying an <iframe> pointing to `http://localhost:3000`. It also does not allow you to open the Vue DevTools. I will research to see if I can make it work inside vscode.

To configure the `Open App` button to open the app inside vscode you have to set `nuxt.openInTheBrowser` setting for your workspace/user to `false`. Another way is to use the command `Nuxt: Open App`, which does not require you to set the setting.

<img src="https://drive.google.com/uc?id=1oUTR5PCOItQwPAYi2uKDlvm1Gs4o2c9Z" width="1200px"></img>


<!-- COMMANDS_START -->
## Commands (2)

|Command|Description|
|-|-|
|Nuxt.startDevServer|Nuxt: Start Dev Server|
|Nuxt.openApp|Nuxt: Open App|
<!-- COMMANDS_END -->

<!-- SETTINGS_START -->
## Settings (1)

|Setting|Type|Default|Description|
|-|-|-|-|
|nuxt.openInTheBrowser|boolean|**true**|If checked, vscode will open the browser when you click on the 'Open App' button, otherwise it will open the app side by side with the code you were editing.|
<!-- SETTINGS_END -->