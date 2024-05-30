import React from 'react'
import {
    BadgeIcon,
    Button,
    ButtonText,
    Center,
    Icon,
    Menu as GluestackMenu,
    MenuItem,
    MenuItemLabel
} from "@gluestack-ui/themed";

export default function Menu() {
    return (
        <Center>
            <div style={{width: "20%"}}>
                <GluestackMenu
                    placement={"top"}
                    trigger={(triggerProps) => {
                        return (
                            <Button {...triggerProps} bg={"gray"} py="$2.5" action="secondary">
                                <ButtonText fontSize="$sm" fontWeight="$medium">
                                    Menu
                                </ButtonText>
                            </Button>
                        )
                    }}
                >

                    <MenuItem key={"Profil"} textValue={"Profil"} href={"user-settings"}>
                        <Icon as={BadgeIcon}></Icon>
                        <MenuItemLabel size={"sm"}>Profil</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key={"Profil"} textValue={"Profil"}>
                        <Icon as={BadgeIcon}></Icon>
                        <MenuItemLabel size={"sm"}>Se déconnecter</MenuItemLabel>
                    </MenuItem>
                </GluestackMenu>
            </div>
        </Center>
    )
}