plugin.tx_sr5CharacterDatabase {
    view {
        # cat=plugin.tx_sr5CharacterDatabase/file; type=string; label=Path to template root (FE)
        templateRootPath = EXT:sr5CharacterDatabase/Resources/Private/Templates/
        # cat=plugin.tx_sr5CharacterDatabase/file; type=string; label=Path to template partials (FE)
        partialRootPath = EXT:sr5CharacterDatabase/Resources/Private/Partials/
        # cat=plugin.tx_sr5CharacterDatabase/file; type=string; label=Path to template layouts (FE)
        layoutRootPath = EXT:sr5CharacterDatabase/Resources/Private/Layouts/
    }

    settings {
        frontendPids{
            character {
                #cat=plugin.tx_sr5CharacterDatabase/pids/1; type=string; label=PID of "List Characters"
                list = 1
                #cat=plugin.tx_sr5CharacterDatabase/pids/2; type=string; label=PID of "Add Character"
                add = 9
                #cat=plugin.tx_sr5CharacterDatabase/pids/3; type=string; label=PID of "Edit Character"
                edit = 11
                #cat=plugin.tx_sr5CharacterDatabase/pids/4; type=string; label=PID of "Show Character"
                show = 12
            }
        }
    }
}
