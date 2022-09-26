import { Component, useContext } from "solid-js";
import { UserContext } from "./ContextManager";


export const ProfileIcon: Component = () => {
    const user = useContext(UserContext);
    return (
        <>
            <i>{user.name}</i>
            <img src={user.profileImg} alt = "user profile picture"/>
        </>
    )
}