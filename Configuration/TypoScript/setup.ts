plugin.tx_sr5CharacterDatabase {
    view {
        templateRootPath = {$plugin.tx_sr5CharacterDatabase.view.templateRootPath}
        partialRootPath = {$plugin.tx_sr5CharacterDatabase.view.partialRootPath}
        layoutRootPath = {$plugin.tx_sr5CharacterDatabase.view.layoutRootPath}
    }

    settings {
        frontendPids{
            location {
                list = {$plugin.tx_sr5CharacterDatabase.settings.frontendPids.character.list}
                add = {$plugin.tx_sr5CharacterDatabase.settings.frontendPids.character.add}
                edit = {$plugin.tx_sr5CharacterDatabase.settings.frontendPids.character.edit}
                show = {$plugin.tx_sr5CharacterDatabase.settings.frontendPids.character.show}
            }
        }
    }
}
