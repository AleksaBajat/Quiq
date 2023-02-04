document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('toggle-button')

    button.addEventListener("click", async function () {
        const prevState = await chrome.action.getBadgeText({});
        const nextState = prevState === 'ON' ? 'OFF' : 'ON'
    
        await chrome.action.setBadgeText({
            text: nextState,
        })

        if (nextState === 'ON'){
            chrome.action.setBadgeBackgroundColor({color:"#34d14e"})                            
        }else{
            chrome.action.setBadgeBackgroundColor({color:"#f03426"})                            
        }
        
    })

    const addButton = document.getElementById('add-button')

    button.addEventListener("click", function(){
        const shortcuts = chrome.storage.local.get(['shortcuts'])

        let shortcut = document.getElementById('shortcut').text()
        const url = document.getElementById('url').text()        

        console.log(shortcut)
        console.log(url)

        if (validateShortcut(shortcut) && validateUrl(url)){            
            shortcuts.set(shortcut, url)

            chrome.storage.local.set('shortcuts', shortcuts)
        }        
    })
});


function validateShortcut(){
    return true
}

function validateUrl(){
    return true
}


